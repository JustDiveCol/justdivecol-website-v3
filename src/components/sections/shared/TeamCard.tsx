// src/components/sections/shared/TeamCard.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { useMotionPresets } from '../../../hooks/animations';
import type { TeamCardProps } from '../about/types';

type TeamCardOwnProps = TeamCardProps & {
  /** Si true, el propio card controla su ciclo in-view. Por defecto false. */
  inView?: boolean;
};

export const TeamCard = ({
  memberData,
  className,
  translationNS,
  inView = false,
}: TeamCardOwnProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { card } = useMotionPresets();

  const titleId = `member-${memberData.id}-name`;

  // Solo aplicamos initial/whileInView si se solicita inView explícitamente
  const inViewProps = inView
    ? {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  return (
    <motion.div
      {...inViewProps}
      variants={card}
      aria-labelledby={titleId}
      className={twMerge(
        'flex h-full flex-col items-center text-center transform-gpu will-change-transform',
        className
      )}>
      <div className='relative'>
        <img
          src={memberData.imageUrl}
          alt={memberData.name}
          className='h-48 w-48 rounded-full object-cover shadow-lg drop-shadow-strong'
          loading='lazy'
          decoding='async'
          width={192}
          height={192}
        />
      </div>
      <div className='mt-4'>
        <h3
          id={titleId}
          className='text-base-sm font-bold text-brand-white'>
          {memberData.name}
        </h3>
        <p className='text-base-xs font-semibold text-brand-cta-orange'>
          {t(memberData.roleKey)}
        </p>
        <p className='mt-2 text-base-xs text-brand-neutral/80 font-serif'>
          {t(memberData.bioKey)}
        </p>
      </div>
    </motion.div>
  );
};
