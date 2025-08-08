/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { faqContent } from '../pages/faq/faq.content';

describe('FAQ content', () => {
  it('importa sin lanzar (Zod ya validó en el import)', () => {
    expect(faqContent).toBeTruthy();
  });

  it('tiene las secciones esperadas', () => {
    expect(faqContent).toHaveProperty('seo');
    expect(faqContent).toHaveProperty('header');
    expect(faqContent).toHaveProperty('data');
  });

  it('seo básico válido', () => {
    const { seo } = faqContent as any;
    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.descriptionKey).toBe('string');
    expect(typeof seo?.keywordsKey).toBe('string');
    expect(typeof seo?.imageUrl).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');
    expect(seo?.translationNS).toBe('faq');
  });

  it('header: estructura e imagen', () => {
    const { header } = faqContent as any;
    expect(typeof header?.titleKey).toBe('string');
    expect(typeof header?.subtitleKey).toBe('string');
    expect(header?.translationNS).toBe('faq');

    const img = header?.imageData ?? {};
    expect(typeof img?.backgroundImage).toBe('string');
    expect(typeof img?.photoCredit).toBe('string');
    if ('variant' in img) {
      expect(typeof img.variant).toBe('string');
    }
  });

  it('data: categorías, FAQs y topFaqIds válidos', () => {
    const { data } = faqContent as any;
    expect(data).toBeTruthy();

    // topFaqIds
    const topFaqIds: string[] = data.topFaqIds ?? [];
    expect(Array.isArray(topFaqIds)).toBe(true);

    // categorías
    const categories: any[] = data.categories ?? [];
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);

    // unicidad de id de categoría
    const categoryIds = categories.map((c) => c.id);
    expect(new Set(categoryIds).size).toBe(categoryIds.length);

    // recopilar todos los faqs y validar estructura
    const allFaqs: any[] = categories.flatMap((c) => {
      expect(typeof c?.id).toBe('string');
      expect(typeof c?.sectionTitleKey).toBe('string');

      const faqs: any[] = c?.faqs ?? [];
      expect(Array.isArray(faqs)).toBe(true);
      expect(faqs.length).toBeGreaterThan(0);

      for (const f of faqs) {
        expect(typeof f?.id).toBe('string');
        expect(typeof f?.questionKey).toBe('string');
        expect(typeof f?.answerKey).toBe('string');
      }
      return faqs;
    });

    // unicidad global de ids de FAQ
    const faqIds = allFaqs.map((f) => f.id);
    expect(new Set(faqIds).size).toBe(faqIds.length);

    // topFaqIds deben existir en la lista de faqs
    for (const tid of topFaqIds) {
      expect(faqIds).toContain(tid);
    }
  });
});
