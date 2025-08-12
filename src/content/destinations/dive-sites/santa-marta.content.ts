// santa-marta.content.ts
import { toAssetUrl } from '../../../constants/assets.schema';
import type { DiveSiteContent } from './types';

export const santaMartaDiveSitesContent: Record<string, DiveSiteContent> = {
  'bajo-del-pescador': {
    id: 'bajo-del-pescador',
    nameKey: 'bajoDelPescadorName',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19631, 11.31663],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['boat-entry'],
    descriptionKey: 'bajoDelPescadorDesc',
    tagsIds: ['reef-fish'],
    photos: [
      {
        backgroundImage: toAssetUrl('/images/placeholders/800x600.webp'),
        photoCredit: 'Camilo Beltran',
        variant: 'horizontal',
      },
    ],
  },
} as const;
