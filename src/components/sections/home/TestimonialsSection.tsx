import React from 'react';
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';
import { homePageData } from '../../../data/homePageData';
import { TestimonialCard } from '../shared/TestimonialCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui/Icons';

export const TestimonialsSection = () => {
  const { t } = useTranslation('common');
  const { testimonials } = homePageData;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className='bg-brand-primary-dark py-20 px-4'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <h2 className='heading-2 text-white'>
            {t(`testimonials.${testimonials.titleKey}`)}
          </h2>
        </div>

        {/* Contenedor del Carrusel */}
        <div className='relative'>
          <div
            className='overflow-hidden'
            ref={emblaRef}>
            {/* Contenedor de slides */}
            <div className='flex gap-x-6'>
              {testimonials.items.map((testimonial) => (
                // Cada slide
                <div
                  key={testimonial.id}
                  className='relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]'>
                  <TestimonialCard cardData={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Botones de Navegación */}
          <button
            onClick={scrollPrev}
            className='absolute top-1/2 left-[-1rem] md:left-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20'
            aria-label='Anterior'>
            <ChevronLeftIcon className='h-6 w-6' />
          </button>
          <button
            onClick={scrollNext}
            className='absolute top-1/2 right-[-1rem] md:right-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20'
            aria-label='Siguiente'>
            <ChevronRightIcon className='h-6 w-6' />
          </button>
        </div>
      </div>
    </section>
  );
};
