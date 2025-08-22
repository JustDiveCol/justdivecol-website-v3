// src/constants/experiences.schema.ts
import { z } from 'zod';

export const EXPERIENCES_IDS = [
  'exp-santa-marta',
  'exp-isla-fuerte',
  'exp-san-andres',
  'exp-providencia',
] as const;

export type ExperienceId = (typeof EXPERIENCES_IDS)[number];
export const ExperienceIdSchema = z.enum(EXPERIENCES_IDS);
