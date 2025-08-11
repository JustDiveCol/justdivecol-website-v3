// src/constants/certifications.schema.ts
import { z } from 'zod';

// ——— Certifications ———
export const CERTIFICATION = [
  { id: 'padi-open-water-diver', code: 'OWD', level: 'entry' },
  { id: 'padi-advanced-open-water-diver', code: 'AOWD', level: 'advanced' },
  { id: 'padi-rescue-diver', code: 'RD', level: 'rescue' },
] as const;

export type Certification = (typeof CERTIFICATION)[number];
export type CertificationId = Certification['id'];
export type CertificationCode = Certification['code'];
export type CertificationLevel = Certification['level'];

export const CertificationIdSchema = z.enum(
  CERTIFICATION.map((c) => c.id) as [CertificationId, ...CertificationId[]]
);
export const CertificationCodeSchema = z.enum(
  CERTIFICATION.map((c) => c.code) as [
    CertificationCode,
    ...CertificationCode[]
  ]
);
export const CertificationLevelSchema = z.enum(
  CERTIFICATION.map((c) => c.level) as [
    CertificationLevel,
    ...CertificationLevel[]
  ]
);

// ——— Agencies ———
export const AGENCY = [
  { id: 'PADI', name: 'Professional Association of Diving Instructors' },
  { id: 'SSI', name: 'Scuba Schools International (SSI)' },
] as const;

export type Agency = (typeof AGENCY)[number];
export type AgencyId = Agency['id'];
export type AgencyName = Agency['name'];

export const AgencyIdSchema = z.enum(
  AGENCY.map((a) => a.id) as [AgencyId, ...AgencyId[]]
);
export const AgencyNameSchema = z.enum(
  AGENCY.map((a) => a.name) as [AgencyName, ...AgencyName[]]
);
