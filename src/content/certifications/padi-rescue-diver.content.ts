// src/content/certifications/padi-rescue-diver.content.ts
import { BRAND_ASSETS_SAFE, toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { CertificationContentSchema, type CertificationContent } from './types';

const rawRescueDiver: CertificationContent = {
  id: 'padi-rescue-diver',
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
    imageUrl: toAssetUrl('/images/social/rd-social-card.webp'),
    urlPath: toUrlPath(ROUTES.certifications),
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.rd.header.title',
    subtitleKey: 'certifications.rd.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/rd-header.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/rd-card.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
      textOverlayKey: 'certificationsTextOverlay',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'certifications.rd.description.title',
    paragraphs: [
      'certifications.rd.description.p1',
      'certifications.rd.description.p2',
    ],
  },

  prerequisites: {
    titleKey: 'certifications.rd.prerequisites.title',
    items: [
      'certifications.rd.prerequisites.item1',
      'certifications.rd.prerequisites.item2',
      'certifications.rd.prerequisites.item3',
    ],
  },

  details: {
    titleKey: 'certifications.rd.details.title',
    durationKey: 'certifications.rd.details.durationValue',
    items: [
      {
        labelKey: 'certifications.rd.details.label1',
        valueKey: 'certifications.rd.details.value1',
      },
      {
        labelKey: 'certifications.rd.details.label2',
        valueKey: 'certifications.rd.details.value2',
      },
      {
        labelKey: 'certifications.rd.details.label3',
        valueKey: 'certifications.rd.details.value3',
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

  bookingProcess: {
    titleKey: 'certifications.rd.bookingProcess.title',
    steps: [
      {
        icon: 'contact',
        nameKey: 'certifications.rd.bookingProcess.step1Name',
        descriptionKey: 'certifications.rd.bookingProcess.step1Desc',
      },
      {
        icon: 'theory',
        nameKey: 'certifications.rd.bookingProcess.step2Name',
        descriptionKey: 'certifications.rd.bookingProcess.step2Desc', // "Accede al material de PADI y aprende a tu propio ritmo."
      },
      {
        icon: 'dive',
        nameKey: 'certifications.rd.bookingProcess.step3Name',
        descriptionKey: 'certifications.rd.bookingProcess.step3Desc',
      },
    ],
  },

  gallery: {
    titleKey: 'certifications.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl('https://placehold.co/800x600'),
        photoCredit: 'Camilo Beltran',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl('https://placehold.co/600x800'),
        photoCredit: 'Camilo Beltran',
        variant: 'vertical',
      },
      {
        backgroundImage: toAssetUrl('https://placehold.co/800x600'),
        photoCredit: 'Camilo Beltran',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl('https://placehold.co/600x800'),
        photoCredit: 'Camilo Beltran',
        variant: 'vertical',
      },
    ],
  },

  testimonials: {
    titleKey: 'certifications.rd.testimonials.title',
    items: [
      {
        quoteKey: 'certifications.rd.testimonials.quote1',
        author: 'certifications.rd.testimonials.author1',
        photoUrl: toAssetUrl('/images/testimonials/testimonial1.webp'),
      },
      {
        quoteKey: 'certifications.rd.testimonials.quote2',
        author: 'certifications.rd.testimonials.author2',
        photoUrl: toAssetUrl('/images/testimonials/testimonial2.webp'),
      },
      // Puedes añadir más testimonios aquí
    ],
  },

  faq: {
    titleKey: 'certifications.rd.faq.title',
    items: [
      {
        questionKey: 'certifications.rd.faq.q1',
        answerKey: 'certifications.rd.faq.a1',
      },
      {
        questionKey: 'certifications.rd.faq.q2',
        answerKey: 'certifications.rd.faq.a2',
      },
      {
        questionKey: 'certifications.rd.faq.q3',
        answerKey: 'certifications.rd.faq.a3',
      },
      // Puedes añadir más preguntas y respuestas comunes
    ],
  },

  instructorProfile: {
    titleKey: 'certifications.rd.instructorProfile.title',
    instructors: [
      {
        name: 'certifications.rd.instructor1.name',
        descriptionKey: 'certifications.rd.instructor1.description',
        photoUrl: toAssetUrl('/images/instructors/instructor1.webp'),
      },
      {
        name: 'certifications.rd.instructor2.name',
        descriptionKey: 'certifications.rd.instructor2.description',
        photoUrl: toAssetUrl('/images/instructors/instructor2.webp'),
      },
      // ...(puedes añadir más instructores)
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

export const padiRescueDiverContent =
  CertificationContentSchema.parse(rawRescueDiver);
