// src/content/experiences/sessions/custom-santa-marta-apr-25-sess.content.ts
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawCustomSantaMartaApr25Sess: ExperienceSessionContent = {
  id: 'custom-santa-marta-apr-25-sess',
  nameKey: 'experiences.santaMartaCustomExp.sessions.apr25.name',
  experienceId: 'custom-exp-santa-marta',
  startDate: '2025-04-15',
  endDate: '2025-04-22',
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
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item1',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item2',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item3',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item4',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item5',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item6',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item7',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item8',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item9',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item10',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item11',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item12',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsIncluded.items.item13',
      ],
    },

    whatIsNotIncluded: {
      titleKey: 'experiences.whatIsNotIncludedTitle',
      items: [
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsNotIncluded.items.item1',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsNotIncluded.items.item2',
        'experiences.santaMartaCustomExp.sessions.apr25.whatIsNotIncluded.items.item3',
      ],
    },
  },
};

export const customSantaMartaApr25SessContent =
  ExperienceSessionContentSchema.parse(rawCustomSantaMartaApr25Sess);
