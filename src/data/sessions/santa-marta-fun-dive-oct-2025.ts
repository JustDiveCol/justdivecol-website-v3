// src/data/sessions/santa-marta-fun-dive-oct-2025.ts

import type { ExperienceSession, PricingOption } from './styles';

const pricingOptions: PricingOption[] = [
  {
    id: 'two-dives',
    titleKey: 'sessionSmFunDivePriceTwoDivesName',
    descriptionKey: 'sessionSmFunDivePriceTwoDivesDesc',
    price: 350000,
    currency: 'COP',
  },
  {
    id: 'refresher',
    titleKey: 'sessionSmFunDivePriceRefresherName',
    descriptionKey: 'sessionSmFunDivePriceRefresherDesc',
    price: 420000,
    currency: 'COP',
  },
] as const;

const santaMartaFunDiveOct2025 = {
  id: 'sm-fun-dive-oct-2025',
  experienceId: 'exp-santa-marta',
  startDate: '2025-10-15',
  endDate: '2025-10-17',
  imageUrl: '/images/sessions/sm-fun-dive.png',
  availability: 'available',
  seatsAvailable: 6,
  capacity: 8,
  creyentes: true,
  certificationIds: ['padi-open-water'],

  pricingOptions: pricingOptions,

  paymentPlan: {
    titleKey: 'experiencesPaymentTitle',
    modules: [
      {
        id: 'payment1',
        nameKey: 'sessionSmFunDivePayment1Name',
        descriptionKey: 'sessionSmFunDivePayment1Desc',
      },
    ],
    notes: ['experiencesDefaultPaymentNote'],
  },
} as const satisfies ExperienceSession;

export default santaMartaFunDiveOct2025;
