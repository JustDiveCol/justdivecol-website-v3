// src/constants/routes.ts

export const ROUTES = {
  // Páginas principales
  home: '/',
  diveExperiences: '/dive-experiences',
  certifications: '/certifications',
  'dive-sites': '/dive-sites',
  aboutUs: '/about-us',
  principles: '/principles',
  contact: '/contact',
  destinations: '/destinations',

  // Páginas legales
  policy: '/legal/policy',
  terms: '/legal/terms',
  privacy: '/legal/privacy',
  faq: '/faq',

  // Rutas detalle con parámetros
  certificationDetail: '/certifications/:certificationSlug',
  experienceDetail: '/experiences/:experienceSlug/:sessionSlug',
  destinationDetail: '/destinations/:destinationSlug',

  // Secciones internas de la página de experiencias (hash routes)
  upcomingTripsSection: '/dive-experiences#upcoming-trips-section',
  certificationsSection: '/dive-experiences#certifications-section',
  destinationsSection: '/dive-experiences#destinations-section',
  customExperiencesSection: '/dive-experiences#customs-trips-section',

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
