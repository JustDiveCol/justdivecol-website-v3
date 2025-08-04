import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import type { Certification } from '../../../types/data';
import { ImageComponent } from '../../common/ImageComponent';

// Sub-componente para el indicador de estado
const AvailabilityStatus = ({
  status,
}: {
  status: 'available' | 'coming_soon';
}) => {
  const { t } = useTranslation('common');

  if (status === 'available') {
    return (
      <div className='flex items-center gap-2'>
        <motion.div
          className='h-2 w-2 rounded-full bg-green-400'
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
        />
        <span className='text-sm text-green-300 font-semibold'>
          {t('certifications.statusAvailable')}
        </span>
      </div>
    );
  }

  return (
    <div className='flex items-center gap-2'>
      <div className='h-2 w-2 rounded-full bg-yellow-400/50' />
      <span className='text-sm text-yellow-300/80 font-semibold'>
        {t('certifications.statusComingSoon')}
      </span>
    </div>
  );
};

// Props para la tarjeta principal
interface CertificationCardProps {
  certificationData: Certification;
  availabilityStatus: 'available' | 'coming_soon';
  className?: string;
}

export const CertificationCard = ({
  certificationData,
  availabilityStatus,
  className,
}: CertificationCardProps) => {
  const { t } = useTranslation(['certifications', 'common']);
  const { card, nameKey, subtitleKey, slug, agency } = certificationData;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={twMerge('h-full', className)}>
      <Link
        to={`/certifications/${slug}`}
        className='group flex h-full flex-col overflow-hidden rounded-lg bg-brand-primary-dark shadow-xl transition-transform duration-300 hover:-translate-y-2'>
        <div className='overflow-hidden aspect-video relative'>
          <div className='absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110'>
            <ImageComponent
              imageData={card.imageData}
              translationNS='certifications'
            />
          </div>
        </div>

        <div className='flex flex-grow flex-col justify-between p-6'>
          <div>
            <p className='font-bold text-sm text-brand-neutral/70'>{agency}</p>
            <h3 className='heading-5 text-brand-white mt-1'>{t(nameKey)}</h3>
            {subtitleKey && (
              <p className='font-serif text-sm text-brand-neutral/80 mt-1'>
                {t(subtitleKey)}
              </p>
            )}
          </div>

          <div className='mt-4 pt-4 border-t border-white/10'>
            <AvailabilityStatus status={availabilityStatus} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
