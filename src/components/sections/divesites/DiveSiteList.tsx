import { useTranslation } from 'react-i18next';
import type { DiveSite } from '../../../types/data';
import { DiveSiteCard } from './DiveSiteCard';

interface DiveSiteListProps {
  sites: DiveSite[];
  onSelect: (siteId: string) => void;
  onHover: (siteId: string | null) => void;
}

export const DiveSiteList = ({
  sites,
  onSelect,
  onHover,
}: DiveSiteListProps) => {
  const { t } = useTranslation('dive-sites');

  // Si no hay sitios, mostramos un mensaje amigable
  if (sites.length === 0) {
    return (
      <div className='p-8 text-center'>
        <p className='text-brand-neutral/70 font-serif'>{t('noSitesFound')}</p>
      </div>
    );
  }

  // Si hay sitios, los mostramos
  return (
    <div>
      {sites.map((site) => (
        <DiveSiteCard
          key={site.id}
          site={site}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
};
