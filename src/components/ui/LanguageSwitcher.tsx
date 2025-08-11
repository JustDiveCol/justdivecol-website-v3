// src/components/ui/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  I18N_LANGUAGES,
  I18NLanguageSchema,
  type I18NLanguage,
} from '../../constants/i18n';

export const LanguageSwitcherComponent = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const current = (i18n.language as I18NLanguage) ?? I18N_LANGUAGES[0];
  const labelFor = (lng: I18NLanguage) =>
    t(`common:lang.${lng}`, lng.toUpperCase());

  const handleChangeLanguage = (lng: unknown) => {
    const parsed = I18NLanguageSchema.safeParse(lng);
    if (!parsed.success) return;
    if (parsed.data !== i18n.language) i18n.changeLanguage(parsed.data);
    setOpen(false);
  };

  // Cerrar con click afuera / Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  // ---- Si solo hay 2 idiomas, mostramos el diseño actual ----
  if (I18N_LANGUAGES.length === 2) {
    const [first, second] = I18N_LANGUAGES;
    return (
      <div className='flex items-center space-x-3 text-sm font-bold uppercase'>
        <button
          onClick={() => handleChangeLanguage(first)}
          className={
            i18n.language === first
              ? 'text-brand-cta-orange'
              : 'hover:text-brand-cta-orange transition-colors'
          }>
          {labelFor(first)}
        </button>
        <span className='text-brand-white/50'>|</span>
        <button
          onClick={() => handleChangeLanguage(second)}
          className={
            i18n.language === second
              ? 'text-brand-cta-orange'
              : 'hover:text-brand-cta-orange transition-colors'
          }>
          {labelFor(second)}
        </button>
      </div>
    );
  }

  // ---- Si hay más de 2 idiomas, mostramos el menú desplegable ----
  return (
    <div
      ref={ref}
      className='relative'>
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        aria-haspopup='menu'
        aria-expanded={open}
        className='flex items-center gap-1 text-sm font-bold uppercase text-white hover:text-brand-cta-orange transition-colors'>
        {labelFor(current)}
        <svg
          aria-hidden='true'
          viewBox='0 0 20 20'
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill='currentColor'>
          <path d='M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.084l3.71-3.854a.75.75 0 1 1 1.08 1.04l-4.24 4.4a.75.75 0 0 1-1.08 0l-4.24-4.4a.75.75 0 0 1 .02-1.06z' />
        </svg>
      </button>

      {open && (
        <div
          role='menu'
          aria-label={t('common:language', 'Idioma')}
          className='absolute right-0 mt-2 min-w-28 rounded-md bg-brand-primary-dark/95 shadow-lg ring-1 ring-white/10 backdrop-blur-sm p-1 z-50'>
          {I18N_LANGUAGES.map((lng) => {
            const active = i18n.language === lng;
            return (
              <button
                key={lng}
                role='menuitemradio'
                aria-checked={active}
                onClick={() => handleChangeLanguage(lng)}
                className={`w-full text-left rounded px-3 py-2 text-sm uppercase transition-colors ${
                  active
                    ? 'text-brand-cta-orange'
                    : 'text-white hover:bg-white/10'
                }`}
                type='button'>
                {labelFor(lng)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
