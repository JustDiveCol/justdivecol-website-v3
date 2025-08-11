// src/components/sections/shared/TeamCard.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { useMotionPresets } from '../../../hooks/animations';
import type { TeamCardProps } from '../home/types';

export const TeamCard = ({
  memberData,
  className,
  translationNS,
}: TeamCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { card } = useMotionPresets();

  const titleId = `member-${memberData.id}-name`;

  return (
    <motion.div
      variants={card}
      aria-labelledby={titleId}
      className={twMerge(
        'flex h-full flex-col items-center text-center',
        className
      )}>
      <div className='relative'>
        <img
          src={memberData.imageUrl}
          alt={memberData.name}
          className='h-48 w-48 rounded-full object-cover shadow-lg'
          loading='lazy'
          decoding='async'
          width={192}
          height={192}
        />
      </div>
      <div className='mt-4'>
        <h3
          id={titleId}
          className='text-xl font-bold text-brand-white'>
          {memberData.name}
        </h3>
        <p className='text-base font-semibold text-brand-cta-orange'>
          {t(memberData.roleKey)}
        </p>
        <p className='mt-2 text-sm text-brand-neutral/80 font-serif'>
          {t(memberData.bioKey)}
        </p>
      </div>
    </motion.div>
  );
};
