// src/content/certifications/padi-open-water-diver.content.ts
import { BRAND_ASSETS_SAFE, toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { CertificationContentSchema, type CertificationContent } from './types';

const rawOpenWaterDiver: CertificationContent = {
  id: 'padi-open-water-diver',
  slug: 'padi-open-water-diver',
  name: 'Open Water Diver',
  code: 'OWD',
  level: 'entry',
  agency: 'PADI',
  minAge: 10,
  maxDepthMeter: 18,
  maxDepthFt: 60,

  estimatedDuration: {
    eLearningHours: [5, 10],
    totalDays: [2, 4],
  },

  seo: {
    titleKey: 'certifications.owd.seo.title',
    descriptionKey: 'certifications.owd.seo.desc',
    keywordsKey: 'certifications.owd.seo.keywords',
    imageUrl: toAssetUrl('/images/certifications/owd/social-card.webp'),
    urlPath: toUrlPath(ROUTES.certifications),
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.owd.header.title',
    subtitleKey: 'certifications.owd.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/certifications/owd/header-background.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  card: {
    descriptionKey: 'certifications.owd.card.desc',
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/owd/card-image.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
      textOverlayKey: 'certifications.owd.card.cardTextOverlay',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'certifications.descriptionTitle',
    paragraphs: [
      'certifications.owd.description.paragraphs.p1',
      'certifications.owd.description.paragraphs.p2',
    ],
  },

  prerequisites: {
    titleKey: 'certifications.prerequisitesTitle',
    items: [
      'certifications.owd.prerequisites.item1',
      'certifications.owd.prerequisites.item2',
      'certifications.owd.prerequisites.item3',
    ],
  },

  details: {
    titleKey: 'certifications.detailsTitle',
    items: [
      {
        labelKey: 'certifications.owd.details.items.label1',
        valueKey: 'certifications.owd.details.items.value1',
      },
      {
        labelKey: 'certifications.owd.details.items.label2',
        valueKey: 'certifications.owd.details.items.value2',
      },
      {
        labelKey: 'certifications.owd.details.items.label3',
        valueKey: 'certifications.owd.details.items.value3',
      },
    ],
  },

  curriculum: {
    titleKey: 'certifications.curriculumTitle',
    modules: [
      {
        id: 'theory',
        nameKey: 'certifications.owd.curriculum.modules.name1',
        descriptionKey: 'certifications.owd.curriculum.modules.desc1',
      },
      {
        id: 'confined-water',
        nameKey: 'certifications.owd.curriculum.modules.name2',
        descriptionKey: 'certifications.owd.curriculum.modules.desc2',
      },
      {
        id: 'open-water',
        nameKey: 'certifications.owd.curriculum.modules.name3',
        descriptionKey: 'certifications.owd.curriculum.modules.desc3',
      },
    ],
  },

  whatIsIncluded: {
    titleKey: 'certifications.whatIsIncludedTitle',
    items: [
      'certifications.owd.whatIsIncluded.items.item1',
      'certifications.owd.whatIsIncluded.items.item2',
      'certifications.owd.whatIsIncluded.items.item3',
    ],
  },

  bookingProcess: {
    titleKey: 'certifications.bookingProcessTitle',
    steps: [
      {
        icon: 'contact',
        nameKey: 'certifications.owd.bookingProcess.steps.name1',
        descriptionKey: 'certifications.owd.bookingProcess.steps.desc1',
      },
      {
        icon: 'theory',
        nameKey: 'certifications.owd.bookingProcess.steps.name2',
        descriptionKey: 'certifications.owd.bookingProcess.steps.desc2',
      },
      {
        icon: 'dive',
        nameKey: 'certifications.owd.bookingProcess.steps.name3',
        descriptionKey: 'certifications.owd.bookingProcess.steps.desc3',
      },
    ],
  },

  gallery: {
    titleKey: 'certifications.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/owd/gallery-01.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/owd/gallery-02.webp'
        ),
        photoCredit: 'PADI®',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/owd/gallery-03.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/owd/gallery-04.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
    ],
  },

  testimonials: {
    titleKey: 'certifications.testimonialsTitle',
    items: [
      {
        quoteKey: 'certifications.owd.testimonials.items.quote1',
        name: 'XYZ',
        originKey: 'providencia-sept-2025',
        rating: 5,
        photoUrl: toAssetUrl('/images/certifications/owd/testimonial-01.webp'),
      },
      // Puedes añadir más testimonios aquí
    ],
  },

  faq: {
    titleKey: 'certifications.faqTitle',
    items: [
      {
        questionKey: 'certifications.owd.faq.items.q1',
        answerKey: 'certifications.owd.faq.items.a1',
      },
      {
        questionKey: 'certifications.owd.faq.items.q2',
        answerKey: 'certifications.owd.faq.items.a2',
      },
      {
        questionKey: 'certifications.owd.faq.items.q3',
        answerKey: 'certifications.owd.faq.items.a3',
      },
      // Puedes añadir más preguntas y respuestas comunes
    ],
  },

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

export const padiOpenWaterDiverContent =
  CertificationContentSchema.parse(rawOpenWaterDiver);
