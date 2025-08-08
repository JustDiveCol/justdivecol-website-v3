// santa-marta.content.ts
import type { DiveSiteContent } from '../types';

export const santaMartaDiveSitesContent: Record<string, DiveSiteContent> = {
  'sm-aguja': {
    nameKey: 'siteSmAgujaName',
    descriptionKey: 'siteSmAgujaDesc',
    markerIcon: 'reef', // o ruta a SVG
    gallery: {
      titleKey: 'certifications.galleryTitle',
      images: [
        {
          backgroundImage: 'https://placehold.co/800x600',
          photoCredit: 'Camilo Beltran',
          variant: 'horizontal',
        },
        {
          backgroundImage: 'https://placehold.co/600x800',
          photoCredit: 'Camilo Beltran',
          variant: 'vertical',
        },
        {
          backgroundImage: 'https://placehold.co/800x600',
          photoCredit: 'Camilo Beltran',
          variant: 'horizontal',
        },
        {
          backgroundImage: 'https://placehold.co/600x800',
          photoCredit: 'Camilo Beltran',
          variant: 'vertical',
        },
      ],
    },
  },
  // …otros ~120 sitios
} as const;
