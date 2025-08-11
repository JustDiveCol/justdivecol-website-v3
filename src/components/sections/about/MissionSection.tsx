// src/components/sections/about/MissionSection.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ImageComponent } from '../../common/ImageComponent';
import type { MissionSectionProps } from './types';

import { useMotionPresets } from '../../../hooks/animations';

export const MissionSection = ({
  titleKey,
  textKey,
  translationNS,
  imageData,
}: MissionSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const { slideIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-dark py-12'>
      <div className='section py-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
          {/* Imagen */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={slideIn('left')}
            className='rounded-lg shadow-2xl overflow-hidden'>
            <ImageComponent
              imageData={imageData}
              translationNS={translationNS}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={slideIn('right')}
            className=''>
            <h2 className='heading-2 mb-6 text-white'>{t(titleKey)}</h2>
            <p className='text-base-md font-serif text-brand-neutral/90 whitespace-pre-line'>
              {t(textKey)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
