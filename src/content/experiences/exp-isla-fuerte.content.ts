// src/content/experiences/exp-isla-fuerte.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { ExperienceContentSchema, type ExperienceContent } from './types';

const rawIslaFuerteExp: ExperienceContent = {
  id: 'exp-isla-fuerte',
  slug: 'isla-fuerte',
  destinationId: 'isla-fuerte',

  seo: {
    titleKey: 'experiences.islaFuerteExp.seo.title',
    descriptionKey: 'experiences.islaFuerteExp.seo.desc',
    keywordsKey: 'experiences.islaFuerteExp.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.islaFuerteExp.header.title',
    subtitleKey: 'experiences.islaFuerteExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/experiences/isla-fuerte/header-background.webp'
      ),
      photoCredit: 'Cristhian David Duarte @duartefotografia.ph',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.descriptionTitle',
    paragraphs: [
      'experiences.islaFuerteExp.description.paragraphs.p1',
      'experiences.islaFuerteExp.description.paragraphs.p2',
    ],
  },

  whatIsIncluded: {
    titleKey: 'experiences.whatIsIncludedTitle',
    items: [
      'experiences.islaFuerteExp.whatIsIncluded.items.item1',
      'experiences.islaFuerteExp.whatIsIncluded.items.item2',
      'experiences.islaFuerteExp.whatIsIncluded.items.item3',
      'experiences.islaFuerteExp.whatIsIncluded.items.item4',
      'experiences.islaFuerteExp.whatIsIncluded.items.item5',
    ],
  },

  whatIsNotIncluded: {
    titleKey: 'experiences.whatIsNotIncludedTitle',
    items: [
      'experiences.islaFuerteExp.whatIsNotIncluded.items.item1',
      'experiences.islaFuerteExp.whatIsNotIncluded.items.item2',
      'experiences.islaFuerteExp.whatIsNotIncluded.items.item3',
      'experiences.islaFuerteExp.whatIsNotIncluded.items.item4',
    ],
  },

  gallery: {
    titleKey: 'experiences.galleryTitle',
    images: [
      // {
      //   backgroundImage: toAssetUrl(
      //     '/images/experiences/isla-fuerte/gallery-01.webp'
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

export const islaFuerteExpContent =
  ExperienceContentSchema.parse(rawIslaFuerteExp);
