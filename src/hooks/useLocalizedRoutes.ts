// src/hooks/useLocalizedRoutes.ts
import { useTranslation } from 'react-i18next';

export const useLocalizedRoutes = () => {
  const { i18n } = useTranslation();

  const to = (path: string) => {
    const lang = i18n.language;
    // Asegura que no se duplique el prefijo del idioma
    if (path.startsWith(`/${lang}`)) {
      return path;
    }
    // Añade el prefijo del idioma
    return `/${lang}${path}`;
  };

  return { to };
};
