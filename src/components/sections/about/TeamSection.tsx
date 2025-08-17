// src/components/sections/about/TeamSection.tsx
import { useTranslation } from 'react-i18next';
import { TeamCard } from '../shared/TeamCard';
import { useMotionPresets } from '../../../hooks/animations';
import type { TeamSectionProps } from './types';
import { MotionBlock } from '../../motion/MotionBlock';

export const TeamSection = ({
  titleKey,
  members,
  translationNS,
}: TeamSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section
      className='bg-brand-primary-medium'
      aria-labelledby='team-heading'>
      <div className='section py-12'>
        <div className='max-w-max mx-auto text-center mb-12'>
          <MotionBlock
            kind='inView'
            variants={fadeIn()}>
            <h2
              id='team-heading'
              className='heading-3 text-white'>
              {t(titleKey)}
            </h2>
          </MotionBlock>
        </div>

        {/* Owner del ciclo: in-view + stagger */}
        <MotionBlock
          kind='inView'
          variants={container}
          role='list'
          className='flex flex-wrap justify-center items-stretch gap-8 md:gap-12 transform-gpu will-change-transform'>
          {members.map((member) => (
            <MotionBlock
              key={member.id}
              kind='none'
              variants={fadeIn()}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <TeamCard
                memberData={member}
                className='h-full'
                translationNS={translationNS}
                /* inView (default false): se orquesta desde el padre */
              />
            </MotionBlock>
          ))}
        </MotionBlock>
      </div>
    </section>
  );
};
