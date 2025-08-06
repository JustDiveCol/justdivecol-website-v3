// src/components/sections/about/TeamSection.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TeamCard } from '../shared/TeamCard';
import { containerVariants } from '../../../hooks/animations';
import type { TeamSectionProps } from './types';

export const TeamSection = ({
  titleKey,
  members,
  translationNS,
}: TeamSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  return (
    <section className='bg-brand-primary-medium py-20 px-4'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='heading-2 text-white'>{t(titleKey)}</h2>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className='flex flex-wrap justify-center gap-12'>
          {members.map((member) => (
            <TeamCard
              key={member.id}
              memberData={member}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
              translationNS={translationNS}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
