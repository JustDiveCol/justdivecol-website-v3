// src/content/certifications/index.ts
import { CertificationContentSchema, type CertificationContent } from './types';

type LoadedCertification = CertificationContent & { __filePath: string };

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

function loadAll(): LoadedCertification[] {
  const mods = import.meta.glob('./*.content.ts', { eager: true }) as Record<
    string,
    Record<string, unknown>
  >;

  const results: LoadedCertification[] = [];

  for (const [filePath, mod] of Object.entries(mods)) {
    for (const value of Object.values(mod)) {
      if (!isObject(value)) continue;
      const parsed = CertificationContentSchema.safeParse(value);
      if (!parsed.success) continue;

      results.push({ ...parsed.data, __filePath: filePath });
      break;
    }
  }

  return results;
}

let cache: LoadedCertification[] | null = null;
const getAll = () => (cache ??= loadAll());

export function listCertifications(): Readonly<LoadedCertification[]> {
  return getAll();
}

export function getCertificationById(id: CertificationContent['id']) {
  return getAll().find((c) => c.id === id) ?? null;
}

export function getCertificationBySlug(slug: CertificationContent['slug']) {
  return getAll().find((c) => c.slug === slug) ?? null;
}

export function getCertificationByCode(code: CertificationContent['code']) {
  return getAll().find((c) => c.code === code) ?? null;
}

/** Proyección estricta para tarjetas */
export type CertificationCardProjection = {
  id: CertificationContent['id'];
  slug: CertificationContent['slug'];
  name: CertificationContent['name'];
  code: CertificationContent['code'];
  level: CertificationContent['level'];
  agency: CertificationContent['agency'];
  published: CertificationContent['published'];
  minAge: number;
  maxDepthMeter: number;
  maxDepthFt: number;
  titleKey: string;
  subtitleKey?: string;
  imageData: CertificationContent['card']['imageData'];
  cardDes: CertificationContent['card']['descriptionKey'];
  seo: CertificationContent['seo'];
};

export function projectCertificationToCard(
  c: CertificationContent
): CertificationCardProjection {
  const withSubtitle = c.header as { subtitleKey?: string };
  return {
    id: c.id,
    slug: c.slug,
    name: c.name,
    code: c.code,
    level: c.level,
    agency: c.agency,
    published: c.published,
    minAge: c.minAge,
    maxDepthMeter: c.maxDepthMeter,
    maxDepthFt: c.maxDepthFt,
    titleKey: c.header.titleKey,
    subtitleKey: withSubtitle.subtitleKey,
    imageData: c.card.imageData,
    cardDes: c.card.descriptionKey,
    seo: c.seo,
  };
}

export function listCertificationCards(): CertificationCardProjection[] {
  return getAll().map(projectCertificationToCard);
}
