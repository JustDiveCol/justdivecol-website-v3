// src/content/pages/faq/faq.content.ts
import { toAssetUrl } from '../../../constants/assets.schema';
import { ROUTES } from '../../../constants/routes.schema';

import { toUrlPath } from '../../urlPathSchema';
import { FaqPageContentSchema, type FaqPageContent } from './types';

const rawFaq: FaqPageContent = {
  seo: {
    titleKey: 'faq.seo.title',
    descriptionKey: 'faq.seo.desc',
    keywordsKey: 'faq.seo.keywords',
    urlPath: toUrlPath(ROUTES.faq),
    imageUrl: toAssetUrl('/images/faq/about-us-social-card.webp'),
    translationNS: 'faq',
  },

  header: {
    titleKey: 'faq.header.title',
    subtitleKey: 'faq.header.subtitle',
    translationNS: 'faq',
    imageData: {
      backgroundImage: toAssetUrl('/images/about/header-background.webp'),
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
        sectionTitleKey: 'faq.data.certifications.title',
        faqs: [
          {
            id: 'certifications-01',
            questionKey: 'faq.data.certifications.q1',
            answerKey: 'faq.data.certifications.a1',
          },
          {
            id: 'certifications-02',
            questionKey: 'faq.data.certifications.q2',
            answerKey: 'faq.data.certifications.a2',
          },
          {
            id: 'certifications-03',
            questionKey: 'faq.data.certifications.q3',
            answerKey: 'faq.data.certifications.a3',
          },
          {
            id: 'certifications-04',
            questionKey: 'faq.data.certifications.q4',
            answerKey: 'faq.data.certifications.a4',
          },
          {
            id: 'certifications-05',
            questionKey: 'faq.data.certifications.q5',
            answerKey: 'faq.data.certifications.a5',
          },
          {
            id: 'certifications-06',
            questionKey: 'faq.data.certifications.q6',
            answerKey: 'faq.data.certifications.a6',
          },
          {
            id: 'certifications-07',
            questionKey: 'faq.data.certifications.q7',
            answerKey: 'faq.data.certifications.a7',
          },
        ],
      },
      {
        id: 'trips-and-experiences',
        sectionTitleKey: 'faq.data.tripsAndExperiences.title',
        faqs: [
          {
            id: 'trips-and-experiences-01',
            questionKey: 'faq.data.tripsAndExperiences.q1',
            answerKey: 'faq.data.tripsAndExperiences.a1',
          },
          {
            id: 'trips-and-experiences-02',
            questionKey: 'faq.data.tripsAndExperiences.q2',
            answerKey: 'faq.data.tripsAndExperiences.a2',
          },
          {
            id: 'trips-and-experiences-03',
            questionKey: 'faq.data.tripsAndExperiences.q3',
            answerKey: 'faq.data.tripsAndExperiences.a3',
          },
          {
            id: 'trips-and-experiences-04',
            questionKey: 'faq.data.tripsAndExperiences.q4',
            answerKey: 'faq.data.tripsAndExperiences.a4',
          },
          {
            id: 'trips-and-experiences-05',
            questionKey: 'faq.data.tripsAndExperiences.q5',
            answerKey: 'faq.data.tripsAndExperiences.a5',
          },
        ],
      },
      {
        id: 'booking-and-payment',
        sectionTitleKey: 'faq.data.bookingAndPayment.title',
        faqs: [
          {
            id: 'booking-and-payment-01',
            questionKey: 'faq.data.bookingAndPayment.q1',
            answerKey: 'faq.data.bookingAndPayment.a1',
          },
          {
            id: 'booking-and-payment-02',
            questionKey: 'faq.data.bookingAndPayment.q2',
            answerKey: 'faq.data.bookingAndPayment.a2',
          },
          {
            id: 'booking-and-payment-03',
            questionKey: 'faq.data.bookingAndPayment.q3',
            answerKey: 'faq.data.bookingAndPayment.a3',
          },
        ],
      },
      {
        id: 'safety-and-health',
        sectionTitleKey: 'faq.data.safetyAndHealth.title',
        faqs: [
          {
            id: 'safety-and-health-01',
            questionKey: 'faq.data.safetyAndHealth.q1',
            answerKey: 'faq.data.safetyAndHealth.a1',
          },
          {
            id: 'safety-and-health-02',
            questionKey: 'faq.data.safetyAndHealth.q2',
            answerKey: 'faq.data.safetyAndHealth.a2',
          },
          {
            id: 'safety-and-health-03',
            questionKey: 'faq.data.safetyAndHealth.q3',
            answerKey: 'faq.data.safetyAndHealth.a3',
          },
          {
            id: 'safety-and-health-04',
            questionKey: 'faq.data.safetyAndHealth.q4',
            answerKey: 'faq.data.safetyAndHealth.a4',
          },
        ],
      },
      {
        id: 'general-information',
        sectionTitleKey: 'faq.data.generalInformation.title',
        faqs: [
          {
            id: 'general-information-01',
            questionKey: 'faq.data.generalInformation.q1',
            answerKey: 'faq.data.generalInformation.a1',
          },
          {
            id: 'general-information-02',
            questionKey: 'faq.data.generalInformation.q2',
            answerKey: 'faq.data.generalInformation.a2',
          },
          {
            id: 'general-information-03',
            questionKey: 'faq.data.generalInformation.q3',
            answerKey: 'faq.data.generalInformation.a3',
          },
          {
            id: 'general-information-04',
            questionKey: 'faq.data.generalInformation.q4',
            answerKey: 'faq.data.generalInformation.a4',
          },
          {
            id: 'general-information-05',
            questionKey: 'faq.data.generalInformation.q5',
            answerKey: 'faq.data.generalInformation.a5',
          },
          {
            id: 'general-information-06',
            questionKey: 'faq.data.generalInformation.q6',
            answerKey: 'faq.data.generalInformation.a6',
          },
          {
            id: 'general-information-07',
            questionKey: 'faq.data.generalInformation.q7',
            answerKey: 'faq.data.generalInformation.a7',
          },
        ],
      },
      // ... más categorías
    ],
  },
};

export const faqContent = FaqPageContentSchema.parse(rawFaq);
