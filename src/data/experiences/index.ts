// src/data/experiences/index.ts

import baseSantaMarta from './santa-marta-exp';
import { allSessions } from '../sessions';
import type { Experience } from './styles';
import type { ExperienceSession } from '../sessions/styles';

const rawExperiences = [baseSantaMarta] as const;

export type ExperienceId = (typeof rawExperiences)[number]['id'];

export const allExperiences = rawExperiences.map((exp) => {
  const sessionIds = allSessions
    .filter((s: ExperienceSession) => s.experienceId === exp.id)
    .map((s) => s.id);

  return {
    ...exp,
    sessionIds,
  } as Experience;
}) as readonly Experience[];
