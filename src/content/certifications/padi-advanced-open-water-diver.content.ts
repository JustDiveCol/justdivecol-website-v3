// src/content/certifications/padi-advanced-open-water-diver.content.ts
import { BRAND_ASSETS_SAFE, toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { CertificationContentSchema, type CertificationContent } from './types';

const rawAdvancedOpenWaterDiver: CertificationContent = {
  id: 'padi-advanced-open-water-diver',
  slug: 'padi-advanced-open-water-diver',
  name: 'PADI Advanced Open Water Diver',
  code: 'AOWD',
  level: 'advanced',
  agency: 'PADI',
  minAge: 12,
  maxDepthMeter: 30,
  maxDepthFt: 100,

  estimatedDuration: {
    eLearningHours: [6, 8],
    totalDays: [2, 3],
  },

  seo: {
    titleKey: 'certifications.aowd.seo.title',
    descriptionKey: 'certifications.aowd.seo.desc',
    keywordsKey: 'certifications.aowd.seo.keywords',
    imageUrl: toAssetUrl('/images/certifications/aowd/social-card.webp'),
    urlPath: toUrlPath(ROUTES.certifications),
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.aowd.header.title',
    subtitleKey: 'certifications.aowd.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/certifications/aowd/header-background.webp'
      ),
      photoCredit: 'Maël BALLAND @mael_balland',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  card: {
    descriptionKey: 'certifications.aowd.card.desc',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/certifications/aowd/card-image.webp'
      ),
      photoCredit: 'Eriks Abzinovs @pixworthmedia',
      complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
      textOverlayKey: 'certifications.aowd.card.cardTextOverlay',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'certifications.descriptionTitle',
    paragraphs: [
      'certifications.aowd.description.paragraphs.p1',
      'certifications.aowd.description.paragraphs.p2',
    ],
  },

  prerequisites: {
    titleKey: 'certifications.prerequisitesTitle',
    items: [
      'certifications.aowd.prerequisites.item1',
      'certifications.aowd.prerequisites.item2',
      'certifications.aowd.prerequisites.item3',
    ],
  },

  details: {
    titleKey: 'certifications.detailsTitle',
    items: [
      {
        labelKey: 'certifications.aowd.details.items.label1',
        valueKey: 'certifications.aowd.details.items.value1',
      },
      {
        labelKey: 'certifications.aowd.details.items.label2',
        valueKey: 'certifications.aowd.details.items.value2',
      },
      {
        labelKey: 'certifications.aowd.details.items.label3',
        valueKey: 'certifications.aowd.details.items.value3',
      },
    ],
  },

  curriculum: {
    titleKey: 'certifications.curriculumTitle',
    modules: [
      {
        id: 'theory',
        nameKey: 'certifications.aowd.curriculum.modules.name1',
        descriptionKey: 'certifications.aowd.curriculum.modules.desc1',
      },
      {
        id: 'confined-water',
        nameKey: 'certifications.aowd.curriculum.modules.name2',
        descriptionKey: 'certifications.aowd.curriculum.modules.desc2',
      },
      {
        id: 'open-water',
        nameKey: 'certifications.aowd.curriculum.modules.name3',
        descriptionKey: 'certifications.aowd.curriculum.modules.desc3',
      },
    ],
  },

  whatIsIncluded: {
    titleKey: 'certifications.whatIsIncludedTitle',
    items: [
      'certifications.aowd.whatIsIncluded.items.item1',
      'certifications.aowd.whatIsIncluded.items.item2',
      'certifications.aowd.whatIsIncluded.items.item3',
    ],
  },

  bookingProcess: {
    titleKey: 'certifications.bookingProcessTitle',
    steps: [
      {
        icon: 'contact',
        nameKey: 'certifications.aowd.bookingProcess.steps.name1',
        descriptionKey: 'certifications.aowd.bookingProcess.steps.desc1',
      },
      {
        icon: 'theory',
        nameKey: 'certifications.aowd.bookingProcess.steps.name2',
        descriptionKey: 'certifications.aowd.bookingProcess.steps.desc2',
      },
      {
        icon: 'dive',
        nameKey: 'certifications.aowd.bookingProcess.steps.name3',
        descriptionKey: 'certifications.aowd.bookingProcess.steps.desc3',
      },
    ],
  },

  gallery: {
    titleKey: 'certifications.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/aowd/gallery-01.webp'
        ),
        photoCredit: 'Maël BALLAND @mael_balland',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/aowd/gallery-02.webp'
        ),
        photoCredit: 'Maël BALLAND @mael_balland',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/aowd/gallery-03.webp'
        ),
        photoCredit: 'Harvey Clements @Harv_clements',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/aowd/gallery-04.webp'
        ),
        photoCredit: 'Max Zaharenkov @maxzaharenkov',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/aowd/gallery-05.webp'
        ),
        photoCredit: 'Harvey Clements @Harv_clements',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/aowd/gallery-06.webp'
        ),
        photoCredit: 'Pia B @pspov',
        variant: 'horizontal',
      },
    ],
  },

  faq: 'advancedOpenWater',

  ctaButton: {
    textKey: 'certifications.ctaButtonText',
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

export const padiAdvancedOpenWaterDiverContent =
  CertificationContentSchema.parse(rawAdvancedOpenWaterDiver);
