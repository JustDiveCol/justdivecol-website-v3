// src/content/destinations/dive-sites/providencia.content.ts
// import { toAssetUrl } from '../../../constants/assets.schema';
import { toAssetUrl } from '../../../constants';
import type { DiveSiteContent } from './types';

export const providenciaDiveSitesContent: Record<string, DiveSiteContent> = {
  'turtle-rock': {
    id: 'turtle-rock',
    nameKey: 'providencia.turtleRock.name',
    descriptionKey: 'providencia.turtleRock.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.405374, 13.389974],
    maxDepthMeter: 42,
    maxDepthFt: 140,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['reef', 'wall'],
    conditionsIds: [
      'moderate-current',
      'good-visibility',
      'boat-entry',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'biodiversity-hotspot',
      'photography',
      'warm-water',
      'caribbean',
      'hard-corals',
      'soft-corals',
      'overhangs',
      'canyons',
      'advanced-only',
      'deep-dive',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ], // /images/destinations/providencia/dive-sites/
  },

  'mantas-city': {
    id: 'mantas-city',
    nameKey: 'providencia.mantasCity.name',
    descriptionKey: 'providencia.mantasCity.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.378536, 13.312914],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'calm-surface', 'boat-entry'],
    tagsIds: [
      'manta-rays',
      'reef-fish',
      'hard-corals',
      'soft-corals',
      'biodiversity-hotspot',
      'photography',
      'warm-water',
      'caribbean',
      'beginner-friendly',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },

  planchon: {
    id: 'planchon',
    nameKey: 'providencia.planchon.name',
    descriptionKey: 'providencia.planchon.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.408145, 13.357195],
    maxDepthMeter: 24,
    maxDepthFt: 80,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck', 'reef'],
    conditionsIds: ['good-visibility', 'variable-visibility', 'boat-entry'],
    tagsIds: [
      'historical',
      'reef-fish',
      'hard-corals',
      'biodiversity-hotspot',
      'photography',
      'warm-water',
      'caribbean',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },

  'felipes-place': {
    id: 'felipes-place',
    nameKey: 'providencia.felipesPlace.name',
    descriptionKey: 'providencia.felipesPlace.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.40304, 13.365],
    maxDepthMeter: 24,
    maxDepthFt: 80,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'wall'],
    conditionsIds: [
      'good-visibility',
      'mild-current',
      'moderate-current',
      'boat-entry',
    ],
    tagsIds: [
      'reef-fish',
      'soft-corals',
      'hard-corals',
      'photography',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
      'historical',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },

  'nicks-place': {
    id: 'nicks-place',
    nameKey: 'providencia.nicksPlace.name',
    descriptionKey: 'providencia.nicksPlace.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.404936, 13.380893],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'reef'],
    conditionsIds: ['good-visibility', 'deep', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'sharks',
      'schooling-fish',
      'hard-corals',
      'soft-corals',
      'photography',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
      'advanced-only',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },

  'tetes-place': {
    id: 'tetes-place',
    nameKey: 'providencia.tetesPlace.name',
    descriptionKey: 'providencia.tetesPlace.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.406978, 13.33321],
    maxDepthMeter: 7,
    maxDepthFt: 23,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'good-visibility',
      'calm-surface',
      'mild-current',
      'boat-entry',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'soft-corals',
      'hard-corals',
      'warm-water',
      'caribbean',
      'photography',
      'beginner-friendly',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },

  'bajo-de-los-pargos': {
    id: 'bajo-de-los-pargos',
    nameKey: 'providencia.bajoDeLosPargos.name',
    descriptionKey: 'providencia.bajoDeLosPargos.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.368909, 13.308088],
    maxDepthMeter: 20,
    maxDepthFt: 65,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'moderate-current', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'hard-corals',
      'soft-corals',
      'warm-water',
      'caribbean',
      'photography',
      'biodiversity-hotspot',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },

  'snaper-shoal': {
    id: 'snaper-shoal',
    nameKey: 'providencia.snaperShoal.name',
    descriptionKey: 'providencia.snaperShoal.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.401873, 13.318449],
    maxDepthMeter: 20,
    maxDepthFt: 65,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['reef', 'cavern', 'wall'],
    conditionsIds: [
      'good-visibility',
      'moderate-current',
      'deep',
      'boat-entry',
    ],
    tagsIds: [
      'sharks',
      'reef-fish',
      'schooling-fish',
      'hard-corals',
      'soft-corals',
      'caves',
      'swim-throughs',
      'warm-water',
      'caribbean',
      'photography',
      'biodiversity-hotspot',
      'advanced-only',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },

  'la-cueva': {
    id: 'la-cueva',
    nameKey: 'providencia.laCueva.name',
    descriptionKey: 'providencia.laCueva.desc',
    destinationId: 'providencia',
    isTopSite: false,
    coordinates: [-81.406832, 13.372805],
    maxDepthMeter: 43,
    maxDepthFt: 140,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['cave', 'cavern', 'reef'],
    conditionsIds: [
      'deep',
      'good-visibility',
      'moderate-current',
      'boat-entry',
    ],
    tagsIds: [
      'caves',
      'swim-throughs',
      'reef-fish',
      'biodiversity-hotspot',
      'warm-water',
      'caribbean',
      'photography',
      'advanced-only',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },
} as const;
