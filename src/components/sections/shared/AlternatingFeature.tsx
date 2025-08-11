// src/components/sections/shared/AlternatingFeature.tsx
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, type Transition } from 'framer-motion';
import { ImageComponent } from '../../common/ImageComponent';
import type { AlternatingFeatureProps } from './types';

export const AlternatingFeature = ({
  featureData,
  translationNS,
}: AlternatingFeatureProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const reduceMotion = useReducedMotion();

  const { titleKey, descriptionKey, imageData, imagePosition } = featureData;
  const isImageLeft = imagePosition === 'left';

  const baseTransition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.4, 0, 0.2, 1] };

  return (
    <section className='py-12'>
      <div
        className={`section py-0 flex flex-col md:flex-row gap-12 md:items-stretch ${
          !isImageLeft ? 'md:flex-row-reverse' : ''
        }`}>
        {/* Columna Imagen */}
        <motion.div
          initial={
            reduceMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isImageLeft ? -50 : 50 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={baseTransition}
          className='w-full md:w-1/2'>
          <div className='relative h-full overflow-hidden rounded-lg shadow-2xl'>
            {/* No alteramos tus proporciones: ImageComponent decide según imageData.variant */}
            <ImageComponent imageData={imageData} />
          </div>
        </motion.div>

        {/* Columna Texto */}
        <motion.div
          initial={
            reduceMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isImageLeft ? 50 : -50 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={baseTransition}
          className='w-full md:w-1/2 flex'>
          {/* Igualamos alturas sin forzar la imagen: el texto se estira y se centra verticalmente */}
          <div className='flex flex-col justify-center'>
            <h2 className='heading-3 mb-4 text-brand-white'>{t(titleKey)}</h2>
            <p className='text-base-md font-serif text-brand-neutral/90 whitespace-pre-line'>
              {t(descriptionKey)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
