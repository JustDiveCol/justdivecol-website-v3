// src/components/sections/divesites/DiveSiteCard.tsx
import { useTranslation } from 'react-i18next';
import { BarChartIcon, ChevronDownIcon } from '../../ui';
import type { DiveSiteCardProps } from './types';
import { DIVE_DIFFICULTIES } from '../../../constants';

export const DiveSiteCard = ({
  site,
  onSelect,
  onHover,
  translationNS,
}: DiveSiteCardProps) => {
  const { t } = useTranslation([translationNS, 'dive-sites', 'common']);

  const difficulty = DIVE_DIFFICULTIES.find((d) => d.id === site.difficultyId);

  const imgUrl =
    site.photos?.[0]?.backgroundImage ?? '/images/placeholder.webp';

  const handleClick = () => onSelect?.(site.id);
  const handleMouseEnter = () => onHover?.(site.id);
  const handleMouseLeave = () => onHover?.(null);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      className="p-4 border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/60"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={t(site.nameKey, { ns: translationNS })}
    >
      <img
        src={imgUrl}
        alt={t(site.nameKey, { ns: translationNS })}
        className="w-full h-32 object-cover rounded-md mb-3"
        loading="lazy"
        decoding="async"
      />

      <h3 className="font-bold text-brand-white">
        {t(site.nameKey, { ns: translationNS })}
      </h3>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-brand-neutral/80">
        <div className="flex items-center gap-1">
          <ChevronDownIcon className="h-4 w-4" />
          <span>
            {site.maxDepthMeter}m <span className="opacity-60">·</span>{' '}
            {site.maxDepthFt}ft
          </span>
        </div>

        <div className="flex items-center gap-1">
          <BarChartIcon className="h-4 w-4" />
          <span>
            {difficulty
              ? t(difficulty.translationKey, { ns: 'dive-sites' })
              : site.difficultyId}
          </span>
        </div>
      </div>
    </div>
  );
};
