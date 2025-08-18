import { ROUTES, toAssetUrl } from '../../../constants';
import { toUrlPath } from '../../urlPathSchema';
import {
  DiveExperiencesPageContentSchema,
  type DiveExperiencesPageContent,
} from './types';

const rawDiveExperiences: DiveExperiencesPageContent = {
  seo: {
    titleKey: 'dive-experiences.seo.title',
    descriptionKey: 'dive-experiences.seo.desc',
    keywordsKey: 'dive-experiences.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/dive-experiences/social-card.webp'),
    translationNS: 'dive-experiences',
  },

  upcomingTrips: {
    titleKey: 'dive-experiences.upcomingTrips.title',
    subtitleKey: 'dive-experiences.upcomingTrips.subtitle',
    backgroundImageUrl: toAssetUrl(
      '/images/dive-experiences/upcoming-trips-background.webp'
    ),
    translationNS: 'dive-experiences',
    filtersAllDestinationsKey:
      'dive-experiences.filters.filtersAllDestinations',
    filtersAllMonthsKey: 'dive-experiences.filters.filtersAllMonths',
    filtersNoResultsKey: 'dive-experiences.filters.filtersNoResults',
  },

  certifications: {
    titleKey: 'dive-experiences.certifications.title',
    subtitleKey: 'dive-experiences.certifications.subtitle',
    translationNS: 'dive-experiences',
  },

  destinations: {
    titleKey: 'dive-experiences.destinations.title',
    otherTitleKey: 'dive-experiences.destinations.otherTitle',
    translationNS: 'dive-experiences',
  },

  customTrips: {
    titleKey: 'dive-experiences.customTrips.title',
    textKey: 'dive-experiences.customTrips.text',
    translationNS: 'dive-experiences',
    imageData: {
      backgroundImage: toAssetUrl('/images/dive-experiences/custom-trip.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
    ctaButton: {
      textKey: 'dive-experiences.customTrips.buttonText',
      action: {
        type: 'whatsapp',
        whatsAppMessageKey: 'dive-experiences.customTrips.whatsappMessage',
        translationNS: 'dive-experiences',
      },
      variant: 'primary',
      size: 'default',
    },

    benefits: [
      {
        id: 'benefit-1',
        textKey: 'dive-experiences.customTrips.benefits.text1',
      },
      {
        id: 'benefit-2',
        textKey: 'dive-experiences.customTrips.benefits.text2',
      },
      {
        id: 'benefit-3',
        textKey: 'dive-experiences.customTrips.benefits.text3',
      },
      {
        id: 'benefit-4',
        textKey: 'dive-experiences.customTrips.benefits.text4',
      },
    ],
  },
};

export const diveExperiencesContent =
  DiveExperiencesPageContentSchema.parse(rawDiveExperiences);
