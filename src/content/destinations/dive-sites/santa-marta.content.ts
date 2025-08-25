// src/content/destinations/dive-sites/santa-marta.content.ts
// import { toAssetUrl } from '../../../constants/assets.schema';
import { toAssetUrl } from '../../../constants';
import type { DiveSiteContent } from './types';

export const santaMartaDiveSitesContent: Record<string, DiveSiteContent> = {
  'bajo-del-pescador': {
    id: 'bajo-del-pescador',
    nameKey: 'santa-marta.bajo-del-pescador.name',
    descriptionKey: 'santa-marta.bajo-del-pescador.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19631, 11.31663],
    maxDepthMeter: 12, // aprox. poco profundo
    maxDepthFt: 40,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef', 'pinnacle'],
    conditionsIds: ['calm-surface', 'good-visibility', 'boat-entry'],
    tagsIds: [
      'reef-fish',
      'biodiversity-hotspot',
      'beginner-friendly',
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
    ], // /images/destinations/santa-marta/dive-sites/
  },

  'barcaza-profunda': {
    id: 'barcaza-profunda',
    nameKey: 'santa-marta.barcaza-profunda.name',
    descriptionKey: 'santa-marta.barcaza-profunda.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.22322, 11.25151],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'technical-diver',
    difficultyId: 'expert',
    typeIds: ['wreck', 'artificial-reef'],
    conditionsIds: [
      'deep',
      'variable-visibility',
      'moderate-current',
      'boat-entry',
    ],
    tagsIds: [
      'advanced-only',
      'technical-dive',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
      'hard-corals',
      'soft-corals',
      'reef-fish',
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

  'barco-hundido': {
    id: 'barco-hundido',
    nameKey: 'santa-marta.barcoHundido.name',
    descriptionKey: 'santa-marta.barcoHundido.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.238819, 11.21381],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck'],
    conditionsIds: [
      'moderate-current',
      'good-visibility',
      'boat-entry',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'biodiversity-hotspot',
      'photography',
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

  'caga-pajaro': {
    id: 'caga-pajaro',
    nameKey: 'santa-marta.caga-pajaro.name',
    descriptionKey: 'santa-marta.caga-pajaro.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.20035, 11.32104],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'variable-visibility',
      'moderate-current',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'turtles',
      'sharks',
      'barracuda',
      'advanced-only',
      'warm-water',
      'biodiversity-hotspot',
      'deep-dive',
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

  calderon: {
    id: 'calderon',
    nameKey: 'santa-marta.calderon.name',
    descriptionKey: 'santa-marta.calderon.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.235234, 11.212113],
    maxDepthMeter: 12,
    maxDepthFt: 40,
    levelRequiredId: 'none',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['calm-surface', 'good-visibility', 'shore-entry'],
    tagsIds: [
      'beginner-friendly',
      'reef-fish',
      'biodiversity-hotspot',
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

  calichan: {
    id: 'calichan',
    nameKey: 'santa-marta.calichan.name',
    descriptionKey: 'santa-marta.calichan.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.20035, 11.32104],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'any',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['calm-surface', 'good-visibility', 'mild-current'],
    tagsIds: [
      'beginner-friendly',
      'reef-fish',
      'warm-water',
      'caribbean',
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

  'cantil-granate': {
    id: 'cantil-granate',
    nameKey: 'santa-marta.cantil-granate.name',
    descriptionKey: 'santa-marta.cantil-granate.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19468, 11.30207],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'any',
    difficultyId: 'medium',
    typeIds: ['wall', 'reef', 'cavern'],
    conditionsIds: [
      'moderate-current',
      'good-visibility',
      'boat-entry',
      'night',
    ],
    tagsIds: [
      'reef-fish',
      'soft-corals',
      'hard-corals',
      'caves',
      'biodiversity-hotspot',
      'night-dive',
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

  'el-coro': {
    id: 'el-coro',
    nameKey: 'santa-marta.el-coro.name',
    descriptionKey: 'santa-marta.el-coro.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19128, 11.3159],
    maxDepthMeter: 40,
    maxDepthFt: 131,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['reef'],
    conditionsIds: [
      'moderate-current',
      'good-visibility',
      'boat-entry',
      'deep',
    ],
    tagsIds: [
      'sharks',
      'reef-fish',
      'caves',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
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

  'el-morro-chico': {
    id: 'el-morro-chico',
    nameKey: 'santa-marta.el-morro-chico.name',
    descriptionKey: 'santa-marta.el-morro-chico.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.22273, 11.25143],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['drift'],
    conditionsIds: [
      'boat-entry',
      'variable-visibility',
      'moderate-current',
      'surge',
    ],
    tagsIds: [
      'reef-fish',
      'drift-dive',
      'warm-water',
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

  'el-remanso': {
    id: 'el-remanso',
    nameKey: 'santa-marta.el-remanso.name',
    descriptionKey: 'santa-marta.el-remanso.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.20528, 11.27109],
    maxDepthMeter: 12,
    maxDepthFt: 400,
    levelRequiredId: 'none',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'calm-surface',
      'mild-current',
      'good-visibility',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'beginner-friendly',
      'warm-water',
      'night-dive',
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

  'el-torin': {
    id: 'el-torin',
    nameKey: 'santa-marta.el-torin.name',
    descriptionKey: 'santa-marta.el-torin.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19078, 11.31103],
    maxDepthMeter: 20,
    maxDepthFt: 650,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['boat-entry', 'good-visibility', 'calm-surface'],
    tagsIds: [
      'reef-fish',
      'biodiversity-hotspot',
      'warm-water',
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

  'inca-inca': {
    id: 'inca-inca',
    nameKey: 'santa-marta.inca-inca.name',
    descriptionKey: 'santa-marta.inca-inca.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.23471, 11.21601],
    maxDepthMeter: 12,
    maxDepthFt: 40,
    levelRequiredId: 'none',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['calm-surface', 'good-visibility', 'shore-entry'],
    tagsIds: [
      'reef-fish',
      'beginner-friendly',
      'caribbean',
      'warm-water',
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

  'la-antena': {
    id: 'la-antena',
    nameKey: 'santa-marta.la-antena.name',
    descriptionKey: 'santa-marta.la-antena.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.2, 11.261171],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['boat-entry', 'variable-visibility', 'mild-current'],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'nudibranchs',
      'photography',
      'beginner-friendly',
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

  'la-pecera': {
    id: 'la-pecera',
    nameKey: 'santa-marta.la-pecera.name',
    descriptionKey: 'santa-marta.la-pecera.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.1917, 11.29571],
    maxDepthMeter: 8,
    maxDepthFt: 26,
    levelRequiredId: 'none',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['calm-surface', 'good-visibility', 'shore-entry'],
    tagsIds: [
      'beginner-friendly',
      'reef-fish',
      'caribbean',
      'warm-water',
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

  'la-piedra-del-chivo': {
    id: 'la-piedra-del-chivo',
    nameKey: 'santa-marta.la-piedra-del-chivo.name',
    descriptionKey: 'santa-marta.la-piedra-del-chivo.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19479, 11.32248],
    maxDepthMeter: 15,
    maxDepthFt: 50,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'calm-surface',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'beginner-friendly',
      'warm-water',
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

  'la-piedra-del-medio': {
    id: 'la-piedra-del-medio',
    nameKey: 'santa-marta.la-piedra-del-medio.name',
    descriptionKey: 'santa-marta.la-piedra-del-medio.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19446, 11.29695],
    maxDepthMeter: 25,
    maxDepthFt: 80,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'barracuda',
      'pelagics',
      'beginner-friendly',
      'warm-water',
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

  'la-travesia': {
    id: 'la-travesia',
    nameKey: 'santa-marta.la-travesia.name',
    descriptionKey: 'santa-marta.la-travesia.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19256, 11.30703],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'any',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'calm-surface', 'boat-entry'],
    tagsIds: [
      'beginner-friendly',
      'reef-fish',
      'caribbean',
      'warm-water',
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

  langostas: {
    id: 'langostas',
    nameKey: 'santa-marta.langostas.name',
    descriptionKey: 'santa-marta.langostas.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19552, 11.285358],
    maxDepthMeter: 20,
    maxDepthFt: 65,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['boat-entry', 'variable-visibility', 'mild-current'],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'warm-water',
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

  'las-barcazas': {
    id: 'las-barcazas',
    nameKey: 'santa-marta.las-barcazas.name',
    descriptionKey: 'santa-marta.las-barcazas.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.221257, 11.251176],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'none',
    difficultyId: 'easy',
    typeIds: ['wreck', 'reef'],
    conditionsIds: ['good-visibility', 'calm-surface', 'boat-entry'],
    tagsIds: [
      'beginner-friendly',
      'reef-fish',
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

  'los-carros': {
    id: 'los-carros',
    nameKey: 'santa-marta.los-carros.name',
    descriptionKey: 'santa-marta.los-carros.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19123, 11.2917],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'any',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['calm-surface'],
    tagsIds: ['schooling-fish'],
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

  sisiguaca: {
    id: 'sisiguaca',
    nameKey: 'santa-marta.sisiguaca.name',
    descriptionKey: 'santa-marta.sisiguaca.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.203385, 11.270821],
    maxDepthMeter: 20,
    maxDepthFt: 65,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'barracuda',
      'warm-water',
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

  'morrito-largo': {
    id: 'morrito-largo',
    nameKey: 'santa-marta.morrito-largo.name',
    descriptionKey: 'santa-marta.morrito-largo.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.20299, 11.31734],
    maxDepthMeter: 75,
    maxDepthFt: 245,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['pinnacle'],
    conditionsIds: [
      'boat-entry',
      'variable-visibility',
      'strong-current',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'advanced-only',
      'technical-dive',
      'deep-dive',
      'drift-dive',
      'warm-water',
      'biodiversity-hotspot',
      'photography',
      'pelagics',
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

  'morro-gaira': {
    id: 'morro-gaira',
    nameKey: 'santa-marta.morro-gaira.name',
    descriptionKey: 'santa-marta.morro-gaira.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.23959, 11.20806],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'none',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: ['good-visibility', 'calm-surface', 'boat-entry'],
    tagsIds: [
      'beginner-friendly',
      'reef-fish',
      'hard-corals',
      'soft-corals',
      'caribbean',
      'warm-water',
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

  'morro-santa-marta': {
    id: 'morro-santa-marta',
    nameKey: 'santa-marta.morro-santa-marta.name',
    descriptionKey: 'santa-marta.morro-santa-marta.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.23193, 11.24918],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'variable-visibility',
      'strong-current',
      'surge',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'barracuda',
      'pelagics',
      'advanced-only',
      'warm-water',
      'biodiversity-hotspot',
      'photography',
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

  oceano: {
    id: 'oceano',
    nameKey: 'santa-marta.oceano.name',
    descriptionKey: 'santa-marta.oceano.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19279, 11.29691],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['drift'],
    conditionsIds: [
      'boat-entry',
      'variable-visibility',
      'strong-current',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'pelagics',
      'barracuda',
      'drift-dive',
      'advanced-only',
      'deep-dive',
      'warm-water',
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

  paneles: {
    id: 'paneles',
    nameKey: 'santa-marta.paneles.name',
    descriptionKey: 'santa-marta.paneles.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.20007, 11.32509],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'expert',
    typeIds: ['pinnacle'],
    conditionsIds: ['boat-entry', 'strong-current', 'good-visibility', 'deep'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'pelagics',
      'barracuda',
      'turtles',
      'advanced-only',
      'technical-dive',
      'deep-dive',
      'drift-dive',
      'warm-water',
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

  paraiso: {
    id: 'paraiso',
    nameKey: 'santa-marta.paraiso.name',
    descriptionKey: 'santa-marta.paraiso.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.1956, 11.28902],
    maxDepthMeter: 15,
    maxDepthFt: 50,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'calm-surface',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'beginner-friendly',
      'warm-water',
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

  'paso-del-angel': {
    id: 'paso-del-angel',
    nameKey: 'santa-marta.paso-del-angel.name',
    descriptionKey: 'santa-marta.paso-del-angel.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.20135, 11.31801],
    maxDepthMeter: 40,
    maxDepthFt: 130,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['reef', 'drift', 'wall'],
    conditionsIds: [
      'variable-visibility',
      'moderate-current',
      'strong-current',
      'deep',
      'boat-entry',
    ],
    tagsIds: [
      'reef-fish',
      'hard-corals',
      'soft-corals',
      'seahorses',
      'biodiversity-hotspot',
      'caribbean',
      'warm-water',
      'drift-dive',
      'advanced-only',
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

  playaca: {
    id: 'playaca',
    nameKey: 'santa-marta.playaca.name',
    descriptionKey: 'santa-marta.playaca.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.197457, 11.26182],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'shore-entry',
      'calm-surface',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'beginner-friendly',
      'warm-water',
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

  'punta-aguja': {
    id: 'punta-aguja',
    nameKey: 'santa-marta.punta-aguja.name',
    descriptionKey: 'santa-marta.punta-aguja.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19941, 11.31844],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['pinnacle'],
    conditionsIds: [
      'boat-entry',
      'variable-visibility',
      'moderate-current',
      'calm-surface',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'barracuda',
      'pelagics',
      'turtles',
      'beginner-friendly',
      'advanced-only',
      'warm-water',
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

  'punta-cabeza-de-negros': {
    id: 'punta-cabeza-de-negros',
    nameKey: 'santa-marta.punta-cabeza-de-negros.name',
    descriptionKey: 'santa-marta.punta-cabeza-de-negros.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.2369, 11.20972],
    maxDepthMeter: 25,
    maxDepthFt: 80,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'warm-water',
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

  'punta-gaira': {
    id: 'punta-gaira',
    nameKey: 'santa-marta.punta-gaira.name',
    descriptionKey: 'santa-marta.punta-gaira.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.24067, 11.21908],
    maxDepthMeter: 15,
    maxDepthFt: 50,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'easy',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'calm-surface',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'macro-life',
      'beginner-friendly',
      'warm-water',
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

  'punta-granate': {
    id: 'punta-granate',
    nameKey: 'santa-marta.punta-granate.name',
    descriptionKey: 'santa-marta.punta-granate.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19361, 11.29087],
    maxDepthMeter: 20,
    maxDepthFt: 65,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'good-visibility',
      'variable-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'nudibranchs',
      'schooling-fish',
      'pelagics',
      'beginner-friendly',
      'warm-water',
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

  'punta-venado': {
    id: 'punta-venado',
    nameKey: 'santa-marta.punta-venado.name',
    descriptionKey: 'santa-marta.punta-venado.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.206387, 11.272809],
    maxDepthMeter: 18,
    maxDepthFt: 60,
    levelRequiredId: 'open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'calm-surface',
      'good-visibility',
      'mild-current',
    ],
    tagsIds: [
      'reef-fish',
      'octopus',
      'macro-life',
      'night-dive',
      'beginner-friendly',
      'warm-water',
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

  salichan: {
    id: 'salichan',
    nameKey: 'santa-marta.salichan.name',
    descriptionKey: 'santa-marta.salichan.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19327, 11.31067],
    maxDepthMeter: 35,
    maxDepthFt: 115,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef'],
    conditionsIds: [
      'boat-entry',
      'variable-visibility',
      'moderate-current',
      'deep',
    ],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'barracuda',
      'pelagics',
      'advanced-only',
      'deep-dive',
      'warm-water',
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

  salidero: {
    id: 'salidero',
    nameKey: 'santa-marta.salidero.name',
    descriptionKey: 'santa-marta.salidero.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.19248, 11.30899],
    maxDepthMeter: 14,
    maxDepthFt: 45,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'hard',
    typeIds: ['drift'],
    conditionsIds: ['boat-entry', 'variable-visibility', 'strong-current'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'barracuda',
      'pelagics',
      'drift-dive',
      'advanced-only',
      'warm-water',
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

  'el-natalia': {
    id: 'el-natalia',
    nameKey: 'santa-marta.el-natalia.name',
    descriptionKey: 'santa-marta.el-natalia.desc',
    destinationId: 'santa-marta',
    isTopSite: false,
    coordinates: [-74.238627, 11.205035],
    maxDepthMeter: 32,
    maxDepthFt: 105,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['wreck'],
    conditionsIds: ['boat-entry', 'good-visibility', 'mild-current', 'deep'],
    tagsIds: [
      'reef-fish',
      'schooling-fish',
      'macro-life',
      'historical',
      'advanced-only',
      'warm-water',
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
} as const;
