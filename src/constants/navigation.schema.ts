// src/constants/navigation.schema.ts
import {
  ROUTES,
  NavLinksSchema,
  type StaticRoutePath,
  type StaticRouteName,
} from './routes.schema';

type NavLinkRaw = {
  path: StaticRoutePath;
  nameKey: StaticRouteName;
};

export const NAV_LINKS_RAW = [
  { path: ROUTES.home, nameKey: 'home' },
  { path: ROUTES['dive-experiences'], nameKey: 'dive-experiences' },
  { path: ROUTES['dive-sites'], nameKey: 'dive-sites' },
  { path: ROUTES.principles, nameKey: 'principles' },
  { path: ROUTES['about-us'], nameKey: 'about-us' },
  { path: ROUTES.contact, nameKey: 'contact' },
] as const satisfies readonly NavLinkRaw[];

export const FOOTER_LINKS_RAW = [
  { path: ROUTES.policy, nameKey: 'policy' },
  { path: ROUTES.terms, nameKey: 'terms' },
  { path: ROUTES.privacy, nameKey: 'privacy' },
  { path: ROUTES.faq, nameKey: 'faq' },
  { path: ROUTES['dive-sites'], nameKey: 'dive-sites' },
] as const satisfies readonly NavLinkRaw[];

export const NAV_LINKS: readonly NavLinkRaw[] =
  NavLinksSchema.readonly().parse(NAV_LINKS_RAW);

export const FOOTER_LINKS: readonly NavLinkRaw[] =
  NavLinksSchema.readonly().parse(FOOTER_LINKS_RAW);

export type NavLinkItem = (typeof NAV_LINKS)[number];
export type FooterLink = (typeof FOOTER_LINKS)[number];
export type FooterLinkPath = FooterLink['path'];
export type FooterLinkNameKey = FooterLink['nameKey'];

export const findNavLinkByPath = (path: StaticRoutePath) =>
  NAV_LINKS.find((l) => l.path === path);
