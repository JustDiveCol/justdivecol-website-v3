// src/content/pages/faq/faq.content.ts
import { ROUTES } from '../../../constants/routes';
import { FaqPageContentSchema } from '../../schemas';
import type { FaqPageContent } from './types';

const rawFaq: FaqPageContent = {
  seo: {
    titleKey: 'faq.seo.title',
    descriptionKey: 'faq.seo.desc',
    keywordsKey: 'faq.seo.keywords',
    urlPath: ROUTES.faq,
    imageUrl: '/images/faq/about-us-social-card.webp',
    translationNS: 'faq',
  },

  header: {
    titleKey: 'faq.header.title',
    subtitleKey: 'faq.header.subtitle',
    translationNS: 'faq',
    imageData: {
      backgroundImage: '/images/about/header-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  data: {
    topFaqIds: [
      'certifications-01',
      'trips-and-experiences-01',
      'booking-and-payment-01',
    ],

    categories: [
      {
        id: 'certifications',
        sectionTitleKey: 'faq.data.certificationsFaqsTitle',
        faqs: [
          {
            id: 'certifications-01',
            questionKey: 'faq.data.certificationsQ1',
            answerKey: 'faq.data.certificationsA1',
          },
          {
            id: 'certifications-02',
            questionKey: 'faq.data.certificationsQ2',
            answerKey: 'faq.data.certificationsA2',
          },
          {
            id: 'certifications-03',
            questionKey: 'faq.data.certificationsQ3',
            answerKey: 'faq.data.certificationsA3',
          },
          {
            id: 'certifications-04',
            questionKey: 'faq.data.certificationsQ4',
            answerKey: 'faq.data.certificationsA4',
          },
          {
            id: 'certifications-05',
            questionKey: 'faq.data.certificationsQ5',
            answerKey: 'faq.data.certificationsA5',
          },
          {
            id: 'certifications-06',
            questionKey: 'faq.data.certificationsQ6',
            answerKey: 'faq.data.certificationsA6',
          },
          {
            id: 'certifications-07',
            questionKey: 'faq.data.certificationsQ7',
            answerKey: 'faq.data.certificationsA7',
          },
        ],
      },
      {
        id: 'trips-and-experiences',
        sectionTitleKey: 'faq.data.tripsAndExpiriencesFaqsTitle',
        faqs: [
          {
            id: 'trips-and-experiences-01',
            questionKey: 'faq.data.tripsAndExperiencesQ1',
            answerKey: 'faq.data.tripsAndExperiencesA1',
          },
          {
            id: 'trips-and-experiences-02',
            questionKey: 'faq.data.tripsAndExperiencesQ2',
            answerKey: 'faq.data.tripsAndExperiencesA2',
          },
          {
            id: 'trips-and-experiences-03',
            questionKey: 'faq.data.tripsAndExperiencesQ3',
            answerKey: 'faq.data.tripsAndExperiencesA3',
          },
          {
            id: 'trips-and-experiences-04',
            questionKey: 'faq.data.tripsAndExperiencesQ4',
            answerKey: 'faq.data.tripsAndExperiencesA4',
          },
          {
            id: 'trips-and-experiences-05',
            questionKey: 'faq.data.tripsAndExperiencesQ5',
            answerKey: 'faq.data.tripsAndExperiencesA5',
          },
        ],
      },
      {
        id: 'booking-and-payment',
        sectionTitleKey: 'faq.data.bookingAndPaymentFaqsTitle',
        faqs: [
          {
            id: 'booking-and-payment-01',
            questionKey: 'faq.data.bookingAndPaymentQ1',
            answerKey: 'faq.data.bookingAndPaymentA1',
          },
          {
            id: 'booking-and-payment-02',
            questionKey: 'faq.data.bookingAndPaymentQ2',
            answerKey: 'faq.data.bookingAndPaymentA2',
          },
          {
            id: 'booking-and-payment-03',
            questionKey: 'faq.data.bookingAndPaymentQ3',
            answerKey: 'faq.data.bookingAndPaymentA3',
          },
        ],
      },
      {
        id: 'safety-and-health',
        sectionTitleKey: 'faq.data.safetyAndHealthFaqsTitle',
        faqs: [
          {
            id: 'safety-and-health-01',
            questionKey: 'faq.data.safetyAndHealthQ1',
            answerKey: 'faq.data.safetyAndHealthA1',
          },
          {
            id: 'safety-and-health-02',
            questionKey: 'faq.data.safetyAndHealthQ2',
            answerKey: 'faq.data.safetyAndHealthA2',
          },
          {
            id: 'safety-and-health-03',
            questionKey: 'faq.data.safetyAndHealthQ3',
            answerKey: 'faq.data.safetyAndHealthA3',
          },
          {
            id: 'safety-and-health-04',
            questionKey: 'faq.data.safetyAndHealthQ4',
            answerKey: 'faq.data.safetyAndHealthA4',
          },
        ],
      },
      {
        id: 'general-information',
        sectionTitleKey: 'faq.data.generalInformationFaqsTitle',
        faqs: [
          {
            id: 'general-information-01',
            questionKey: 'faq.data.generalInformationQ1',
            answerKey: 'faq.data.generalInformationA1',
          },
          {
            id: 'general-information-02',
            questionKey: 'faq.data.generalInformationQ2',
            answerKey: 'faq.data.generalInformationA2',
          },
          {
            id: 'general-information-03',
            questionKey: 'faq.data.generalInformationQ3',
            answerKey: 'faq.data.generalInformationA3',
          },
          {
            id: 'general-information-04',
            questionKey: 'faq.data.generalInformationQ4',
            answerKey: 'faq.data.generalInformationA4',
          },
          {
            id: 'general-information-05',
            questionKey: 'faq.data.generalInformationQ5',
            answerKey: 'faq.data.generalInformationA5',
          },
          {
            id: 'general-information-06',
            questionKey: 'faq.data.generalInformationQ6',
            answerKey: 'faq.data.generalInformationA6',
          },
          {
            id: 'general-information-07',
            questionKey: 'faq.data.generalInformationQ7',
            answerKey: 'faq.data.generalInformationA7',
          },
        ],
      },
      // ... más categorías
    ],
  },
};

export const faqContent = FaqPageContentSchema.parse(rawFaq);
