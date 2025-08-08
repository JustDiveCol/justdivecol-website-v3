/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import fg from 'fast-glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ExperienceSessionContent } from '../sessions/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta raíz de `src/content`
const CONTENT_ROOT = path.resolve(__dirname, '..');

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.length > 0;
}

function isImageData(obj: any): boolean {
  return (
    obj &&
    isNonEmptyString(obj.backgroundImage) &&
    isNonEmptyString(obj.photoCredit)
  );
}

function isExperienceSessionContent(obj: any): obj is ExperienceSessionContent {
  if (!obj || typeof obj !== 'object') return false;

  // --- SEO ---
  const seo = obj.seo;
  if (
    !seo ||
    !isNonEmptyString(seo.titleKey) ||
    !isNonEmptyString(seo.descriptionKey) ||
    !isNonEmptyString(seo.keywordsKey) ||
    !isNonEmptyString(seo.imageUrl) ||
    !isNonEmptyString(seo.urlPath)
  )
    return false;

  // --- Header ---
  const header = obj.header;
  if (
    !header ||
    !isNonEmptyString(header.titleKey) ||
    !isNonEmptyString(header.subtitleKey) ||
    !header.imageData ||
    !isImageData(header.imageData)
  )
    return false;

  // --- Payment plan ---
  const pp = obj.paymentPlan;
  if (
    !pp ||
    !isNonEmptyString(pp.titleKey) ||
    !Array.isArray(pp.modules) ||
    pp.modules.length < 1 ||
    !pp.modules.every(
      (m: any) =>
        m &&
        isNonEmptyString(m.id) &&
        isNonEmptyString(m.nameKey) &&
        isNonEmptyString(m.descriptionKey)
    ) ||
    !Array.isArray(pp.notes) ||
    !pp.notes.every(isNonEmptyString)
  )
    return false;

  return true;
}

describe('Sessions: all *.content.ts files', async () => {
  const files = await fg(['sessions/**/*.content.ts'], {
    cwd: CONTENT_ROOT,
    absolute: true,
  });

  it('encuentra al menos un archivo de sessions', () => {
    expect(files.length).toBeGreaterThan(0);
  });

  for (const abs of files) {
    const rel = path.relative(CONTENT_ROOT, abs);

    it(`valida ExperienceSessionContent en ${rel}`, async () => {
      const mod = await import(abs);
      const candidates = Object.values(mod);

      // Busca el primer export que luzca como ExperienceSessionContent
      const found = candidates.find(isExperienceSessionContent);
      expect(
        found,
        `No se encontró un export con shape ExperienceSessionContent en ${rel}`
      ).toBeTruthy();

      const session = found as ExperienceSessionContent;

      // Extras útiles: IDs únicos en modules y notas no vacías
      const seen = new Set<string>();
      for (const m of session.paymentPlan.modules) {
        expect(seen.has(m.id)).toBe(false);
        seen.add(m.id);
      }
      expect(session.paymentPlan.notes.every((n) => n.trim().length > 0)).toBe(
        true
      );
    });
  }
});
