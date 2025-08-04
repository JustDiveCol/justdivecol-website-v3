import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Destination } from '../../../types/data';

interface DestinationPillProps {
  destination: Destination;
}

export const DestinationPill = ({ destination }: DestinationPillProps) => {
  const { t } = useTranslation('destinations');

  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className='rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-brand-neutral/80 transition-colors duration-300 hover:bg-brand-cta-orange hover:text-white'>
      {t(destination.nameKey)}
    </Link>
  );
};
