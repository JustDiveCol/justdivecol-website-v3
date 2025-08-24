// src/content/destinations/dive-sites/curacao.content.ts
// import { toAssetUrl } from '../../../constants/assets.schema';
import { toAssetUrl } from '../../../constants';
import type { DiveSiteContent } from './types';

export const curacaoDiveSitesContent: Record<string, DiveSiteContent> = {
  'playa-piskado': {
    id: 'playa-piskado',
    nameKey: 'curacao.playa-piskado.name',
    descriptionKey: 'curacao.playa-piskado.desc',
    destinationId: 'curacao',
    isTopSite: true,
    coordinates: [-69.1545, 12.3694],
    maxDepthMeter: 36, // info real: 12–36m (40–120ft)
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'good-visibility',
      'calm-surface',
      'shore-entry',
      'boat-entry',
    ],
    tagsIds: [
      'turtles',
      'reef-fish',
      'photography',
      'beginner-friendly',
      'conservation-area',
      'warm-water',
      'caribbean',
      'biodiversity-hotspot',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'JustDiveCol',
        variant: 'horizontal',
      },
    ], // /images/destinations/curacao/dive-sites/
  },

  'klein-curacao': {
    id: 'klein-curacao',
    nameKey: 'curacao.klein-curacao.name',
    descriptionKey: 'curacao.klein-curacao.desc',
    destinationId: 'curacao',
    isTopSite: true,
    coordinates: [-68.64565, 11.9852],
    maxDepthMeter: 36, // info real: 12–36m (40–120ft)
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver', // recomendado por ser drift/boat dive
    difficultyId: 'medium',
    typeIds: ['drift', 'reef'],
    conditionsIds: ['good-visibility', 'boat-entry', 'moderate-current'],
    tagsIds: [
      'turtles',
      'reef-fish',
      'schooling-fish',
      'photography',
      'biodiversity-hotspot',
      'warm-water',
      'caribbean',
      'conservation-area',
    ],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'Mermaid Boat Trips Curaçao',
        variant: 'horizontal',
      },
    ], // /images/destinations/curacao/dive-sites/
  },

  'eastpoint-oostpunt': {
    id: 'eastpoint-oostpunt',
    nameKey: 'curacao.eastpoint-oostpunt.name',
    descriptionKey: 'curacao.eastpoint-oostpunt.desc',
    destinationId: 'curacao',
    isTopSite: true,
    coordinates: [-68.73604, 12.04415],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'reef', 'drift'],
    conditionsIds: [
      'good-visibility',
      'moderate-current',
      'strong-current',
      'boat-entry',
      'surge',
    ],
    tagsIds: [
      'turtles',
      'sharks',
      'barracuda',
      'schooling-fish',
      'reef-fish',
      'pelagics',
      'soft-corals',
      'hard-corals',
      'biodiversity-hotspot',
      'photography',
      'caribbean',
      'warm-water',
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

  'directors-bay': {
    id: 'directors-bay',
    nameKey: 'curacao.directors-bay.name',
    descriptionKey: 'curacao.directors-bay.desc',
    destinationId: 'curacao',
    isTopSite: true,
    coordinates: [-68.86009, 12.06569],
    maxDepthMeter: 36, // 6–36m / 20–120ft
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: [
      'good-visibility',
      'calm-surface',
      'boat-entry',
      'shore-entry',
    ],
    tagsIds: [
      'reef-fish',
      'seahorses',
      'frogfish',
      'octopus',
      'macro-life',
      'photography',
      'beginner-friendly',
      'caribbean',
      'warm-water',
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

  tugboat: {
    id: 'tugboat',
    nameKey: 'curacao.tugboat.name',
    descriptionKey: 'curacao.tugboat.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.86198, 12.06781],
    maxDepthMeter: 6,
    maxDepthFt: 20,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['wreck', 'reef'],
    conditionsIds: [
      'good-visibility',
      'calm-surface',
      'boat-entry',
      'shore-entry',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'photography',
      'beginner-friendly',
      'historical',
      'caribbean',
      'warm-water',
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

  'kathys-paradise': {
    id: 'kathys-paradise',
    nameKey: 'curacao.kathys-paradise.name',
    descriptionKey: 'curacao.kathys-paradise.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.81911, 12.04294],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['drift', 'reef'],
    conditionsIds: ['good-visibility', 'boat-entry', 'moderate-current'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'pelagics',
      'macro-life',
      'photography',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  smokeys: {
    id: 'smokeys',
    nameKey: 'curacao.smokeys.name',
    descriptionKey: 'curacao.smokeys.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.81069, 12.04019],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift', 'wall', 'reef'],
    conditionsIds: [
      'good-visibility',
      'boat-entry',
      'moderate-current',
      'strong-current',
      'surge',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'pelagics',
      'macro-life',
      'photography',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  'booby-trap': {
    id: 'booby-trap',
    nameKey: 'curacao.booby-trap.name',
    descriptionKey: 'curacao.booby-trap.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.83702, 12.05164],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['drift', 'reef'],
    conditionsIds: ['good-visibility', 'boat-entry', 'moderate-current'],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'sharks',
      'turtles',
      'photography',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  'eel-valley': {
    id: 'eel-valley',
    nameKey: 'curacao.eel-valley.name',
    descriptionKey: 'curacao.eel-valley.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.84331, 12.05834],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef', 'drift'],
    conditionsIds: ['good-visibility', 'boat-entry', 'moderate-current'],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'photography',
      'caribbean',
      'warm-water',
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

  'barracuda-point': {
    id: 'barracuda-point',
    nameKey: 'curacao.barracuda-point.name',
    descriptionKey: 'curacao.barracuda-point.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.85586, 12.0623],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['drift', 'reef'],
    conditionsIds: ['good-visibility', 'boat-entry', 'moderate-current'],
    tagsIds: [
      'barracuda',
      'turtles',
      'reef-fish',
      'schooling-fish',
      'photography',
      'macro-life',
      'caribbean',
      'warm-water',
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

  'small-wall': {
    id: 'small-wall',
    nameKey: 'curacao.small-wall.name',
    descriptionKey: 'curacao.small-wall.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.86011, 12.0633],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: ['good-visibility', 'boat-entry', 'moderate-current'],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'photography',
      'beginner-friendly',
      'caribbean',
      'warm-water',
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

  'lost-anchor': {
    id: 'lost-anchor',
    nameKey: 'curacao.lost-anchor.name',
    descriptionKey: 'curacao.lost-anchor.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.86992, 12.07435],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'drift', 'reef'],
    conditionsIds: [
      'good-visibility',
      'boat-entry',
      'moderate-current',
      'surge',
    ],
    tagsIds: [
      'seahorses',
      'macro-life',
      'soft-corals',
      'reef-fish',
      'photography',
      'caribbean',
      'warm-water',
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

  'beacon-point': {
    id: 'beacon-point',
    nameKey: 'curacao.beacon-point.name',
    descriptionKey: 'curacao.beacon-point.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.87378, 12.07078],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'drift', 'reef'],
    conditionsIds: ['boat-entry', 'moderate-current', 'good-visibility'],
    tagsIds: ['barracuda', 'caribbean', 'warm-water'],
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

  'divers-leap': {
    id: 'divers-leap',
    nameKey: 'curacao.divers-leap.name',
    descriptionKey: 'curacao.divers-leap.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.87857, 12.07343],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'drift', 'reef'],
    conditionsIds: ['boat-entry', 'moderate-current', 'good-visibility'],
    tagsIds: ['barracuda', 'caribbean', 'warm-water', 'seahorses'],
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

  'jan-thiel': {
    id: 'jan-thiel',
    nameKey: 'curacao.jan-thiel.name',
    descriptionKey: 'curacao.jan-thiel.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.88237, 12.07592],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['wall', 'reef'],
    conditionsIds: ['boat-entry', 'shore-entry', 'good-visibility'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water'],
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

  'sweet-bottom': {
    id: 'sweet-bottom',
    nameKey: 'curacao.sweet-bottom.name',
    descriptionKey: 'curacao.sweet-bottom.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.88444, 12.0777],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['boat-entry', 'good-visibility'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water'],
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

  'sandys-plateau': {
    id: 'sandys-plateau',
    nameKey: 'curacao.sandys-plateau.name',
    descriptionKey: 'curacao.sandys-plateau.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.88663, 12.07894],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['wall', 'reef'],
    conditionsIds: ['boat-entry', 'good-visibility'],
    tagsIds: ['reef-fish', 'caribbean', 'warm-water'],
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

  'saba-wreck': {
    id: 'saba-wreck',
    nameKey: 'curacao.saba-wreck.name',
    descriptionKey: 'curacao.saba-wreck.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.89003, 12.08077],
    maxDepthMeter: 12,
    maxDepthFt: 40,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['wreck', 'reef'],
    conditionsIds: ['boat-entry', 'good-visibility'],
    tagsIds: ['reef-fish', 'seahorses', 'caribbean', 'warm-water'],
    photos: [
      {
        backgroundImage: toAssetUrl(
          '/images/dive-sites/default-dive-site.webp'
        ),
        photoCredit: 'Ocean Encounters Curaçao',
        variant: 'horizontal',
      },
    ],
  },

  'cornelius-bay': {
    id: 'cornelius-bay',
    nameKey: 'curacao.cornelius-bay.name',
    descriptionKey: 'curacao.cornelius-bay.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.89292, 12.08383],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: ['boat-entry', 'good-visibility'],
    tagsIds: ['seahorses', 'caribbean'],
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

  'shipwreck-point': {
    id: 'shipwreck-point',
    nameKey: 'curacao.shipwreck-point.name',
    descriptionKey: 'curacao.shipwreck-point.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.8964, 12.08283],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck', 'reef'],
    conditionsIds: ['boat-entry', 'shore-entry', 'good-visibility'],
    tagsIds: ['caribbean'],
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

  'stella-maris-shipwreck': {
    id: 'stella-maris-shipwreck',
    nameKey: 'curacao.stella-maris-shipwreck.name',
    descriptionKey: 'curacao.stella-maris-shipwreck.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.8994, 12.08539],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck', 'reef'],
    conditionsIds: ['shore-entry', 'good-visibility'],
    tagsIds: ['caribbean'],
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

  'oswaldos-drop-off': {
    id: 'oswaldos-drop-off',
    nameKey: 'curacao.oswaldos-drop-off.name',
    descriptionKey: 'curacao.oswaldos-drop-off.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.90215, 12.08748],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['shore-entry', 'good-visibility'],
    tagsIds: ['caribbean'],
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

  'car-pile': {
    id: 'car-pile',
    nameKey: 'curacao.car-pile.name',
    descriptionKey: 'curacao.car-pile.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.90397, 12.08869],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck', 'artificial-reef'],
    conditionsIds: ['shore-entry'],
    tagsIds: ['caribbean'],
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

  'superior-producer': {
    id: 'superior-producer',
    nameKey: 'curacao.superior-producer.name',
    descriptionKey: 'curacao.superior-producer.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.94472, 12.10488],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck', 'artificial-reef'],
    conditionsIds: [
      'good-visibility',
      'moderate-current',
      'boat-entry',
      'shore-entry',
    ],
    tagsIds: [
      'historical',
      'photography',
      'reef-fish',
      'barracuda',
      'turtles',
      'macro-life',
      'night-dive',
      'deep-dive',
      'caribbean',
      'warm-water',
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

  'double-reef': {
    id: 'double-reef',
    nameKey: 'curacao.double-reef.name',
    descriptionKey: 'curacao.double-reef.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.94838, 12.10689],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: [
      'boat-entry',
      'shore-entry',
      'mild-current',
      'moderate-current',
      'good-visibility',
      'variable-visibility',
      'calm-surface',
      'rough-surface',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'macro-life',
      'schooling-fish',
      'hard-corals',
      'soft-corals',
      'photography',
      'biodiversity-hotspot',
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

  'snake-bay': {
    id: 'snake-bay',
    nameKey: 'curacao.snake-bay.name',
    descriptionKey: 'curacao.snake-bay.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.99778, 12.13938],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: [
      'shore-entry',
      'good-visibility',
      'variable-visibility',
      'calm-surface',
      'rough-surface',
      'night',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'turtles',
      'photography',
      'soft-corals',
      'hard-corals',
      'biodiversity-hotspot',
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

  'porto-mari': {
    id: 'porto-mari',
    nameKey: 'curacao.porto-mari.name',
    descriptionKey: 'curacao.porto-mari.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.08666, 12.21832],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['wall', 'reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'good-visibility',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'macro-life',
      'schooling-fish',
      'soft-corals',
      'hard-corals',
      'photography',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  'cas-abou': {
    id: 'cas-abou',
    nameKey: 'curacao.cas-abou.name',
    descriptionKey: 'curacao.cas-abou.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.093, 12.22766],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['wall', 'reef'],
    conditionsIds: ['shore-entry', 'good-visibility', 'calm-surface', 'night'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'macro-life',
      'nudibranchs',
      'frogfish',
      'seahorses',
      'soft-corals',
      'hard-corals',
      'photography',
      'conservation-area',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  'santa-martha': {
    id: 'santa-martha',
    nameKey: 'curacao.santa-martha.name',
    descriptionKey: 'curacao.santa-martha.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.12845, 12.26743],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck', 'wall', 'reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'good-visibility',
      'calm-surface',
      'night',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'seahorses',
      'hard-corals',
      'soft-corals',
      'photography',
      'historical',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  'blue-room': {
    id: 'blue-room',
    nameKey: 'curacao.blue-room.name',
    descriptionKey: 'curacao.blue-room.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15551, 12.2973],
    maxDepthMeter: 5,
    maxDepthFt: 15,
    levelRequiredId: 'none',
    difficultyId: 'easy',
    typeIds: ['cavern', 'reef'],
    conditionsIds: ['boat-entry', 'good-visibility', 'calm-surface'],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'photography',
      'swim-throughs',
      'caribbean',
      'warm-water',
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

  'mushroom-forest': {
    id: 'mushroom-forest',
    nameKey: 'curacao.mushroom-forest.name',
    descriptionKey: 'curacao.mushroom-forest.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15447, 12.30019],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift', 'wall', 'reef'],
    conditionsIds: [
      'boat-entry',
      'deep',
      'good-visibility',
      'moderate-current',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'seahorses',
      'barracuda',
      'photography',
      'drift-dive',
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

  'black-sand-beach': {
    id: 'black-sand-beach',
    nameKey: 'curacao.black-sand-beach.name',
    descriptionKey: 'curacao.black-sand-beach.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.14943, 12.30365],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck', 'reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'good-visibility',
      'calm-surface',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'turtles',
      'photography',
      'night-dive',
      'warm-water',
      'caribbean',
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

  'north-point-of-klein-curacao': {
    id: 'north-point-of-klein-curacao',
    nameKey: 'curacao.north-point-of-klein-curacao.name',
    descriptionKey: 'curacao.north-point-of-klein-curacao.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.64798, 12.00041],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'reef', 'drift'],
    conditionsIds: [
      'boat-entry',
      'strong-current',
      'rough-surface',
      'deep',
      'good-visibility',
    ],
    tagsIds: [
      'turtles',
      'reef-fish',
      'schooling-fish',
      'drift-dive',
      'photography',
      'advanced-only',
      'biodiversity-hotspot',
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

  'eastside-of-klein-curacao': {
    id: 'eastside-of-klein-curacao',
    nameKey: 'curacao.eastside-of-klein-curacao.name',
    descriptionKey: 'curacao.eastside-of-klein-curacao.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.63897, 11.99397],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift', 'wall', 'reef'],
    conditionsIds: [
      'boat-entry',
      'strong-current',
      'deep',
      'good-visibility',
      'rough-surface',
    ],
    tagsIds: [
      'turtles',
      'reef-fish',
      'schooling-fish',
      'drift-dive',
      'photography',
      'advanced-only',
      'biodiversity-hotspot',
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

  'south-point-of-klein-curacao': {
    id: 'south-point-of-klein-curacao',
    nameKey: 'curacao.south-point-of-klein-curacao.name',
    descriptionKey: 'curacao.south-point-of-klein-curacao.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.64154, 11.97733],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift', 'wall', 'reef'],
    conditionsIds: [
      'boat-entry',
      'strong-current',
      'deep',
      'good-visibility',
      'rough-surface',
    ],
    tagsIds: [
      'turtles',
      'reef-fish',
      'schooling-fish',
      'drift-dive',
      'photography',
      'advanced-only',
      'biodiversity-hotspot',
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

  'playa-kanoa': {
    id: 'playa-kanoa',
    nameKey: 'curacao.playa-kanoa.name',
    descriptionKey: 'curacao.playa-kanoa.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.86971, 12.17852],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift', 'reef'],
    conditionsIds: [
      'boat-entry',
      'shore-entry',
      'strong-current',
      'variable-visibility',
      'rough-surface',
    ],
    tagsIds: [
      'drift-dive',
      'reef-fish',
      'schooling-fish',
      'advanced-only',
      'photography',
      'biodiversity-hotspot',
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

  'north-point': {
    id: 'north-point',
    nameKey: 'curacao.north-point.name',
    descriptionKey: 'curacao.north-point.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.14221, 12.39114],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift', 'reef'],
    conditionsIds: [
      'strong-current',
      'rough-surface',
      'variable-visibility',
      'boat-entry',
    ],
    tagsIds: [
      'drift-dive',
      'reef-fish',
      'schooling-fish',
      'advanced-only',
      'photography',
      'biodiversity-hotspot',
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

  'black-rock': {
    id: 'black-rock',
    nameKey: 'curacao.black-rock.name',
    descriptionKey: 'curacao.black-rock.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.76647, 12.04199],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift', 'wall', 'reef'],
    conditionsIds: [
      'boat-entry',
      'good-visibility',
      'strong-current',
      'surge',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'barracuda',
      'pelagics',
      'photography',
      'biodiversity-hotspot',
      'advanced-only',
      'caribbean',
      'warm-water',
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

  'awa-blancu': {
    id: 'awa-blancu',
    nameKey: 'curacao.awa-blancu.name',
    descriptionKey: 'curacao.awa-blancu.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.78459, 12.03874],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift', 'wall', 'reef'],
    conditionsIds: [
      'boat-entry',
      'good-visibility',
      'strong-current',
      'deep',
      'surge',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'pelagics',
      'photography',
      'biodiversity-hotspot',
      'advanced-only',
      'caribbean',
      'warm-water',
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

  'playa-santa-cruz': {
    id: 'playa-santa-cruz',
    nameKey: 'curacao.playa-santa-cruz.name',
    descriptionKey: 'curacao.playa-santa-cruz.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15022, 12.31193],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: [
      'boat-entry',
      'good-visibility',
      'mild-current',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'dolphins',
      'photography',
      'beginner-friendly',
      'biodiversity-hotspot',
      'hard-corals',
      'soft-corals',
      'caribbean',
      'warm-water',
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

  'playa-lagun': {
    id: 'playa-lagun',
    nameKey: 'curacao.playa-lagun.name',
    descriptionKey: 'curacao.playa-lagun.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.1517, 12.3181],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['shore-entry', 'good-visibility', 'calm-surface'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'photography',
      'beginner-friendly',
      'biodiversity-hotspot',
      'hard-corals',
      'soft-corals',
      'caribbean',
      'warm-water',
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

  'playa-jeremi': {
    id: 'playa-jeremi',
    nameKey: 'curacao.playa-jeremi.name',
    descriptionKey: 'curacao.playa-jeremi.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15121, 12.32917],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'good-visibility',
      'calm-surface',
      'boat-entry',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'photography',
      'beginner-friendly',
      'biodiversity-hotspot',
      'hard-corals',
      'soft-corals',
      'caribbean',
      'warm-water',
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

  paradise: {
    id: 'paradise',
    nameKey: 'curacao.paradise.name',
    descriptionKey: 'curacao.paradise.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15452, 12.33482],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['cavern', 'reef'],
    conditionsIds: ['boat-entry', 'good-visibility', 'calm-surface'],
    tagsIds: [
      'reef-fish',
      'barracuda',
      'octopus',
      'seahorses',
      'hard-corals',
      'soft-corals',
      'biodiversity-hotspot',
      'photography',
      'caribbean',
      'warm-water',
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

  'kleine-knip-kenepa-chikitu': {
    id: 'kleine-knip-kenepa-chikitu',
    nameKey: 'curacao.kleine-knip-kenepa-chikitu.name',
    descriptionKey: 'curacao.kleine-knip-kenepa-chikitu.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15303, 12.34133],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['shore-entry', 'good-visibility', 'calm-surface'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'schooling-fish',
      'hard-corals',
      'soft-corals',
      'biodiversity-hotspot',
      'photography',
      'caribbean',
      'warm-water',
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

  'grote-knip-kenepa-grandi': {
    id: 'grote-knip-kenepa-grandi',
    nameKey: 'curacao.grote-knip-kenepa-grandi.name',
    descriptionKey: 'curacao.grote-knip-kenepa-grandi.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15235, 12.35198],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['shore-entry', 'good-visibility', 'calm-surface'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'macro-life',
      'hard-corals',
      'soft-corals',
      'turtles',
      'dolphins',
      'photography',
      'caribbean',
      'warm-water',
      'biodiversity-hotspot',
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

  kortape: {
    id: 'kortape',
    nameKey: 'curacao.kortape.name',
    descriptionKey: 'curacao.kortape.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15756, 12.36144],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'good-visibility',
      'mild-current',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'soft-corals',
      'hard-corals',
      'photography',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  'sweet-alice-at-playa-forti': {
    id: 'sweet-alice-at-playa-forti',
    nameKey: 'curacao.sweet-alice-at-playa-forti.name',
    descriptionKey: 'curacao.sweet-alice-at-playa-forti.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15388, 12.36642],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'good-visibility',
      'mild-current',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'hard-corals',
      'soft-corals',
      'photography',
      'caribbean',
      'warm-water',
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

  'alice-in-wonderland-at-playa-kalki': {
    id: 'alice-in-wonderland-at-playa-kalki',
    nameKey: 'curacao.alice-in-wonderland-at-playa-kalki.name',
    descriptionKey: 'curacao.alice-in-wonderland-at-playa-kalki.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15788, 12.37491],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'good-visibility',
      'mild-current',
      'calm-surface',
      'boat-entry',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'frogfish',
      'octopus',
      'turtles',
      'schooling-fish',
      'hard-corals',
      'soft-corals',
      'photography',
      'beginner-friendly',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  'elvins-plane-wreck': {
    id: 'elvins-plane-wreck',
    nameKey: 'curacao.elvins-plane-wreck.name',
    descriptionKey: 'curacao.elvins-plane-wreck.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.16226, 12.37917],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck', 'drift'],
    conditionsIds: [
      'boat-entry',
      'moderate-current',
      'variable-visibility',
      'good-visibility',
      'deep',
      'rough-surface',
    ],
    tagsIds: [
      'barracuda',
      'reef-fish',
      'turtles',
      'octopus',
      'schooling-fish',
      'macro-life',
      'photography',
      'caribbean',
      'warm-water',
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

  watamula: {
    id: 'watamula',
    nameKey: 'curacao.watamula.name',
    descriptionKey: 'curacao.watamula.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15985, 12.38571],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['drift', 'reef'],
    conditionsIds: [
      'boat-entry',
      'moderate-current',
      'variable-visibility',
      'good-visibility',
      'surge',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'macro-life',
      'hard-corals',
      'soft-corals',
      'turtles',
      'biodiversity-hotspot',
      'photography',
      'caribbean',
      'warm-water',
      'drift-dive',
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

  'pierbaai-at-marie-pampoen': {
    id: 'pierbaai-at-marie-pampoen',
    nameKey: 'curacao.pierbaai-at-marie-pampoen.name',
    descriptionKey: 'curacao.pierbaai-at-marie-pampoen.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.90565, 12.09029],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['shore-entry', 'calm-surface', 'good-visibility', 'night'],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'octopus',
      'turtles',
      'schooling-fish',
      'soft-corals',
      'hard-corals',
      'night-dive',
      'beginner-friendly',
      'photography',
      'conservation-area',
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

  'tarpon-city': {
    id: 'tarpon-city',
    nameKey: 'curacao.tarpon-city.name',
    descriptionKey: 'curacao.tarpon-city.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.93321, 12.10284],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['drift', 'reef'],
    conditionsIds: [
      'shore-entry',
      'variable-visibility',
      'moderate-current',
      'boat-entry',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'macro-life',
      'photography',
      'historical',
      'beginner-friendly',
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

  'water-factory': {
    id: 'water-factory',
    nameKey: 'curacao.water-factory.name',
    descriptionKey: 'curacao.water-factory.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.95341, 12.10862],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'moderate-current',
      'good-visibility',
      'variable-visibility',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'photography',
      'warm-water',
      'caribbean',
      'soft-corals',
      'hard-corals',
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

  'piscadera-bay': {
    id: 'piscadera-bay',
    nameKey: 'curacao.piscadera-bay.name',
    descriptionKey: 'curacao.piscadera-bay.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.9696, 12.12185],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'calm-surface',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'turtles',
      'photography',
      'warm-water',
      'caribbean',
      'soft-corals',
      'hard-corals',
      'biodiversity-hotspot',
      'conservation-area',
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

  'long-beach-piscadera': {
    id: 'long-beach-piscadera',
    nameKey: 'curacao.long-beach-piscadera.name',
    descriptionKey: 'curacao.long-beach-piscadera.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.97171, 12.12424],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['drift', 'reef'],
    conditionsIds: [
      'boat-entry',
      'moderate-current',
      'good-visibility',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'barracuda',
      'soft-corals',
      'hard-corals',
      'overhangs',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
      'photography',
      'conservation-area',
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

  'blue-bay-beach': {
    id: 'blue-bay-beach',
    nameKey: 'curacao.blue-bay-beach.name',
    descriptionKey: 'curacao.blue-bay-beach.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.98542, 12.13399],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'calm-surface',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'hard-corals',
      'soft-corals',
      'warm-water',
      'caribbean',
      'photography',
      'beginner-friendly',
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

  'blue-bay-garden': {
    id: 'blue-bay-garden',
    nameKey: 'curacao.blue-bay-garden.name',
    descriptionKey: 'curacao.blue-bay-garden.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.98517, 12.1329],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'calm-surface',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'barracuda',
      'hard-corals',
      'soft-corals',
      'warm-water',
      'caribbean',
      'photography',
      'beginner-friendly',
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

  'blue-bay-wall': {
    id: 'blue-bay-wall',
    nameKey: 'curacao.blue-bay-wall.name',
    descriptionKey: 'curacao.blue-bay-wall.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.98712, 12.13493],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'good-visibility',
      'mild-current',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'barracuda',
      'hard-corals',
      'soft-corals',
      'caribbean',
      'warm-water',
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

  'boca-sami': {
    id: 'boca-sami',
    nameKey: 'curacao.boca-sami.name',
    descriptionKey: 'curacao.boca-sami.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.99969, 12.1466],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'good-visibility',
      'mild-current',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'barracuda',
      'hard-corals',
      'soft-corals',
      'caribbean',
      'warm-water',
      'photography',
      'biodiversity-hotspot',
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

  'kokomo-beach': {
    id: 'kokomo-beach',
    nameKey: 'curacao.kokomo-beach.name',
    descriptionKey: 'curacao.kokomo-beach.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.00539, 12.16078],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'good-visibility',
      'mild-current',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'nudibranchs',
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

  'vaesenbaai-car-wrecks': {
    id: 'vaesenbaai-car-wrecks',
    nameKey: 'curacao.vaesenbaai-car-wrecks.name',
    descriptionKey: 'curacao.vaesenbaai-car-wrecks.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.00478, 12.1579],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wreck', 'artificial-reef', 'reef'],
    conditionsIds: [
      'deep',
      'good-visibility',
      'boat-entry',
      'shore-entry',
      'moderate-current',
    ],
    tagsIds: [
      'reef-fish',
      'biodiversity-hotspot',
      'photography',
      'deep-dive',
      'advanced-only',
      'historical',
      'caribbean',
      'tropical',
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

  pestbaai: {
    id: 'pestbaai',
    nameKey: 'curacao.pestbaai.name',
    descriptionKey: 'curacao.pestbaai.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.01275, 12.16699],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'good-visibility',
      'surge',
      'variable-visibility',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'biodiversity-hotspot',
      'photography',
      'caribbean',
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

  seldom: {
    id: 'seldom',
    nameKey: 'curacao.seldom.name',
    descriptionKey: 'curacao.seldom.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.05311, 12.19235],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'drift', 'reef'],
    conditionsIds: [
      'boat-entry',
      'deep',
      'strong-current',
      'good-visibility',
      'rough-surface',
    ],
    tagsIds: [
      'reef-fish',
      'biodiversity-hotspot',
      'photography',
      'drift-dive',
      'deep-dive',
      'advanced-only',
      'caribbean',
      'tropical',
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

  'seldom-west': {
    id: 'seldom-west',
    nameKey: 'curacao.seldom-west.name',
    descriptionKey: 'curacao.seldom-west.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.05311, 12.19235],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'drift', 'reef'],
    conditionsIds: [
      'boat-entry',
      'deep',
      'strong-current',
      'good-visibility',
      'rough-surface',
    ],
    tagsIds: [
      'reef-fish',
      'biodiversity-hotspot',
      'photography',
      'drift-dive',
      'deep-dive',
      'advanced-only',
      'caribbean',
      'tropical',
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

  'rif-sint-marie': {
    id: 'rif-sint-marie',
    nameKey: 'curacao.rif-sint-marie.name',
    descriptionKey: 'curacao.rif-sint-marie.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.07946, 12.19825],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'mild-current',
      'good-visibility',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'barracuda',
      'schooling-fish',
      'photography',
      'beginner-friendly',
      'biodiversity-hotspot',
      'caribbean',
      'tropical',
      'conservation-area',
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

  daaibooi: {
    id: 'daaibooi',
    nameKey: 'curacao.daaibooi.name',
    descriptionKey: 'curacao.daaibooi.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.08577, 12.212],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'mild-current',
      'good-visibility',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'soft-corals',
      'hard-corals',
      'photography',
      'beginner-friendly',
      'caribbean',
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

  'playa-largu-at-san-juan': {
    id: 'playa-largu-at-san-juan',
    nameKey: 'curacao.playa-largu-at-san-juan.name',
    descriptionKey: 'curacao.playa-largu-at-san-juan.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.10047, 12.23508],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'mild-current',
      'good-visibility',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'soft-corals',
      'hard-corals',
      'photography',
      'tropical',
      'caribbean',
      'beginner-friendly',
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

  'shon-mosa-at-san-juan': {
    id: 'shon-mosa-at-san-juan',
    nameKey: 'curacao.shon-mosa-at-san-juan.name',
    descriptionKey: 'curacao.shon-mosa-at-san-juan.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.10462, 12.2439],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'mild-current',
      'good-visibility',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'soft-corals',
      'hard-corals',
      'photography',
      'tropical',
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

  'playa-manzalina-at-san-juan': {
    id: 'playa-manzalina-at-san-juan',
    nameKey: 'curacao.playa-manzalina-at-san-juan.name',
    descriptionKey: 'curacao.playa-manzalina-at-san-juan.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.10572, 12.2452],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'mild-current',
      'good-visibility',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'soft-corals',
      'hard-corals',
      'photography',
      'tropical',
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

  'playa-chiki-at-san-juan': {
    id: 'playa-chiki-at-san-juan',
    nameKey: 'curacao.playa-chiki-at-san-juan.name',
    descriptionKey: 'curacao.playa-chiki-at-san-juan.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.1087, 12.24933],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'mild-current',
      'good-visibility',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'soft-corals',
      'hard-corals',
      'photography',
      'tropical',
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

  'playa-hundu': {
    id: 'playa-hundu',
    nameKey: 'curacao.playa-hundu.name',
    descriptionKey: 'curacao.playa-hundu.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.12025, 12.25978],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'shore-entry',
      'boat-entry',
      'good-visibility',
      'moderate-current',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'soft-corals',
      'hard-corals',
      'photography',
      'tropical',
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

  'san-nicolas': {
    id: 'san-nicolas',
    nameKey: 'curacao.san-nicolas.name',
    descriptionKey: 'curacao.san-nicolas.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.13144, 12.268],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'drift', 'reef'],
    conditionsIds: [
      'boat-entry',
      'deep',
      'strong-current',
      'good-visibility',
      'rough-surface',
    ],
    tagsIds: [
      'sharks',
      'reef-fish',
      'pelagics',
      'soft-corals',
      'hard-corals',
      'photography',
      'advanced-only',
      'caribbean',
      'tropical',
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

  'makos-mountain': {
    id: 'makos-mountain',
    nameKey: 'curacao.makos-mountain.name',
    descriptionKey: 'curacao.makos-mountain.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.1369, 12.26851],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'drift', 'reef'],
    conditionsIds: [
      'boat-entry',
      'deep',
      'strong-current',
      'good-visibility',
      'rough-surface',
    ],
    tagsIds: [
      'sharks',
      'reef-fish',
      'pelagics',
      'soft-corals',
      'hard-corals',
      'photography',
      'advanced-only',
      'caribbean',
      'tropical',
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

  'hells-corner': {
    id: 'hells-corner',
    nameKey: 'curacao.hells-corner.name',
    descriptionKey: 'curacao.hells-corner.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.14015, 12.27081],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['wall', 'drift', 'reef'],
    conditionsIds: [
      'boat-entry',
      'strong-current',
      'deep',
      'good-visibility',
      'rough-surface',
    ],
    tagsIds: [
      'turtles',
      'barracuda',
      'schooling-fish',
      'reef-fish',
      'octopus',
      'hard-corals',
      'soft-corals',
      'photography',
      'drift-dive',
      'advanced-only',
      'caribbean',
      'tropical',
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

  'black-coral-garden': {
    id: 'black-coral-garden',
    nameKey: 'curacao.black-coral-garden.name',
    descriptionKey: 'curacao.black-coral-garden.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.14189, 12.27494],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef'],
    conditionsIds: ['boat-entry', 'mild-current', 'good-visibility', 'deep'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'turtles',
      'hard-corals',
      'soft-corals',
      'photography',
      'biodiversity-hotspot',
      'conservation-area',
      'caribbean',
      'tropical',
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

  rediho: {
    id: 'rediho',
    nameKey: 'curacao.rediho.name',
    descriptionKey: 'curacao.rediho.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.14731, 12.28108],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'wall', 'drift'],
    conditionsIds: [
      'boat-entry',
      'moderate-current',
      'good-visibility',
      'deep',
    ],
    tagsIds: [
      'seahorses',
      'frogfish',
      'reef-fish',
      'schooling-fish',
      'turtles',
      'barracuda',
      'pelagics',
      'photography',
      'macro-life',
      'biodiversity-hotspot',
      'caribbean',
      'tropical',
      'soft-corals',
      'hard-corals',
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

  'duanes-release-aka-scooter': {
    id: 'duanes-release-aka-scooter',
    nameKey: 'curacao.duanes-release-aka-scooter.name',
    descriptionKey: 'curacao.duanes-release-aka-scooter.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.1509, 12.28337],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'wall', 'drift'],
    conditionsIds: [
      'boat-entry',
      'moderate-current',
      'good-visibility',
      'deep',
    ],
    tagsIds: [
      'turtles',
      'octopus',
      'reef-fish',
      'macro-life',
      'schooling-fish',
      'barracuda',
      'pelagics',
      'photography',
      'soft-corals',
      'hard-corals',
      'anemones',
      'biodiversity-hotspot',
      'caribbean',
      'tropical',
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

  'playa-hulu': {
    id: 'playa-hulu',
    nameKey: 'curacao.playa-hulu.name',
    descriptionKey: 'curacao.playa-hulu.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.15232, 12.28798],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'wall', 'drift'],
    conditionsIds: [
      'boat-entry',
      'shore-entry',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'seahorses',
      'frogfish',
      'reef-fish',
      'macro-life',
      'schooling-fish',
      'soft-corals',
      'hard-corals',
      'biodiversity-hotspot',
      'caribbean',
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

  'sponge-forest': {
    id: 'sponge-forest',
    nameKey: 'curacao.sponge-forest.name',
    descriptionKey: 'curacao.sponge-forest.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-69.1569, 12.29605],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'wall', 'drift'],
    conditionsIds: ['boat-entry', 'good-visibility', 'mild-current'],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'schooling-fish',
      'soft-corals',
      'hard-corals',
      'biodiversity-hotspot',
      'caribbean',
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

  newport: {
    id: 'newport',
    nameKey: 'curacao.newport.name',
    descriptionKey: 'curacao.newport.desc',
    destinationId: 'curacao',
    isTopSite: false,
    coordinates: [-68.82683, 12.04645],
    maxDepthMeter: 36,
    maxDepthFt: 120,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'wall', 'drift'],
    conditionsIds: ['boat-entry', 'good-visibility', 'mild-current'],
    tagsIds: [
      'reef-fish',
      'turtles',
      'barracuda',
      'pelagics',
      'macro-life',
      'nudibranchs',
      'frogfish',
      'seahorses',
      'soft-corals',
      'hard-corals',
      'photography',
      'biodiversity-hotspot',
      'caribbean',
      'tropical',
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
