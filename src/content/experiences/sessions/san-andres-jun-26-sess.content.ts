// src/content/experiences/sessions/san-andres-jun-26-sess.content.ts

import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSanAndresJun26Sess: ExperienceSessionContent = {
  id: 'san-andres-jun-26-sess',
  nameKey: 'experiences.sanAndresExp.sessions.jun26.name',
  experienceId: 'exp-san-andres',
  startDate: '2026-06-04',
  endDate: '2026-06-08',
  capacity: 12,
  seatsAvailable: 12,
  availability: 'available',
  creyentes: true,

  certificationIds: ['fun-dive', 'padi-advanced-open-water-diver'],

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
        date: '2026-03-21',
        percentage: 50,
        descriptionKey: 'experiences.paymentPlan.installments.desc1',
      },
      {
        date: '2026-04-21',
        percentage: 25,
        descriptionKey: 'experiences.paymentPlan.installments.desc2',
      },
      {
        date: '2026-05-21',
        percentage: 25,
        descriptionKey: 'experiences.paymentPlan.installments.desc3',
      },
    ],
  },

  overrides: {
    itineraryByPricingOption: {
      'fun-dive': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey: 'experiences.sanAndresExp.itinerary.fun-dive.day1.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.fun-dive.day1.desc',
          },
          {
            day: 2,
            titleKey: 'experiences.sanAndresExp.itinerary.fun-dive.day2.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.fun-dive.day2.desc',
          },
          {
            day: 3,
            titleKey: 'experiences.sanAndresExp.itinerary.fun-dive.day3.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.fun-dive.day3.desc',
          },
          {
            day: 4,
            titleKey: 'experiences.sanAndresExp.itinerary.fun-dive.day4.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.fun-dive.day4.desc',
          },
          {
            day: 5,
            titleKey: 'experiences.sanAndresExp.itinerary.fun-dive.day5.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.fun-dive.day5.desc',
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
              'experiences.sanAndresExp.itinerary.advanced-open-water.day1.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day1.desc',
          },
          {
            day: 2,
            titleKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day2.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day2.desc',
          },
          {
            day: 3,
            titleKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day3.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day3.desc',
          },
          {
            day: 4,
            titleKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day4.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day4.desc',
          },
          {
            day: 5,
            titleKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day5.title',
            descriptionKey:
              'experiences.sanAndresExp.itinerary.advanced-open-water.day5.desc',
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

export const sanAndresJun26SessContent = ExperienceSessionContentSchema.parse(
  rawSanAndresJun26Sess
);
