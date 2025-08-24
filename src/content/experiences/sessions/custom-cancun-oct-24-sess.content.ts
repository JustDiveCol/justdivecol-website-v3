// src/content/experiences/sessions/custom-cancun-oct-24-sess.content.ts
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawCustomCancunOct24Sess: ExperienceSessionContent = {
  id: 'custom-cancun-oct-24-sess',
  nameKey: 'experiences.cancunCustomExp.sessions.oct24.name',
  experienceId: 'custom-exp-cancun',
  startDate: '2024-10-21',
  endDate: '2024-10-28',
  capacity: 1,
  seatsAvailable: 0,
  availability: 'available',
  creyentes: false,
  custom: true,

  pricingOptions: [],

  overrides: {
    whatIsIncluded: {
      titleKey: 'experiences.whatIsIncludedTitle',
      items: [
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item1',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item2',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item3',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item4',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item5',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item6',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item7',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item8',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item9',
        'experiences.cancunCustomExp.sessions.oct24.whatIsIncluded.items.item10',
      ],
    },

    whatIsNotIncluded: {
      titleKey: 'experiences.whatIsNotIncludedTitle',
      items: [
        'experiences.cancunCustomExp.sessions.oct24.whatIsNotIncluded.items.item1',
        'experiences.cancunCustomExp.sessions.oct24.whatIsNotIncluded.items.item2',
        'experiences.cancunCustomExp.sessions.oct24.whatIsNotIncluded.items.item3',
        'experiences.cancunCustomExp.sessions.oct24.whatIsNotIncluded.items.item4',
      ],
    },
  },
};

export const customCancunOct24SessContent =
  ExperienceSessionContentSchema.parse(rawCustomCancunOct24Sess);
