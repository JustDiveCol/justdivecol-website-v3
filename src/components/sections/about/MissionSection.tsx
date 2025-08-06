// src/components/sections/about/MissionSection.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ImageComponent } from '../../common/ImageComponent';
import type { MissionSectionProps } from './types';

export const MissionSection = ({
  titleKey,
  textKey,
  translationNS,
  imageData,
}: MissionSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className='bg-brand-primary-dark py-20 px-4 text-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='rounded-lg shadow-2xl overflow-hidden'>
            <ImageComponent
              imageData={imageData}
              translationNS={translationNS}
            />
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h2 className='heading-2 mb-6'>{t(titleKey)}</h2>
            <p className='text-base-md font-serif text-brand-neutral/90 whitespace-pre-line'>
              {t(textKey)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
