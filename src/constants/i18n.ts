// src/constants/i18n.ts

export const I18N_NAMESPACES = [
  'common',
  'home',
  'experiences',
  'aboutUs',
  'contact',
  'faqs',
  'principles',
  'legal',
  'certifications',
  'destinations',
  'dive-sites',
] as const;

export type I18NNamespace = (typeof I18N_NAMESPACES)[number];

export const I18N_LANGUAGES = ['es', 'en'] as const;

export type I18NLanguage = (typeof I18N_LANGUAGES)[number];

export const I18N_NAMESPACE_PATHS: Record<I18NNamespace, string> = {
  common: '/locales/{{lng}}/common.json',
  home: '/locales/{{lng}}/home.json',
  experiences: '/locales/{{lng}}/experiences.json',
  aboutUs: '/locales/{{lng}}/aboutUs.json',
  contact: '/locales/{{lng}}/contact.json',
  faqs: '/locales/{{lng}}/faqs.json',
  principles: '/locales/{{lng}}/principles.json',
  legal: '/locales/{{lng}}/legal.json',
  certifications: '/locales/{{lng}}/certifications.json',
  destinations: '/locales/{{lng}}/destinations.json',
  'dive-sites': '/locales/{{lng}}/dive-sites.json',
} as const;

export function getI18nResourcePath(
  namespace: I18NNamespace,
  language: I18NLanguage
): string {
  const template = I18N_NAMESPACE_PATHS[namespace];
  return template.replace('{{lng}}', language);
}
