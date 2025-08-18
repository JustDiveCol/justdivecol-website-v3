// src/content/certifications/padi-rescue-diver.content.ts
import { BRAND_ASSETS_SAFE, toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { CertificationContentSchema, type CertificationContent } from './types';

const rawRescueDiver: CertificationContent = {
  id: 'padi-rescue-diver',
  slug: 'padi-rescue-diver',
  name: 'PADI Rescue Diver',
  code: 'RD',
  level: 'rescue',
  agency: 'PADI',
  minAge: 12,
  maxDepthMeter: 30,
  maxDepthFt: 100,

  estimatedDuration: {
    eLearningHours: [8, 12],
    totalDays: [4, 7],
  },

  seo: {
    titleKey: 'certifications.rd.seo.title',
    descriptionKey: 'certifications.rd.seo.desc',
    keywordsKey: 'certifications.rd.seo.keywords',
    imageUrl: toAssetUrl('/images/certifications/rd/social-card.webp'),
    urlPath: toUrlPath(ROUTES.certifications),
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.rd.header.title',
    subtitleKey: 'certifications.rd.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/certifications/rd/header-background.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  card: {
    descriptionKey: 'certifications.rd.card.desc',
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/rd/card-image.webp'),
      photoCredit: 'Mateusz Popek @mateuszpopek',
      complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
      textOverlayKey: 'certifications.rd.card.cardTextOverlay',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'certifications.descriptionTitle',
    paragraphs: [
      'certifications.rd.description.paragraphs.p1',
      'certifications.rd.description.paragraphs.p2',
    ],
  },

  prerequisites: {
    titleKey: 'certifications.prerequisitesTitle',
    items: [
      'certifications.rd.prerequisites.item1',
      'certifications.rd.prerequisites.item2',
      'certifications.rd.prerequisites.item3',
    ],
  },

  details: {
    titleKey: 'certifications.detailsTitle',
    items: [
      {
        labelKey: 'certifications.rd.details.items.label1',
        valueKey: 'certifications.rd.details.items.value1',
      },
      {
        labelKey: 'certifications.rd.details.items.label2',
        valueKey: 'certifications.rd.details.items.value2',
      },
      {
        labelKey: 'certifications.rd.details.items.label3',
        valueKey: 'certifications.rd.details.items.value3',
      },
    ],
  },

  curriculum: {
    titleKey: 'certifications.curriculumTitle',
    modules: [
      {
        id: 'theory',
        nameKey: 'certifications.rd.curriculum.modules.name1',
        descriptionKey: 'certifications.rd.curriculum.modules.desc1',
      },
      {
        id: 'confined-water',
        nameKey: 'certifications.rd.curriculum.modules.name2',
        descriptionKey: 'certifications.rd.curriculum.modules.desc2',
      },
      {
        id: 'open-water',
        nameKey: 'certifications.rd.curriculum.modules.name3',
        descriptionKey: 'certifications.rd.curriculum.modules.desc3',
      },
    ],
  },

  whatIsIncluded: {
    titleKey: 'certifications.whatIsIncludedTitle',
    items: [
      'certifications.rd.whatIsIncluded.items.item1',
      'certifications.rd.whatIsIncluded.items.item2',
      'certifications.rd.whatIsIncluded.items.item3',
    ],
  },

  bookingProcess: {
    titleKey: 'certifications.bookingProcessTitle',
    steps: [
      {
        icon: 'contact',
        nameKey: 'certifications.rd.bookingProcess.steps.name1',
        descriptionKey: 'certifications.rd.bookingProcess.steps.desc1',
      },
      {
        icon: 'theory',
        nameKey: 'certifications.rd.bookingProcess.steps.name2',
        descriptionKey: 'certifications.rd.bookingProcess.steps.desc2',
      },
      {
        icon: 'dive',
        nameKey: 'certifications.rd.bookingProcess.steps.name3',
        descriptionKey: 'certifications.rd.bookingProcess.steps.desc3',
      },
    ],
  },

  gallery: {
    titleKey: 'certifications.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/rd/gallery-01.webp'
        ),
        photoCredit: 'Pixabay',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/rd/gallery-02.webp'
        ),
        photoCredit: 'Bombeiros MT @cbmmt',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/rd/gallery-03.webp'
        ),
        photoCredit: 'PADI®',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/rd/gallery-04.webp'
        ),
        photoCredit: 'PADI®',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/rd/gallery-05.webp'
        ),
        photoCredit: 'Raven Domingo @ravendomingo_',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/rd/gallery-06.webp'
        ),
        photoCredit: 'Pia B @pspov',
        variant: 'horizontal',
      },
    ],
  },

  faq: 'rescueDiver',

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

export const padiRescueDiverContent =
  CertificationContentSchema.parse(rawRescueDiver);
