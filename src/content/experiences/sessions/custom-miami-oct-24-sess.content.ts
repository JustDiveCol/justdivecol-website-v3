// src/content/experiences/sessions/custom-miami-oct-24-sess.content.ts
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawCustomMiamiOct24Sess: ExperienceSessionContent = {
  id: 'custom-miami-oct-24-sess',
  nameKey: 'experiences.miamiCustomExp.sessions.oct24.name',
  experienceId: 'custom-exp-miami',
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
        'experiences.miamiCustomExp.sessions.oct24.whatIsIncluded.items.item1',
        'experiences.miamiCustomExp.sessions.oct24.whatIsIncluded.items.item2',
        'experiences.miamiCustomExp.sessions.oct24.whatIsIncluded.items.item3',
        'experiences.miamiCustomExp.sessions.oct24.whatIsIncluded.items.item4',
        'experiences.miamiCustomExp.sessions.oct24.whatIsIncluded.items.item5',
        'experiences.miamiCustomExp.sessions.oct24.whatIsIncluded.items.item6',
        'experiences.miamiCustomExp.sessions.oct24.whatIsIncluded.items.item7',
        'experiences.miamiCustomExp.sessions.oct24.whatIsIncluded.items.item8',
      ],
    },

    whatIsNotIncluded: {
      titleKey: 'experiences.whatIsNotIncludedTitle',
      items: [
        'experiences.miamiCustomExp.sessions.oct24.whatIsNotIncluded.items.item1',
        'experiences.miamiCustomExp.sessions.oct24.whatIsNotIncluded.items.item2',
        'experiences.miamiCustomExp.sessions.oct24.whatIsNotIncluded.items.item3',
        'experiences.miamiCustomExp.sessions.oct24.whatIsNotIncluded.items.item4',
      ],
    },
  },
};

export const customMiamiOct24SessContent = ExperienceSessionContentSchema.parse(
  rawCustomMiamiOct24Sess
);
