/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { contactContent } from '../pages/contact/contact.content';

describe('Contact content', () => {
  it('importa sin lanzar (Zod ya validó en el import)', () => {
    expect(contactContent).toBeTruthy();
  });

  it('tiene las secciones esperadas', () => {
    expect(contactContent).toHaveProperty('seo');
    expect(contactContent).toHaveProperty('header');
    expect(contactContent).toHaveProperty('contactInfo');
  });

  it('seo básico válido', () => {
    const { seo } = contactContent as any;
    expect(typeof seo?.titleKey).toBe('string');
    expect(typeof seo?.descriptionKey).toBe('string');
    expect(typeof seo?.keywordsKey).toBe('string');
    expect(typeof seo?.imageUrl).toBe('string');
    expect(typeof seo?.urlPath).toBe('string');
    expect(seo?.translationNS).toBe('contact');
  });

  it('header: estructura e imagen', () => {
    const { header } = contactContent as any;
    expect(typeof header?.titleKey).toBe('string');
    expect(typeof header?.subtitleKey).toBe('string');
    expect(header?.translationNS).toBe('contact');

    const img = header?.imageData ?? {};
    expect(typeof img?.backgroundImage).toBe('string');
    expect(typeof img?.photoCredit).toBe('string');
    // Sólo validamos si existe variant (por si el schema la hace optional)
    if ('variant' in img) {
      expect(typeof img.variant).toBe('string');
    }
  });

  it('contactInfo: datos base y socials', () => {
    const { contactInfo } = contactContent as any;
    expect(contactInfo?.translationNS).toBe('contact');

    expect(typeof contactInfo?.titleKey).toBe('string');
    expect(typeof contactInfo?.email).toBe('string');
    expect(typeof contactInfo?.emailSubjectKey).toBe('string');
    expect(typeof contactInfo?.emailBodyKey).toBe('string');
    expect(typeof contactInfo?.hubspotFormTitleKey).toBe('string');

    // Teléfono: sólo que sea string no vacío (evitamos exigir formato estricto)
    expect(typeof contactInfo?.phone).toBe('string');
    expect((contactInfo?.phone as string).length).toBeGreaterThan(5);

    // Socials
    const socials: any[] = contactInfo?.socials ?? [];
    expect(Array.isArray(socials)).toBe(true);
    expect(socials.length).toBeGreaterThan(0);

    for (const s of socials) {
      expect(typeof s?.type).toBe('string');
      expect(typeof s?.name).toBe('string');
      expect(typeof s?.path).toBe('string');
    }
  });
});
