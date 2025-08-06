import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Destination, Experience } from '../../../types/data';
import { ImageComponent } from '../../common/ImageComponent';
import { twMerge } from 'tailwind-merge';
import { ROUTES } from '../../../constants/routes';

interface ActiveDestinationCardProps {
  destination: Destination;
  activeExperiences: Experience[];
  className?: string;
}

export const ActiveDestinationCard = ({
  destination,
  activeExperiences,
  className,
}: ActiveDestinationCardProps) => {
  const { t } = useTranslation(['destinations', 'common']);

  return (
    // Unimos las clases base con las que vienen del padre
    <Link
      to={`${ROUTES.destinations}/${destination.slug}`}
      className={twMerge(
        'group relative block w-full overflow-hidden rounded-lg shadow-lg aspect-[4/5] transition-transform duration-300 hover:-translate-y-2',
        className
      )}>
      <div className='absolute inset-0 transition-transform duration-500 ease-in-out'>
        <ImageComponent imageData={destination.card.imageData} />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10' />
      <div className='relative z-20 flex h-full flex-col justify-between p-6 text-white text-left'>
        <div>
          <h3 className='heading-4'>{t(destination.nameKey)}</h3>
          <p className='font-serif text-sm text-brand-neutral'>
            {t(destination.subtitleKey || '')}
          </p>
        </div>
        <div>
          <p className='text-xs font-bold uppercase text-green-300 mb-2'>
            {t('activeExperiencesTitle')}
          </p>
          <div className='flex flex-col gap-1'>
            {activeExperiences.map((exp) => (
              <span
                key={exp.id}
                className='text-sm font-semibold text-brand-white block truncate hover:underline'>
                {t(exp.nameKey, { ns: 'experiences' })}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
