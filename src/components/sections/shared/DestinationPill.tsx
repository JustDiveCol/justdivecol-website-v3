// src/components/sections/shared/DestinationPill.tsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { DestinationContent } from '../../../content/destinations/types';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../../content/urlPathSchema';
import { useLocalizedRoutes } from '../../../hooks/useLocalizedRoutes';

type DestinationPillProps = {
  destination: DestinationContent;
  translationNS: string;
};

export const DestinationPill = ({
  destination,
  translationNS,
}: DestinationPillProps) => {
  const { t } = useTranslation([translationNS, 'common', 'destinations']);
  const { to: localizedTo } = useLocalizedRoutes();

  return (
    <Link
      to={localizedTo(toUrlPath(`${ROUTES.destinations}/${destination.slug}`))}
      className='rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-brand-neutral/80 transition-colors duration-300 hover:bg-brand-cta-orange hover:text-white'>
      {t(destination.name, { ns: 'destinations' })}
    </Link>
  );
};
