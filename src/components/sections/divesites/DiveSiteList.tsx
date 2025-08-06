// src/components/sections/divesites/DiveSiteList.tsx
import { useTranslation } from 'react-i18next';
import { DiveSiteCard } from './DiveSiteCard';
import type { DiveSiteListProps } from './types';

export const DiveSiteList = ({
  sites,
  onSelect,
  onHover,
  translationNS,
}: DiveSiteListProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  if (sites.length === 0) {
    return (
      <div className='p-8 text-center'>
        <p className='text-brand-neutral/70 font-serif'>{t('noSitesFound')}</p>
      </div>
    );
  }

  return (
    <div>
      {sites.map((site) => (
        <DiveSiteCard
          key={site.id}
          site={site}
          onSelect={onSelect}
          onHover={onHover}
          translationNS={translationNS}
        />
      ))}
    </div>
  );
};
