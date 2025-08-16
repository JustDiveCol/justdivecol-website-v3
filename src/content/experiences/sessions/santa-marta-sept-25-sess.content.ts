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
      nameKey: 'experiences.santaMartaExp.sessions.sept25.pricingOptions.opt1',
      price: 3500000,
      currency: 'COP',
    },
    {
      id: 'certified',
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

  certificationIds: ['padi-open-water-diver'],
};

export const santaMartaSept25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaSept25Sess
);
