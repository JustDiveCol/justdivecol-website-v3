// src/constants/routes.schema.ts
import { z } from 'zod';

export const ROUTES = {
  // Páginas principales (ESTÁTICAS)
  home: '/',
  'dive-experiences': '/dive-experiences',
  certifications: '/certifications',
  'dive-sites': '/dive-sites',
  'about-us': '/about-us',
  principles: '/principles',
  contact: '/contact',
  destinations: '/destinations',

  // Páginas legales (ESTÁTICAS)
  policy: '/legal/policy',
  terms: '/legal/terms',
  privacy: '/legal/privacy',
  faq: '/faq',

  // Rutas detalle con parámetros (DINÁMICAS)
  certificationDetail: '/certifications/:certificationSlug',
  experienceDetail: '/experiences/:experienceSlug/:sessionSlug',
  destinationDetail: '/destinations/:destinationSlug',

  // Secciones internas (HASH)
  upcomingTripsSection: '/dive-experiences#upcoming-trips-section',
  certificationsSection: '/dive-experiences#certifications-section',
  destinationsSection: '/dive-experiences#destinations-section',
  customExperiencesSection: '/dive-experiences#customs-trips-section',

  // Varias (ESTÁTICAS)
  underConstruction: '/coming-soon',
  notFound: '/route-lost',
} as const;

export type RouteName = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteName];

export type DynamicRoute<Path extends string> = `${Path}/${string}`;
export type HashRoute<Path extends string> = `${Path}#${string}`;
export type UrlPath =
  | RoutePath
  | DynamicRoute<RoutePath>
  | HashRoute<RoutePath>;

/** Utilidades de pattern matching para filtrar rutas estáticas */
type Contains<
  S extends string,
  C extends string
> = S extends `${string}${C}${string}` ? true : false;

type ExcludeContaining<U extends string, C extends string> = U extends string
  ? Contains<U, C> extends true
    ? never
    : U
  : never;

type AllPaths = (typeof ROUTES)[keyof typeof ROUTES];
type NoParamPaths = ExcludeContaining<AllPaths, ':'>;
export type StaticRoutePath = ExcludeContaining<NoParamPaths, '#'>;

export type StaticRouteName = {
  [K in keyof typeof ROUTES]: (typeof ROUTES)[K] extends StaticRoutePath
    ? K
    : never;
}[keyof typeof ROUTES];

export type NavLink = {
  path: StaticRoutePath;
  nameKey: StaticRouteName;
};

const entries = Object.entries(ROUTES) as [RouteName, RoutePath][];
const staticEntries = entries.filter(
  ([, p]) => !p.includes(':') && !p.includes('#')
);

const staticNames = staticEntries.map(([k]) => k) as readonly StaticRouteName[];
const staticPaths = staticEntries.map(
  ([, v]) => v
) as readonly StaticRoutePath[];

export const RouteNameStaticSchema = z
  .string()
  .refine(
    (v): v is StaticRouteName =>
      (staticNames as readonly string[]).includes(v as string),
    { message: 'Invalid static route name' }
  ) as z.ZodType<StaticRouteName>;

export const RoutePathStaticSchema = z
  .string()
  .refine(
    (v): v is StaticRoutePath =>
      (staticPaths as readonly string[]).includes(v as string),
    { message: 'Invalid static route path' }
  ) as z.ZodType<StaticRoutePath>;

export const NavLinkSchema = z.object({
  path: RoutePathStaticSchema,
  nameKey: RouteNameStaticSchema,
});
export const NavLinksSchema = z.array(NavLinkSchema).readonly();

export function buildCertificationDetailRoute(
  certificationSlug: string
): UrlPath {
  return (ROUTES.certificationDetail as string).replace(
    ':certificationSlug',
    certificationSlug
  ) as UrlPath;
}

export function buildExperienceDetailRoute(
  experienceSlug: string,
  sessionSlug: string
): UrlPath {
  return (ROUTES.experienceDetail as string)
    .replace(':experienceSlug', experienceSlug)
    .replace(':sessionSlug', sessionSlug) as UrlPath;
}

export function buildDestinationDetailRoute(destinationSlug: string): UrlPath {
  return (ROUTES.destinationDetail as string).replace(
    ':destinationSlug',
    destinationSlug
  ) as UrlPath;
}

export function isStaticPath(path: string): path is StaticRoutePath {
  return !path.includes(':') && !path.includes('#');
}
export function isHashPath(path: string): path is `${string}#${string}` {
  return path.includes('#');
}
export function isDynamicTemplate(path: string): boolean {
  return path.includes(':');
}
