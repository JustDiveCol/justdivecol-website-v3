// src/components/sections/divesites/DiveSiteCard.tsx
import { useTranslation } from 'react-i18next';
import { BarChartIcon, ChevronDownIcon } from '../../ui/Icons';
import type { DiveSiteCardProps } from './types';
import { DIVE_DIFFICULTIES } from '../../../constants/dive-sites';

export const DiveSiteCard = ({
  site,
  onSelect,
  onHover,
  translationNS,
}: DiveSiteCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const difficulty = DIVE_DIFFICULTIES.find((d) => d.id === site.difficultyId);

  return (
    <div
      className='p-4 border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors'
      onClick={() => onSelect(site.id)}
      onMouseEnter={() => onHover(site.id)}
      onMouseLeave={() => onHover(null)}>
      <img
        src={site.photos[0]?.backgroundImage || '/images/placeholder.webp'}
        alt={t(site.nameKey)}
        className='w-full h-32 object-cover rounded-md mb-3'
        loading='lazy'
      />
      <h3 className='font-bold text-brand-white'>{t(site.nameKey)}</h3>
      <div className='flex items-center gap-4 mt-2 text-sm text-brand-neutral/80'>
        <div className='flex items-center gap-1'>
          <ChevronDownIcon className='h-4 w-4' />
          <span>{site.maxDepth}m</span>
        </div>
        <div className='flex items-center gap-1'>
          <BarChartIcon className='h-4 w-4' />
          <span>
            {difficulty ? t(difficulty.translationKey) : site.difficultyId}
          </span>
        </div>
      </div>
    </div>
  );
};
