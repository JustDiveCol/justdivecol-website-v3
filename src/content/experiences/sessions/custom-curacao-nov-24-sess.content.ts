// src/content/experiences/sessions/custom-curacao-nov-24-sess.content.ts
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawCustomCuracaoNov24Sess: ExperienceSessionContent = {
  id: 'custom-curacao-nov-24-sess',
  nameKey: 'experiences.curacaoCustomExp.sessions.nov24.name',
  experienceId: 'custom-exp-curacao',
  startDate: '2024-11-07',
  endDate: '2024-11-11',
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
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item1',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item2',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item3',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item4',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item5',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item6',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item7',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item8',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item9',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item10',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item11',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsIncluded.items.item12',
      ],
    },

    whatIsNotIncluded: {
      titleKey: 'experiences.whatIsNotIncludedTitle',
      items: [
        'experiences.curacaoCustomExp.sessions.nov24.whatIsNotIncluded.items.item1',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsNotIncluded.items.item2',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsNotIncluded.items.item3',
        'experiences.curacaoCustomExp.sessions.nov24.whatIsNotIncluded.items.item4',
      ],
    },
  },
};

export const customCuracaoNov24SessContent =
  ExperienceSessionContentSchema.parse(rawCustomCuracaoNov24Sess);
