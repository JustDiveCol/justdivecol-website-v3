// src/content/experiences/exp-providencia.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { ExperienceContentSchema, type ExperienceContent } from './types';

const rawProvidenciaExp: ExperienceContent = {
  id: 'exp-providencia',
  slug: 'providencia',
  destinationId: 'providencia',

  seo: {
    titleKey: 'experiences.providenciaExp.seo.title',
    descriptionKey: 'experiences.providenciaExp.seo.desc',
    keywordsKey: 'experiences.providenciaExp.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.providenciaExp.header.title',
    subtitleKey: 'experiences.providenciaExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/experiences/providencia/header-background.webp'
      ),
      photoCredit: 'Cristhian David Duarte @duartefotografia.ph',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.descriptionTitle',
    paragraphs: [
      'experiences.providenciaExp.description.paragraphs.p1',
      'experiences.providenciaExp.description.paragraphs.p2',
    ],
  },

  itinerary: {
    titleKey: 'experiences.itineraryTitle',
    days: [
      {
        day: 1,
        titleKey: 'experiences.providenciaExp.itinerary.days.title1',
        descriptionKey: 'experiences.providenciaExp.itinerary.days.desc1',
      },
      {
        day: 2,
        titleKey: 'experiences.providenciaExp.itinerary.days.title2',
        descriptionKey: 'experiences.providenciaExp.itinerary.days.desc2',
      },
      {
        day: 3,
        titleKey: 'experiences.providenciaExp.itinerary.days.title3',
        descriptionKey: 'experiences.providenciaExp.itinerary.days.desc3',
      },
      {
        day: 4,
        titleKey: 'experiences.providenciaExp.itinerary.days.title4',
        descriptionKey: 'experiences.providenciaExp.itinerary.days.desc4',
      },
    ],
    notes: ['experiences.providenciaExp.itinerary.notes.note1'],
  },

  whatIsIncluded: {
    titleKey: 'experiences.whatIsIncludedTitle',
    items: [
      'experiences.providenciaExp.whatIsIncluded.items.item1',
      'experiences.providenciaExp.whatIsIncluded.items.item2',
      'experiences.providenciaExp.whatIsIncluded.items.item3',
      'experiences.providenciaExp.whatIsIncluded.items.item4',
    ],
  },

  whatIsNotIncluded: {
    titleKey: 'experiences.whatIsNotIncludedTitle',
    items: [
      'experiences.providenciaExp.whatIsNotIncluded.items.item1',
      'experiences.providenciaExp.whatIsNotIncluded.items.item2',
      'experiences.providenciaExp.whatIsNotIncluded.items.item3',
      'experiences.providenciaExp.whatIsNotIncluded.items.item4',
    ],
  },

  gallery: {
    titleKey: 'experiences.galleryTitle',
    images: [
      // {
      //   backgroundImage: toAssetUrl(
      //     '/images/experiences/providencia/gallery-01.webp'
      //   ),
      //   photoCredit: 'Oscar Ivan Esquivel Arteaga @oscaresquivelfotografia',
      //   variant: 'horizontal',
      // },
    ],
  },

  ctaButton: {
    textKey: 'experiences.ctaButtonText',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'experiences.experienceWhatsappMessage',
      translationNS: 'experiences',
    },
    variant: 'primary',
    size: 'default',
  },

  cta: {
    translationNS: 'home',
    titleKey: 'cta.homeCtaTitle',
    subtitleKey: 'cta.homeCtaSubtitle',
    backgroundImageUrl: '/images/home/cta-background.webp',

    button: {
      textKey: 'cta.contactButton',
      action: {
        type: 'whatsapp',
        whatsAppMessageKey: 'common:generalWhatsappMessage',
      },
      variant: 'primary',
      size: 'default',
    },

    hubspotFormTitle: 'cta.formTitle',
  },
};

export const providenciaExpContent =
  ExperienceContentSchema.parse(rawProvidenciaExp);
