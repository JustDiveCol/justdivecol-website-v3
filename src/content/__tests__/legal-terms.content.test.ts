/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { termsContent } from '../pages/legal/terms/terms.content';

describe('Legal Terms content', () => {
  it('importa sin lanzar (Zod ya validó en el import)', () => {
    expect(termsContent).toBeTruthy();
  });

  it('tiene las secciones esperadas', () => {
    expect(termsContent).toHaveProperty('seo');
    expect(termsContent).toHaveProperty('header');
    expect(termsContent).toHaveProperty('content');
  });

  it('seo básico válido', () => {
    const { seo } = termsContent as any;
    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.descriptionKey).toBe('string');
    expect(typeof seo?.keywordsKey).toBe('string');
    expect(typeof seo?.imageUrl).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');
    expect(seo?.translationNS).toBe('legal');
  });

  it('header: estructura e imagen', () => {
    const { header } = termsContent as any;
    expect(typeof header?.titleKey).toBe('string');
    expect(typeof header?.subtitleKey).toBe('string');
    expect(header?.translationNS).toBe('legal');

    const img = header?.imageData ?? {};
    expect(typeof img?.backgroundImage).toBe('string');
    expect(typeof img?.photoCredit).toBe('string');
    if ('variant' in img) {
      expect(typeof img.variant).toBe('string');
    }
  });

  it('content: sections, points y subpoints válidos', () => {
    const content = (termsContent as any)?.content;
    expect(content?.translationNS).toBe('legal');

    const sections: any[] = content?.sections ?? [];
    expect(Array.isArray(sections)).toBe(true);
    expect(sections.length).toBeGreaterThan(0);

    const seenSectionIds = new Set<string>();
    for (const s of sections) {
      expect(typeof s?.id).toBe('string');
      expect(typeof s?.titleKey).toBe('string');
      expect(seenSectionIds.has(s.id)).toBe(false);
      seenSectionIds.add(s.id);

      const points: any[] = s?.points ?? [];
      expect(Array.isArray(points)).toBe(true);
      expect(points.length).toBeGreaterThan(0);

      for (const p of points) {
        expect(typeof p?.textKey).toBe('string');
        if (p?.titleKey !== undefined) {
          expect(typeof p.titleKey).toBe('string');
        }
        if (p?.subpoints !== undefined) {
          expect(Array.isArray(p.subpoints)).toBe(true);
          for (const sp of p.subpoints) {
            expect(typeof sp).toBe('string');
          }
        }
      }
    }
  });
});
