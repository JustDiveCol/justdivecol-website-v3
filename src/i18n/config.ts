// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import {
  I18N_LANGUAGES_SAFE,
  I18N_NAMESPACES_SAFE,
} from '../constants/i18n.schema';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',

    fallbackLng: 'es',
    supportedLngs: I18N_LANGUAGES_SAFE as readonly string[],
    ns: I18N_NAMESPACES_SAFE as readonly string[],
    defaultNS: 'common',

    load: 'languageOnly',

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      order: ['localStorage', 'querystring', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage'],

      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      htmlTag: document.documentElement,
    },

    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
    },
  });

export default i18n;
