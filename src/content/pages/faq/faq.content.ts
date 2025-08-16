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
    imageUrl: toAssetUrl('/images/faq/social-card.webp'),
    translationNS: 'faq',
  },

  header: {
    titleKey: 'faq.header.title',
    subtitleKey: 'faq.header.subtitle',
    translationNS: 'faq',
    imageData: {
      backgroundImage: toAssetUrl('/images/faq/header-background.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  data: {
    topFaqIds: [
      'openWater-01',
      'advancedOpenWater-01',
      'rescueDiver-02',
      'dan-01',
      'certifications-02',
    ],

    categories: [
      {
        id: 'padi',
        sectionTitleKey: 'faq.data.padi.title',
        faqs: [
          {
            id: 'padi-01',
            questionKey: 'faq.data.padi.q1',
            answerKey: 'faq.data.padi.a1',
          },
          {
            id: 'padi-02',
            questionKey: 'faq.data.padi.q2',
            answerKey: 'faq.data.padi.a2',
          },
          {
            id: 'padi-03',
            questionKey: 'faq.data.padi.q3',
            answerKey: 'faq.data.padi.a3',
          },
          {
            id: 'padi-04',
            questionKey: 'faq.data.padi.q4',
            answerKey: 'faq.data.padi.a4',
          },
          {
            id: 'padi-05',
            questionKey: 'faq.data.padi.q5',
            answerKey: 'faq.data.padi.a5',
          },
          {
            id: 'padi-06',
            questionKey: 'faq.data.padi.q6',
            answerKey: 'faq.data.padi.a6',
          },
          {
            id: 'padi-07',
            questionKey: 'faq.data.padi.q7',
            answerKey: 'faq.data.padi.a7',
          },
          {
            id: 'padi-08',
            questionKey: 'faq.data.padi.q8',
            answerKey: 'faq.data.padi.a8',
          },
        ],
      },
      {
        id: 'openWater',
        sectionTitleKey: 'faq.data.openWater.title',
        faqs: [
          {
            id: 'openWater-01',
            questionKey: 'faq.data.openWater.q1',
            answerKey: 'faq.data.openWater.a1',
          },
          {
            id: 'openWater-02',
            questionKey: 'faq.data.openWater.q2',
            answerKey: 'faq.data.openWater.a2',
          },
          {
            id: 'openWater-03',
            questionKey: 'faq.data.openWater.q3',
            answerKey: 'faq.data.openWater.a3',
          },
          {
            id: 'openWater-04',
            questionKey: 'faq.data.openWater.q4',
            answerKey: 'faq.data.openWater.a4',
          },
          {
            id: 'openWater-05',
            questionKey: 'faq.data.openWater.q5',
            answerKey: 'faq.data.openWater.a5',
          },
        ],
      },
      {
        id: 'advancedOpenWater',
        sectionTitleKey: 'faq.data.advancedOpenWater.title',
        faqs: [
          {
            id: 'advancedOpenWater-01',
            questionKey: 'faq.data.advancedOpenWater.q1',
            answerKey: 'faq.data.advancedOpenWater.a1',
          },
          {
            id: 'advancedOpenWater-02',
            questionKey: 'faq.data.advancedOpenWater.q2',
            answerKey: 'faq.data.advancedOpenWater.a2',
          },
          {
            id: 'advancedOpenWater-03',
            questionKey: 'faq.data.advancedOpenWater.q3',
            answerKey: 'faq.data.advancedOpenWater.a3',
          },
          {
            id: 'advancedOpenWater-04',
            questionKey: 'faq.data.advancedOpenWater.q4',
            answerKey: 'faq.data.advancedOpenWater.a4',
          },
          {
            id: 'advancedOpenWater-05',
            questionKey: 'faq.data.advancedOpenWater.q5',
            answerKey: 'faq.data.advancedOpenWater.a5',
          },
        ],
      },
      {
        id: 'rescueDiver',
        sectionTitleKey: 'faq.data.rescueDiver.title',
        faqs: [
          {
            id: 'rescueDiver-01',
            questionKey: 'faq.data.rescueDiver.q1',
            answerKey: 'faq.data.rescueDiver.a1',
          },
          {
            id: 'rescueDiver-02',
            questionKey: 'faq.data.rescueDiver.q2',
            answerKey: 'faq.data.rescueDiver.a2',
          },
          {
            id: 'rescueDiver-03',
            questionKey: 'faq.data.rescueDiver.q3',
            answerKey: 'faq.data.rescueDiver.a3',
          },
          {
            id: 'rescueDiver-04',
            questionKey: 'faq.data.rescueDiver.q4',
            answerKey: 'faq.data.rescueDiver.a4',
          },
          {
            id: 'rescueDiver-05',
            questionKey: 'faq.data.rescueDiver.q5',
            answerKey: 'faq.data.rescueDiver.a5',
          },
        ],
      },
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
        ],
      },
      {
        id: 'safetyAndHealth',
        sectionTitleKey: 'faq.data.safetyAndHealth.title',
        faqs: [
          {
            id: 'safetyAndHealth-01',
            questionKey: 'faq.data.safetyAndHealth.q1',
            answerKey: 'faq.data.safetyAndHealth.a1',
          },
          {
            id: 'safetyAndHealth-02',
            questionKey: 'faq.data.safetyAndHealth.q2',
            answerKey: 'faq.data.safetyAndHealth.a2',
          },
        ],
      },
      {
        id: 'tripsAndExperiences',
        sectionTitleKey: 'faq.data.tripsAndExperiences.title',
        faqs: [
          {
            id: 'tripsAndExperiences-01',
            questionKey: 'faq.data.tripsAndExperiences.q1',
            answerKey: 'faq.data.tripsAndExperiences.a1',
          },
          {
            id: 'tripsAndExperiences-02',
            questionKey: 'faq.data.tripsAndExperiences.q2',
            answerKey: 'faq.data.tripsAndExperiences.a2',
          },
        ],
      },
      {
        id: 'dan',
        sectionTitleKey: 'faq.data.dan.title',
        faqs: [
          {
            id: 'dan-01',
            questionKey: 'faq.data.dan.q1',
            answerKey: 'faq.data.dan.a1',
          },
          {
            id: 'dan-02',
            questionKey: 'faq.data.dan.q2',
            answerKey: 'faq.data.dan.a2',
          },
          {
            id: 'dan-03',
            questionKey: 'faq.data.dan.q3',
            answerKey: 'faq.data.dan.a3',
          },
          {
            id: 'dan-04',
            questionKey: 'faq.data.dan.q4',
            answerKey: 'faq.data.dan.a4',
          },
          {
            id: 'dan-05',
            questionKey: 'faq.data.dan.q5',
            answerKey: 'faq.data.dan.a5',
          },
          {
            id: 'dan-06',
            questionKey: 'faq.data.dan.q6',
            answerKey: 'faq.data.dan.a6',
          },
        ],
      },
      // ... más categorías
    ],
  },
};

export const faqContent = FaqPageContentSchema.parse(rawFaq);
