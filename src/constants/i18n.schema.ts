// src/constants/i18n.schema.ts
import { z } from 'zod';

export const I18N_NAMESPACES_RAW = [
  'aboutUs',
  'certifications',
  'common',
  'contact',
  'experiences',
  'diveExperiences',
  'faq',
  'home',
  'legal',
  'principles',
  'destinations',
  'diveSites',
] as const;

export const I18N_LANGUAGES_RAW = ['es', 'en'] as const;

export const I18NNamespaceSchema = z.enum(I18N_NAMESPACES_RAW);
export const I18NLanguageSchema = z.enum(I18N_LANGUAGES_RAW);

export type I18NNamespace = z.infer<typeof I18NNamespaceSchema>;
export type I18NLanguage = z.infer<typeof I18NLanguageSchema>;
export type I18nPathTemplate = `/locales/{{lng}}/${string}.json`;

const I18nPathTemplateSchema = z
  .string()
  .regex(
    /^\/locales\/\{\{lng\}\}\/[A-Za-z0-9-]+\.json$/,
    'Invalid i18n path template'
  );

export const I18NNamespacePathsSchema = z.record(
  I18NNamespaceSchema,
  I18nPathTemplateSchema
);

export const I18N_NAMESPACE_PATHS_RAW = I18N_NAMESPACES_RAW.reduce(
  (acc, ns) => {
    acc[ns] = `/locales/{{lng}}/${ns}.json`;
    return acc;
  },
  {} as Record<I18NNamespace, I18nPathTemplate>
);

export const I18N_NAMESPACES_SAFE = z
  .array(I18NNamespaceSchema)
  .parse(I18N_NAMESPACES_RAW);
export const I18N_LANGUAGES_SAFE = z
  .array(I18NLanguageSchema)
  .parse(I18N_LANGUAGES_RAW);
export const I18N_NAMESPACE_PATHS_SAFE = I18NNamespacePathsSchema.parse(
  I18N_NAMESPACE_PATHS_RAW
);

export const toI18nLanguage = (v: unknown): I18NLanguage =>
  I18NLanguageSchema.parse(v);
export const toI18nNamespace = (v: unknown): I18NNamespace =>
  I18NNamespaceSchema.parse(v);

export function getI18nResourcePath(
  namespace: I18NNamespace,
  language: I18NLanguage
): string {
  const template = I18N_NAMESPACE_PATHS_SAFE[namespace];
  return template.replace('{{lng}}', language);
}
