// src/components/sections/shared/PhotoGallery.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { ImageComponent } from '../../common/ImageComponent';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui';
import type { ImageComponentData } from '../../common/types';
import type { PhotoGalleryProps } from './types';
import { BRAND_ASSETS_SAFE } from '../../../constants';

type Slide = ImageComponentData & { src: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomSlide = ({ slide }: any) => {
  const { t } = useTranslation('common');
  const mainLogo = BRAND_ASSETS_SAFE.mainLogo;

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className='relative flex items-center justify-center h-full w-full bg-black/80'>
      <img
        src={slide.backgroundImage}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className='max-h-[90vh] max-w-[90vw] object-contain'
        alt=''
      />

      <div className='absolute bottom-4 right-4 w-24 opacity-70 pointer-events-none'>
        <img
          src={mainLogo.url}
          alt={t(mainLogo.altKey)}
          className='w-full h-auto'
        />
      </div>

      {slide.photoCredit && (
        <div className='absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded pointer-events-none'>
          {t('common:photoCreditPrefix')} {slide.photoCredit}
        </div>
      )}
    </div>
  );
};

export const PhotoGallery = ({
  titleKey,
  images,
  translationNS,
}: PhotoGalleryProps) => {
  const { t } = useTranslation(translationNS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!images.length) return null;

  const slides: Slide[] = images.map((img) => ({
    ...img,
    src: img.backgroundImage,
  }));

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((i) => (i + 1) % slides.length);
  };

  const main = slides[activeIndex];

  const containerClass = (() => {
    switch (main.variant) {
      case 'vertical':
        return 'w-auto max-h-[40vh] aspect-[9/16] mx-auto';
      case 'square':
        return 'w-full max-w-lg aspect-square';
      case 'horizontal':
        return 'w-full aspect-video';
      case 'header':
        return 'w-full aspect-[3/1]';
      case 'fullscreen':
      default:
        return 'w-full aspect-auto';
    }
  })();

  return (
    <section className='bg-brand-primary-dark py-20 px-4'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='heading-2 text-white text-center mb-12'>
          {t(titleKey)}
        </h2>

        {/* Imagen principal */}
        <div
          className='relative group cursor-pointer'
          onClick={() => setIsOpen(true)}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`${containerClass} rounded-lg overflow-hidden shadow-2xl`}>
            <ImageComponent
              imageData={{
                backgroundImage: main.backgroundImage,
                photoCredit: main.photoCredit,
                variant: main.variant,
              }}
              translationNS={translationNS}
            />
          </motion.div>

          {/* Flechas de navegación */}
          {slides.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity'
                aria-label='Anterior'>
                <ChevronLeftIcon className='h-6 w-6' />
              </button>
              <button
                onClick={goNext}
                className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity'
                aria-label='Siguiente'>
                <ChevronRightIcon className='h-6 w-6' />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {slides.length > 1 && (
          <div className='flex justify-center gap-4 mt-4'>
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-24 h-16 rounded-md overflow-hidden transition-opacity duration-300 ${
                  idx === activeIndex
                    ? 'ring-4 ring-brand-cta-orange'
                    : 'opacity-60 hover:opacity-100'
                }`}>
                <img
                  src={s.src}
                  className='w-full h-full object-cover'
                  alt=''
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={activeIndex}
        on={{ view: ({ index }) => setActiveIndex(index) }}
        render={{ slide: CustomSlide }}
      />
    </section>
  );
};
