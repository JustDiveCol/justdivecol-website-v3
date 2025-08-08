/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { privacyContent } from '../pages/legal/privacy/privacy.content';

describe('Legal Privacy content', () => {
  it('importa sin lanzar (Zod ya validó en el import)', () => {
    expect(privacyContent).toBeTruthy();
  });

  it('tiene las secciones esperadas', () => {
    expect(privacyContent).toHaveProperty('seo');
    expect(privacyContent).toHaveProperty('header');
    expect(privacyContent).toHaveProperty('content');
  });

  it('seo básico válido', () => {
    const { seo } = privacyContent as any;
    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.descriptionKey).toBe('string');
    expect(typeof seo?.keywordsKey).toBe('string');
    expect(typeof seo?.imageUrl).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');
    expect(seo?.translationNS).toBe('legal');
  });

  it('header: estructura e imagen', () => {
    const { header } = privacyContent as any;
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
    const content = (privacyContent as any)?.content;
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
