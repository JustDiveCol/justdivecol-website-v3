// src/components/sections/about/TeamSection.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TeamCard } from '../shared/TeamCard';
import { useMotionPresets } from '../../../hooks/animations';
import type { TeamSectionProps } from './types';

export const TeamSection = ({
  titleKey,
  members,
  translationNS,
}: TeamSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container } = useMotionPresets();

  return (
    <section
      className='bg-brand-primary-medium'
      aria-labelledby='team-heading'>
      <div className='section py-12'>
        <div className='max-w-max mx-auto text-center mb-12'>
          <h2
            id='team-heading'
            className='heading-3 text-white'>
            {t(titleKey)}
          </h2>
        </div>

        <motion.ul
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          role='list'
          className='flex flex-wrap justify-center items-stretch gap-8 md:gap-12'>
          {members.map((member) => (
            <li
              key={member.id}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <TeamCard
                memberData={member}
                className='h-full'
                translationNS={translationNS}
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
