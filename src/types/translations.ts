// src/types/translations.ts
import commonJson from '../../public/locales/es/common.json';
import homeJson from '../../public/locales/es/home.json';

export type CommonKey = keyof typeof commonJson;
export type HomeKey = keyof typeof homeJson;

// Unión para pasársela a useTranslation
export type TranslationKey<NS extends string> = NS extends 'common'
  ? CommonKey
  : NS extends 'home'
  ? HomeKey
  : never;
