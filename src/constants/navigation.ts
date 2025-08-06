// src/constants/navigation.ts

import { ROUTES } from './routes';
import type { UrlPath, RouteName } from './routes';

/**
 * Representa un enlace de navegación: ruta válida (UrlPath) y clave de traducción (RouteName).
 */
export interface NavLink {
  /** Ruta de la sección o página */
  path: UrlPath;
  /** Clave de i18n correspondiente al nombre del enlace */
  nameKey: RouteName;
}

/**
 * Lista de enlaces principales para el menú de navegación.
 * Usa las rutas de ROUTES para garantizar que siempre coincidan con las definidas.
 */
export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { path: ROUTES.home, nameKey: 'home' },
  { path: ROUTES.diveExperiences, nameKey: 'diveExperiences' },
  { path: ROUTES.diveSites, nameKey: 'diveSites' },
  { path: ROUTES.principles, nameKey: 'principles' },
  { path: ROUTES.aboutUs, nameKey: 'aboutUs' },
  { path: ROUTES.contact, nameKey: 'contact' },
];

export const FOOTER_LINKS: ReadonlyArray<NavLink> = [
  { path: ROUTES.policy, nameKey: 'policy' },
  { path: ROUTES.terms, nameKey: 'terms' },
  { path: ROUTES.privacy, nameKey: 'privacy' },
  { path: ROUTES.faq, nameKey: 'faq' },
  { path: ROUTES.diveSites, nameKey: 'diveSites' },
];

/**
 * Tipo derivado de NAV_LINKS, para usos tipados (array de NavLink)
 */
export type NavLinkItem = (typeof NAV_LINKS)[number];

export type FooterLinkItem = (typeof FOOTER_LINKS)[number];
