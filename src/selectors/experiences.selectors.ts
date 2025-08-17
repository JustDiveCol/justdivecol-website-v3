// src/selectors/experiences.selectors.ts
import {
  getExperienceBySlug,
  listSessionsForExperience,
  projectExperienceToCard,
  resolveExperienceForSession,
} from '../content/experiences';

import {
  deriveSessionAvailability,
  fewSpotsThreshold,
} from '../lib/availability';
import type { AvailableType } from '../constants';

const toUTC = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};
const todayUTC = () => {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
};

type SessionWithStatus<
  TBase extends { seatsAvailable: number; capacity: number; startDate: string }
> = TBase & {
  derivedAvailability: AvailableType;
  fewSpotsThreshold: number;
};

export function getExperiencePageData(slug: string) {
  const exp = getExperienceBySlug(slug);
  if (!exp) return null;

  const card = projectExperienceToCard(exp);
  const sessionsBase = listSessionsForExperience(exp.id);
  const today = todayUTC();

  const sessions: Array<SessionWithStatus<(typeof sessionsBase)[number]>> =
    sessionsBase.map((s) => {
      const derivedAvailability = deriveSessionAvailability({
        seatsAvailable: s.seatsAvailable,
        capacity: s.capacity,
      });

      return {
        ...s,
        derivedAvailability,
        fewSpotsThreshold: fewSpotsThreshold(s.capacity),
      };
    });

  const upcomingSessions = sessions.filter((s) => toUTC(s.startDate) >= today);

  upcomingSessions.sort((a, b) => toUTC(a.startDate) - toUTC(b.startDate));

  return {
    experience: exp,
    card,
    sessions: upcomingSessions,
  };
}

export function getExperienceSessionPageData(slug: string, sessionId: string) {
  const resolved = resolveExperienceForSession(slug, sessionId);
  if (!resolved) return null;

  const { experience, session, sessionPricing, certifications } = resolved;
  const card = projectExperienceToCard(experience);

  const sessionWithStatus: SessionWithStatus<typeof session> = {
    ...session,
    derivedAvailability: deriveSessionAvailability({
      seatsAvailable: session.seatsAvailable,
      capacity: session.capacity,
    }),
    fewSpotsThreshold: fewSpotsThreshold(session.capacity),
  };

  return {
    experience,
    session: sessionWithStatus,
    card,
    sessionPricing,
    certifications,
  };
}
