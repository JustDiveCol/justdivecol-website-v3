// src/content/certifications/padi-rescue-diver.content.ts

import { BRAND_ASSETS } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import { CertificationContentSchema } from '../schemas';
import type { CertificationContent } from './types';

const rawOpenWaterDiver: CertificationContent = {
  seo: {
    titleKey: 'certifications.rd.seo.title',
    descriptionKey: 'certifications.rd.seo.desc',
    keywordsKey: 'certifications.rd.seo.keywords',
    imageUrl: '/images/social/rd-social-card.webp',
    urlPath: ROUTES.certifications,
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.rd.header.title',
    subtitleKey: 'certifications.rd.header.subtitle',
    imageData: {
      backgroundImage: '/images/certifications/rd-header.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  description: {
    titleKey: 'certifications.rd.description.title',
    paragraphs: [
      'certifications.rd.description.p1',
      'certifications.rd.description.p2',
    ],
  },

  card: {
    imageData: {
      backgroundImage: '/images/certifications/rd-card.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      textOverlayKey: 'certificationsTextOverlay',
      variant: 'horizontal',
    },
  },

  details: {
    titleKey: 'certifications.rd.details.title',
    durationKey: 'certifications.rd.details.durationValue',
    items: [
      {
        labelKey: 'certifications.rd.details.label1',
        valueKey: 'certifications.rd.details.value1',
      },
    ],
  },

  curriculum: {
    titleKey: 'certifications.rd.curriculum.title',
    modules: [
      {
        id: 'theory',
        nameKey: 'certifications.rd.curriculum.module1Name',
        descriptionKey: 'certifications.rd.curriculum.module1Desc',
      },
      {
        id: 'confined-water',
        nameKey: 'certifications.rd.curriculum.module2Name',
        descriptionKey: 'certifications.rd.curriculum.module2Desc',
      },
      {
        id: 'open-water',
        nameKey: 'certifications.rd.curriculum.module3Name',
        descriptionKey: 'certifications.rd.curriculum.module3Desc',
      },
    ],
  },

  whatIsIncluded: {
    titleKey: 'certifications.rd.whatIsIncluded.title',
    items: [
      'certifications.rd.whatIsIncluded.item1',
      'certifications.rd.whatIsIncluded.item2',
      'certifications.rd.whatIsIncluded.item3',
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
    textKey: 'certifications.rd.ctaButton.text',
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
