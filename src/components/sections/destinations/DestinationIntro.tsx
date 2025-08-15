// src/components/sections/destinations/DestinationIntro.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { DestinationIntroProps } from './types';

export const DestinationIntro = ({
  description,
  translationNS,
}: DestinationIntroProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-dark py-16'>
      <motion.div
        className='section max-w-4xl mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn()}>
        <h2 className='heading-2 text-white mb-6'>{t(description.titleKey)}</h2>
        <div className='prose prose-invert prose-lg text-brand-neutral/90 max-w-none'>
          {description.paragraphs.map((pKey, i) => (
            <p
              key={i}
              className='whitespace-pre-line'>
              {t(pKey)}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
