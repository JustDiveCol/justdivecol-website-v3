// src/content/experiences/sessions/santa-marta-nov-25-sess.content.ts

import { toAssetUrl } from '../../../constants';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
} from './types';

const rawSantaMartaNov25Sess: ExperienceSessionContent = {
  id: 'santa-marta-nov-25',
  nameKey: 'experiences.santaMartaExp.sessions.nov25.name',
  experienceId: 'exp-santa-marta',
  imageUrl: toAssetUrl('/images/experiences/santa-marta/icon.webp'),
  startDate: '2025-11-21',
  endDate: '2025-11-24',
  capacity: 10,
  seatsAvailable: 10,
  availability: 'available',
  creyentes: false,

  pricingOptions: [
    {
      id: 'certification',
      nameKey: 'experiences.santaMartaExp.sessions.nov25.pricingOptions.opt1',
      price: 3500000,
      currency: 'COP',
    },
    {
      id: 'certified',
      nameKey: 'experiences.santaMartaExp.sessions.nov25.pricingOptions.opt2',
      price: 2600000,
      currency: 'COP',
    },
    {
      id: 'companion',
      nameKey: 'experiences.santaMartaExp.sessions.nov25.pricingOptions.opt3',
      price: 1800000,
      currency: 'COP',
    },
  ],

  paymentPlan: {
    titleKey: 'experiences.paymentPlanTitle',
    installments: [
      {
        date: '2025-09-21',
        percentage: 50,
        descriptionKey:
          'experiences.santaMartaExp.sessions.nov25.paymentPlan.installments.installment1',
      },
      {
        date: '2025-10-21',
        percentage: 25,
        descriptionKey:
          'experiences.santaMartaExp.sessions.nov25.paymentPlan.installments.installment2',
      },
      {
        date: '2025-11-7',
        percentage: 25,
        descriptionKey:
          'experiences.santaMartaExp.sessions.nov25.paymentPlan.installments.installment3',
      },
    ],
  },

  certificationIds: ['padi-open-water-diver'],
};

export const santaMartaNov25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaNov25Sess
);
