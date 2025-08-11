// src/components/sections/shared/DestinationPill.tsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { DestinationPillProps } from './types';
import { buildDestinationDetailRoute } from '../../../constants/routes.schema';

export const DestinationPill = ({
  destination,
  translationNS,
}: DestinationPillProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  return (
    <Link
      to={buildDestinationDetailRoute(destination.slug)}
      className='rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-brand-neutral/80 transition-colors duration-300 hover:bg-brand-cta-orange hover:text-white'>
      {t(destination.nameKey)}
    </Link>
  );
};
