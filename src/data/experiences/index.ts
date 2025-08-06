// src/data/experiences/index.ts
import santaMartaFunDive from './santa-marta-fun-dive';

import type { Experience } from '../../types/data';

const experiencesList = [santaMartaFunDive] as const;

export type ExperienceId = (typeof experiencesList)[number]['id'];

export const allExperiences: readonly Experience[] = experiencesList;
