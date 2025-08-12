// src/content/sessions/santa-marta-sept-25-sess.content.ts

import { toAssetUrl } from '../../../constants';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaFeb26Sess: ExperienceSessionContent = {
  id: 'santa-marta-feb-26',
  nameKey: 'experiences.santaMartaExp.sessions.sept25.name',
  experienceId: 'exp-santa-marta',
  imageUrl: toAssetUrl('/images/experiences/santa-marta/icon.webp'),
  startDate: '2026-02-20',
  endDate: '2026-02-23',
  capacity: 10,
  seatsAvailable: 10,
  availability: 'available',
  creyentes: false,

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

export const santaMartaFeb25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaFeb26Sess
);
