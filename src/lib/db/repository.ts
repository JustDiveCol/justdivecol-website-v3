// src/lib/db/repository.ts
import { certifications } from './entities/certifications';
import { destinations } from './entities/destinations';
import { diveSites } from './entities/divesites';
import { experiences } from './entities/experiences';
import { sessions } from './entities/sessions';

export const validatePrerequisites = (list = certifications) => {
  const validIds = new Set(list.map((c) => c.id));
  list.forEach((cert) => {
    cert.prerequisiteIds.forEach((reqId) => {
      if (!validIds.has(reqId)) {
        throw new Error(
          `El prerequisito '${reqId}' de la certificación '${cert.id}' no existe`
        );
      }
    });
  });
};

export const validateRelations = () => {
  const destSet = new Set(destinations.map((d) => d.id));
  const expSet = new Set(experiences.map((e) => e.id));

  // diveSite.destinationId válido
  diveSites.forEach((s) => {
    if (!destSet.has(s.destinationId))
      throw new Error(`Dive-site ${s.id} aponta a destino inexistente`);
  });

  // experience.destinationId válido
  experiences.forEach((e) => {
    if (!destSet.has(e.destinationId))
      throw new Error(`Experience ${e.id} aponta a destino inexistente`);
  });

  // session.experienceId válido
  sessions.forEach((s) => {
    if (!expSet.has(s.experienceId))
      throw new Error(`Session ${s.id} aponta a experience inexistente`);
  });
};

validateRelations();

const destIds = new Set(destinations.map((d) => d.id));
const diveLvs = new Set(diveSites.map((c) => c.levelRequiredId));

diveSites.forEach((site) => {
  if (!destIds.has(site.destinationId)) {
    throw new Error(
      `Destino '${site.destinationId}' no existe (dive-site '${site.id}')`
    );
  }
  if (!diveLvs.has(site.levelRequiredId)) {
    throw new Error(
      `Certificación '${site.levelRequiredId}' requerida por '${site.id}' no existe`
    );
  }
});

/* --- Experience → Destination --- */
experiences.forEach((exp) => {
  if (!destIds.has(exp.destinationId)) {
    throw new Error(
      `Destination '${exp.destinationId}' missing (exp '${exp.id}')`
    );
  }
});

/* ---------- LOOK-UPS BÁSICOS ---------- */
export const getDestination = (id: string) =>
  destinations.find((d) => d.id === id);

export const getExperience = (id: string) =>
  experiences.find((e) => e.id === id);

export const getSession = (id: string) => sessions.find((s) => s.id === id);

/* ---------- RELACIONES 1-N ---------- */
export const getDiveSitesForDestination = (destId: string) =>
  diveSites.filter((s) => s.destinationId === destId);

export const getExperiencesForDestination = (destId: string) =>
  experiences.filter((e) => e.destinationId === destId);

export const getSessionsForExperience = (expId: string) =>
  sessions.filter((s) => s.experienceId === expId);

/* ---------- QUERIES COMBINADAS ---------- */
export const getUpcomingSessionsForDestination = (
  destId: string,
  from: Date = new Date()
) =>
  getExperiencesForDestination(destId)
    .flatMap((exp) => getSessionsForExperience(exp.id))
    .filter((s) => new Date(s.startDate) > from);

export const getAvailableSessions = (expId: string) =>
  getSessionsForExperience(expId).filter(
    (s) => s.availability === 'available' && s.seatsAvailable > 0
  );

export const getDestinationWithRelations = (destId: string) => {
  const dest = destinations.find((d) => d.id === destId);
  if (!dest) return undefined;

  const exps = getExperiencesForDestination(destId);
  const sess = exps.flatMap((e) => getSessionsForExperience(e.id));

  return { ...dest, experiences: exps, sessions: sess };
};
