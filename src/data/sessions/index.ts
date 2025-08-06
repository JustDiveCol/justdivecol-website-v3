// src/data/sessions/index.ts
import santaMartaFunDiveOct2025 from './santa-marta-fun-dive-oct-2025';
import type { ExperienceSession } from './styles';

const sessionsList = [
  santaMartaFunDiveOct2025,
] as const satisfies readonly ExperienceSession[];

export type ExperienceSessionId = (typeof sessionsList)[number]['id'];
export const allSessions = sessionsList;
