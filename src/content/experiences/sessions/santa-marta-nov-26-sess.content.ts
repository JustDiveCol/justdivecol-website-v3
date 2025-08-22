// src/content/experiences/sessions/santa-marta-nov-26-sess.content.ts

import { toAssetUrl } from '../../../constants';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaNov26Sess: ExperienceSessionContent = {
  id: 'santa-marta-nov-26-sess',
  nameKey: 'experiences.santaMartaExp.sessions.nov26.name',
  experienceId: 'exp-santa-marta',
  imageUrl: toAssetUrl('/images/experiences/santa-marta/icon.webp'),
  startDate: '2026-11-20',
  endDate: '2026-11-23',
  capacity: 10,
  seatsAvailable: 10,
  availability: 'available',
  creyentes: false,

  pricingOptions: [
    {
      id: 'open-water',
      nameKey: 'experiences.santaMartaExp.sessions.nov26.pricingOptions.opt1',
      price: 4600000,
      currency: 'COP',
    },
    {
      id: 'advanced-open-water',
      nameKey: 'experiences.santaMartaExp.sessions.nov26.pricingOptions.opt2',
      price: 4600000,
      currency: 'COP',
    },
    {
      id: 'fun-dive',
      nameKey: 'experiences.santaMartaExp.sessions.nov26.pricingOptions.opt3',
      price: 3700000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'experiences.santaMartaExp.sessions.nov26.pricingOptions.opt4',
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
          'experiences.santaMartaExp.sessions.nov26.paymentPlan.installments.desc1',
      },
      {
        date: '2026-01-20',
        percentage: 25,
        descriptionKey:
          'experiences.santaMartaExp.sessions.nov26.paymentPlan.installments.desc2',
      },
      {
        date: '2026-02-06',
        percentage: 25,
        descriptionKey:
          'experiences.santaMartaExp.sessions.nov26.paymentPlan.installments.desc3',
      },
    ],
  },

  certificationIds: ['padi-open-water-diver', 'padi-advanced-open-water-diver'],

  overrides: {
    whatIsIncluded: {
      titleKey: 'experiences.whatIsIncludedTitle',
      items: [
        'experiences.santaMartaExp.whatIsIncluded.items.item1',
        'experiences.santaMartaExp.whatIsIncluded.items.item2',
        'experiences.santaMartaExp.whatIsIncluded.items.item4',
        'experiences.santaMartaExp.whatIsIncluded.items.item5',
      ],
    },

    whatIsNotIncluded: {
      titleKey: 'experiences.whatIsNotIncludedTitle',
      items: [
        'experiences.santaMartaExp.whatIsNotIncluded.items.item1',
        'experiences.santaMartaExp.whatIsNotIncluded.items.item5',
        'experiences.santaMartaExp.whatIsNotIncluded.items.item2',
        'experiences.santaMartaExp.whatIsNotIncluded.items.item3',
        'experiences.santaMartaExp.whatIsNotIncluded.items.item4',
      ],
    },

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
        notes: ['experiences.santaMartaExp.itinerary.notes.note1'],
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
        notes: ['experiences.santaMartaExp.itinerary.notes.note1'],
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
        notes: ['experiences.santaMartaExp.itinerary.notes.note1'],
      },
    },
  },
};

export const santaMartaNov26SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaNov26Sess
);
