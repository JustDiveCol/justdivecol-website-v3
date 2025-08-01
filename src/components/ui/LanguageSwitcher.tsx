// src/components/ui/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * A UI component that allows the user to switch between supported languages.
 * It uses the 'useTranslation' hook from react-i18next to manage the language state.
 */
export const LanguageSwitcherComponent = () => {
  // El hook `useTranslation` nos da la instancia completa de i18n.
  // Esta instancia contiene el idioma actual y la función para cambiarlo.
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng: 'es' | 'en') => {
    // Si el idioma ya es el actual, no hacemos nada para evitar recargas innecesarias.
    if (lng === i18n.language) {
      return;
    }
    // `i18n.changeLanguage` ya es una función asíncrona que carga los recursos necesarios.
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex items-center space-x-3 text-sm font-bold uppercase'>
      <button
        onClick={() => handleChangeLanguage('es')}
        className={
          i18n.language === 'es'
            ? 'text-brand-cta-orange'
            : 'hover:text-brand-cta-orange transition-colors'
        }>
        ES
      </button>
      <span className='text-brand-white/50'>|</span>
      <button
        onClick={() => handleChangeLanguage('en')}
        className={
          i18n.language === 'en'
            ? 'text-brand-cta-orange'
            : 'hover:text-brand-cta-orange transition-colors'
        }>
        EN
      </button>
    </div>
  );
};
