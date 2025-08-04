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
] as const;

/** Unión de todos los namespaces */
export type I18NNamespace = (typeof I18N_NAMESPACES)[number];

/** Todos los idiomas que soportas */
export const I18N_LANGUAGES = ['es', 'en'] as const;

/** Unión de todos los códigos de idioma */
export type I18NLanguage = (typeof I18N_LANGUAGES)[number];

export const SHARED_TRANSLATION_KEYS = {
  MORE_LABEL: 'more_label',
};
