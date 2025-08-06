import { allExperiences } from './experiences';
import { allDestinations } from './destinations';
import { allCertifications } from './certifications';
import { allSessions } from './sessions';
import { allDiveSites } from './dive-sites';
import { diveDifficulties } from './dive-filters/difficulties';
import { diveTypes } from './dive-filters/types';
import { diveConditions } from './dive-filters/conditions';
import { diveTags } from './dive-filters/tags';

export const getExperiences = () => allExperiences;
export { getDestinationsWithSeoUrl as getDestinations } from './destinations/utils';
export { getCertificationsWithSeoUrl as getCertifications } from './certifications/utils';

/**
 * Encuentra una experiencia y le adjunta sus datos relacionados
 */
export const getExperienceDetails = (slug: string) => {
  const experience = allExperiences.find((exp) => exp.slug === slug);
  if (!experience) return null;

  const destination = allDestinations.find(
    (dest) => dest.id === experience.destinationId
  );

  const certifications = allCertifications.filter((cert) =>
    experience.certificationIds.includes(cert.id)
  );

  const sessions = allSessions.filter((session) =>
    experience.sessionIds.includes(session.id)
  );

  return {
    ...experience,
    destination,
    certifications,
    sessions,
  };
};

/**
 * Verifica si una certificación tiene sesiones futuras disponibles.
 */
export const getCertificationAvailability = (certificationId: string) => {
  const today = new Date();

  // 1. Encontrar todas las experiencias que otorgan esta certificación
  const relevantExperiences = allExperiences.filter((exp) =>
    exp.certificationIds.includes(certificationId)
  );
  const relevantExperienceIds = relevantExperiences.map((exp) => exp.id);

  // 2. Encontrar todas las sesiones de esas experiencias
  const relevantSessions = allSessions.filter((session) =>
    relevantExperienceIds.includes(session.experienceId)
  );

  // 3. Comprobar si alguna de esas sesiones está disponible y es en el futuro
  const hasAvailableFutureSession = relevantSessions.some((session) => {
    const sessionDate = new Date(session.startDate);
    return (
      (session.availability === 'available' ||
        session.availability === 'few_spots') &&
      sessionDate > today
    );
  });

  return hasAvailableFutureSession ? 'available' : 'coming_soon';
};

// Devuelve las sesiones que están disponibles y son en el futuro
const getActiveSessions = () => {
  const today = new Date();
  return allSessions.filter((session) => {
    const sessionDate = new Date(session.startDate);
    return (
      (session.availability === 'available' ||
        session.availability === 'few_spots') &&
      sessionDate > today
    );
  });
};

// Devuelve los destinos que tienen al menos una sesión activa
export const getActiveDestinations = () => {
  const activeSessions = getActiveSessions();
  const activeExperienceIds = new Set(
    activeSessions.map((session) => session.experienceId)
  );

  const activeDestinationIds = new Set(
    allExperiences
      .filter((exp) => activeExperienceIds.has(exp.id))
      .map((exp) => exp.destinationId)
  );

  return allDestinations.filter((dest) => activeDestinationIds.has(dest.id));
};

// Devuelve los destinos que NO están en la lista de activos
export const getOtherDestinations = () => {
  const activeDestinationIds = new Set(
    getActiveDestinations().map((dest) => dest.id)
  );
  return allDestinations.filter((dest) => !activeDestinationIds.has(dest.id));
};

/**
 * Encuentra un objeto de dificultad por su ID.
 */
export const getDifficultyById = (id: string) => {
  return diveDifficulties.find((d) => d.id === id);
};

/**
 * Encuentra un objeto de tipo de buceo por su ID.
 */
export const getDiveTypeById = (id: string) => {
  return diveTypes.find((t) => t.id === id);
};

// ... funciones similares para getDiveConditionById y getDiveTagById ...

/**
 * Encuentra un sitio de buceo por su ID.
 */
export const getDiveSiteById = (id: string) => {
  return allDiveSites.find((site) => site.id === id);
};

/**
 * Encuentra un objeto de condición por su ID.
 */
export const getDiveConditionById = (id: string) => {
  return diveConditions.find((c) => c.id === id);
};

/**
 * Encuentra un objeto de etiqueta (tag) por su ID.
 */
export const getDiveTagById = (id: string) => {
  return diveTags.find((t) => t.id === id);
};

export const allDiveTags = diveTags;
