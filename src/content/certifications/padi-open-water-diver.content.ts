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
    imageUrl: toAssetUrl('/images/social/owd-social-card.webp'),
    urlPath: toUrlPath(ROUTES.certifications),
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.owd.header.title',
    subtitleKey: 'certifications.owd.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/owd-header.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  card: {
    descriptionKey: 'Description OWD',
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/owd-card.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
      textOverlayKey: 'certifications.owd.card.cardTextOverlay',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'certifications.owd.description.title',
    paragraphs: [
      'certifications.owd.description.paragraphs.p1',
      'certifications.owd.description.paragraphs.p2',
    ],
  },

  prerequisites: {
    titleKey: 'certifications.owd.prerequisites.title',
    items: [
      'certifications.owd.prerequisites.item1',
      'certifications.owd.prerequisites.item2',
      'certifications.owd.prerequisites.item3',
    ],
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

  bookingProcess: {
    titleKey: 'certifications.owd.bookingProcess.title',
    steps: [
      {
        icon: 'contact',
        nameKey: 'certifications.owd.bookingProcess.step1Name',
        descriptionKey: 'certifications.owd.bookingProcess.step1Desc',
      },
      {
        icon: 'theory',
        nameKey: 'certifications.owd.bookingProcess.step2Name',
        descriptionKey: 'certifications.owd.bookingProcess.step2Desc', // "Accede al material de PADI y aprende a tu propio ritmo."
      },
      {
        icon: 'dive',
        nameKey: 'certifications.owd.bookingProcess.step3Name',
        descriptionKey: 'certifications.owd.bookingProcess.step3Desc',
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
    titleKey: 'certifications.owd.testimonials.title',
    items: [
      {
        quoteKey: 'certifications.owd.testimonials.quote1',
        author: 'certifications.owd.testimonials.author1',
        photoUrl: toAssetUrl('/images/testimonials/testimonial1.webp'),
      },
      {
        quoteKey: 'certifications.owd.testimonials.quote2',
        author: 'certifications.owd.testimonials.author2',
        photoUrl: toAssetUrl('/images/testimonials/testimonial2.webp'),
      },
      // Puedes añadir más testimonios aquí
    ],
  },

  faq: {
    titleKey: 'certifications.owd.faq.title',
    items: [
      {
        questionKey: 'certifications.owd.faq.q1',
        answerKey: 'certifications.owd.faq.a1',
      },
      {
        questionKey: 'certifications.owd.faq.q2',
        answerKey: 'certifications.owd.faq.a2',
      },
      {
        questionKey: 'certifications.owd.faq.q3',
        answerKey: 'certifications.owd.faq.a3',
      },
      // Puedes añadir más preguntas y respuestas comunes
    ],
  },

  instructorProfile: {
    titleKey: 'certifications.owd.instructorProfile.title',
    instructors: [
      {
        name: 'certifications.owd.instructor1.name',
        descriptionKey: 'certifications.owd.instructor1.description',
        photoUrl: toAssetUrl('/images/instructors/instructor1.webp'),
      },
      {
        name: 'certifications.owd.instructor2.name',
        descriptionKey: 'certifications.owd.instructor2.description',
        photoUrl: toAssetUrl('/images/instructors/instructor2.webp'),
      },
      // ...(puedes añadir más instructores)
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

export const padiOpenWaterDiverContent =
  CertificationContentSchema.parse(rawOpenWaterDiver);
