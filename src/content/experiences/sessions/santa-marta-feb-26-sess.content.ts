// src/content/experiences/sessions/santa-marta-feb-26-sess.content.ts
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaFeb26Sess: ExperienceSessionContent = {
  id: 'santa-marta-feb-26-sess',
  nameKey: 'experiences.santaMartaExp.sessions.feb26.name',
  experienceId: 'exp-santa-marta',
  startDate: '2026-02-20',
  endDate: '2026-02-23',
  capacity: 10,
  seatsAvailable: 10,
  availability: 'available',
  creyentes: false,

  certificationIds: [
    'padi-open-water-diver',
    'padi-advanced-open-water-diver',
    'fun-dive',
  ],

  pricingOptions: [
    {
      id: 'open-water',
      nameKey: 'experiences.pricingOptions.OWD',
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
      id: 'fun-dive',
      nameKey: 'experiences.pricingOptions.FD',
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
        date: '2025-12-06',
        percentage: 50,
        descriptionKey: 'experiences.paymentPlan.installments.desc1',
      },
      {
        date: '2026-01-06',
        percentage: 25,
        descriptionKey: 'experiences.paymentPlan.installments.desc2',
      },
      {
        date: '2026-02-06',
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

export const santaMartaFeb26SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaFeb26Sess
);
