// src/data/certifications/padi-advanced.ts
import { BRAND_ASSETS } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import type { Certification } from './types';

const padiAdvanced = {
  // Metadata
  id: 'padi-advanced',
  slug: 'advanced-open-water-diver',
  nameKey: 'aowd.name',
  subtitleKey: 'aowd.subtitle',
  status: 'published',

  seo: {
    titleKey: 'aowd.seo.seoTitle',
    descriptionKey: 'aowd.seo.seoDesc',
    keywordsKey: 'aowd.seo.seoKeywords',
    urlPath: ROUTES.certificationsSection,
    imageUrl: '/images/social/aowd-social-card.webp',
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'aowd.header.headerTitle',
    subtitleKey: 'aowd.header.headerSubtitle',
    translationNS: 'certifications',
    imageData: {
      backgroundImage: '/images/certifications/aowd-header.webp',
      photoCredit: 'PADI®',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      variant: 'header',
    },
  },

  description: {
    titleKey: 'aowd.description.descTitle',
    paragraphs: ['aowd.description.descP1', 'aowd.description.descP2'],
  },

  agency: 'PADI',
  prerequisiteIds: [],
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
    titleKey: 'aowd.details.certificationsDetailsTitle',
    durationKey: 'aowd.details.detailDurationValue',
    items: [
      {
        labelKey: 'aowd.details.detailLabel1',
        valueKey: 'aowd.details.detailValue1',
      },
    ],
  },
  curriculum: {
    titleKey: 'aowd.curriculum.certificationsCurriculumTitle',
    modules: [
      {
        id: 'theory',
        nameKey: 'aowd.curriculum.module1Name',
        descriptionKey: 'aowd.curriculum.module1Desc',
      },
      {
        id: 'confined-waters',
        nameKey: 'aowd.curriculum.module2Name',
        descriptionKey: 'aowd.curriculum.module2Desc',
      },
      {
        id: 'open-water',
        nameKey: 'aowd.curriculum.module3Name',
        descriptionKey: 'aowd.curriculum.module3Desc',
      },
    ],
  },
  requirements: {
    titleKey: 'aowd.requirements.certificationsRequirementsTitle',
    items: [
      'aowd.requirements.reqItem1',
      'aowd.requirements.reqItem2',
      'aowd.requirements.reqItem3',
    ],
  },
  whatIsIncluded: {
    titleKey: 'aowd.whatIsIncluded.certificationsIncludedTitle',
    items: [
      'aowd.whatIsIncluded.includeItem1',
      'aowd.whatIsIncluded.includeItem2',
      'aowd.whatIsIncluded.includeItem3',
    ],
  },
  gallery: {
    titleKey: 'certificationsGalleryTitle',
    images: [
      {
        backgroundImage: '/images/certifications/aowd-gallery-1.webp',
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

export default padiAdvanced;
