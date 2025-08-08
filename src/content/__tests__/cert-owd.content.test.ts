/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { padiOpenWaterContent } from '../certifications/padi-open-water-diver.content';

describe('Certification: PADI Open Water Diver', () => {
  it('importa sin lanzar (Zod ya validó en el import)', () => {
    expect(padiOpenWaterContent).toBeTruthy();
  });

  it('tiene las secciones base (PageContent) + secciones propias de certificación', () => {
    expect(padiOpenWaterContent).toHaveProperty('seo');
    expect(padiOpenWaterContent).toHaveProperty('header');
    expect(padiOpenWaterContent).toHaveProperty('description');

    expect(padiOpenWaterContent).toHaveProperty('card');
    expect(padiOpenWaterContent).toHaveProperty('details');
    expect(padiOpenWaterContent).toHaveProperty('curriculum');
    expect(padiOpenWaterContent).toHaveProperty('whatIsIncluded');
  });

  it('seo y header válidos', () => {
    const { seo, header } = padiOpenWaterContent as any;

    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.descriptionKey).toBe('string');
    expect(typeof seo?.keywordsKey).toBe('string');
    expect(typeof seo?.imageUrl).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');
    expect(seo?.translationNS).toBe('certifications');

    expect(typeof header?.titleKey).toBe('string');
    expect(typeof header?.subtitleKey).toBe('string');
    expect(header?.translationNS).toBe('certifications');

    const hImg = header?.imageData ?? {};
    expect(typeof hImg?.backgroundImage).toBe('string');
    expect(typeof hImg?.photoCredit).toBe('string');
    if ('variant' in hImg) expect(typeof hImg.variant).toBe('string');
  });

  it('description válida (título + párrafos)', () => {
    const { description } = padiOpenWaterContent as any;
    expect(typeof description?.titleKey).toBe('string');
    const paragraphs: any[] = description?.paragraphs ?? [];
    expect(Array.isArray(paragraphs)).toBe(true);
    expect(paragraphs.length).toBeGreaterThan(0);
    for (const p of paragraphs) expect(typeof p).toBe('string');
  });

  it('card con imageData (y complementaryLogo opcional)', () => {
    const { card } = padiOpenWaterContent as any;
    const img = card?.imageData ?? {};
    expect(typeof img?.backgroundImage).toBe('string');
    expect(typeof img?.photoCredit).toBe('string');
    if ('variant' in img) expect(typeof img.variant).toBe('string');

    if (img?.complementaryLogo) {
      expect(typeof img.complementaryLogo?.url).toBe('string');
      expect(typeof img.complementaryLogo?.altKey).toBe('string');
    }
    if (img?.textOverlayKey) expect(typeof img.textOverlayKey).toBe('string');
  });

  it('details: estructura y items con label/value', () => {
    const { details } = padiOpenWaterContent as any;
    expect(typeof details?.titleKey).toBe('string');
    expect(typeof details?.durationKey).toBe('string');

    const items: any[] = details?.items ?? [];
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
    for (const it of items) {
      expect(typeof it?.labelKey).toBe('string');
      expect(typeof it?.valueKey).toBe('string');
    }
  });

  it('curriculum: módulos con ids únicos y campos básicos', () => {
    const { curriculum } = padiOpenWaterContent as any;
    expect(typeof curriculum?.titleKey).toBe('string');

    const modules: any[] = curriculum?.modules ?? [];
    expect(Array.isArray(modules)).toBe(true);
    expect(modules.length).toBeGreaterThan(0);

    const seen = new Set<string>();
    for (const m of modules) {
      expect(typeof m?.id).toBe('string');
      expect(typeof m?.nameKey).toBe('string');
      expect(typeof m?.descriptionKey).toBe('string');
      expect(seen.has(m.id)).toBe(false);
      seen.add(m.id);
    }
  });

  it('whatIsIncluded: lista con strings', () => {
    const { whatIsIncluded } = padiOpenWaterContent as any;
    expect(typeof whatIsIncluded?.titleKey).toBe('string');
    const items: any[] = whatIsIncluded?.items ?? [];
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
    for (const s of items) expect(typeof s).toBe('string');
  });

  it('gallery (si existe): images con backgroundImage/photoCredit y variant opcional', () => {
    const g = (padiOpenWaterContent as any).gallery;
    if (!g) return;

    expect(typeof g?.titleKey).toBe('string');
    const images: any[] = g?.images ?? [];
    expect(Array.isArray(images)).toBe(true);
    expect(images.length).toBeGreaterThan(0);

    for (const im of images) {
      expect(typeof im?.backgroundImage).toBe('string');
      expect(typeof im?.photoCredit).toBe('string');
      if ('variant' in im) expect(typeof im.variant).toBe('string');
    }
  });

  it('ctaButton (si existe) y/o cta (si existe) válidos', () => {
    const { ctaButton, cta } = padiOpenWaterContent as any;

    if (ctaButton) {
      expect(typeof ctaButton?.textKey).toBe('string');
      expect(typeof ctaButton?.variant).toBe('string');
      expect(typeof ctaButton?.size).toBe('string');

      const action = ctaButton?.action ?? {};
      expect(typeof action?.type).toBe('string');
      if (action.type === 'internal')
        expect(typeof action?.path).toBe('string');
      if (action.type === 'whatsapp')
        expect(typeof action?.whatsAppMessageKey).toBe('string');
    }

    if (cta) {
      expect(typeof cta?.titleKey).toBe('string');
      expect(typeof cta?.subtitleKey).toBe('string');
      expect(typeof cta?.backgroundImageUrl).toBe('string');

      if (cta?.button) {
        const b = cta.button;
        expect(typeof b?.textKey).toBe('string');
        expect(typeof b?.variant).toBe('string');
        expect(typeof b?.size).toBe('string');

        const action = b?.action ?? {};
        expect(typeof action?.type).toBe('string');
        if (action.type === 'internal')
          expect(typeof action?.path).toBe('string');
        if (action.type === 'whatsapp')
          expect(typeof action?.whatsAppMessageKey).toBe('string');
      }

      if (cta?.hubspotFormTitle) {
        expect(typeof cta.hubspotFormTitle).toBe('string');
      }
    }
  });
});
