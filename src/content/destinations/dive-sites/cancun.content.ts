// src/content/destinations/dive-sites/cancun.content.ts
// import { toAssetUrl } from '../../../constants/assets.schema';
import { toAssetUrl } from '../../../constants';
import type { DiveSiteContent } from './types';

export const cancunDiveSitesContent: Record<string, DiveSiteContent> = {
  'molas-shallow': {
    id: 'molas-shallow',
    nameKey: 'cancun.molas-shallow.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.747372, 20.600568],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  barracuda: {
    id: 'barracuda',
    nameKey: 'cancun.barracuda.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.913046, 20.572945],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['barracuda', 'reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  cantarell: {
    id: 'cantarell',
    nameKey: 'cancun.cantarell.name',
    descriptionKey: 'cancun.cantarell.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-86.949908, 20.563774],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['reef', 'wall', 'drift'],
    conditionsIds: [
      'strong-current',
      'rough-surface',
      'good-visibility',
      'deep',
      'boat-entry',
    ],
    tagsIds: [
      'manta-rays',
      'schooling-fish',
      'pelagics',
      'drift-dive',
      'deep-dive',
      'advanced-only',
      'caribbean',
      'warm-water',
      'tropical',
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

  'san-juan': {
    id: 'san-juan',
    nameKey: 'cancun.san-juan.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.943003, 20.555161],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'villa-blanca': {
    id: 'villa-blanca',
    nameKey: 'cancun.villa-blanca.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.962386, 20.520269],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'paraiso-can': {
    id: 'paraiso-can',
    nameKey: 'cancun.paraiso-can.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.974989, 20.510143],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'las-palmas': {
    id: 'las-palmas',
    nameKey: 'cancun.las-palmas.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.002114, 20.501345],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'chankanaab-shallow': {
    id: 'chankanaab-shallow',
    nameKey: 'cancun.chankanaab-shallow.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.982305, 20.491462],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'chankanaab-bolones': {
    id: 'chankanaab-bolones',
    nameKey: 'cancun.chankanaab-bolones.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.997267, 20.482944],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'wreck-c53': {
    id: 'wreck-c53',
    nameKey: 'cancun.wreck-c53.name',
    descriptionKey: 'cancun.wreck-c53.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-86.99855, 20.47237],
    maxDepthMeter: 25,
    maxDepthFt: 80,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wreck'],
    conditionsIds: [
      'moderate-current',
      'strong-current',
      'boat-entry',
      'good-visibility',
    ],
    tagsIds: [
      'historical',
      'reef-fish',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
      'tropical',
      'photography',
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

  tormentos: {
    id: 'tormentos',
    nameKey: 'cancun.tormentos.name',
    descriptionKey: 'cancun.tormentos.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-87.017623, 20.462495],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'drift'],
    conditionsIds: [
      'mild-current',
      'moderate-current',
      'good-visibility',
      'boat-entry',
    ],
    tagsIds: [
      'reef-fish',
      'biodiversity-hotspot',
      'photography',
      'caribbean',
      'warm-water',
      'tropical',
      'drift-dive',
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

  yucab: {
    id: 'yucab',
    nameKey: 'cancun.yucab.name',
    descriptionKey: 'cancun.yucab.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-87.018906, 20.45192],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'drift'],
    conditionsIds: [
      'mild-current',
      'moderate-current',
      'good-visibility',
      'boat-entry',
    ],
    tagsIds: [
      'reef-fish',
      'biodiversity-hotspot',
      'photography',
      'macro-life',
      'frogfish',
      'turtles',
      'sharks',
      'caribbean',
      'warm-water',
      'tropical',
      'drift-dive',
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

  'punta-tunich': {
    id: 'punta-tunich',
    nameKey: 'cancun.punta-tunich.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.033296, 20.438064],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'drift'],
    conditionsIds: ['good-visibility', 'moderate-current', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical', 'drift-dive'],
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

  'san-francisco': {
    id: 'san-francisco',
    nameKey: 'cancun.san-francisco.name',
    descriptionKey: 'cancun.san-francisco.desc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.033737, 20.428213],
    maxDepthMeter: 12,
    maxDepthFt: 40,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['calm-surface', 'good-visibility', 'shore-entry'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'schooling-fish',
      'caribbean',
      'warm-water',
      'tropical',
      'beginner-friendly',
      'photography',
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

  'santa-rosa-wall': {
    id: 'santa-rosa-wall',
    nameKey: 'cancun.santa-rosa-wall.name',
    descriptionKey: 'cancun.santa-rosa-wall.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-87.060731, 20.404221],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'drift', 'cave'],
    conditionsIds: [
      'moderate-current',
      'strong-current',
      'deep',
      'good-visibility',
      'boat-entry',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'sharks',
      'schooling-fish',
      'biodiversity-hotspot',
      'drift-dive',
      'deep-dive',
      'swim-throughs',
      'caves',
      'overhangs',
      'caribbean',
      'warm-water',
      'tropical',
      'photography',
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

  'paseo-del-cedral': {
    id: 'paseo-del-cedral',
    nameKey: 'cancun.paseo-del-cedral.name',
    descriptionKey: 'cancun.paseo-del-cedral.desc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.054635, 20.39563],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'drift'],
    conditionsIds: [
      'moderate-current',
      'strong-current',
      'good-visibility',
      'boat-entry',
    ],
    tagsIds: [
      'schooling-fish',
      'reef-fish',
      'turtles',
      'sharks',
      'photography',
      'drift-dive',
      'caribbean',
      'warm-water',
      'tropical',
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

  'la-francesa': {
    id: 'la-francesa',
    nameKey: 'cancun.la-francesa.name',
    descriptionKey: 'cancun.la-francesa.desc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.047764, 20.386249],
    maxDepthMeter: 15,
    maxDepthFt: 50,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'calm-surface', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'caribbean',
      'warm-water',
      'tropical',
      'beginner-friendly',
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

  'punta-dalila': {
    id: 'punta-dalila',
    nameKey: 'cancun.punta-dalila.name',
    descriptionKey: 'cancun.punta-dalila.desc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.041198, 20.370045],
    maxDepthMeter: 17,
    maxDepthFt: 56,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'mild-current', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'manta-rays',
      'caribbean',
      'warm-water',
      'tropical',
      'biodiversity-hotspot',
      'photography',
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

  'palancar-gardens': {
    id: 'palancar-gardens',
    nameKey: 'cancun.palancar-gardens.name',
    descriptionKey: 'cancun.palancar-gardens.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-87.060203, 20.361679],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'mild-current', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'tropical',
      'caribbean',
      'warm-water',
      'soft-corals',
      'hard-corals',
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

  'palancar-horseshoe': {
    id: 'palancar-horseshoe',
    nameKey: 'cancun.palancar-horseshoe.name',
    descriptionKey: 'cancun.palancar-horseshoe.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-87.04282, 20.351883],
    maxDepthMeter: 24,
    maxDepthFt: 79,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['moderate-current', 'good-visibility', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'sharks',
      'caribbean',
      'warm-water',
      'tropical',
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

  'palancar-caves': {
    id: 'palancar-caves',
    nameKey: 'cancun.palancar-caves.name',
    descriptionKey: 'cancun.palancar-caves.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-87.047304, 20.342186],
    maxDepthMeter: 22,
    maxDepthFt: 72,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'cavern'],
    conditionsIds: ['good-visibility', 'moderate-current', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'swim-throughs',
      'caves',
      'photography',
      'caribbean',
      'warm-water',
      'tropical',
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

  'colombia-shallow': {
    id: 'colombia-shallow',
    nameKey: 'cancun.colombia-shallow.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.033122, 20.333273],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'caribbean',
      'warm-water',
      'tropical',
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

  'palancar-bricks': {
    id: 'palancar-bricks',
    nameKey: 'cancun.palancar-bricks.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.058629, 20.324401],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'colombia-deep': {
    id: 'colombia-deep',
    nameKey: 'cancun.colombia-deep.name',
    descriptionKey: 'cancun.colombia-deep.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-87.041212, 20.315361],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['reef', 'wall', 'pinnacle', 'drift'],
    conditionsIds: ['strong-current', 'deep', 'good-visibility', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'sharks',
      'barracuda',
      'schooling-fish',
      'pelagics',
      'photography',
      'drift-dive',
      'deep-dive',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
      'tropical',
      'hard-corals',
      'soft-corals',
      'swim-throughs',
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

  'punta-sur-devils-throat': {
    id: 'punta-sur-devils-throat',
    nameKey: 'cancun.punta-sur-devils-throat.name',
    descriptionKey: 'cancun.punta-sur-devils-throat.desc',
    destinationId: 'cancun',
    isTopSite: true,
    coordinates: [-87.04819, 20.30424],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'expert',
    typeIds: ['reef', 'wall', 'cave', 'drift'],
    conditionsIds: [
      'strong-current',
      'deep',
      'variable-visibility',
      'boat-entry',
    ],
    tagsIds: [
      'sharks',
      'manta-rays',
      'pelagics',
      'photography',
      'drift-dive',
      'deep-dive',
      'advanced-only',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
      'tropical',
      'swim-throughs',
      'caves',
      'overhangs',
      'hard-corals',
      'soft-corals',
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

  'punta-sur-cathedral': {
    id: 'punta-sur-cathedral',
    nameKey: 'cancun.punta-sur-cathedral.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.025955, 20.294249],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'cave'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'caribbean',
      'warm-water',
      'tropical',
      'caves',
      'swim-throughs',
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

  'chun-chacab': {
    id: 'chun-chacab',
    nameKey: 'cancun.chun-chacab.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.042602, 20.284267],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  maracaibo: {
    id: 'maracaibo',
    nameKey: 'cancun.maracaibo.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-87.024444, 20.273675],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'el-islote': {
    id: 'el-islote',
    nameKey: 'cancun.el-islote.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.967943, 20.269174],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'playa-bosh': {
    id: 'playa-bosh',
    nameKey: 'cancun.playa-bosh.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.943578, 20.288732],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'shore-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'el-mirador': {
    id: 'el-mirador',
    nameKey: 'cancun.el-mirador.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.909743, 20.320828],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'chen-rio': {
    id: 'chen-rio',
    nameKey: 'cancun.chen-rio.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.853997, 20.390026],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'shore-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'punta-morena': {
    id: 'punta-morena',
    nameKey: 'cancun.punta-morena.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.83782, 20.407612],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'shore-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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

  'los-atolones': {
    id: 'los-atolones',
    nameKey: 'cancun.los-atolones.name',
    descriptionKey: 'noDesc',
    destinationId: 'cancun',
    isTopSite: false,
    coordinates: [-86.776651, 20.471246],
    maxDepthMeter: 1,
    maxDepthFt: 1,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'boat-entry'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water', 'tropical'],
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
