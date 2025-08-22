// src/content/destinations/index.ts
import { DestinationContentSchema, type DestinationContent } from './types';
import {
  DiveSiteContentSchema,
  type DiveSiteContent,
} from './dive-sites/types';

export type LoadedDestination = DestinationContent & { __filePath: string };
export type LoadedDiveSite = DiveSiteContent & { __filePath: string };

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

function loadAllDestinations(): LoadedDestination[] {
  const mods = import.meta.glob('./*.content.ts', { eager: true }) as Record<
    string,
    Record<string, unknown>
  >;

  const results: LoadedDestination[] = [];

  for (const [filePath, mod] of Object.entries(mods)) {
    for (const value of Object.values(mod)) {
      if (!isObj(value)) continue;
      const parsed = DestinationContentSchema.safeParse(value);
      if (!parsed.success) continue;
      results.push({ ...parsed.data, __filePath: filePath });
      break;
    }
  }

  return results;
}

function loadAllDiveSites(): LoadedDiveSite[] {
  const mods = import.meta.glob('./dive-sites/*.content.ts', {
    eager: true,
  }) as Record<string, Record<string, unknown>>;

  const results: LoadedDiveSite[] = [];

  for (const [filePath, mod] of Object.entries(mods)) {
    for (const value of Object.values(mod)) {
      if (!isObj(value)) continue;

      const single = DiveSiteContentSchema.safeParse(value);
      if (single.success) {
        results.push({
          ...(single.data as DiveSiteContent),
          __filePath: filePath,
        });
        continue;
      }

      let addedAny = false;
      for (const siteCandidate of Object.values(value)) {
        if (!isObj(siteCandidate)) continue;
        const parsed = DiveSiteContentSchema.safeParse(siteCandidate);
        if (!parsed.success) continue;
        results.push({
          ...(parsed.data as DiveSiteContent),
          __filePath: filePath,
        });
        addedAny = true;
      }
      if (addedAny) continue;
    }
  }

  return results;
}

let __destinations: LoadedDestination[] | null = null;
let __diveSites: LoadedDiveSite[] | null = null;

function getDestinations(): LoadedDestination[] {
  return (__destinations ??= loadAllDestinations());
}
function getDiveSites(): LoadedDiveSite[] {
  return (__diveSites ??= loadAllDiveSites());
}

const _destById = new Map<string, LoadedDestination>();
const _destBySlug = new Map<string, LoadedDestination>();
const _sitesById = new Map<string, LoadedDiveSite>();
const _sitesByDestinationId = new Map<string, LoadedDiveSite[]>();

function ensureIndexes() {
  if (_destById.size === 0) {
    for (const d of getDestinations()) {
      if (_destById.has(d.id)) {
        throw new Error(`[destinations] duplicated destination id: ${d.id}`);
      }
      _destById.set(d.id, d);
      _destBySlug.set(d.slug, d);
    }
  }
  if (_sitesById.size === 0) {
    for (const s of getDiveSites()) {
      if (_sitesById.has(s.id)) {
        throw new Error(`[dive-sites] duplicated dive site id: ${s.id}`);
      }
      _sitesById.set(s.id, s);
      const arr = _sitesByDestinationId.get(s.destinationId) ?? [];
      arr.push(s);
      _sitesByDestinationId.set(s.destinationId, arr);
    }
  }
}

export function listDestinations(): Readonly<LoadedDestination[]> {
  ensureIndexes();
  return getDestinations();
}
export function getDestinationById(id: DestinationContent['id']) {
  ensureIndexes();
  return _destById.get(id) ?? null;
}
export function getDestinationBySlug(slug: DestinationContent['slug']) {
  ensureIndexes();
  return _destBySlug.get(slug) ?? null;
}

/** API pública — Dive Sites */
export function listDiveSites(): Readonly<LoadedDiveSite[]> {
  ensureIndexes();
  return getDiveSites();
}
export function getDiveSiteById(id: DiveSiteContent['id']) {
  ensureIndexes();
  return _sitesById.get(id) ?? null;
}
export function listDiveSitesForDestination(
  destinationId: DestinationContent['id']
) {
  ensureIndexes();
  return _sitesByDestinationId.get(destinationId) ?? [];
}

export type DestinationCardProjection = {
  id: DestinationContent['id'];
  slug: DestinationContent['slug'];
  country: DestinationContent['country'];
  titleKey: string;
  name: string;
  subtitleKey?: string;
  imageData: DestinationContent['card']['imageData'];
  seo: DestinationContent['seo'];
  coords: DestinationContent['coords']; // [lon, lat]
  minZoom: number;
  maxZoom: number;
  diveSitesCount: number;
};

export function projectDestinationToCard(
  d: DestinationContent
): DestinationCardProjection {
  const headerAny = d.header as { subtitleKey?: string };
  const sitesCount = (_sitesByDestinationId.get(d.id) ?? []).length;
  return {
    id: d.id,
    slug: d.slug,
    country: d.country,
    titleKey: d.header.titleKey,
    name: d.name,
    subtitleKey: headerAny.subtitleKey,
    imageData: d.card.imageData,
    seo: d.seo,
    coords: d.coords,
    minZoom: d.minZoom,
    maxZoom: d.maxZoom,
    diveSitesCount: sitesCount,
  };
}

export function listDestinationCards(): DestinationCardProjection[] {
  ensureIndexes();
  return getDestinations().map(projectDestinationToCard);
}

type DiveSitePhotoItem = NonNullable<DiveSiteContent['photos']>[number];

export type DiveSiteProjection = {
  id: DiveSiteContent['id'];
  nameKey: DiveSiteContent['nameKey'];
  destinationId: DiveSiteContent['destinationId'];
  isTopSite: boolean;
  coordinates: DiveSiteContent['coordinates']; // [lon, lat]
  maxDepthMeter: number;
  maxDepthFt: number;
  levelRequiredId: DiveSiteContent['levelRequiredId'];
  difficultyId: DiveSiteContent['difficultyId'];
  typeIds: DiveSiteContent['typeIds'];
  conditionsIds: DiveSiteContent['conditionsIds'];
  descriptionKey: DiveSiteContent['descriptionKey'];
  tagsIds: DiveSiteContent['tagsIds'];
  photo?: DiveSitePhotoItem;
};

export function projectDiveSite(s: DiveSiteContent): DiveSiteProjection {
  return {
    id: s.id,
    nameKey: s.nameKey,
    destinationId: s.destinationId,
    isTopSite: s.isTopSite,
    coordinates: s.coordinates,
    maxDepthMeter: s.maxDepthMeter,
    maxDepthFt: s.maxDepthFt,
    levelRequiredId: s.levelRequiredId,
    difficultyId: s.difficultyId,
    typeIds: s.typeIds,
    conditionsIds: s.conditionsIds,
    descriptionKey: s.descriptionKey,
    tagsIds: s.tagsIds,
    photo: s.photos?.[0] ?? undefined,
  };
}

export function listDiveSiteProjectionsForDestination(
  destId: string
): DiveSiteProjection[] {
  ensureIndexes();
  return (_sitesByDestinationId.get(destId) ?? []).map(projectDiveSite);
}
