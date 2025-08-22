// src/content/experiences/sessions/isla-fuerte-apr-26-sess.content.ts

import { toAssetUrl } from '../../../constants';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawIslaFuerteApr26Sess: ExperienceSessionContent = {
  id: 'isla-fuerte-apr-26-sess',
  nameKey: 'experiences.islaFuerteExp.sessions.apr26.name',
  experienceId: 'exp-isla-fuerte',
  imageUrl: toAssetUrl('/images/experiences/santa-marta/icon.webp'),
  startDate: '2026-04-02',
  endDate: '2026-04-06',
  capacity: 12,
  seatsAvailable: 12,
  availability: 'available',
  creyentes: true,

  pricingOptions: [
    {
      id: 'open-water',
      nameKey: 'experiences.islaFuerteExp.sessions.apr26.pricingOptions.opt1',
      price: 4600000,
      currency: 'COP',
    },
    {
      id: 'advanced-open-water',
      nameKey: 'experiences.islaFuerteExp.sessions.apr26.pricingOptions.opt2',
      price: 4600000,
      currency: 'COP',
    },
    {
      id: 'fun-dive',
      nameKey: 'experiences.islaFuerteExp.sessions.apr26.pricingOptions.opt3',
      price: 3700000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'experiences.islaFuerteExp.sessions.apr26.pricingOptions.opt4',
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
          'experiences.islaFuerteExp.sessions.apr26.paymentPlan.installments.desc1',
      },
      {
        date: '2026-01-20',
        percentage: 25,
        descriptionKey:
          'experiences.islaFuerteExp.sessions.apr26.paymentPlan.installments.desc2',
      },
      {
        date: '2026-02-06',
        percentage: 25,
        descriptionKey:
          'experiences.islaFuerteExp.sessions.apr26.paymentPlan.installments.desc3',
      },
    ],
  },

  certificationIds: ['padi-open-water-diver', 'padi-advanced-open-water-diver'],

  overrides: {
    itineraryByPricingOption: {
      'open-water': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey:
              'experiences.islaFuerteExp.itinerary.open-water.day1.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.open-water.day1.desc',
          },
          {
            day: 2,
            titleKey:
              'experiences.islaFuerteExp.itinerary.open-water.day2.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.open-water.day2.desc',
          },
          {
            day: 3,
            titleKey:
              'experiences.islaFuerteExp.itinerary.open-water.day3.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.open-water.day3.desc',
          },
          {
            day: 4,
            titleKey:
              'experiences.islaFuerteExp.itinerary.open-water.day4.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.open-water.day4.desc',
          },
          {
            day: 5,
            titleKey:
              'experiences.islaFuerteExp.itinerary.open-water.day5.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.open-water.day5.desc',
          },
        ],
        notes: ['experiences.islaFuerteExp.itinerary.notes.note1'],
      },

      'advanced-open-water': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day1.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day1.desc',
          },
          {
            day: 2,
            titleKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day2.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day2.desc',
          },
          {
            day: 3,
            titleKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day3.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day3.desc',
          },
          {
            day: 4,
            titleKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day4.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day4.desc',
          },
          {
            day: 5,
            titleKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day5.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.advanced-open-water.day5.desc',
          },
        ],
        notes: [
          'experiences.islaFuerteExp.itinerary.notes.note1',
          'experiences.islaFuerteExp.itinerary.notes.note2',
        ],
      },

      'fun-dive': {
        titleKey: 'experiences.itineraryTitle',
        days: [
          {
            day: 1,
            titleKey: 'experiences.islaFuerteExp.itinerary.fun-dive.day1.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.fun-dive.day1.desc',
          },
          {
            day: 2,
            titleKey: 'experiences.islaFuerteExp.itinerary.fun-dive.day2.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.fun-dive.day2.desc',
          },
          {
            day: 3,
            titleKey: 'experiences.islaFuerteExp.itinerary.fun-dive.day3.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.fun-dive.day3.desc',
          },
          {
            day: 4,
            titleKey: 'experiences.islaFuerteExp.itinerary.fun-dive.day4.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.fun-dive.day4.desc',
          },
          {
            day: 5,
            titleKey: 'experiences.islaFuerteExp.itinerary.fun-dive.day5.title',
            descriptionKey:
              'experiences.islaFuerteExp.itinerary.fun-dive.day5.desc',
          },
        ],
        notes: [
          'experiences.islaFuerteExp.itinerary.notes.note1',
          'experiences.islaFuerteExp.itinerary.notes.note2',
          'experiences.islaFuerteExp.itinerary.notes.note3',
        ],
      },
    },
  },
};

export const islaFuerteApr26SessContent = ExperienceSessionContentSchema.parse(
  rawIslaFuerteApr26Sess
);
