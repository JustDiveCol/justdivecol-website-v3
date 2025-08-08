// src/lib/db/entities/certifications.ts
import { CertificationSchema, type Certification } from '../schema';

const rawCertifications: Certification[] = [
  {
    id: 'padi-open-water-diver',
    code: 'OWD',
    level: 'entry',
    agency: 'PADI',
    minAge: 10,
    maxDepthMeter: 18,
    maxDepthFt: 60,
    prerequisiteIds: [],
    requirements: {
      swimAbility: true,
      medicalFitness: true,
      goodHealth: true,
    },
    estimatedDuration: {
      eLearningHours: [5, 10],
      totalDays: [2, 4],
    },
  },
  {
    id: 'padi-advanced-open-water-diver',
    code: 'AOWD',
    level: 'advanced',
    agency: 'PADI',
    minAge: 12,
    maxDepthMeter: 30,
    maxDepthFt: 100,
    prerequisiteIds: ['padi-open-water-diver'],
    requirements: {
      swimAbility: true,
      medicalFitness: true,
      goodHealth: true,
    },
    estimatedDuration: {
      eLearningHours: [6, 8],
      totalDays: [2, 3],
    },
  },
  {
    id: 'padi-rescue-diver',
    code: 'RD',
    level: 'rescue',
    agency: 'PADI',
    minAge: 12,
    maxDepthMeter: 30,
    maxDepthFt: 100,
    prerequisiteIds: ['padi-advanced-open-water-diver'],
    requirements: {
      swimAbility: true,
      medicalFitness: true,
      goodHealth: true,
    },
    estimatedDuration: {
      eLearningHours: [8, 12],
      totalDays: [4, 7],
    },
  },
  // añade las demás…
];

export const certifications: Certification[] = rawCertifications.map((c) =>
  CertificationSchema.parse(c)
);
