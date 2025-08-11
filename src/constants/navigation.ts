// src/constants/navigation.ts
import {
  ROUTES,
  NavLinksSchema,
  type StaticRoutePath,
  type StaticRouteName,
} from './routes';

export type NavLink = {
  path: StaticRoutePath;
  nameKey: StaticRouteName;
};

const NAV_LINKS_RAW = [
  { path: ROUTES.home, nameKey: 'home' },
  { path: ROUTES.diveExperiences, nameKey: 'diveExperiences' },
  { path: ROUTES['dive-sites'], nameKey: 'dive-sites' },
  { path: ROUTES.principles, nameKey: 'principles' },
  { path: ROUTES.aboutUs, nameKey: 'aboutUs' },
  { path: ROUTES.contact, nameKey: 'contact' },
] as const satisfies ReadonlyArray<NavLink>;

const FOOTER_LINKS_RAW = [
  { path: ROUTES.policy, nameKey: 'policy' },
  { path: ROUTES.terms, nameKey: 'terms' },
  { path: ROUTES.privacy, nameKey: 'privacy' },
  { path: ROUTES.faq, nameKey: 'faq' },
  { path: ROUTES['dive-sites'], nameKey: 'dive-sites' },
] as const satisfies ReadonlyArray<NavLink>;

// ✅ Validación runtime e inmutabilidad desde Zod
export const NAV_LINKS = NavLinksSchema.readonly().parse(NAV_LINKS_RAW);
export const FOOTER_LINKS = NavLinksSchema.readonly().parse(FOOTER_LINKS_RAW);

// Tipos derivados de las constantes validadas
export type NavLinkItem = (typeof NAV_LINKS)[number];
export type FooterLink = (typeof FOOTER_LINKS)[number];
export type FooterLinkPath = FooterLink['path'];
export type FooterLinkNameKey = FooterLink['nameKey'];
