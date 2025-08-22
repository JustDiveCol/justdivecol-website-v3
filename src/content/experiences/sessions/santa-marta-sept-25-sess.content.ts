// src/content/sessions/santa-marta-sept-25-sess.content.ts
import { toAssetUrl } from '../../../constants';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaSept25Sess: ExperienceSessionContent = {
  id: 'santa-marta-sept-25-sess',
  nameKey: 'experiences.santaMartaExp.sessions.sept25.name',
  experienceId: 'exp-santa-marta',
  imageUrl: toAssetUrl('/images/experiences/santa-marta/icon.webp'),
  startDate: '2025-09-26',
  endDate: '2025-09-29',
  capacity: 8,
  seatsAvailable: 5,
  availability: 'available',
  creyentes: true,

  pricingOptions: [
    {
      id: 'open-water',
      nameKey: 'experiences.santaMartaExp.sessions.sept25.pricingOptions.opt1',
      price: 3500000,
      currency: 'COP',
    },
    {
      id: 'fun-dive',
      nameKey: 'experiences.santaMartaExp.sessions.sept25.pricingOptions.opt2',
      price: 2600000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'experiences.santaMartaExp.sessions.sept25.pricingOptions.opt3',
      price: 1800000,
      currency: 'COP',
    },
  ],

  pricingOptionsNotes: [
    'experiences.santaMartaExp.sessions.sept25.pricingOptionsNotes.note1',
  ],

  paymentPlan: {
    titleKey: 'experiences.paymentPlanTitle',
    installments: [
      {
        date: '2025-07-26',
        percentage: 50,
        descriptionKey:
          'experiences.santaMartaExp.sessions.sept25.paymentPlan.installments.desc1',
      },
      {
        date: '2025-08-26',
        percentage: 25,
        descriptionKey:
          'experiences.santaMartaExp.sessions.sept25.paymentPlan.installments.desc2',
      },
      {
        date: '2025-09-12',
        percentage: 25,
        descriptionKey:
          'experiences.santaMartaExp.sessions.sept25.paymentPlan.installments.desc3',
      },
    ],
  },

  certificationIds: ['padi-open-water-diver', 'fun-dive'],

  overrides: {
    whatIsIncluded: {
      titleKey: 'experiences.whatIsIncludedTitle',
      items: [
        'experiences.santaMartaExp.whatIsIncluded.items.item1',
        'experiences.santaMartaExp.whatIsIncluded.items.item2',
        'experiences.santaMartaExp.whatIsIncluded.items.item4',
      ],
    },

    whatIsNotIncluded: {
      titleKey: 'experiences.whatIsNotIncludedTitle',
      items: [
        'experiences.santaMartaExp.whatIsNotIncluded.items.item1',
        'experiences.santaMartaExp.whatIsIncluded.items.item3',
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

export const santaMartaSept25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaSept25Sess
);
