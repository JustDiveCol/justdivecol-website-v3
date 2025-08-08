/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { diveExperiencesContent } from '../pages/dive-experiences/dive-experiences.content';

describe('Dive Experiences content', () => {
  it('importa sin lanzar (Zod ya validó en el import)', () => {
    expect(diveExperiencesContent).toBeTruthy();
  });

  it('tiene las secciones esperadas', () => {
    expect(diveExperiencesContent).toHaveProperty('seo');
    expect(diveExperiencesContent).toHaveProperty('upcomingTrips');
    expect(diveExperiencesContent).toHaveProperty('certifications');
    expect(diveExperiencesContent).toHaveProperty('destinations');
    expect(diveExperiencesContent).toHaveProperty('customTrips');
  });

  it('seo básico válido', () => {
    const { seo } = diveExperiencesContent as any;
    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.descriptionKey).toBe('string');
    expect(typeof seo?.keywordsKey).toBe('string');
    expect(typeof seo?.imageUrl).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');
    expect(seo?.translationNS).toBe('experiences');
  });

  it('upcomingTrips: estructura base', () => {
    const { upcomingTrips } = diveExperiencesContent as any;
    expect(typeof upcomingTrips?.titleKey).toBe('string');
    expect(typeof upcomingTrips?.subtitleKey).toBe('string');
    expect(typeof upcomingTrips?.backgroundImageUrl).toBe('string');
    expect(upcomingTrips?.translationNS).toBe('experiences');
    expect(typeof upcomingTrips?.filtersAllDestinationsKey).toBe('string');
    expect(typeof upcomingTrips?.filtersAllMonthsKey).toBe('string');
    expect(typeof upcomingTrips?.filtersNoResultsKey).toBe('string');
  });

  it('certifications: estructura base', () => {
    const { certifications } = diveExperiencesContent as any;
    expect(typeof certifications?.titleKey).toBe('string');
    expect(typeof certifications?.subtitleKey).toBe('string');
    expect(certifications?.translationNS).toBe('experiences');
  });

  it('destinations: estructura base', () => {
    const { destinations } = diveExperiencesContent as any;
    expect(typeof destinations?.titleKey).toBe('string');
    expect(typeof destinations?.otherTitleKey).toBe('string');
    expect(destinations?.translationNS).toBe('experiences');
  });

  it('customTrips: datos completos', () => {
    const { customTrips } = diveExperiencesContent as any;
    expect(typeof customTrips?.titleKey).toBe('string');
    expect(typeof customTrips?.textKey).toBe('string');
    expect(customTrips?.translationNS).toBe('experiences');

    const img = customTrips?.imageData ?? {};
    expect(typeof img?.backgroundImage).toBe('string');
    expect(typeof img?.photoCredit).toBe('string');
    if ('variant' in img) {
      expect(typeof img.variant).toBe('string');
    }

    expect(typeof customTrips?.buttonTextKey).toBe('string');

    const benefits: any[] = customTrips?.benefits ?? [];
    expect(Array.isArray(benefits)).toBe(true);
    expect(benefits.length).toBeGreaterThan(0);

    const seen = new Set<string>();
    for (const b of benefits) {
      expect(typeof b?.id).toBe('string');
      expect(typeof b?.textKey).toBe('string');
      expect(typeof b?.icon).toBe('string');

      expect(seen.has(b.id)).toBe(false);
      seen.add(b.id);
    }
  });
});
