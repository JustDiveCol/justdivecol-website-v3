import { useTranslation } from 'react-i18next'; // <-- CORRECCIÓN 1: Nombre correcto
import type { DiveSite } from '../../../types/data';
import { BarChartIcon, ChevronDownIcon } from '../../ui/Icons';
import { diveDifficulties } from '../../../data/dive-filters/difficulties'; // Importamos la lista de dificultades

interface DiveSiteCardProps {
  site: DiveSite;
  onSelect: (siteId: string) => void;
  onHover: (siteId: string | null) => void;
}

export const DiveSiteCard = ({
  site,
  onSelect,
  onHover,
}: DiveSiteCardProps) => {
  const { t } = useTranslation(['dive-sites', 'common']);

  // --- CORRECCIÓN 2: Lógica para encontrar el nombre de la dificultad ---
  const difficulty = diveDifficulties.find((d) => d.id === site.difficultyId);

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
      />
      <h3 className='font-bold text-brand-white'>{t(site.nameKey)}</h3>
      <div className='flex items-center gap-4 mt-2 text-sm text-brand-neutral/80'>
        <div className='flex items-center gap-1'>
          <ChevronDownIcon className='h-4 w-4' />
          <span>{site.maxDepth}m</span>
        </div>
        <div className='flex items-center gap-1'>
          <BarChartIcon className='h-4 w-4' />
          {/* Usamos la 'nameKey' que encontramos para la traducción correcta */}
          <span>
            {difficulty
              ? t(difficulty.nameKey, { ns: 'dive-sites' })
              : site.difficultyId}
          </span>
        </div>
      </div>
    </div>
  );
};
