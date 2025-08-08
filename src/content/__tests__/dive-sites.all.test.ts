/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import fg from 'fast-glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { DiveSiteContent } from '../dive-sites/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta raíz de `src/content`
const CONTENT_ROOT = path.resolve(__dirname, '..');

function isDiveSite(obj: any): obj is DiveSiteContent {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.nameKey === 'string' &&
    typeof obj.descriptionKey === 'string' &&
    typeof obj.markerIcon === 'string' &&
    // gallery opcional
    (obj.gallery === undefined ||
      (obj.gallery &&
        typeof obj.gallery.titleKey === 'string' &&
        Array.isArray(obj.gallery.images) &&
        obj.gallery.images.length > 0 &&
        obj.gallery.images.every(
          (im: any) =>
            im &&
            typeof im.backgroundImage === 'string' &&
            typeof im.photoCredit === 'string'
        )))
  );
}

function isDiveSitesRecord(obj: any): obj is Record<string, DiveSiteContent> {
  if (!obj || typeof obj !== 'object') return false;
  const values = Object.values(obj);
  if (values.length === 0) return false;
  // con que el primero luzca como sitio, damos por válido el record
  return isDiveSite(values[0]);
}

describe('Dive Sites: all *.content.ts files', async () => {
  const files = await fg(['dive-sites/**/*.content.ts'], {
    cwd: CONTENT_ROOT,
    absolute: true,
  });

  it('encuentra al menos un archivo de dive-sites', () => {
    expect(files.length).toBeGreaterThan(0);
  });

  for (const abs of files) {
    const rel = path.relative(CONTENT_ROOT, abs);

    it(`valida estructura en ${rel}`, async () => {
      const mod = await import(abs);

      // Busca el mejor candidato entre los exports
      const candidates = Object.values(mod);
      const recordExport =
        candidates.find(isDiveSitesRecord) ??
        // fallback: si hay un único export objeto, intentamos ese
        candidates.find((v) => v && typeof v === 'object');

      expect(
        recordExport,
        `No se encontró un export tipo Record<string, DiveSiteContent> en ${rel}`
      ).toBeTruthy();

      const sites = recordExport as Record<string, DiveSiteContent>;
      const entries = Object.entries(sites) as [string, DiveSiteContent][];

      expect(entries.length).toBeGreaterThan(0);

      // Validación por sitio
      for (const [id, site] of entries) {
        expect(typeof id).toBe('string');
        // shape base
        expect(typeof site.nameKey).toBe('string');
        expect(typeof site.descriptionKey).toBe('string');
        expect(typeof site.markerIcon).toBe('string');

        // gallery opcional
        if (site.gallery) {
          expect(typeof site.gallery.titleKey).toBe('string');
          expect(Array.isArray(site.gallery.images)).toBe(true);
          expect(site.gallery.images.length).toBeGreaterThan(0);

          for (const im of site.gallery.images) {
            expect(typeof im.backgroundImage).toBe('string');
            expect(typeof im.photoCredit).toBe('string');
            if ('variant' in im) {
              expect(typeof (im as any).variant).toBe('string');
            }
          }
        }
      }
    });
  }
});
