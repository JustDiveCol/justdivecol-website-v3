// src/constants/i18n.ts

/** Todos los namespaces (archivos JSON) que cargas */
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
] as const;

/** Unión de todos los namespaces */
export type I18NNamespace = (typeof I18N_NAMESPACES)[number];

/** Todos los idiomas que soportas */
export const I18N_LANGUAGES = ['es', 'en'] as const;

/** Unión de todos los códigos de idioma */
export type I18NLanguage = (typeof I18N_LANGUAGES)[number];

/**
 * Mapea cada namespace a la ruta de su archivo JSON de traducciones.
 * Utiliza {{lng}} como marcador de posición para el código de idioma.
 */
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
} as const;

/**
 * Devuelve la ruta del recurso JSON para un namespace e idioma dados.
 * @param namespace - Uno de los I18NNamespace válidos
 * @param language - Uno de los I18NLanguage válidos
 * @returns Ruta del archivo JSON traducido correspondiente
 */
export function getI18nResourcePath(
  namespace: I18NNamespace,
  language: I18NLanguage
): string {
  const template = I18N_NAMESPACE_PATHS[namespace];
  return template.replace('{{lng}}', language);
}
