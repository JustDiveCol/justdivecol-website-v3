/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const LOCALES_ROOT = path.resolve(process.cwd(), 'public/locales');
const LANGS = ['es', 'en']; // ajusta tus idiomas
// Si hay namespaces que pueden diferir entre idiomas:
const OPTIONAL_NAMESPACES = new Set<string>([]);

/** Lee todos los JSON de un idioma: { ns: object } */
function readLang(lang: string): Record<string, any> {
  const dir = path.join(LOCALES_ROOT, lang);
  if (!fs.existsSync(dir)) return {};
  const out: Record<string, any> = {};
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.json')) continue;
    const ns = path.basename(f, '.json');
    const full = path.join(dir, f);
    const raw = fs.readFileSync(full, 'utf8');
    try {
      out[ns] = JSON.parse(raw);
    } catch (e) {
      throw new Error(`JSON inválido en ${full}: ${(e as Error).message}`);
    }
  }
  return out;
}

/** Aplana un objeto en dot-keys: {a:{b:1}} -> ["a.b"] */
function flattenKeys(obj: any, prefix = ''): string[] {
  if (obj === null || obj === undefined) return [];
  if (typeof obj !== 'object') return [prefix].filter(Boolean);

  const keys: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      keys.push(...flattenKeys(v, p));
    } else {
      keys.push(p);
    }
  }
  return keys;
}

describe('i18n: paridad de claves entre idiomas por namespace', () => {
  const perLang = Object.fromEntries(LANGS.map((l) => [l, readLang(l)]));

  it('cada idioma tiene al menos un namespace', () => {
    for (const lang of LANGS) {
      const nsCount = Object.keys(perLang[lang] || {}).length;
      expect(
        nsCount,
        `No hay namespaces para ${lang} en ${LOCALES_ROOT}/${lang}`
      ).toBeGreaterThan(0);
    }
  });

  // Conjunto total de namespaces presentes en cualquier idioma
  const allNamespaces = new Set<string>();
  for (const lang of LANGS) {
    Object.keys(perLang[lang] || {}).forEach((ns) => allNamespaces.add(ns));
  }

  for (const ns of allNamespaces) {
    if (OPTIONAL_NAMESPACES.has(ns)) continue;

    it(`paridad de claves para namespace "${ns}"`, () => {
      const keysByLang: Record<string, Set<string>> = {};
      const missing: string[] = [];
      const extra: string[] = [];

      // aplanar claves por idioma
      for (const lang of LANGS) {
        const nsObj = perLang[lang]?.[ns];
        if (!nsObj) {
          missing.push(`- Falta namespace "${ns}" en ${lang}`);
          continue;
        }
        keysByLang[lang] = new Set(flattenKeys(nsObj));
      }

      // si algún idioma no tiene el namespace, falla ya
      if (missing.length) {
        throw new Error(missing.join('\n'));
      }

      // referencia: primer idioma
      const refLang = LANGS[0];
      const refKeys = keysByLang[refLang];

      // compara cada idioma contra ref
      for (const lang of LANGS.slice(1)) {
        const ks = keysByLang[lang];

        // faltantes en lang (están en ref, no en lang)
        for (const k of refKeys) {
          if (!ks.has(k))
            missing.push(
              `- Falta clave en ${lang}: ${ns}.${k} (presente en ${refLang})`
            );
        }
        // extras en lang (están en lang, no en ref)
        for (const k of ks) {
          if (!refKeys.has(k))
            extra.push(
              `- Clave extra en ${lang}: ${ns}.${k} (no está en ${refLang})`
            );
        }
      }

      if (missing.length || extra.length) {
        const lines = [
          missing.length ? `Claves faltantes:\n${missing.join('\n')}` : '',
          extra.length ? `Claves extra:\n${extra.join('\n')}` : '',
        ].filter(Boolean);
        throw new Error(lines.join('\n\n'));
      }

      expect(true).toBe(true);
    });
  }
});
