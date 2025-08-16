// src/content/sessions/santa-marta-sept-25-sess.content.ts

import { toAssetUrl } from '../../../constants';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaFeb26Sess: ExperienceSessionContent = {
  id: 'santa-marta-feb-26',
  nameKey: 'experiences.santaMartaExp.sessions.feb26.name',
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
      nameKey: 'experiences.santaMartaExp.sessions.feb26.pricingOptions.opt1',
      price: 3500000,
      currency: 'COP',
    },
    {
      id: 'certified',
      nameKey: 'experiences.santaMartaExp.sessions.feb26.pricingOptions.opt2',
      price: 2600000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'experiences.santaMartaExp.sessions.feb26.pricingOptions.opt3',
      price: 1800000,
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
          'experiences.santaMartaExp.sessions.feb25.paymentPlan.installments.installment1',
      },
      {
        date: '2026-01-20',
        percentage: 25,
        descriptionKey:
          'experiences.santaMartaExp.sessions.feb25.paymentPlan.installments.installment2',
      },
      {
        date: '2026-02-06',
        percentage: 25,
        descriptionKey:
          'experiences.santaMartaExp.sessions.feb25.paymentPlan.installments.installment3',
      },
    ],
  },

  certificationIds: ['padi-open-water-diver'],
};

export const santaMartaFeb25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaFeb26Sess
);
