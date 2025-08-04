// src/data/experiencesPageData.ts
import { ROUTES } from '../constants/routes';

export const experiencesPageData = {
  seo: {
    titleKey: 'seo.experiencesSeoTitle',
    descriptionKey: 'seo.experiencesSeoDesc',
    keywordsKey: 'seo.experiencesSeoKeywords',
    urlPath: ROUTES.experiences,
    imageUrl: '/images/social/experiences-social-card.jpg',
  },
  upcomingTrips: {
    titleKey: 'upcomingTrips.upcomingTripsTitle',
    subtitleKey: 'upcomingTrips.upcomingTripsSubtitle',
    backgroundImageUrl: '/images/experiences/upcoming-trips-background.webp',
  },
  certifications: {
    titleKey: 'certifications.certificationsSectionTitle',
    subtitleKey: 'certifications.certificationsSectionSubtitle',
    certificationIds: ['padi-open-water', 'padi-advanced'],
  },
  destinations: {
    titleKey: 'destinations.destinationsSectionTitle',
    otherTitleKey: 'destinations.destinationsSectionOtherTitle',
  },
  customTrips: {
    titleKey: 'customTrips.customTripsTitle',
    textKey: 'customTrips.customTripsText',
    imageData: {
      backgroundImage: '/images/experiences/custom-trip.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
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
