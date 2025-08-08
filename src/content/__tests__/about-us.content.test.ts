/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { aboutUsContent } from '../pages/about-us/about-us.content';

describe('About Us content', () => {
  it('importa sin lanzar (validación Zod ya ocurrió en el import)', () => {
    expect(aboutUsContent).toBeTruthy();
  });

  it('tiene las secciones esperadas', () => {
    expect(aboutUsContent).toHaveProperty('seo');
    expect(aboutUsContent).toHaveProperty('header');
    expect(aboutUsContent).toHaveProperty('mission');
    expect(aboutUsContent).toHaveProperty('team');
  });

  it('seo básico válido', () => {
    const { seo } = aboutUsContent as any;
    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.descriptionKey).toBe('string');
    expect(typeof seo?.keywordsKey).toBe('string');
    expect(typeof seo?.imageUrl).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');
    expect(seo?.translationNS).toBe('aboutUs');
  });

  it('header: estructura e imagen', () => {
    const { header } = aboutUsContent as any;
    expect(typeof header?.titleKey).toBe('string');
    expect(typeof header?.subtitleKey).toBe('string');
    expect(header?.translationNS).toBe('aboutUs');

    const img = header?.imageData ?? {};
    expect(typeof img?.backgroundImage).toBe('string');
    expect(typeof img?.photoCredit).toBe('string');
    // En tu contenido pusiste variant: 'header'
    expect(img?.variant).toBe('header');
  });

  it('mission: estructura e imagen', () => {
    const { mission } = aboutUsContent as any;
    expect(typeof mission?.titleKey).toBe('string');
    expect(typeof mission?.textKey).toBe('string');
    expect(mission?.translationNS).toBe('aboutUs');

    const img = mission?.imageData ?? {};
    expect(typeof img?.backgroundImage).toBe('string');
    expect(typeof img?.photoCredit).toBe('string');
    // En tu contenido pusiste variant: 'horizontal'
    expect(img?.variant).toBe('horizontal');
  });

  it('team: miembros con datos completos y ids únicos', () => {
    const team = (aboutUsContent as any)?.team;
    expect(team?.translationNS).toBe('aboutUs');

    const members: any[] = team?.members ?? [];
    expect(Array.isArray(members)).toBe(true);
    expect(members.length).toBeGreaterThan(0);

    const seen = new Set<string>();
    for (const m of members) {
      expect(typeof m?.id).toBe('string');
      expect(typeof m?.name).toBe('string');
      expect(typeof m?.roleKey).toBe('string');
      expect(typeof m?.bioKey).toBe('string');
      expect(typeof m?.imageUrl).toBe('string');

      expect(seen.has(m.id)).toBe(false);
      seen.add(m.id);
    }
  });
});
