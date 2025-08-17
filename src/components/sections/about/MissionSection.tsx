// src/components/sections/about/MissionSection.tsx
import { useTranslation } from 'react-i18next';
import { ImageComponent } from '../../common/ImageComponent';
import type { MissionSectionProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

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
          <MotionBlock
            kind='eager'
            variants={slideIn('left', { distance: 50 })}
            className='rounded-lg shadow-2xl overflow-hidden drop-shadow-strong transform-gpu will-change-transform'>
            <ImageComponent
              imageData={imageData}
              translationNS={translationNS}
            />
          </MotionBlock>

          {/* Texto */}
          <MotionBlock
            kind='eager'
            variants={slideIn('right', { distance: 50 })}
            className='transform-gpu will-change-transform'>
            <h2 className='heading-3 mb-6 text-white'>{t(titleKey)}</h2>
            <p className='text-base-md font-serif text-brand-neutral/90 whitespace-pre-line'>
              {t(textKey)}
            </p>
          </MotionBlock>
        </div>
      </div>
    </section>
  );
};
