// src/constants/i18n.ts
import { z } from 'zod';

export const I18N_NAMESPACES = [
  'aboutUs',
  'certifications',
  'common',
  'contact',
  'experiences',
  'faq',
  'home',
  'legal',
  'principles',
  'destinations',
  'dive-sites',
] as const;

export type I18NNamespace = (typeof I18N_NAMESPACES)[number];

export const I18N_LANGUAGES = ['es', 'en'] as const;

export type I18NLanguage = (typeof I18N_LANGUAGES)[number];

export const I18N_NAMESPACE_PATHS = Object.fromEntries(
  I18N_NAMESPACES.map((ns) => [ns, `/locales/{{lng}}/${ns}.json`])
) as Record<I18NNamespace, string>;

export function getI18nResourcePath(
  namespace: I18NNamespace,
  language: I18NLanguage
): string {
  const template = I18N_NAMESPACE_PATHS[namespace];
  return template.replace('{{lng}}', language);
}

export const I18NLanguageSchema = z.enum(I18N_LANGUAGES);
export const I18NNamespaceSchema = z.enum(I18N_NAMESPACES);
