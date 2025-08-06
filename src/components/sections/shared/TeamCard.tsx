// src/components/sections/shared/TeamCard.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import type { TeamCardProps } from '../about/types';
import { cardVariants } from '../../../hooks/animations';

export const TeamCard = ({
  memberData,
  className,
  translationNS,
}: TeamCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  return (
    <motion.div
      variants={cardVariants}
      className={twMerge('flex flex-col items-center text-center', className)}>
      <div className='relative'>
        <img
          src={memberData.imageUrl}
          alt={memberData.name}
          className='h-48 w-48 rounded-full object-cover shadow-lg'
          loading='lazy'
        />
      </div>
      <div className='mt-4'>
        <h3 className='text-xl font-bold text-brand-white'>
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
