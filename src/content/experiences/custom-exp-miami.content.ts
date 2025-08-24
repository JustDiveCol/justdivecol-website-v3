// src/content/experiences/custom-exp-miami.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { ExperienceContentSchema, type ExperienceContent } from './types';

const rawCustomMiamiExp: ExperienceContent = {
  id: 'custom-exp-miami',
  slug: 'custom-miami',
  destinationId: 'miami',

  seo: {
    titleKey: 'experiences.miamiCustomExp.seo.title',
    descriptionKey: 'experiences.miamiCustomExp.seo.desc',
    keywordsKey: 'experiences.miamiCustomExp.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.miamiCustomExp.header.title',
    subtitleKey: 'experiences.miamiCustomExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/miami/header-background.webp'
      ),
      photoCredit: 'Antonio Cuellar @antoniocuellarph',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.descriptionTitle',
    paragraphs: [
      'experiences.miamiCustomExp.description.paragraphs.p1',
      'experiences.miamiCustomExp.description.paragraphs.p2',
      'experiences.miamiCustomExp.description.paragraphs.p3',
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
          '/images/destinations/miami/gallery-01.webp'
        ),
        photoCredit: 'Colin Lloyd on Unsplash',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-02.webp'
        ),
        photoCredit: 'Roland Denes on Unsplash',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-03.webp'
        ),
        photoCredit: 'Nextvoyage @next_voyage',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-04.webp'
        ),
        photoCredit: 'Arnie Watkins @arniewatkins',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-05.webp'
        ),
        photoCredit: 'Todd Trapani',
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

export const customMiamiExpContent =
  ExperienceContentSchema.parse(rawCustomMiamiExp);
