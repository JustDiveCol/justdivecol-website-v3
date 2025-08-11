// src/components/sections/home/TestimonialsSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';

import { ChevronLeftIcon, ChevronRightIcon } from '../../ui';
import { TestimonialCard } from '../shared/TestimonialCard';
import type { TestimonialsSectionProps } from './types';

export const TestimonialsSection = ({
  titleKey,
  translationNS,
  items,
}: TestimonialsSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const staticRef = React.useRef<HTMLDivElement>(null);
  const [showCarousel, setShowCarousel] = React.useState(false);

  // Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: true,
    dragFree: false,
    containScroll: 'trimSnaps',
  });

  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  // Decide si necesitamos carrusel (si las cards envuelven a 2 filas)
  React.useEffect(() => {
    const el = staticRef.current;
    if (!el) return;

    let raf = 0;
    const checkWrap = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return setShowCarousel(false);
      const firstTop = children[0].offsetTop;
      const wrapped = children.some((c) => c.offsetTop !== firstTop);
      setShowCarousel(wrapped);
    };

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(checkWrap);
    });

    ro.observe(el);
    checkWrap();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [items]);

  return (
    <section
      className='bg-brand-primary-medium'
      aria-labelledby='testimonials-heading'>
      <div className='section'>
        <div className='max-w-max mx-auto text-center mb-12'>
          <h2
            id='testimonials-heading'
            className='heading-2 text-white'>
            {t(titleKey)}
          </h2>
        </div>

        <div className='relative'>
          {showCarousel ? (
            <>
              {/* Carrusel */}
              <div
                className='overflow-hidden touch-pan-y' // evita pelear con scroll vertical
                ref={emblaRef}
                aria-roledescription={t('common:carousel', 'Carrusel')}
                aria-label={t('common:testimonials', 'Testimonios')}>
                <div className='flex gap-x-6'>
                  {items.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className='relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]'>
                      <TestimonialCard
                        cardData={testimonial}
                        translationNS={translationNS}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Controles */}
              <button
                onClick={scrollPrev}
                disabled={!canPrev}
                className='absolute top-1/2 left-[-1rem] md:left-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 disabled:opacity-40'
                aria-label={t('common:previous', 'Anterior')}
                type='button'>
                <ChevronLeftIcon className='h-6 w-6' />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canNext}
                className='absolute top-1/2 right-[-1rem] md:right-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 disabled:opacity-40'
                aria-label={t('common:next', 'Siguiente')}
                type='button'>
                <ChevronRightIcon className='h-6 w-6' />
              </button>
            </>
          ) : (
            // Static Layout (1–3 por fila)
            <div
              className='flex flex-wrap justify-center gap-6'
              ref={staticRef}>
              {items.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='w-full sm:w-1/2 lg:w-1/3'>
                  <TestimonialCard
                    cardData={testimonial}
                    translationNS={translationNS}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
