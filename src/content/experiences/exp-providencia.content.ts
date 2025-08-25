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
        '/images/destinations/providencia/header-background.webp'
      ),
      photoCredit: 'Darren Lawrence',
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

  whatIsIncluded: {
    titleKey: 'experiences.whatIsIncludedTitle',
    items: [
      'experiences.providenciaExp.whatIsIncluded.items.item1',
      'experiences.providenciaExp.whatIsIncluded.items.item2',
      'experiences.providenciaExp.whatIsIncluded.items.item3',
      'experiences.providenciaExp.whatIsIncluded.items.item4',
      'experiences.providenciaExp.whatIsIncluded.items.item5',
      'experiences.providenciaExp.whatIsIncluded.items.item6',
      'experiences.providenciaExp.whatIsIncluded.items.item7',
    ],
  },

  whatIsNotIncluded: {
    titleKey: 'experiences.whatIsNotIncludedTitle',
    items: [
      'experiences.providenciaExp.whatIsNotIncluded.items.item1',
      'experiences.providenciaExp.whatIsNotIncluded.items.item2',
      'experiences.providenciaExp.whatIsNotIncluded.items.item3',
      'experiences.providenciaExp.whatIsNotIncluded.items.item4',
      'experiences.providenciaExp.whatIsNotIncluded.items.item5',
    ],
  },

  gallery: {
    titleKey: 'experiences.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-01.webp'
        ),
        photoCredit: 'Leonardo Rossatti @leorossatti',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-02.webp'
        ),
        photoCredit: 'Cristian Sarchy @comaselasopa',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-03.webp'
        ),
        photoCredit: 'Jorge Alberto Ferro @jorgeaferroj',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-04.webp'
        ),
        photoCredit: 'Diego Agudelo @diego.agudelov',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-05.webp'
        ),
        photoCredit: 'Alexandra Nez',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-06.webp'
        ),
        photoCredit: 'Jorge Alberto Ferro @jorgeaferroj',
        variant: 'horizontal',
      },
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
