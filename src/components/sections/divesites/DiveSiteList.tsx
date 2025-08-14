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

  const handleSelect = onSelect ?? (() => {});
  const handleHover = onHover ?? (() => {});

  if (sites.length === 0) {
    return (
      <div className='p-8 text-center'>
        <p className='text-brand-neutral/70 font-serif'>
          {t('noSitesFound', { ns: translationNS })}
        </p>
      </div>
    );
  }

  return (
    <ul
      role='list'
      className='space-y-4'>
      {sites.map((site) => (
        <li
          key={site.id}
          role='listitem'>
          <DiveSiteCard
            site={site}
            onSelect={handleSelect}
            onHover={handleHover}
            translationNS={translationNS}
          />
        </li>
      ))}
    </ul>
  );
};
