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
      '/images/experiences/santa-marta/upcoming-trips-background.webp'
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
      backgroundImage: toAssetUrl(
        '/images/experiences/santa-marta/header.webp'
      ),
      photoCredit: 'PADI®',
      variant: 'header',
    },
    buttonTextKey: 'diveExperiences.customTrips.buttonText',
    benefits: [
      {
        id: 'diveExperiences.customTrips.buttonText1',
        textKey: 'diveExperiences.customTrips.text',
        icon: 'diveExperiences.customTrips.icon',
      },
      {
        id: 'diveExperiences.customTrips.buttonText2',
        textKey: 'diveExperiences.customTrips.text',
        icon: 'diveExperiences.customTrips.icon',
      },
      {
        id: 'diveExperiences.customTrips.buttonText3',
        textKey: 'diveExperiences.customTrips.text',
        icon: 'diveExperiences.customTrips.icon',
      },
      {
        id: 'diveExperiences.customTrips.buttonText4',
        textKey: 'diveExperiences.customTrips.text',
        icon: 'diveExperiences.customTrips.icon',
      },
    ],
  },
};

export const diveExperiencesContent =
  DiveExperiencesPageContentSchema.parse(rawDiveExperiences);
