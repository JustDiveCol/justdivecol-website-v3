// src/data/dive-sites/santa-marta.ts
import type { DiveSite } from '../../types/data';

export const santaMartaDiveSites: DiveSite[] = [
  {
    id: 'sm-aguja',
    nameKey: 'siteSmAgujaName',
    destinationId: 'santa-marta',
    isTopSite: true,
    coordinates: [-74.195, 11.318],
    maxDepth: 30,
    levelRequiredId: 'padi_advanced',
    difficultyId: 'advanced',
    typeIds: ['reef', 'wall'],
    conditionsIds: ['currents'],
    descriptionP1Key: 'siteSmAgujaDesc',
    tagsIds: ['coral', 'large-fish'],

    // ===== DATOS CON LA NUEVA ESTRUCTURA =====
    featuredImage: {
      backgroundImage: '/images/dive-sites/sm/aguja-featured.webp',
      altTextKey: 'siteSmAgujaFeaturedAlt',
      photoCredit: {
        prefixKey: 'photoCreditPrefix',
        text: 'Fotógrafo Principal',
      },
    },
    photos: [
      {
        backgroundImage: '/images/dive-sites/sm/aguja-01.webp',
        altTextKey: 'siteSmAgujaPhoto1Alt',
      },
      {
        backgroundImage: '/images/dive-sites/sm/aguja-02.webp',
        altTextKey: 'siteSmAgujaPhoto2Alt',
      },
    ],
  },
  // ... más sitios de buceo de Santa Marta
];
