// src/data/experiences/santa-marta-fun-dive.ts
import type { Experience } from '../../types/data';
import { ROUTES } from '../../constants/routes';

const santaMartaFunDive: Experience = {
  // Metadata
  id: 'exp-santa-marta-fun-dive',
  slug: 'fun-dive-santa-marta',
  status: 'published',
  nameKey: 'expSmFunDiveName',
  subtitleKey: 'expSmFunDiveSubtitle',

  // SEO y Header
  seo: {
    titleKey: 'expSmFunDiveSeoTitle',
    descriptionKey: 'expSmFunDiveSeoDesc',
    imageUrl: '/images/experiences/santa-marta/header.webp',
    url: `${ROUTES.experiences}/fun-dive-santa-marta`,
  },
  header: {
    backgroundImage: '/images/experiences/santa-marta/header.webp',
    titleKey: 'expSmFunDiveHeaderTitle',
    subtitleKey: 'expSmFunDiveHeaderSubtitle',
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
  certificationIds: [], // Esta experiencia no otorga certificaciones
  sessionIds: ['sm-fun-dive-oct-2025'], // Conecta con la sesión que creamos
};

export default santaMartaFunDive;
