/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import fg from 'fast-glob';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚙️ Configura según tu proyecto
const LOCALES_ROOT = path.resolve(process.cwd(), 'public/locales'); // public/locales/<lang>/<ns>.json
const LANGS = ['es', 'en']; // ajusta tus idiomas
// Si tienes namespaces que aceptas que falten (p.ej. experimental)
const OPTIONAL_NAMESPACES = new Set<string>([]);

// --- helpers ---
function isObject(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === 'object' && !Array.isArray(v);
}

function get(obj: any, keyPath: string): unknown {
  // soporta "a.b.c"
  return keyPath
    .split('.')
    .reduce(
      (acc, k) =>
        acc && typeof acc === 'object' ? (acc as any)[k] : undefined,
      obj
    );
}

/**
 * Resuelve namespace y key:
 * - "ns:key.path" -> ["ns", "key.path"]
 * - "ns.key.path" -> ["ns", "key.path"]
 * - caso sin ns claro -> intenta inferir por primer segmento antes del primer '.'
 */
function resolveNsAndKey(rawKey: string): { ns: string; key: string } | null {
  if (typeof rawKey !== 'string' || rawKey.trim() === '') return null;

  if (rawKey.includes(':')) {
    const [ns, rest] = rawKey.split(':', 2);
    return { ns, key: rest };
  }

  const firstDot = rawKey.indexOf('.');
  if (firstDot > 0) {
    const ns = rawKey.slice(0, firstDot);
    const key = rawKey.slice(firstDot + 1);
    return { ns, key };
  }

  // sin ':' ni '.', no podemos resolver con confianza
  return null;
}

/** Recolecta todas las claves que terminan en "Key" y arrays de strings comunes (notes/items/subpoints) */
function collectKeys(value: unknown, keys: string[] = []): string[] {
  if (Array.isArray(value)) {
    // Arrays de strings que son claves (notes/items/subpoints/paragraphs/…)
    for (const v of value) {
      if (typeof v === 'string') keys.push(v);
      else collectKeys(v, keys);
    }
    return keys;
  }

  if (isObject(value)) {
    for (const [k, v] of Object.entries(value)) {
      if (k.endsWith('Key') && typeof v === 'string') keys.push(v);
      else collectKeys(v, keys);
    }
    return keys;
  }

  return keys;
}

type LocaleIndex = Record<string, Record<string, any>>; // { lang: { ns: json } }

function loadLocales(): LocaleIndex {
  const index: LocaleIndex = {};
  for (const lang of LANGS) {
    const langDir = path.join(LOCALES_ROOT, lang);
    if (!fs.existsSync(langDir)) continue;
    const files = fs.readdirSync(langDir).filter((f) => f.endsWith('.json'));

    index[lang] = {};
    for (const f of files) {
      const ns = path.basename(f, '.json');
      const full = path.join(langDir, f);
      try {
        const json = JSON.parse(fs.readFileSync(full, 'utf8'));
        index[lang][ns] = json;
      } catch (e) {
        throw new Error(`No se pudo parsear ${full}: ${(e as Error).message}`);
      }
    }
  }
  return index;
}

describe('i18n: consistencia de claves en contenido', async () => {
  const CONTENT_ROOT = path.resolve(__dirname, '..');
  const files = await fg(['**/*.content.ts'], {
    cwd: CONTENT_ROOT,
    absolute: true,
  });

  it('encuentra archivos de contenido', () => {
    expect(files.length).toBeGreaterThan(0);
  });

  const locales = loadLocales();

  for (const abs of files) {
    const rel = path.relative(CONTENT_ROOT, abs);

    it(`todas las claves *Key usadas existen en locales → ${rel}`, async () => {
      const mod = await import(abs);
      const exports = Object.values(mod);
      // recolectamos todas las keys *Key de todos los exports (suponiendo contenido exportado como objeto)
      const usedKeys = new Set<string>();
      for (const ex of exports)
        collectKeys(ex, Array.from(usedKeys)).forEach((k) => usedKeys.add(k));

      const missingByLang: Record<string, { ns: string; key: string }[]> = {};

      for (const rawKey of usedKeys) {
        const resolved = resolveNsAndKey(rawKey);
        if (!resolved) {
          // si no podemos resolver ns/key, lo marcamos como warning suave: no fallamos
          // console.warn(`[i18n] No se pudo inferir namespace para clave "${rawKey}" en ${rel}`);
          continue;
        }
        const { ns, key } = resolved;

        if (OPTIONAL_NAMESPACES.has(ns)) continue;

        for (const lang of LANGS) {
          const nsObj = locales[lang]?.[ns];
          if (!nsObj) {
            (missingByLang[lang] ||= []).push({ ns, key });
            continue;
          }
          const val = get(nsObj, key);
          if (val === undefined) {
            (missingByLang[lang] ||= []).push({ ns, key });
          }
        }
      }

      // Si falta algo en algún idioma, fallamos mostrando todo junto
      const messages: string[] = [];
      for (const [lang, arr] of Object.entries(missingByLang)) {
        if (!arr?.length) continue;
        const group = arr
          .map(({ ns, key }) => ` - ${lang} :: ${ns}.${key}`)
          .sort()
          .join('\n');
        messages.push(group);
      }

      if (messages.length) {
        throw new Error(`Claves de i18n faltantes:\n${messages.join('\n')}`);
      }

      expect(true).toBe(true);
    });
  }
});
