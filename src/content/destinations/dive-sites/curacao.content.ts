// src/content/destinations/dive-sites/curacao.content.ts
// import { toAssetUrl } from '../../../constants/assets.schema';
import { toAssetUrl } from '../../../constants';
import type { DiveSiteContent } from './types';

export const curacaoDiveSitesContent: Record<string, DiveSiteContent> = {
  'superior-producer': {
    id: 'superior-producer',
    nameKey: 'curacao.superiorProducer.name',
    descriptionKey: 'curacao.superiorProducer.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.946657, 12.104209],
    maxDepthMeter: 42,
    maxDepthFt: 140,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wreck'],
    conditionsIds: ['moderate-current'],
    tagsIds: ['reef-fish'],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ], // /images/destinations/curacao/dive-sites/
  },

  other: {
    id: 'other',
    nameKey: 'curacao.superiorProducer.name',
    descriptionKey: 'curacao.superiorProducer.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-67.946657, 12.104209],
    maxDepthMeter: 42,
    maxDepthFt: 140,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wreck'],
    conditionsIds: ['moderate-current'],
    tagsIds: ['reef-fish'],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ], // /images/destinations/curacao/dive-sites/
  },
} as const;
