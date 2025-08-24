// src/content/experiences/custom-exp-cancun.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { ExperienceContentSchema, type ExperienceContent } from './types';

const rawCustomCancunExp: ExperienceContent = {
  id: 'custom-exp-cancun',
  slug: 'custom-cancun',
  destinationId: 'cancun',

  seo: {
    titleKey: 'experiences.cancunCustomExp.seo.title',
    descriptionKey: 'experiences.cancunCustomExp.seo.desc',
    keywordsKey: 'experiences.cancunCustomExp.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.cancunCustomExp.header.title',
    subtitleKey: 'experiences.cancunCustomExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/cancun/header-background.webp'
      ),
      photoCredit: 'Leonardo Rossatti @leorossatti',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.descriptionTitle',
    paragraphs: [
      'experiences.cancunCustomExp.description.paragraphs.p1',
      'experiences.cancunCustomExp.description.paragraphs.p2',
      'experiences.cancunCustomExp.description.paragraphs.p3',
    ],
  },

  whatIsIncluded: {
    titleKey: 'experiences.whatIsIncludedTitle',
    items: [],
  },

  whatIsNotIncluded: {
    titleKey: 'experiences.whatIsNotIncludedTitle',
    items: [],
  },

  gallery: {
    titleKey: 'experiences.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-01.webp'
        ),
        photoCredit: 'Ricky Esquivel',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-02.webp'
        ),
        photoCredit: 'Matias Mango @_matimango',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-03.webp'
        ),
        photoCredit: 'Christian Vergara @ch_vergara',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-04.webp'
        ),
        photoCredit: 'Matias Mango @_matimango',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-05.webp'
        ),
        photoCredit: 'Domingo Dias @domingodias',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-06.webp'
        ),
        photoCredit: 'Harvey Clements @Harv_clements',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-07.webp'
        ),
        photoCredit: 'Viviana Camacho @vivicamacho.photo',
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

export const customCancunExpContent =
  ExperienceContentSchema.parse(rawCustomCancunExp);
