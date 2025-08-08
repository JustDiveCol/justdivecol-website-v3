// src/content/certifications/padi-open-water-diver.content.ts

import { BRAND_ASSETS } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import { CertificationContentSchema } from '../schemas';
import type { CertificationContent } from './types';

const rawOpenWaterDiver: CertificationContent = {
  seo: {
    titleKey: 'certifications.owd.seo.title',
    descriptionKey: 'certifications.owd.seo.desc',
    keywordsKey: 'certifications.owd.seo.keywords',
    imageUrl: '/images/social/owd-social-card.webp',
    urlPath: ROUTES.certifications,
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.owd.header.title',
    subtitleKey: 'certifications.owd.header.subtitle',
    imageData: {
      backgroundImage: '/images/certifications/owd-header.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  description: {
    titleKey: 'certifications.owd.description.title',
    paragraphs: [
      'certifications.owd.description.p1',
      'certifications.owd.description.p2',
    ],
  },

  card: {
    imageData: {
      backgroundImage: '/images/certifications/owd-card.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      textOverlayKey: 'certificationsTextOverlay',
      variant: 'horizontal',
    },
  },

  details: {
    titleKey: 'certifications.owd.details.title',
    durationKey: 'certifications.owd.details.durationValue',
    items: [
      {
        labelKey: 'certifications.owd.details.label1',
        valueKey: 'certifications.owd.details.value1',
      },
      {
        labelKey: 'certifications.owd.details.label2',
        valueKey: 'certifications.owd.details.value2',
      },
      {
        labelKey: 'certifications.owd.details.label3',
        valueKey: 'certifications.owd.details.value3',
      },
    ],
  },

  curriculum: {
    titleKey: 'certifications.owd.curriculum.title',
    modules: [
      {
        id: 'theory',
        nameKey: 'certifications.owd.curriculum.module1Name',
        descriptionKey: 'certifications.owd.curriculum.module1Desc',
      },
      {
        id: 'confined-water',
        nameKey: 'certifications.owd.curriculum.module2Name',
        descriptionKey: 'certifications.owd.curriculum.module2Desc',
      },
      {
        id: 'open-water',
        nameKey: 'certifications.owd.curriculum.module3Name',
        descriptionKey: 'certifications.owd.curriculum.module3Desc',
      },
    ],
  },

  whatIsIncluded: {
    titleKey: 'certifications.owd.whatIsIncluded.title',
    items: [
      'certifications.owd.whatIsIncluded.item1',
      'certifications.owd.whatIsIncluded.item2',
      'certifications.owd.whatIsIncluded.item3',
    ],
  },

  gallery: {
    titleKey: 'certifications.galleryTitle',
    images: [
      {
        backgroundImage: 'https://placehold.co/800x600',
        photoCredit: 'Camilo Beltran',
        variant: 'horizontal',
      },
      {
        backgroundImage: 'https://placehold.co/600x800',
        photoCredit: 'Camilo Beltran',
        variant: 'vertical',
      },
      {
        backgroundImage: 'https://placehold.co/800x600',
        photoCredit: 'Camilo Beltran',
        variant: 'horizontal',
      },
      {
        backgroundImage: 'https://placehold.co/600x800',
        photoCredit: 'Camilo Beltran',
        variant: 'vertical',
      },
    ],
  },

  ctaButton: {
    textKey: 'certifications.owd.ctaButton.text',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'certifications.certificationWhatsappMessage',
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

export const padiOpenWaterContent =
  CertificationContentSchema.parse(rawOpenWaterDiver);
