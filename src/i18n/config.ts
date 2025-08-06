// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import { I18N_LANGUAGES, I18N_NAMESPACES } from '../constants/i18n';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: process.env.NODE_ENV === 'development',

    fallbackLng: 'es',

    ns: I18N_NAMESPACES as readonly string[],

    supportedLngs: I18N_LANGUAGES as readonly string[],

    defaultNS: 'common',

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
