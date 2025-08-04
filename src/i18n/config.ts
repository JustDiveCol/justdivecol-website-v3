import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Usa el backend para cargar archivos JSON
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Activa logs en la consola para depuración
    debug: process.env.NODE_ENV === 'development',

    // Idioma de respaldo si el detectado no está disponible
    fallbackLng: 'es',

    // Namespaces (archivos de traducción) que usaremos
    ns: [
      'common',
      'home',
      'experiences',
      'about',
      'contact',
      'faqs',
      'principles',
      'legal',
    ],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false, // React ya se encarga de la sanitización
    },

    backend: {
      // Ruta a nuestros archivos de traducción en la carpeta `public`
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
