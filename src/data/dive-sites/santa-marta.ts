// src/data/dive-sites/santa-marta.ts

import type { DiveSite } from './style';

export const santaMartaDiveSites: DiveSite[] = [
  {
    id: 'sm-aguja',
    nameKey: 'siteSmAgujaName',
    destinationId: 'santa-marta',
    isTopSite: true,
    coordinates: [-74.195, 11.318],
    maxDepth: 30,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'wall'],
    conditionsIds: ['current'],
    descriptionKey: 'siteSmAgujaDesc',
    tagsIds: ['advanced-only'],

    featuredImage: {
      backgroundImage: '/images/dive-sites/sm/aguja-featured.webp',
      photoCredit: '',
      variant: 'horizontal',
    },
    photos: [
      {
        backgroundImage: '/images/dive-sites/sm/aguja-01.webp',
        photoCredit: '',
        variant: 'horizontal',
      },
      {
        backgroundImage: '/images/dive-sites/sm/aguja-02.webp',
        photoCredit: '',
        variant: 'horizontal',
      },
    ],
  },
  // ... más sitios de buceo de Santa Marta
];
