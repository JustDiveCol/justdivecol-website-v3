// src/content/certifications/padi-advanced-open-water-diver.content.ts

import { BRAND_ASSETS } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import { CertificationContentSchema } from '../schemas';
import type { CertificationContent } from './types';

const rawOpenWaterDiver: CertificationContent = {
  seo: {
    titleKey: 'certifications.aowd.seo.title',
    descriptionKey: 'certifications.aowd.seo.desc',
    keywordsKey: 'certifications.aowd.seo.keywords',
    imageUrl: '/images/social/aowd-social-card.webp',
    urlPath: ROUTES.certifications,
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.aowd.header.title',
    subtitleKey: 'certifications.aowd.header.subtitle',
    imageData: {
      backgroundImage: '/images/certifications/aowd-header.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  description: {
    titleKey: 'certifications.aowd.description.title',
    paragraphs: [
      'certifications.aowd.description.p1',
      'certifications.aowd.description.p2',
    ],
  },

  card: {
    imageData: {
      backgroundImage: '/images/certifications/aowd-card.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      textOverlayKey: 'certificationsTextOverlay',
      variant: 'horizontal',
    },
  },

  details: {
    titleKey: 'certifications.aowd.details.title',
    durationKey: 'certifications.aowd.details.durationValue',
    items: [
      {
        labelKey: 'certifications.aowd.details.label1',
        valueKey: 'certifications.aowd.details.value1',
      },
    ],
  },

  curriculum: {
    titleKey: 'certifications.aowd.curriculum.title',
    modules: [
      {
        id: 'theory',
        nameKey: 'certifications.aowd.curriculum.module1Name',
        descriptionKey: 'certifications.aowd.curriculum.module1Desc',
      },
      {
        id: 'confined-water',
        nameKey: 'certifications.aowd.curriculum.module2Name',
        descriptionKey: 'certifications.aowd.curriculum.module2Desc',
      },
      {
        id: 'open-water',
        nameKey: 'certifications.aowd.curriculum.module3Name',
        descriptionKey: 'certifications.aowd.curriculum.module3Desc',
      },
    ],
  },

  whatIsIncluded: {
    titleKey: 'certifications.aowd.whatIsIncluded.title',
    items: [
      'certifications.aowd.whatIsIncluded.item1',
      'certifications.aowd.whatIsIncluded.item2',
      'certifications.aowd.whatIsIncluded.item3',
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
    textKey: 'certifications.aowd.ctaButton.text',
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
