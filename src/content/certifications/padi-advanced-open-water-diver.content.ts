// src/content/certifications/padi-advanced-open-water-diver.content.ts
import { BRAND_ASSETS_SAFE, toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { CertificationContentSchema, type CertificationContent } from './types';

const rawAdvancedOpenWaterDiver: CertificationContent = {
  id: 'padi-advanced-open-water-diver',
  slug: 'padi-advanced-open-water-diver',
  name: 'Advanced Open Water Diver',
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
    imageUrl: toAssetUrl('/images/social/aowd-social-card.webp'),
    urlPath: toUrlPath(ROUTES.certifications),
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.aowd.header.title',
    subtitleKey: 'certifications.aowd.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/aowd-header.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  card: {
    descriptionKey: 'Description AOWD',
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/aowd-card.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
      textOverlayKey: 'certificationsTextOverlay',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'certifications.aowd.description.title',
    paragraphs: [
      'certifications.aowd.description.p1',
      'certifications.aowd.description.p2',
    ],
  },

  prerequisites: {
    titleKey: 'certifications.aowd.prerequisites.title',
    items: [
      'certifications.aowd.prerequisites.item1',
      'certifications.aowd.prerequisites.item2',
      'certifications.aowd.prerequisites.item3',
    ],
  },

  details: {
    titleKey: 'certifications.aowd.details.title',
    durationKey: 'certifications.aowd.details.durationValue',
    items: [
      {
        labelKey: 'certifications.aowd.details.label1',
        valueKey: 'certifications.aowd.details.value1',
      },
      {
        labelKey: 'certifications.aowd.details.label2',
        valueKey: 'certifications.aowd.details.value2',
      },
      {
        labelKey: 'certifications.aowd.details.label3',
        valueKey: 'certifications.aowd.details.value3',
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

  bookingProcess: {
    titleKey: 'certifications.aowd.bookingProcess.title',
    steps: [
      {
        icon: 'contact',
        nameKey: 'certifications.aowd.bookingProcess.step1Name',
        descriptionKey: 'certifications.aowd.bookingProcess.step1Desc',
      },
      {
        icon: 'theory',
        nameKey: 'certifications.aowd.bookingProcess.step2Name',
        descriptionKey: 'certifications.aowd.bookingProcess.step2Desc', // "Accede al material de PADI y aprende a tu propio ritmo."
      },
      {
        icon: 'dive',
        nameKey: 'certifications.aowd.bookingProcess.step3Name',
        descriptionKey: 'certifications.aowd.bookingProcess.step3Desc',
      },
    ],
  },

  gallery: {
    titleKey: 'certifications.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl('/images/certifications/aowd-card.webp'),
        photoCredit: 'Camilo Beltran',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl('/images/certifications/aowd-card.webp'),
        photoCredit: 'Camilo Beltran',
        variant: 'vertical',
      },
      {
        backgroundImage: toAssetUrl('/images/certifications/aowd-card.webp'),
        photoCredit: 'Camilo Beltran',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl('/images/certifications/aowd-card.webp'),
        photoCredit: 'Camilo Beltran',
        variant: 'vertical',
      },
    ],
  },

  testimonials: {
    titleKey: 'certifications.aowd.testimonials.title',
    items: [
      {
        quoteKey: 'certifications.aowd.testimonials.quote1',
        author: 'certifications.aowd.testimonials.author1',
        photoUrl: toAssetUrl('/images/testimonials/testimonial1.webp'),
      },
      {
        quoteKey: 'certifications.aowd.testimonials.quote2',
        author: 'certifications.aowd.testimonials.author2',
        photoUrl: toAssetUrl('/images/testimonials/testimonial2.webp'),
      },
      // Puedes añadir más testimonios aquí
    ],
  },

  faq: {
    titleKey: 'certifications.aowd.faq.title',
    items: [
      {
        questionKey: 'certifications.aowd.faq.q1',
        answerKey: 'certifications.aowd.faq.a1',
      },
      {
        questionKey: 'certifications.aowd.faq.q2',
        answerKey: 'certifications.aowd.faq.a2',
      },
      {
        questionKey: 'certifications.aowd.faq.q3',
        answerKey: 'certifications.aowd.faq.a3',
      },
      // Puedes añadir más preguntas y respuestas comunes
    ],
  },

  instructorProfile: {
    titleKey: 'certifications.aowd.instructorProfile.title',
    instructors: [
      {
        name: 'certifications.aowd.instructor1.name',
        descriptionKey: 'certifications.aowd.instructor1.description',
        photoUrl: toAssetUrl('/images/instructors/instructor1.webp'),
      },
      {
        name: 'certifications.aowd.instructor2.name',
        descriptionKey: 'certifications.aowd.instructor2.description',
        photoUrl: toAssetUrl('/images/instructors/instructor2.webp'),
      },
      // ...(puedes añadir más instructores)
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

export const padiAdvancedOpenWaterDiverContent =
  CertificationContentSchema.parse(rawAdvancedOpenWaterDiver);
