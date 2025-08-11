// src/components/sections/shared/CertificationCard.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ImageComponent } from '../../common/ImageComponent';
import type { CertificationCardProps } from './types';
import type { AvailableType } from '../../../lib/db/constants';

const AvailabilityStatus = ({ status }: { status: AvailableType }) => {
  const { t } = useTranslation(['certifications', 'common']);

  if (status === 'available') {
    return (
      <div className='flex items-center gap-2'>
        <motion.div
          className='h-2 w-2 rounded-full bg-green-400'
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
        />
        <span className='text-sm text-green-300 font-semibold'>
          {t('certifications:statusAvailable')}
        </span>
      </div>
    );
  }

  return (
    <div className='flex items-center gap-2'>
      <div className='h-2 w-2 rounded-full bg-yellow-400/50' />
      <span className='text-sm text-yellow-300/80 font-semibold'>
        {t('certifications:statusComingSoon')}
      </span>
    </div>
  );
};

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
      className={twMerge(
        'self-stretch flex flex-col flex-1 min-h-0',
        className
      )}>
      <Link
        to={`/certifications/${slug}`}
        className='
         group
         flex flex-col flex-1 min-h-0
         overflow-hidden rounded-lg
         bg-brand-primary-dark shadow-xl
         transition-transform duration-300 hover:-translate-y-2
       '>
        <div className='overflow-hidden aspect-video relative'>
          <ImageComponent
            imageData={card.imageData}
            translationNS='certifications'
          />
        </div>

        <div className='flex flex-col justify-between p-6 flex-1 min-h-0'>
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
