// src/data/certifications/padi-rescue.ts
import { BRAND_ASSETS } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import type { Certification } from './types';

const padiRescue = {
  // Metadata
  id: 'padi-rescue',
  slug: 'rescue-diver',
  nameKey: 'rescue.name',
  subtitleKey: 'rescue.subtitle',
  status: 'published',

  seo: {
    titleKey: 'rescue.seo.seoTitle',
    descriptionKey: 'rescue.seo.seoDesc',
    keywordsKey: 'rescue.seo.seoKeywords',
    urlPath: ROUTES.certificationsSection,
    imageUrl: '/images/social/rescue-social-card.webp',
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'rescue.header.headerTitle',
    subtitleKey: 'rescue.header.headerSubtitle',
    translationNS: 'certifications',
    imageData: {
      backgroundImage: '/images/certifications/rescue-header.webp',
      photoCredit: 'PADI®',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      variant: 'header',
    },
  },

  description: {
    titleKey: 'rescue.description.descTitle',
    paragraphs: ['rescue.description.descP1', 'rescue.description.descP2'],
  },

  agency: 'PADI',
  prerequisiteIds: [],
  card: {
    imageData: {
      backgroundImage: '/images/certifications/rescue-card.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      textOverlayKey: 'certificationsTextOverlay',
      variant: 'horizontal',
    },
  },
  details: {
    titleKey: 'rescue.details.certificationsDetailsTitle',
    durationKey: 'rescue.details.detailDurationValue',
    items: [
      {
        labelKey: 'rescue.details.detailLabel1',
        valueKey: 'rescue.details.detailValue1',
      },
    ],
  },
  curriculum: {
    titleKey: 'rescue.curriculum.certificationsCurriculumTitle',
    modules: [
      {
        id: 'theory',
        nameKey: 'rescue.curriculum.module1Name',
        descriptionKey: 'rescue.curriculum.module1Desc',
      },
      {
        id: 'confined-waters',
        nameKey: 'rescue.curriculum.module2Name',
        descriptionKey: 'rescue.curriculum.module2Desc',
      },
      {
        id: 'open-water',
        nameKey: 'rescue.curriculum.module3Name',
        descriptionKey: 'rescue.curriculum.module3Desc',
      },
    ],
  },
  requirements: {
    titleKey: 'rescue.requirements.certificationsRequirementsTitle',
    items: [
      'rescue.requirements.reqItem1',
      'rescue.requirements.reqItem2',
      'rescue.requirements.reqItem3',
    ],
  },
  whatIsIncluded: {
    titleKey: 'rescue.whatIsIncluded.certificationsIncludedTitle',
    items: [
      'rescue.whatIsIncluded.includeItem1',
      'rescue.whatIsIncluded.includeItem2',
      'rescue.whatIsIncluded.includeItem3',
    ],
  },
  gallery: {
    titleKey: 'certificationsGalleryTitle',
    images: [
      {
        backgroundImage: '/images/certifications/rescue-gallery-1.webp',
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
    ],
  },
  cta: {
    textKey: 'certificationCtaButton',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'certificationWhatsappMessage',
    },
  },
} as const satisfies Certification;

export default padiRescue;
