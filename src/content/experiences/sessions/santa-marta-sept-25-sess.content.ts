// src/content/sessions/santa-marta-sept-25-sess.content.ts

import { toAssetUrl } from '../../../constants';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaSept25Sess: ExperienceSessionContent = {
  id: 'santa-marta-sept-25',
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
      id: 'certification',
      nameKey: 'Opt1',
      price: 3500000,
      currency: 'COP',
    },
    {
      id: 'certified',
      nameKey: 'Opt2',
      price: 2600000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'Opt3',
      price: 1800000,
      currency: 'COP',
    },
  ],

  certificationIds: ['padi-open-water-diver'],
};

export const santaMartaSept25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaSept25Sess
);
