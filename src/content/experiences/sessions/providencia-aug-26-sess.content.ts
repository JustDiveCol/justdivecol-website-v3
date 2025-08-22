// src/content/experiences/sessions/providencia-aug-26-sess.content.ts

import { toAssetUrl } from '../../../constants';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawProvidenciaAug26Sess: ExperienceSessionContent = {
  id: 'providencia-aug-26-sess',
  nameKey: 'experiences.providenciaExp.sessions.aug26.name',
  experienceId: 'exp-providencia',
  imageUrl: toAssetUrl('/images/experiences/santa-marta/icon.webp'),
  startDate: '2026-08-06',
  endDate: '2026-08-10',
  capacity: 12,
  seatsAvailable: 12,
  availability: 'available',
  creyentes: true,

  pricingOptions: [
    {
      id: 'open-water',
      nameKey: 'experiences.providenciaExp.sessions.aug26.pricingOptions.opt1',
      price: 4600000,
      currency: 'COP',
    },
    {
      id: 'advanced-open-water',
      nameKey: 'experiences.providenciaExp.sessions.aug26.pricingOptions.opt2',
      price: 4600000,
      currency: 'COP',
    },
    {
      id: 'fun-dive',
      nameKey: 'experiences.providenciaExp.sessions.aug26.pricingOptions.opt3',
      price: 3700000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'experiences.providenciaExp.sessions.aug26.pricingOptions.opt4',
      price: 2300000,
      currency: 'COP',
    },
  ],

  paymentPlan: {
    titleKey: 'experiences.paymentPlanTitle',
    installments: [
      {
        date: '2025-12-20',
        percentage: 50,
        descriptionKey:
          'experiences.providenciaExp.sessions.aug26.paymentPlan.installments.desc1',
      },
      {
        date: '2026-01-20',
        percentage: 25,
        descriptionKey:
          'experiences.providenciaExp.sessions.aug26.paymentPlan.installments.desc2',
      },
      {
        date: '2026-02-06',
        percentage: 25,
        descriptionKey:
          'experiences.providenciaExp.sessions.aug26.paymentPlan.installments.desc3',
      },
    ],
  },

  certificationIds: ['padi-open-water-diver', 'padi-advanced-open-water-diver'],

  overrides: {
    whatIsIncluded: {
      titleKey: 'experiences.whatIsIncludedTitle',
      items: [
        'experiences.providenciaExp.whatIsIncluded.items.item1',
        'experiences.providenciaExp.whatIsIncluded.items.item2',
        'experiences.providenciaExp.whatIsIncluded.items.item4',
        'experiences.providenciaExp.whatIsIncluded.items.item5',
      ],
    },

    whatIsNotIncluded: {
      titleKey: 'experiences.whatIsNotIncludedTitle',
      items: [
        'experiences.providenciaExp.whatIsNotIncluded.items.item1',
        'experiences.providenciaExp.whatIsNotIncluded.items.item5',
        'experiences.providenciaExp.whatIsNotIncluded.items.item2',
        'experiences.providenciaExp.whatIsNotIncluded.items.item3',
        'experiences.providenciaExp.whatIsNotIncluded.items.item4',
      ],
    },

    itineraryByPricingOption: {
      'open-water': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey:
              'experiences.providenciaExp.itinerary.open-water.day1.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.open-water.day1.desc',
          },
          {
            day: 2,
            titleKey:
              'experiences.providenciaExp.itinerary.open-water.day2.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.open-water.day2.desc',
          },
          {
            day: 3,
            titleKey:
              'experiences.providenciaExp.itinerary.open-water.day3.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.open-water.day3.desc',
          },
          {
            day: 4,
            titleKey:
              'experiences.providenciaExp.itinerary.open-water.day4.title',
            descriptionKey:
              'experiences.providenciaExp.itinerary.open-water.day4.desc',
          },
        ],
        notes: ['experiences.providenciaExp.itinerary.notes.note1'],
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
        notes: ['experiences.providenciaExp.itinerary.notes.note1'],
      },

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
        notes: ['experiences.providenciaExp.itinerary.notes.note1'],
      },
    },
  },
};

export const providenciaAug26SessContent = ExperienceSessionContentSchema.parse(
  rawProvidenciaAug26Sess
);
