// src/data/experiences/utils.ts
import { allExperiences, type ExperienceId } from './index';
import { allSessions, type ExperienceSessionId } from '../sessions';
import { buildExperienceDetailRoute } from '../../constants/routes';
import type { Experience } from './styles';
import type { ExperienceSession } from '../sessions/styles';

export interface ExperienceSessionPageData {
  experience: Experience;
  session: ExperienceSession;
  urlPath: string;
}

export function getExperienceById(id: ExperienceId): Experience | undefined {
  return allExperiences.find((exp) => exp.id === id);
}

export function getSessionsForExperience(
  id: ExperienceId
): ExperienceSession[] {
  return allSessions.filter((s) => s.experienceId === id);
}

export function getExperienceSessionPages(): ExperienceSessionPageData[] {
  return allSessions.flatMap((session) => {
    const experience = getExperienceById(session.experienceId);
    if (!experience) return [];
    const urlPath = buildExperienceDetailRoute(
      experience.slug,
      session.id as ExperienceSessionId
    );
    return [{ experience, session, urlPath }];
  });
}
