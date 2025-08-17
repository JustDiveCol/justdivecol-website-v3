// src/components/sections/shared/AlternatingFeature.tsx
import { useTranslation } from 'react-i18next';
import { ImageComponent } from '../../common/ImageComponent';
import type { AlternatingFeatureProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const AlternatingFeature = ({
  featureData,
  translationNS,
}: AlternatingFeatureProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { slideIn } = useMotionPresets();

  const { titleKey, descriptionKey, imageData, imagePosition } = featureData;
  const isImageLeft = imagePosition === 'left';

  return (
    <section className='py-8'>
      <div
        className={`section bg-brand-primary-dark rounded-2xl p-8 flex flex-col md:flex-row gap-12 md:items-stretch ${
          !isImageLeft ? 'md:flex-row-reverse' : ''
        }`}>
        {/* Columna Imagen: entra desde el borde externo (izq si imagen va a la izq, der si va a la der) */}
        <MotionBlock
          kind='inView'
          variants={slideIn(isImageLeft ? 'left' : 'right', { distance: 50 })}
          className='w-full md:w-1/2'>
          <div className='relative h-full overflow-hidden rounded-lg shadow-2xl drop-shadow-strong'>
            <ImageComponent
              imageData={imageData}
              translationNS={translationNS}
            />
          </div>
        </MotionBlock>

        {/* Columna Texto: entra desde el lado opuesto */}
        <MotionBlock
          kind='inView'
          variants={slideIn(isImageLeft ? 'right' : 'left', { distance: 50 })}
          className='w-full md:w-1/2 flex'>
          <div className='flex flex-col justify-center'>
            <h2 className='heading-4 mb-4 text-brand-white'>{t(titleKey)}</h2>
            <p className='text-base-md font-serif text-brand-neutral/90 whitespace-pre-line'>
              {t(descriptionKey)}
            </p>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
};
