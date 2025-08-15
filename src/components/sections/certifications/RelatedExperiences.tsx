// src/components/sections/certifications/RelatedExperiences.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations'; // La importación del hook es correcta
import type { RelatedExperiencesProps } from './types';
import { TripRow } from '../diveExperiences/TripRow';

export const RelatedExperiences = ({
  titleKey,
  sessions,
  translationNS,
}: RelatedExperiencesProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const { container, fadeIn } = useMotionPresets();

  if (sessions.length === 0) {
    return null;
  }

  return (
    <section className='bg-brand-primary-dark py-16'>
      <div className='section max-w-4xl mx-auto'>
        <motion.h2
          className='heading-2 text-white mb-8 text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          {t(titleKey)}
        </motion.h2>

        <motion.div
          className='space-y-4'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}>
          {sessions.map((session) => (
            <motion.div
              key={session.id}
              variants={fadeIn()}>
              <TripRow
                session={session}
                translationNS='experiences'
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
