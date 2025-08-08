// src/lib/db/entities/sessions.ts
import { SessionSchema, type Session } from '../schema';

const rawSessions: Session[] = [
  {
    id: 'santa-marta-sept-2025',
    experienceId: 'exp-santa-marta',
    startDate: '2025-10-15',
    endDate: '2025-10-17',
    capacity: 8,
    seatsAvailable: 6,
    availability: 'available',
    creyentes: true,

    pricingOptions: [
      { id: 'certification', price: 3500000, currency: 'COP' },
      { id: 'accompanying-diver', price: 2600000, currency: 'COP' },
      { id: 'accompanying', price: 1800000, currency: 'COP' },
    ],

    certificationIds: ['padi-open-water-diver'],
  },
  {
    id: 'providencia-sept-2025',
    experienceId: 'exp-providencia',
    startDate: '2025-10-15',
    endDate: '2025-10-17',
    capacity: 8,
    seatsAvailable: 6,
    availability: 'available',
    creyentes: true,

    pricingOptions: [
      { id: 'certification', price: 3500000, currency: 'COP' },
      { id: 'accompanying-diver', price: 2600000, currency: 'COP' },
      { id: 'accompanying', price: 1800000, currency: 'COP' },
    ],

    certificationIds: ['padi-open-water-diver'],
  },
  // …más sesiones
];

export const sessions = rawSessions.map((s) => SessionSchema.parse(s));
