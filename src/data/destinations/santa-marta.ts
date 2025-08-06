// src/data/destinations/santa-marta.ts
import { DEST_COUNTRIES } from '../../constants/destinations';
import { ROUTES } from '../../constants/routes';
import type { Destination } from './style';

const santaMarta = {
  id: 'santa-marta',
  slug: 'santa-marta',
  status: 'published',
  nameKey: 'destSmName',
  subtitleKey: 'destSmSubtitle',
  country: DEST_COUNTRIES['santa-marta'],
  coords: [11.232, -74.195],
  minZoom: 10.5,
  maxZoom: 16,

  seo: {
    titleKey: 'sm.seo.seoTitle',
    descriptionKey: 'sm.seo.seoDesc',
    keywordsKey: 'sm.seo.seoKeywords',
    urlPath: ROUTES.destinations,
    imageUrl: '/images/social/sm-social-card.webp',
    translationNS: 'destinations',
  },
  header: {
    titleKey: 'sm.header.headerTitle',
    subtitleKey: 'sm.header.headerSubtitle',
    translationNS: 'destinations',
    imageData: {
      backgroundImage: '/images/destinations/santa-marta/header.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  card: {
    imageData: {
      backgroundImage: '/images/destinations/santa-marta/sm-card.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  // Descripción
  description: {
    titleKey: 'sm.description.descTitle',
    paragraphs: ['sm.description.descP1', 'sm.description.descP2'],
  },

  // Detalles y Hallazgos Únicos
  details: {
    titleKey: 'sm.details.destinationsDetailsTitle',
    items: [
      {
        labelKey: 'sm.details.detailLabel1',
        valueKey: 'sm.details.detailValue1',
      },
      {
        labelKey: 'sm.details.detailLabel2',
        valueKey: 'sm.details.detailValue2',
      },
    ],
  },
  uniqueFinds: {
    titleKey: 'sm.uniqueFinds.destinationsUniqueFindsTitle',
    items: [
      'sm.uniqueFinds.uniqueFind1',
      'sm.uniqueFinds.uniqueFind2',
      'sm.uniqueFinds.uniqueFind3',
    ],
  },

  // Galería
  gallery: {
    titleKey: 'destinationsGalleryTitle',
    images: [
      {
        backgroundImage: '/images/destinations/santa-marta/gallery-01.webp',
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
    ],
  },
  experienceIds: [],
  diveSiteIds: [],
} as const satisfies Destination;

export default santaMarta;
