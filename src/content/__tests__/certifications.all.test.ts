/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import fg from 'fast-glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CertificationContent } from '../certifications/types';

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

function isCertificationContent(obj: any): obj is CertificationContent {
  if (!obj || typeof obj !== 'object') return false;

  // ---- PageContent base ----
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

  const header = obj.header;
  if (
    !header ||
    !isNonEmptyString(header.titleKey) ||
    !isNonEmptyString(header.subtitleKey) ||
    !header.imageData ||
    !isImageData(header.imageData)
  )
    return false;

  const description = obj.description;
  if (
    !description ||
    !isNonEmptyString(description.titleKey) ||
    !Array.isArray(description.paragraphs) ||
    description.paragraphs.length < 1 ||
    !description.paragraphs.every(isNonEmptyString)
  )
    return false;

  // ---- Certification-only ----
  const card = obj.card;
  if (!card || !isImageData(card.imageData)) return false;

  const details = obj.details;
  if (
    !details ||
    !isNonEmptyString(details.titleKey) ||
    !isNonEmptyString(details.durationKey) ||
    !Array.isArray(details.items) ||
    details.items.length < 1 ||
    !details.items.every(
      (it: any) =>
        it && isNonEmptyString(it.labelKey) && isNonEmptyString(it.valueKey)
    )
  )
    return false;

  const curriculum = obj.curriculum;
  if (
    !curriculum ||
    !isNonEmptyString(curriculum.titleKey) ||
    !Array.isArray(curriculum.modules) ||
    curriculum.modules.length < 1 ||
    !curriculum.modules.every(
      (m: any) =>
        m &&
        isNonEmptyString(m.id) &&
        isNonEmptyString(m.nameKey) &&
        isNonEmptyString(m.descriptionKey)
    )
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

  // ---- Opcionales del base ----
  if (obj.gallery) {
    const g = obj.gallery;
    if (
      !isNonEmptyString(g.titleKey) ||
      !Array.isArray(g.images) ||
      g.images.length < 1 ||
      !g.images.every(isImageData)
    )
      return false;
  }

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
    const c = obj.cta;
    if (
      !isNonEmptyString(c.titleKey) ||
      !isNonEmptyString(c.subtitleKey) ||
      !isNonEmptyString(c.backgroundImageUrl)
    )
      return false;
    if (c.button) {
      const bb = c.button;
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

  return true;
}

describe('Certifications: all *.content.ts files', async () => {
  const files = await fg(['certifications/**/*.content.ts'], {
    cwd: CONTENT_ROOT,
    absolute: true,
  });

  it('encuentra al menos un archivo de certifications', () => {
    expect(files.length).toBeGreaterThan(0);
  });

  for (const abs of files) {
    const rel = path.relative(CONTENT_ROOT, abs);

    it(`valida CertificationContent en ${rel}`, async () => {
      const mod = await import(abs);
      const candidates = Object.values(mod);

      // Busca el primer export que parezca CertificationContent
      const found = candidates.find(isCertificationContent);
      expect(
        found,
        `No se encontró un export con shape CertificationContent en ${rel}`
      ).toBeTruthy();

      const cert = found as CertificationContent;

      // Chequeos extra útiles:
      // - details.items no vacíos
      expect(
        cert.details.items.every(
          (it) => it.labelKey.trim() && it.valueKey.trim()
        )
      ).toBe(true);

      // - curriculum.modules ids únicos
      const seen = new Set<string>();
      for (const m of cert.curriculum.modules) {
        expect(seen.has(m.id)).toBe(false);
        seen.add(m.id);
      }

      // - description.paragraphs y whatIsIncluded.items no vacíos
      expect(
        cert.description.paragraphs.every((p) => p.trim().length > 0)
      ).toBe(true);
      expect(cert.whatIsIncluded.items.every((i) => i.trim().length > 0)).toBe(
        true
      );
    });
  }
});
