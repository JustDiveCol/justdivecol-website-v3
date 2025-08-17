// src/hooks/useLocalizedRoutes.ts
import { useTranslation } from 'react-i18next';

export const useLocalizedRoutes = () => {
  const { i18n } = useTranslation();

  const to = (path: string) => {
    const lang = i18n.language;

    if (path.startsWith(`/${lang}`)) {
      return path;
    }

    return `/${lang}${path}`;
  };

  return { to };
};
