/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import fg from 'fast-glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ExperienceContent } from '../experiences/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta raíz de `src/content`
const CONTENT_ROOT = path.resolve(__dirname, '..');

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.length > 0;
}

function isExperienceContent(obj: any): obj is ExperienceContent {
  if (!obj || typeof obj !== 'object') return false;

  // base PageContent-ish
  const seo = obj.seo;
  const header = obj.header;
  const description = obj.description;

  if (
    !seo ||
    !isNonEmptyString(seo.titleKey) ||
    !isNonEmptyString(seo.descriptionKey) ||
    !isNonEmptyString(seo.keywordsKey) ||
    !isNonEmptyString(seo.imageUrl) ||
    !isNonEmptyString(seo.urlPath)
  )
    return false;

  if (
    !header ||
    !isNonEmptyString(header.titleKey) ||
    !isNonEmptyString(header.subtitleKey) ||
    !header.imageData ||
    !isNonEmptyString(header.imageData.backgroundImage) ||
    !isNonEmptyString(header.imageData.photoCredit)
  )
    return false;

  if (
    !description ||
    !isNonEmptyString(description.titleKey) ||
    !Array.isArray(description.paragraphs) ||
    description.paragraphs.length < 1 ||
    !description.paragraphs.every(isNonEmptyString)
  )
    return false;

  // experience-only
  const it = obj.itinerary;
  if (
    !it ||
    !isNonEmptyString(it.titleKey) ||
    !Array.isArray(it.days) ||
    it.days.length < 1 ||
    !it.days.every(
      (d: any) =>
        d &&
        typeof d.day === 'number' &&
        isNonEmptyString(d.titleKey) &&
        isNonEmptyString(d.descriptionKey)
    ) ||
    !Array.isArray(it.notes) ||
    !it.notes.every(isNonEmptyString)
  )
    return false;

  const wii = obj.whatIsIncluded;
  if (
    !wii ||
    !isNonEmptyString(wii.titleKey) ||
    !Array.isArray(wii.items) ||
    wii.items.length < 1 ||
    !wii.items.every(isNonEmptyString)
  )
    return false;

  const win = obj.whatIsNotIncluded;
  if (
    !win ||
    !isNonEmptyString(win.titleKey) ||
    !Array.isArray(win.items) ||
    win.items.length < 1 ||
    !win.items.every(isNonEmptyString)
  )
    return false;

  // opcionales
  if (obj.ctaButton) {
    const b = obj.ctaButton;
    if (
      !isNonEmptyString(b.textKey) ||
      !b.action ||
      !isNonEmptyString(b.action.type) ||
      !isNonEmptyString(b.variant) ||
      !isNonEmptyString(b.size)
    )
      return false;
  }

  if (obj.cta) {
    const cta = obj.cta;
    if (
      !isNonEmptyString(cta.titleKey) ||
      !isNonEmptyString(cta.subtitleKey) ||
      !isNonEmptyString(cta.backgroundImageUrl)
    )
      return false;
    if (cta.button) {
      const bb = cta.button;
      if (
        !isNonEmptyString(bb.textKey) ||
        !bb.action ||
        !isNonEmptyString(bb.action.type) ||
        !isNonEmptyString(bb.variant) ||
        !isNonEmptyString(bb.size)
      )
        return false;
    }
  }

  if (obj.gallery) {
    const g = obj.gallery;
    if (
      !isNonEmptyString(g.titleKey) ||
      !Array.isArray(g.images) ||
      g.images.length < 1 ||
      !g.images.every(
        (im: any) =>
          im &&
          isNonEmptyString(im.backgroundImage) &&
          isNonEmptyString(im.photoCredit)
      )
    )
      return false;
  }

  return true;
}

describe('Experiences: all *.content.ts files', async () => {
  const files = await fg(['experiences/**/*.content.ts'], {
    cwd: CONTENT_ROOT,
    absolute: true,
  });

  it('encuentra al menos un archivo de experiences', () => {
    expect(files.length).toBeGreaterThan(0);
  });

  for (const abs of files) {
    const rel = path.relative(CONTENT_ROOT, abs);

    it(`valida ExperienceContent en ${rel}`, async () => {
      const mod = await import(abs);
      const candidates = Object.values(mod);

      // Busca el primer export que parezca ExperienceContent
      const found = candidates.find(isExperienceContent);
      expect(
        found,
        `No se encontró un export con shape ExperienceContent en ${rel}`
      ).toBeTruthy();

      const exp = found as ExperienceContent;

      // Chequeos adicionales útiles
      // 1) days con ids únicos y orden (no obligatorio, pero nice)
      const seenDays = new Set<number>();
      for (const d of exp.itinerary.days) {
        expect(seenDays.has(d.day)).toBe(false);
        seenDays.add(d.day);
      }

      // 2) paragraphs y notes no vacíos
      expect(exp.description.paragraphs.every((p) => p.trim().length > 0)).toBe(
        true
      );
      expect(exp.itinerary.notes.every((n) => n.trim().length > 0)).toBe(true);
    });
  }
});
