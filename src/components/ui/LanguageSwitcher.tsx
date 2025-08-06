// src/components/ui/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';
import type { I18NLanguage } from '../../constants/i18n';

export const LanguageSwitcherComponent = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng: I18NLanguage) => {
    if (lng === i18n.language) {
      return;
    }

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
