// src/content/pages/dive-experiences/dive-experiences.content.ts
import { ROUTES } from '../../../constants/routes';
import { DiveExperiencesPageContentSchema } from '../../schemas';
import type { DiveExperiencesPageContent } from './types';

const rawDiveExperiences: DiveExperiencesPageContent = {
  seo: {
    titleKey: 'diveExperiences.seo.title',
    descriptionKey: 'diveExperiences.seo.desc',
    keywordsKey: 'diveExperiences.seo.keywords',
    urlPath: ROUTES.diveExperiences,
    imageUrl: '/images/social/dive-experiences-social-card.webp',
    translationNS: 'experiences',
  },

  upcomingTrips: {
    titleKey: 'diveExperiences.upcomingTrips.title',
    subtitleKey: 'diveExperiences.upcomingTrips.subtitle',
    backgroundImageUrl: '/images/experiences/upcoming-trips-background.webp',
    translationNS: 'experiences',
    filtersAllDestinationsKey: 'diveExperiences.filters.allDestinations',
    filtersAllMonthsKey: 'diveExperiences.filters.allMonths',
    filtersNoResultsKey: 'diveExperiences.filters.noResults',
  },

  certifications: {
    titleKey: 'diveExperiences.certifications.title',
    subtitleKey: 'diveExperiences.certifications.subtitle',
    translationNS: 'experiences',
  },

  destinations: {
    titleKey: 'destinations.destinations.title',
    otherTitleKey: 'destinations.destinations.otherTitle',
    translationNS: 'experiences',
  },

  customTrips: {
    titleKey: 'diveExperiences.customTrips.title',
    textKey: 'diveExperiences.customTrips.text',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: '/images/experiences/custom-trip.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'vertical',
    },
    buttonTextKey: 'diveExperiences.customTrips.buttonText',
    benefits: [
      {
        id: 'flexibility',
        textKey: 'diveExperiences.customTrips.benefit1',
        icon: 'CheckIcon',
      },
      {
        id: 'privacy',
        textKey: 'diveExperiences.customTrips.benefit2',
        icon: 'CheckIcon',
      },
      {
        id: 'exclusivity',
        textKey: 'diveExperiences.customTrips.benefit3',
        icon: 'CheckIcon',
      },
      {
        id: 'personalization',
        textKey: 'diveExperiences.customTrips.benefit4',
        icon: 'CheckIcon',
      },
    ],
  },
};

export const diveExperiencesContent =
  DiveExperiencesPageContentSchema.parse(rawDiveExperiences);
