// src/components/sections/home/TestimonialsSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui';
import { TestimonialCard } from './TestimonialCard';
import type { TestimonialsSectionContent } from '../../../content/pages/testimonials/types';

function useColumnsByBreakpoint() {
  const getCols = React.useCallback(() => {
    if (typeof window === 'undefined') return 1;
    const mqMd = window.matchMedia('(min-width: 768px)');
    const mqLg = window.matchMedia('(min-width: 1024px)');
    if (mqLg.matches) return 3; // lg: w-1/3
    if (mqMd.matches) return 2; // md: w-1/2
    return 1; // base: w-full
  }, []);

  const [cols, setCols] = React.useState(1);

  React.useEffect(() => {
    const mqMd = window.matchMedia('(min-width: 768px)');
    const mqLg = window.matchMedia('(min-width: 1024px)');

    const update = () => setCols(getCols());
    update();

    mqMd.addEventListener('change', update);
    mqLg.addEventListener('change', update);

    return () => {
      mqMd.removeEventListener('change', update);
      mqLg.removeEventListener('change', update);
    };
  }, [getCols]);

  return cols;
}

export const TestimonialsSection = ({
  titleKey,
  translationNS,
  items,
}: TestimonialsSectionContent) => {
  const { t } = useTranslation([translationNS, 'common']);

  // 1) columnas actuales por breakpoint
  const cols = useColumnsByBreakpoint();

  // 2) Mostrar carrusel sólo si “no caben” en una fila
  const showCarousel = items.length > cols;

  // Embla: sólo lo usamos si showCarousel es true
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
    if (!emblaApi || !showCarousel) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect, showCarousel]);

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  return (
    <section
      className='bg-brand-primary-medium'
      aria-labelledby='testimonials-heading'>
      <div className='section'>
        <div className='mx-auto mb-12 max-w-max text-center'>
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
                className='overflow-hidden touch-pan-y'
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
                className='absolute left-[-1rem] top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 disabled:opacity-40 md:left-[-2rem]'
                aria-label={t('common:previous', 'Anterior')}
                type='button'>
                <ChevronLeftIcon className='h-6 w-6' />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canNext}
                className='absolute right-[-1rem] top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 disabled:opacity-40 md:right-[-2rem]'
                aria-label={t('common:next', 'Siguiente')}
                type='button'>
                <ChevronRightIcon className='h-6 w-6' />
              </button>
            </>
          ) : (
            // Layout estático (1–3 por fila) — refleja las mismas columnas
            <div className='flex flex-wrap justify-center gap-6'>
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
