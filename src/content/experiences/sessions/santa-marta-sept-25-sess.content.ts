// src/content/sessions/santa-marta-sept-25-sess.content.ts

import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaSept25Sess: ExperienceSessionContent = {
  id: 'santa-marta-sept-25-sess',
  nameKey: 'experiences.santaMartaExp.sessions.sept25.name',
  experienceId: 'exp-santa-marta',
  startDate: '2025-09-26',
  endDate: '2025-09-29',
  capacity: 8,
  seatsAvailable: 3,
  availability: 'available',
  creyentes: true,

  certificationIds: [
    'padi-open-water-diver',
    'padi-advanced-open-water-diver',
    'fun-dive',
  ],

  pricingOptions: [
    {
      id: 'open-water',
      nameKey: 'experiences.pricingOptions.OWD',
      price: 3500000,
      currency: 'COP',
    },
    {
      id: 'advanced-open-water',
      nameKey: 'experiences.pricingOptions.AOWD',
      price: 3500000,
      currency: 'COP',
    },
    {
      id: 'fun-dive',
      nameKey: 'experiences.pricingOptions.FD',
      price: 2600000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'experiences.pricingOptions.AC',
      price: 1800000,
      currency: 'COP',
    },
  ],

  pricingOptionsNotes: ['experiences.pricingOptionsNotes.note1'],

  paymentPlan: {
    titleKey: 'experiences.paymentPlanTitle',
    installments: [
      {
        date: '2025-07-12',
        percentage: 50,
        descriptionKey: 'experiences.paymentPlan.installments.desc1',
      },
      {
        date: '2025-08-12',
        percentage: 25,
        descriptionKey: 'experiences.paymentPlan.installments.desc2',
      },
      {
        date: '2025-09-12',
        percentage: 25,
        descriptionKey: 'experiences.paymentPlan.installments.desc3',
      },
    ],
  },

  overrides: {
    itineraryByPricingOption: {
      'open-water': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey:
              'experiences.santaMartaExp.itinerary.open-water.day1.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.open-water.day1.desc',
          },
          {
            day: 2,
            titleKey:
              'experiences.santaMartaExp.itinerary.open-water.day2.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.open-water.day2.desc',
          },
          {
            day: 3,
            titleKey:
              'experiences.santaMartaExp.itinerary.open-water.day3.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.open-water.day3.desc',
          },
          {
            day: 4,
            titleKey:
              'experiences.santaMartaExp.itinerary.open-water.day4.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.open-water.day4.desc',
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
              'experiences.santaMartaExp.itinerary.advanced-open-water.day1.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.advanced-open-water.day1.desc',
          },
          {
            day: 2,
            titleKey:
              'experiences.santaMartaExp.itinerary.advanced-open-water.day2.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.advanced-open-water.day2.desc',
          },
          {
            day: 3,
            titleKey:
              'experiences.santaMartaExp.itinerary.advanced-open-water.day3.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.advanced-open-water.day3.desc',
          },
          {
            day: 4,
            titleKey:
              'experiences.santaMartaExp.itinerary.advanced-open-water.day4.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.advanced-open-water.day4.desc',
          },
        ],
        notes: [
          'experiences.itineraryNotes.note1',
          'experiences.itineraryNotes.note2',
          'experiences.itineraryNotes.note3',
        ],
      },

      'fun-dive': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey: 'experiences.santaMartaExp.itinerary.fun-dive.day1.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.fun-dive.day1.desc',
          },
          {
            day: 2,
            titleKey: 'experiences.santaMartaExp.itinerary.fun-dive.day2.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.fun-dive.day2.desc',
          },
          {
            day: 3,
            titleKey: 'experiences.santaMartaExp.itinerary.fun-dive.day3.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.fun-dive.day3.desc',
          },
          {
            day: 4,
            titleKey: 'experiences.santaMartaExp.itinerary.fun-dive.day4.title',
            descriptionKey:
              'experiences.santaMartaExp.itinerary.fun-dive.day4.desc',
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

export const santaMartaSept25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaSept25Sess
);
