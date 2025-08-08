/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';

import {
  homeContent,
  featuredCards,
} from '../../content/pages/home/home.content';

describe('Home content', () => {
  it('importa sin lanzar (la validación Zod ocurre al importar)', () => {
    expect(homeContent).toBeTruthy();
  });

  it('tiene las secciones esperadas', () => {
    expect(homeContent).toHaveProperty('seo');
    expect(homeContent).toHaveProperty('hero');
    expect(homeContent).toHaveProperty('featured');
    expect(homeContent).toHaveProperty('principles');
    expect(homeContent).toHaveProperty('testimonials');
    expect(homeContent).toHaveProperty('allies');
    expect(homeContent).toHaveProperty('cta');
  });

  it('seo básico válido', () => {
    const { seo } = homeContent as any;
    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.descriptionKey).toBe('string');
    expect(typeof seo?.keywordsKey).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');
    expect(typeof seo?.translationNS).toBe('string');
  });

  it('hero con botón interno válido', () => {
    const { hero } = homeContent as any;
    expect(typeof hero?.titleKey).toBe('string');
    expect(typeof hero?.subtitleKey).toBe('string');
    expect(typeof hero?.translationNS).toBe('string');
    expect(hero?.button?.action?.type).toBe('internal');
    expect(typeof hero?.button?.action?.path).toBe('string');
    expect(typeof hero?.imageData?.backgroundImage).toBe('string');
  });

  it('featuredCards y featured consistentes', () => {
    // featuredCards es un export independiente calculado a partir de rawCards
    expect(Array.isArray(featuredCards)).toBe(true);
    expect(featuredCards.length).toBeGreaterThan(0);

    // Deben tener link con hash (#id) y background en imageData
    for (const c of featuredCards as any[]) {
      expect(typeof c.id).toBe('string');
      expect(typeof c.titleKey).toBe('string');
      expect(typeof c.link).toBe('string');
      expect(c.link).toContain('#');
      expect(typeof c.imageData?.backgroundImage).toBe('string');
    }

    // Y homeContent.featured.cards debe ser exactamente ese arreglo
    expect(homeContent.featured.cards).toEqual(featuredCards);
  });

  it('principles con logos complementarios definidos', () => {
    const cards = (homeContent as any)?.principles?.cards ?? [];
    expect(Array.isArray(cards)).toBe(true);
    expect(cards.length).toBeGreaterThan(0);
    for (const card of cards) {
      expect(typeof card.id).toBe('string');
      expect(typeof card.imageUrl).toBe('string');
      expect(typeof card.titleKey).toBe('string');
      expect(typeof card.descriptionKey).toBe('string');
      // complementaryLogo debe existir (no comprobamos forma, solo presencia)
      expect(card.complementaryLogo).toBeTruthy();
    }
  });

  it('testimonials con rating dentro de 1..5', () => {
    const items = (homeContent as any)?.testimonials?.items ?? [];
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
    for (const t of items) {
      expect(typeof t.quoteKey).toBe('string');
      expect(typeof t.name).toBe('string');
      expect(typeof t.rating).toBe('number');
      expect(t.rating).toBeGreaterThanOrEqual(1);
      expect(t.rating).toBeLessThanOrEqual(5);
    }
  });

  it('allies con logos y links', () => {
    const logos = (homeContent as any)?.allies?.logos ?? [];
    expect(Array.isArray(logos)).toBe(true);
    expect(logos.length).toBeGreaterThan(0);
    for (const l of logos) {
      expect(typeof l.id).toBe('string');
      expect(typeof l.name).toBe('string');
      expect(typeof l.logoUrl).toBe('string');
      expect(typeof l.link).toBe('string');
    }
  });

  it('cta con botón o formulario presentes', () => {
    const cta = (homeContent as any)?.cta;
    expect(cta).toBeTruthy();
    expect(typeof cta?.titleKey).toBe('string');
    expect(typeof cta?.subtitleKey).toBe('string');
    expect(typeof cta?.backgroundImageUrl).toBe('string');
    expect(cta?.button || cta?.hubspotFormTitle).toBeTruthy();
  });
});
