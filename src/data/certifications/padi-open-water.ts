// src/data/certifications/padi-open-water.ts
import { BRAND_ASSETS } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import type { Certification } from './types';

const padiOpenWaterDiver = {
  // Metadata
  id: 'padi-open-water',
  slug: 'open-water-diver',
  nameKey: 'owd.name',
  subtitleKey: 'owd.subtitle',
  status: 'published',

  seo: {
    titleKey: 'owd.seo.seoTitle',
    descriptionKey: 'owd.seo.seoDesc',
    keywordsKey: 'owd.seo.seoKeywords',
    urlPath: ROUTES.certifications,
    imageUrl: '/images/social/owd-social-card.webp',
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'owd.header.headerTitle',
    subtitleKey: 'owd.header.headerSubtitle',
    translationNS: 'certifications',
    imageData: {
      backgroundImage: '/images/certifications/owd-header.webp',
      photoCredit: 'PADI®',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      variant: 'header',
    },
  },

  description: {
    titleKey: 'owd.description.descTitle',
    paragraphs: ['owd.description.descP1', 'owd.description.descP2'],
  },

  agency: 'PADI',
  prerequisiteIds: [],
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
    titleKey: 'owd.details.certificationsDetailsTitle',
    durationKey: 'owd.details.detailDurationValue',
    items: [
      {
        labelKey: 'owd.details.detailLabel1',
        valueKey: 'owd.details.detailValue1',
      },
    ],
  },
  curriculum: {
    titleKey: 'owd.curriculum.certificationsCurriculumTitle',
    modules: [
      {
        id: 'theory',
        nameKey: 'owd.curriculum.module1Name',
        descriptionKey: 'owd.curriculum.module1Desc',
      },
      {
        id: 'confined-waters',
        nameKey: 'owd.curriculum.module2Name',
        descriptionKey: 'owd.curriculum.module2Desc',
      },
      {
        id: 'open-water',
        nameKey: 'owd.curriculum.module3Name',
        descriptionKey: 'owd.curriculum.module3Desc',
      },
    ],
  },
  requirements: {
    titleKey: 'owd.requirements.certificationsRequirementsTitle',
    items: [
      'owd.requirements.reqItem1',
      'owd.requirements.reqItem2',
      'owd.requirements.reqItem3',
    ],
  },
  whatIsIncluded: {
    titleKey: 'owd.whatIsIncluded.certificationsIncludedTitle',
    items: [
      'owd.whatIsIncluded.includeItem1',
      'owd.whatIsIncluded.includeItem2',
      'owd.whatIsIncluded.includeItem3',
    ],
  },
  gallery: {
    titleKey: 'certificationsGalleryTitle',
    images: [
      {
        backgroundImage: '/images/certifications/owd-gallery-1.webp',
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

export default padiOpenWaterDiver;
