/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { padiRescueDiverContent } from '../certifications/padi-rescue-diver.content';

describe('Certification: PADI Rescue Diver', () => {
  it('importa sin lanzar (Zod ya validó en el import)', () => {
    expect(padiRescueDiverContent).toBeTruthy();
  });

  it('tiene las secciones base + propias de certificación', () => {
    expect(padiRescueDiverContent).toHaveProperty('seo');
    expect(padiRescueDiverContent).toHaveProperty('header');
    expect(padiRescueDiverContent).toHaveProperty('description');
    expect(padiRescueDiverContent).toHaveProperty('card');
    expect(padiRescueDiverContent).toHaveProperty('details');
    expect(padiRescueDiverContent).toHaveProperty('curriculum');
    expect(padiRescueDiverContent).toHaveProperty('whatIsIncluded');
  });

  it('seo y header válidos', () => {
    const { seo, header } = padiRescueDiverContent as any;
    expect(seo?.translationNS).toBe('certifications');
    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.imageUrl).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');

    expect(header?.translationNS).toBe('certifications');
    expect(typeof header?.titleKey).toBe('string');
    const hImg = header?.imageData ?? {};
    expect(typeof hImg?.backgroundImage).toBe('string');
    expect(typeof hImg?.photoCredit).toBe('string');
    if ('variant' in hImg) expect(typeof hImg.variant).toBe('string');
  });

  it('description válida', () => {
    const { description } = padiRescueDiverContent as any;
    expect(typeof description?.titleKey).toBe('string');
    const ps: any[] = description?.paragraphs ?? [];
    expect(Array.isArray(ps)).toBe(true);
    expect(ps.length).toBeGreaterThan(0);
    for (const p of ps) expect(typeof p).toBe('string');
  });

  it('card con imageData', () => {
    const { card } = padiRescueDiverContent as any;
    const img = card?.imageData ?? {};
    expect(typeof img?.backgroundImage).toBe('string');
    expect(typeof img?.photoCredit).toBe('string');
    if ('variant' in img) expect(typeof img.variant).toBe('string');
    if (img?.complementaryLogo) {
      expect(typeof img.complementaryLogo?.url).toBe('string');
      expect(typeof img.complementaryLogo?.altKey).toBe('string');
    }
  });

  it('details válidos', () => {
    const { details } = padiRescueDiverContent as any;
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

  it('curriculum con módulos únicos', () => {
    const { curriculum } = padiRescueDiverContent as any;
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
    const { whatIsIncluded } = padiRescueDiverContent as any;
    expect(typeof whatIsIncluded?.titleKey).toBe('string');
    const items: any[] = whatIsIncluded?.items ?? [];
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
    for (const s of items) expect(typeof s).toBe('string');
  });

  it('gallery (si existe)', () => {
    const g = (padiRescueDiverContent as any).gallery;
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

  it('ctaButton/cta (si existen)', () => {
    const { ctaButton, cta } = padiRescueDiverContent as any;
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
