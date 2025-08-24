// src/content/experiences/custom-exp-curacao.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { ExperienceContentSchema, type ExperienceContent } from './types';

const rawCustomCuracaoExp: ExperienceContent = {
  id: 'custom-exp-curacao',
  slug: 'custom-curacao',
  destinationId: 'curacao',

  seo: {
    titleKey: 'experiences.curacaoCustomExp.seo.title',
    descriptionKey: 'experiences.curacaoCustomExp.seo.desc',
    keywordsKey: 'experiences.curacaoCustomExp.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.curacaoCustomExp.header.title',
    subtitleKey: 'experiences.curacaoCustomExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/experiences/curacao/header-background.webp'
      ),
      photoCredit: 'ClickerHappy',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.descriptionTitle',
    paragraphs: [
      'experiences.curacaoCustomExp.description.paragraphs.p1',
      'experiences.curacaoCustomExp.description.paragraphs.p2',
      'experiences.curacaoCustomExp.description.paragraphs.p3',
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
          '/images/experiences/curacao/gallery-01.webp'
        ),
        photoCredit: 'Wijs (Wise) @wijs_photo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-02.webp'
        ),
        photoCredit: 'Wijs (Wise) @wijs_photo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-03.webp'
        ),
        photoCredit: 'Wijs (Wise) @wijs_photo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-04.webp'
        ),
        photoCredit: 'ClickerHappy',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-05.webp'
        ),
        photoCredit: 'Elien',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-06.webp'
        ),
        photoCredit: 'Wijs (Wise) @wijs_photo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-07.webp'
        ),
        photoCredit: 'Courtney RA @cra.throughthelens',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-08.webp'
        ),
        photoCredit: 'Elien',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-09.webp'
        ),
        photoCredit: 'Pascal Ingelrest',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-10.webp'
        ),
        photoCredit: 'Wijs (Wise) @wijs_photo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-11.webp'
        ),
        photoCredit: 'Marie Freeman @mariefreeman3',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-12.webp'
        ),
        photoCredit: 'Andre Manuel @drethousand',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-13.webp'
        ),
        photoCredit: 'Dream of the Green Flamingo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-14.webp'
        ),
        photoCredit: 'Dream of the Green Flamingo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-15.webp'
        ),
        photoCredit: 'Dream of the Green Flamingo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-16.webp'
        ),
        photoCredit: 'Dream of the Green Flamingo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-17.webp'
        ),
        photoCredit: 'Dream of the Green Flamingo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/curacao/gallery-18.webp'
        ),
        photoCredit: 'Dream of the Green Flamingo',
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

export const customCuracaoExpContent =
  ExperienceContentSchema.parse(rawCustomCuracaoExp);
