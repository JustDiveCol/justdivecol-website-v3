// src/content/sessions/santa-marta-sept-25-sess.content.ts

import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaSept25Sess: ExperienceSessionContent = {
  id: 'santa-marta-sept-25',
  nameKey: 'experiences.santaMartaExp.session.sept25.name',
  experienceId: 'exp-santa-marta',
  startDate: '2025-09-26',
  endDate: '2025-09-29',
  capacity: 8,
  seatsAvailable: 6,
  availability: 'available',
  creyentes: true,

  pricingOptions: [
    {
      id: 'certification',
      nameKey: '',
      price: 3500000,
      currency: 'COP',
    },
    {
      id: 'certified',
      nameKey: '',
      price: 2600000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: '',
      price: 1800000,
      currency: 'COP',
    },
  ],

  certificationIds: ['padi-open-water-diver'],
};

export const santaMartaSept25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaSept25Sess
);
