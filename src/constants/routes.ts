// src/constants/routes.ts

/**
 * Todas las rutas de la aplicación, definidas como literales constantes.
 * - Rutas estáticas
 * - Rutas con parámetros (detalle)
 * - Rutas con hash para secciones
 */
export const ROUTES = {
  // Páginas principales
  home: '/',
  diveExperiences: '/dive-experiences',
  certifications: '/certifications',
  diveSites: '/dive-sites',
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

/**
 * Nombre de las rutas (claves de ROUTES).
 * Ejemplo: 'home' | 'diveExperiences' | 'certificationDetail' | ...
 */
export type RouteName = keyof typeof ROUTES;

/**
 * Ruta estática definida en ROUTES.
 * Ejemplo: '/', '/about-us', '/certifications/:certificationSlug', '/dive-experiences#section'
 */
export type RoutePath = (typeof ROUTES)[RouteName];

/**
 * Ruta dinámica con parámetro extra, p.ej. '/certifications/:slug/anything'
 */
export type DynamicRoute<Path extends string> = `${Path}/${string}`;

/**
 * Ruta de sección con hash, p.ej. '/dive-experiences#section-id'
 */
export type HashRoute<Path extends string> = `${Path}#${string}`;

/**
 * Unión de todas las rutas válidas:
 * - Rutas estáticas (RoutePath)
 * - Rutas dinámicas (DynamicRoute<RoutePath>)
 * - Hash routes (HashRoute<RoutePath>)
 */
export type UrlPath =
  | RoutePath
  | DynamicRoute<RoutePath>
  | HashRoute<RoutePath>;

/**
 * Helpers para construir rutas de detalle reemplazando parámetros.
 */
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
