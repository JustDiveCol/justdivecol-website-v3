// src/constants/navigation.ts

import { ROUTES } from './routes';
import type { UrlPath, RouteName } from './routes';

export type NavLink = {
  path: UrlPath;
  nameKey: RouteName;
};

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { path: ROUTES.home, nameKey: 'home' },
  { path: ROUTES.diveExperiences, nameKey: 'diveExperiences' },
  { path: ROUTES['dive-sites'], nameKey: 'dive-sites' },
  { path: ROUTES.principles, nameKey: 'principles' },
  { path: ROUTES.aboutUs, nameKey: 'aboutUs' },
  { path: ROUTES.contact, nameKey: 'contact' },
];

export const FOOTER_LINKS: ReadonlyArray<NavLink> = [
  { path: ROUTES.policy, nameKey: 'policy' },
  { path: ROUTES.terms, nameKey: 'terms' },
  { path: ROUTES.privacy, nameKey: 'privacy' },
  { path: ROUTES.faq, nameKey: 'faq' },
  { path: ROUTES['dive-sites'], nameKey: 'dive-sites' },
];

export type NavLinkItem = (typeof NAV_LINKS)[number];

export type FooterLink = (typeof FOOTER_LINKS)[number];
export type FooterLinkPath = FooterLink['path'];
export type FooterLinkNameKey = FooterLink['nameKey'];
