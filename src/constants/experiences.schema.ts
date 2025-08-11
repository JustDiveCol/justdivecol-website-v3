// src/constants/experiences.schema.ts
import { z } from 'zod';

export const EXPERIENCES_IDS = ['exp-santa-marta', 'exp-providencia'] as const;

export type ExperienceId = (typeof EXPERIENCES_IDS)[number];
export const ExperienceIdSchema = z.enum(EXPERIENCES_IDS);

export const SESSIONS_IDS = [
  'santa-marta-sept-2025',
  'providencia-sept-2025',
] as const;

export type SessionId = (typeof SESSIONS_IDS)[number];
export const SessionIdSchema = z.enum(SESSIONS_IDS);
