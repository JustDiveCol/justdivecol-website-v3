// src/content/experiences/index.ts
import { ExperienceContentSchema, type ExperienceContent } from './types';
import {
  ExperienceSessionContentSchema,
  type ExperienceSessionContent,
  type ExperienceSessionOverrides,
} from './sessions/types';

type LoadedExperience = ExperienceContent & { __filePath: string };
type LoadedSession = ExperienceSessionContent & { __filePath: string };

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

/* ----------------------------- LOADERS ----------------------------- */

function loadAllExperiences(): LoadedExperience[] {
  const mods = import.meta.glob('./*.content.ts', { eager: true }) as Record<
    string,
    Record<string, unknown>
  >;

  const results: LoadedExperience[] = [];

  for (const [filePath, mod] of Object.entries(mods)) {
    for (const value of Object.values(mod)) {
      if (!isObj(value)) continue;
      const parsed = ExperienceContentSchema.safeParse(value);
      if (!parsed.success) continue;
      results.push({ ...parsed.data, __filePath: filePath });
      break;
    }
  }
  return results;
}

function loadAllSessions(): LoadedSession[] {
  const mods = import.meta.glob('./sessions/*.content.ts', {
    eager: true,
  }) as Record<string, Record<string, unknown>>;

  const results: LoadedSession[] = [];

  for (const [filePath, mod] of Object.entries(mods)) {
    for (const value of Object.values(mod)) {
      if (!isObj(value)) continue;
      const parsed = ExperienceSessionContentSchema.safeParse(value);
      if (!parsed.success) continue;
      results.push({ ...parsed.data, __filePath: filePath });
      break;
    }
  }
  return results;
}

/* ------------------------------ CACHE ------------------------------ */

let __experiences: LoadedExperience[] | null = null;
let __sessions: LoadedSession[] | null = null;

function getExperiences() {
  return (__experiences ??= loadAllExperiences());
}
function getSessions() {
  return (__sessions ??= loadAllSessions());
}

/* ------------------------------ INDEXES ---------------------------- */

const _expById = new Map<string, LoadedExperience>();
const _expBySlug = new Map<string, LoadedExperience>();
const _sessionsById = new Map<string, LoadedSession>();
const _sessionsByExperienceId = new Map<string, LoadedSession[]>();

function ensureIndexes() {
  if (_expById.size === 0) {
    for (const e of getExperiences()) {
      if (_expById.has(e.id))
        throw new Error(`[experiences] duplicated id: ${e.id}`);
      _expById.set(e.id, e);
      _expBySlug.set(e.slug, e);
    }
  }
  if (_sessionsById.size === 0) {
    for (const s of getSessions()) {
      if (_sessionsById.has(s.id))
        throw new Error(`[sessions] duplicated id: ${s.id}`);
      _sessionsById.set(s.id, s);
      const arr = _sessionsByExperienceId.get(s.experienceId) ?? [];
      arr.push(s);
      _sessionsByExperienceId.set(s.experienceId, arr);
    }
    // ordena sesiones por fecha de inicio
    for (const [k, arr] of _sessionsByExperienceId.entries()) {
      arr.sort((a, b) => isoDateToUTC(a.startDate) - isoDateToUTC(b.startDate));
      _sessionsByExperienceId.set(k, arr);
    }
  }
}

/* ------------------------------ API -------------------------------- */

export function listExperiences() {
  ensureIndexes();
  return getExperiences();
}
export function getExperienceById(id: ExperienceContent['id']) {
  ensureIndexes();
  return _expById.get(id) ?? null;
}
export function getExperienceBySlug(slug: ExperienceContent['slug']) {
  ensureIndexes();
  return _expBySlug.get(slug) ?? null;
}

export function listSessions() {
  ensureIndexes();
  return getSessions();
}
export function getSessionById(id: ExperienceSessionContent['id']) {
  ensureIndexes();
  return _sessionsById.get(id) ?? null;
}
export function listSessionsForExperience(
  experienceId: ExperienceContent['id']
) {
  ensureIndexes();
  return _sessionsByExperienceId.get(experienceId) ?? [];
}
export function getNextUpcomingSession(
  experienceId: ExperienceContent['id'],
  now = new Date()
) {
  ensureIndexes();
  const n = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return (
    (listSessionsForExperience(experienceId) || []).find(
      (s) => isoDateToUTC(s.startDate) >= n
    ) ?? null
  );
}

/* --------------------------- PROJECTIONS --------------------------- */

export type ExperienceCardProjection = {
  id: ExperienceContent['id'];
  slug: ExperienceContent['slug'];
  destinationId: ExperienceContent['destinationId'];
  titleKey: string; // header.titleKey
  subtitleKey?: string; // si existe en PageHeaderPropsSchema
  imageData: ExperienceContent['header']['imageData']; // usamos header como card
  seo: ExperienceContent['seo'];
  nextSessionId?: string | null;
  nextSessionStart?: string | null;
  availability?: ExperienceSessionContent['availability'] | null;
};

export function projectExperienceToCard(
  e: ExperienceContent
): ExperienceCardProjection {
  const anyHeader = e.header as {
    subtitleKey?: string;
    imageData: ExperienceContent['header']['imageData'];
  };
  const next = getNextUpcomingSession(e.id) ?? null;
  return {
    id: e.id,
    slug: e.slug,
    destinationId: e.destinationId,
    titleKey: e.header.titleKey,
    subtitleKey: anyHeader.subtitleKey,
    imageData: anyHeader.imageData,
    seo: e.seo,
    nextSessionId: next?.id ?? null,
    nextSessionStart: next?.startDate ?? null,
    availability: next?.availability ?? null,
  };
}

export function listExperienceCards(): ExperienceCardProjection[] {
  ensureIndexes();
  return getExperiences().map(projectExperienceToCard);
}

/* -------------------- RESOLVER EXPERIENCIA+SESIÓN ------------------- */

/**
 * Merge específico de tus overrides:
 * - Objetos: si hay override -> reemplazo completo de esa sección.
 * - Arrays (e.g., itinerary.days): si hay override -> reemplazo completo (no mezclamos índices).
 * Si quieres un "deep merge" por días, te lo preparo aparte.
 */
function applyOverrides(
  base: ExperienceContent,
  ov: ExperienceSessionOverrides | undefined
) {
  if (!ov) return base;

  return {
    ...base,
    seo: ov.seo ?? base.seo,
    header: ov.header ?? base.header,
    description: ov.description ?? base.description,
    itinerary: ov.itinerary ?? base.itinerary,
    whatIsIncluded: ov.whatIsIncluded ?? base.whatIsIncluded,
    whatIsNotIncluded: ov.whatIsNotIncluded ?? base.whatIsNotIncluded,
    gallery: ov.gallery ?? base.gallery,
    ctaButton: ov.ctaButton ?? base.ctaButton,
    cta: ov.cta ?? base.cta,
  } satisfies ExperienceContent;
}

/**
 * Resuelve una vista materializada de la experiencia para una sesión (con overrides),
 * devolviendo además metadatos útiles de la sesión.
 */
export type ResolvedExperienceForSession = {
  experience: ExperienceContent; // experiencia con overrides aplicados
  session: ExperienceSessionContent; // la sesión
  sessionPricing: ExperienceSessionContent['pricingOptions'];
  certifications?: ExperienceSessionContent['certificationIds'];
};

export function resolveExperienceForSession(
  experienceIdOrSlug: string,
  sessionId: string
) {
  ensureIndexes();

  const base =
    _expById.get(experienceIdOrSlug) ??
    _expBySlug.get(experienceIdOrSlug) ??
    null;
  if (!base) return null;

  const session = _sessionsById.get(sessionId) ?? null;
  if (!session || session.experienceId !== base.id) return null;

  const merged = applyOverrides(base, session.overrides);

  const out: ResolvedExperienceForSession = {
    experience: merged,
    session,
    sessionPricing: session.pricingOptions,
    certifications: session.certificationIds,
  };
  return out;
}

/* ----------------------------- HELPERS ------------------------------ */

function isoDateToUTC(isoYYYYMMDD: string) {
  // ‘2025-09-26’ -> millis UTC a medianoche
  const [y, m, d] = isoYYYYMMDD.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
}
