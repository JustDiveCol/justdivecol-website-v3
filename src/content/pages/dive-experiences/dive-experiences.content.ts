import { ROUTES, toAssetUrl } from '../../../constants';
import { toUrlPath } from '../../urlPathSchema';
import {
  DiveExperiencesPageContentSchema,
  type DiveExperiencesPageContent,
} from './types';

const rawDiveExperiences: DiveExperiencesPageContent = {
  seo: {
    titleKey: 'diveExperiences.seo.title',
    descriptionKey: 'diveExperiences.seo.desc',
    keywordsKey: 'diveExperiences.seo.keywords',
    urlPath: toUrlPath(ROUTES.diveExperiences),
    imageUrl: toAssetUrl('/images/social/diveExperiences-social-card.webp'),
    translationNS: 'diveExperiences',
  },

  upcomingTrips: {
    titleKey: 'diveExperiences.upcomingTrips.title',
    subtitleKey: 'diveExperiences.upcomingTrips.subtitle',
    backgroundImageUrl: toAssetUrl(
      '/images/experiences/upcoming-trips-background.webp'
    ),
    translationNS: 'diveExperiences',
    filtersAllDestinationsKey: 'diveExperiences.filters.filtersAllDestinations',
    filtersAllMonthsKey: 'diveExperiences.filters.filtersAllMonths',
    filtersNoResultsKey: 'diveExperiences.filters.filtersNoResults',
  },

  certifications: {
    titleKey: 'diveExperiences.certifications.title',
    subtitleKey: 'diveExperiences.certifications.subtitle',
    translationNS: 'diveExperiences',
  },

  destinations: {
    titleKey: 'diveExperiences.destinations.title',
    otherTitleKey: 'diveExperiences.destinations.otherTitle',
    translationNS: 'diveExperiences',
  },

  customTrips: {
    titleKey: 'diveExperiences.customTrips.title',
    textKey: 'diveExperiences.customTrips.text',
    translationNS: 'diveExperiences',
    imageData: {
      backgroundImage: toAssetUrl('/images/experiences/custom-trip.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
    buttonTextKey: 'diveExperiences.customTrips.buttonText',
    benefits: [
      {
        id: 'benefit-1',
        textKey: 'diveExperiences.customTrips.benefits.text1',
      },
      {
        id: 'benefit-2',
        textKey: 'diveExperiences.customTrips.benefits.text2',
      },
      {
        id: 'benefit-3',
        textKey: 'diveExperiences.customTrips.benefits.text3',
      },
      {
        id: 'benefit-4',
        textKey: 'diveExperiences.customTrips.benefits.text4',
      },
    ],
  },
};

export const diveExperiencesContent =
  DiveExperiencesPageContentSchema.parse(rawDiveExperiences);
