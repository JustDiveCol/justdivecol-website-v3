import { z } from 'zod';
import { zStr } from './helpers/schemaUtils';

import type {
  AgencyId,
  AvailableType,
  CertificationCode,
  CertificationId,
  CertificationLevel,
  CountryId,
  CurrencyId,
  DestinationId,
  DiveConditionId,
  DiveDifficultyId,
  DiveLevelId,
  DiveTagId,
  DiveTypeId,
  ExperienceId,
  SessionId,
} from './constants';

// ——— Certification ———
export const CertificationSchema = z.object({
  id: zStr<CertificationId>(),
  code: zStr<CertificationCode>(),
  level: zStr<CertificationLevel>(),
  agency: zStr<AgencyId>(),
  minAge: z.number().int().min(8),
  maxDepthMeter: z.number().int(),
  maxDepthFt: z.number().int(),
  prerequisiteIds: z.array(zStr<CertificationId>()),
  requirements: z.object({
    swimAbility: z.boolean(),
    medicalFitness: z.boolean(),
    goodHealth: z.boolean(),
  }),
  estimatedDuration: z.object({
    eLearningHours: z.tuple([z.number(), z.number()]), // [min, max]
    totalDays: z.tuple([z.number(), z.number()]), // [min, max]
  }),
});

export type Certification = z.infer<typeof CertificationSchema>;

// ——— Destination ———
export const DestinationSchema = z.object({
  id: zStr<DestinationId>(),
  slug: z.string(),
  country: zStr<CountryId>(),
  coords: z
    .tuple([z.number(), z.number()])
    .describe('[lon, lat] — must be in WGS84'),
  minZoom: z.number(),
  maxZoom: z.number(),
});
export type Destination = z.infer<typeof DestinationSchema>;

// ——— Dive-Site ———
export const DiveSiteSchema = z.object({
  id: z.string(),
  nameKey: z.string(),
  destinationId: zStr<DestinationId>(),
  coordinates: z
    .tuple([z.number(), z.number()])
    .describe('[lon, lat] — must be in WGS84'),
  maxDepthMeter: z.number().int(),
  maxDepthFt: z.number().int(),
  levelRequiredId: zStr<DiveLevelId>(),
  difficultyId: zStr<DiveDifficultyId>(),
  typeIds: z.array(zStr<DiveTypeId>()),
  conditionsIds: z.array(zStr<DiveConditionId>()),
  tagsIds: z.array(zStr<DiveTagId>()),

  isTopSite: z.boolean().default(false),
});
export type DiveSite = z.infer<typeof DiveSiteSchema>;

// ——— Experience ———
export const ExperienceSchema = z.object({
  id: zStr<ExperienceId>(),
  slug: z.string(),
  destinationId: zStr<DestinationId>(),
});
export type Experience = z.infer<typeof ExperienceSchema>;

// ——— Session ———
export const PricingOptionSchema = z.object({
  id: z.string(),
  price: z.number().positive(),
  currency: zStr<CurrencyId>(),
});

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Fecha ISO-8601 inválida' });

export const SessionSchema = z
  .object({
    id: zStr<SessionId>(),
    experienceId: zStr<ExperienceId>(),
    startDate: isoDate,
    endDate: isoDate,
    capacity: z.number().int().positive(),
    seatsAvailable: z.number().int().min(0),
    availability: zStr<AvailableType>(),
    creyentes: z.boolean().default(false),
    pricingOptions: z.array(PricingOptionSchema),
    certificationIds: z.array(zStr<CertificationId>()),
  })
  .refine((s) => Date.parse(s.startDate) < Date.parse(s.endDate), {
    message: 'startDate must be earlier than endDate',
  })
  .refine((s) => s.seatsAvailable <= s.capacity, {
    message: 'seatsAvailable can’t exceed capacity',
  });

export type Session = z.infer<typeof SessionSchema>;
