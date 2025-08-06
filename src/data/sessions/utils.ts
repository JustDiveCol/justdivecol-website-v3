// src/data/sessions/utils.ts
import { allSessions } from './index';
import { buildExperienceDetailRoute } from '../../constants/routes';
import type { ExperienceSessionId } from './index';
import type { UrlPath } from '../../constants/routes';
import type { ExperienceSession } from './styles';

export function getSessionById(
  id: ExperienceSessionId
): ExperienceSession | undefined {
  return allSessions.find((s) => s.id === id);
}

export function getSessionPagePaths(): {
  session: ExperienceSession;
  urlPath: UrlPath;
}[] {
  return allSessions.map((session) => {
    const urlPath = buildExperienceDetailRoute(
      session.experienceId.replace('exp-', ''),
      session.id
    );
    return { session, urlPath };
  });
}
