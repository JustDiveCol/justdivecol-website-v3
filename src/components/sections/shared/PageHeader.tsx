// src/components/sections/shared/PageHeader.tsx
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, type Transition } from 'framer-motion';
import { ImageComponent } from '../../common/ImageComponent';
import type { PageHeaderContent } from './types';

export const PageHeader = ({
  titleKey,
  subtitleKey,
  translationNS,
  imageData,
}: PageHeaderContent) => {
  const { t } = useTranslation([translationNS, 'common']);
  const reduceMotion = useReducedMotion();

  const baseTransition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.4, 0, 0.2, 1] };

  return (
    <section className='relative h-[50vh] min-h-[400px] text-white'>
      {/* Fondo (imagen) */}
      <div className='absolute inset-0'>
        <ImageComponent
          className='absolute inset-0' // posición absoluta dentro del section
          imageData={imageData}
          translationNS={translationNS}
          fit='parent' // ⬅️ clave: ignora su 'variant' y llena al padre
        />
      </div>

      {/* Overlay */}
      <div
        className='absolute inset-0 bg-black/40'
        aria-hidden='true'
      />

      {/* Contenido */}
      <div className='section relative z-10 h-full flex flex-col items-center justify-center text-center'>
        <motion.h1
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={baseTransition}
          className='heading-1'>
          {t(titleKey)}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...baseTransition, delay: reduceMotion ? 0 : 0.2 }}
          className='text-subtitle max-w-3xl'>
          {t(subtitleKey)}
        </motion.p>
      </div>
    </section>
  );
};
