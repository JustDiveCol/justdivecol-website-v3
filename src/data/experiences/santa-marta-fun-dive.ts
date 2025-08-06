// src/data/experiences/santa-marta-fun-dive.ts
import type { Experience } from '../../types/data';
import { ROUTES } from '../../constants/routes';

const santaMartaFunDive = {
  // Metadata
  id: 'exp-santa-marta-fun-dive',
  slug: 'fun-dive-santa-marta',
  status: 'published',
  nameKey: 'expSmFunDiveName',
  subtitleKey: 'expSmFunDiveSubtitle',

  // SEO y Header
  seo: {
    titleKey: 'expSm25.seo.seoTitle',
    descriptionKey: 'expSm25.seo.seoDesc',
    keywordsKey: 'expSm25.seo.seoKeywords',
    urlPath: ROUTES.diveExperiences,
    imageUrl: '/images/social/experiences-social-card.webp',
    translationNS: 'experiences',
  },
  header: {
    titleKey: 'expSm25.header.headerTitle',
    subtitleKey: 'expSm25.header.headerSubtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: '/images/experiences/santa-marta/header.webp',
      photoCredit: 'PADI®',
      variant: 'header',
    },
  },

  // Descripción
  description: {
    titleKey: 'expSmFunDiveDescTitle',
    paragraphs: ['expSmFunDiveDescP1', 'expSmFunDiveDescP2'],
  },

  // Itinerario
  itinerary: {
    titleKey: 'experiencesItineraryTitle',
    days: [
      {
        day: 1,
        titleKey: 'expSmFunDiveItineraryDay1Title',
        descriptionKey: 'expSmFunDiveItineraryDay1Desc',
      },
    ],
    notes: ['experiencesDefaultItineraryNote1'],
  },

  // Inclusiones
  whatIsIncluded: {
    titleKey: 'experiencesIncludedTitle',
    items: ['expSmFunDiveIncludeItem1', 'expSmFunDiveIncludeItem2'],
  },
  whatIsNotIncluded: {
    titleKey: 'experiencesNotIncludedTitle',
    items: ['expSmFunDiveNotIncludeItem1'],
  },

  // Relaciones
  destinationId: 'santa-marta',
  certificationIds: [],
  sessionIds: ['sm-fun-dive-oct-2025'],
} as const satisfies Experience;

export default santaMartaFunDive;
