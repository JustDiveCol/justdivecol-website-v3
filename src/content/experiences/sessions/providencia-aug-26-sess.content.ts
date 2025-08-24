// src/content/experiences/sessions/providencia-aug-26-sess.content.ts

import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawProvidenciaAug26Sess: ExperienceSessionContent = {
  id: 'providencia-aug-26-sess',
  nameKey: 'experiences.providenciaExp.sessions.aug26.name',
  experienceId: 'exp-providencia',
  startDate: '2026-08-06',
  endDate: '2026-08-09',
  capacity: 12,
  seatsAvailable: 12,
  availability: 'available',
  creyentes: true,

  pricingOptions: [
    {
      id: 'fun-dive',
      nameKey: 'experiences.pricingOptions.FD',
      price: 0,
      currency: 'COP',
    },
    {
      id: 'advanced-open-water',
      nameKey: 'experiences.pricingOptions.AOWD',
      price: 0,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'experiences.pricingOptions.AC',
      price: 0,
      currency: 'COP',
    },
  ],

  pricingOptionsNotes: ['experiences.pricingOptionsNotes.note1'],

  paymentPlan: {
    titleKey: 'experiences.paymentPlanTitle',
    installments: [
      {
        date: '2026-05-24',
        percentage: 50,
        descriptionKey: 'experiences.paymentPlan.installments.desc1',
      },
      {
        date: '2026-06-24',
        percentage: 25,
        descriptionKey: 'experiences.paymentPlan.installments.desc2',
      },
      {
        date: '2026-07-24',
        percentage: 25,
        descriptionKey: 'experiences.paymentPlan.installments.desc3',
      },
    ],
  },

  certificationIds: ['padi-open-water-diver', 'padi-advanced-open-water-diver'],

  overrides: {
    itineraryByPricingOption: {
      'fun-dive': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey:
              'experiences.providenciaExp.itinerary.fun-dive.day1.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.fun-dive.day1.desc',
          },
          {
            day: 2,
            titleKey:
              'experiences.providenciaExp.itinerary.fun-dive.day2.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.fun-dive.day2.desc',
          },
          {
            day: 3,
            titleKey:
              'experiences.providenciaExp.itinerary.fun-dive.day3.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.fun-dive.day3.desc',
          },
          {
            day: 4,
            titleKey:
              'experiences.providenciaExp.itinerary.fun-dive.day4.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.fun-dive.day4.desc',
          },
        ],
        notes: [
          'experiences.itineraryNotes.note1',
          'experiences.itineraryNotes.note2',
          'experiences.itineraryNotes.note3',
        ],
      },

      'advanced-open-water': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey:
              'experiences.providenciaExp.itinerary.advanced-open-water.day1.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.advanced-open-water.day1.desc',
          },
          {
            day: 2,
            titleKey:
              'experiences.providenciaExp.itinerary.advanced-open-water.day2.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.advanced-open-water.day2.desc',
          },
          {
            day: 3,
            titleKey:
              'experiences.providenciaExp.itinerary.advanced-open-water.day3.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.advanced-open-water.day3.desc',
          },
          {
            day: 4,
            titleKey:
              'experiences.providenciaExp.itinerary.advanced-open-water.day4.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.advanced-open-water.day4.desc',
          },
        ],
        notes: [
          'experiences.itineraryNotes.note1',
          'experiences.itineraryNotes.note2',
          'experiences.itineraryNotes.note3',
        ],
      },
    },
  },
};

export const providenciaAug26SessContent = ExperienceSessionContentSchema.parse(
  rawProvidenciaAug26Sess
);
