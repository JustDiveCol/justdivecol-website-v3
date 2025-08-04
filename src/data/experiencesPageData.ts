// src/data/experiencesPageData.ts
import { ROUTES } from '../constants/routes';
import type { ExperiencesPageData } from '../types/data';

export const experiencesPageData: ExperiencesPageData = {
  seo: {
    titleKey: 'seo.experiencesSeoTitle',
    descriptionKey: 'seo.experiencesSeoDesc',
    keywordsKey: 'seo.experiencesSeoKeywords',
    urlPath: ROUTES.experiences,
    imageUrl: '/images/social/experiences-social-card.webp',
    translationNS: 'experiences',
  },

  upcomingTrips: {
    titleKey: 'upcomingTrips.upcomingTripsTitle',
    subtitleKey: 'upcomingTrips.upcomingTripsSubtitle',
    backgroundImageUrl: '/images/experiences/upcoming-trips-background.webp',
    translationNS: 'experiences',
    filtersAllDestinationsKey: 'upcomingTrips.filters.allDestinations',
    filtersAllMonthsKey: 'upcomingTrips.filters.allMonths',
    filtersNoResultsKey: 'upcomingTrips.filters.noResults',
  },

  certifications: {
    titleKey: 'certifications.certificationsSectionTitle',
    subtitleKey: 'certifications.certificationsSectionSubtitle',
    translationNS: 'experiences',
  },

  destinations: {
    titleKey: 'destinations.destinationsSectionTitle',
    otherTitleKey: 'destinations.destinationsSectionOtherTitle',
    translationNS: 'experiences',
  },

  customTrips: {
    titleKey: 'customTrips.customTripsTitle',
    textKey: 'customTrips.customTripsText',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: '/images/experiences/custom-trip.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'vertical',
    },
    buttonTextKey: 'customTrips.customTripsButton',
    benefits: [
      {
        id: 'flexibility',
        textKey: 'customTrips.customTripsBenefit1',
        icon: 'CheckIcon',
      },
      {
        id: 'privacy',
        textKey: 'customTrips.customTripsBenefit2',
        icon: 'CheckIcon',
      },
      {
        id: 'exclusivity',
        textKey: 'customTrips.customTripsBenefit3',
        icon: 'CheckIcon',
      },
      {
        id: 'personalization',
        textKey: 'customTrips.customTripsBenefit4',
        icon: 'CheckIcon',
      },
    ],
  },
};
