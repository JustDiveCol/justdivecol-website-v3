// src/components/sections/shared/PageHeader.tsx
import { useTranslation } from 'react-i18next';
import { ImageComponent } from '../../common/ImageComponent';
import type { PageHeaderProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const PageHeader = ({
  titleKey,
  subtitleKey,
  translationNS,
  imageData,
}: PageHeaderProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, slideIn, fadeIn } = useMotionPresets();

  return (
    <section className="relative h-[50vh] min-h-[400px] text-white">
      {/* Fondo (imagen) */}
      <div className="absolute inset-0">
        <ImageComponent
          className="absolute inset-0"
          imageData={imageData}
          translationNS={translationNS}
          fit="parent"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Contenido */}
      <div className="section max-w-max relative z-10 h-full flex flex-col items-center justify-center text-center">
        <MotionBlock
          kind="eager"
          variants={container}
          className="transform-gpu will-change-transform"
        >
          <MotionBlock kind="none" variants={slideIn('up', { distance: 20 })}>
            <h1 className="heading-2">{t(titleKey)}</h1>
          </MotionBlock>

          {subtitleKey && (
            <MotionBlock kind="none" variants={fadeIn()}>
              <p className="text-subtitle max-w-max">{t(subtitleKey)}</p>
            </MotionBlock>
          )}
        </MotionBlock>
      </div>
    </section>
  );
};
