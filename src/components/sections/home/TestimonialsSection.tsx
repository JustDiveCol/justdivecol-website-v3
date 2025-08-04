import React from 'react';
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';
import { homePageData } from '../../../data/homePageData';
import { TestimonialCard } from '../shared/TestimonialCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui/Icons';

interface TestimonialsSectionProps {
  translationNS?: string;
}

export const TestimonialsSection = ({
  translationNS,
}: TestimonialsSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { testimonials } = homePageData;
  const items = testimonials.items;

  // 1. Ref para el layout estático
  const staticRef = React.useRef<HTMLDivElement>(null);
  // 2. State para saber si debemos activar el carrusel
  const [showCarousel, setShowCarousel] = React.useState(false);

  // 3. Instancia Embla (siempre inicializada)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  // 4. Handlers de navegación
  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  // 5. Medir “wrap” de flex: si algún hijo se mueve de fila, activamos carousel
  React.useEffect(() => {
    const measureWrap = () => {
      const el = staticRef.current;
      if (!el) return;
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) {
        setShowCarousel(false);
        return;
      }
      const firstTop = children[0].offsetTop;
      const wrapped = children.some((child) => child.offsetTop !== firstTop);
      setShowCarousel(wrapped);
    };

    measureWrap();
    window.addEventListener('resize', measureWrap);
    return () => window.removeEventListener('resize', measureWrap);
  }, [items]);

  return (
    <section className='bg-brand-primary-medium py-20 px-4'>
      <div className='container mx-auto'>
        <div className='max-w-max mx-auto text-center mb-12'>
          <h2 className='heading-2 text-white'>{t(testimonials.titleKey)}</h2>
        </div>

        <div className='relative'>
          {showCarousel ? (
            <>
              {/* ─── Carrusel Embla ─── */}
              <div
                className='overflow-hidden'
                ref={emblaRef}>
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
              <button
                onClick={scrollPrev}
                className='absolute top-1/2 left-[-1rem] md:left-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20'
                aria-label='Anterior'>
                <ChevronLeftIcon className='h-6 w-6' />
              </button>
              <button
                onClick={scrollNext}
                className='absolute top-1/2 right-[-1rem] md:right-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20'
                aria-label='Siguiente'>
                <ChevronRightIcon className='h-6 w-6' />
              </button>
            </>
          ) : (
            /* ─── Layout estático centrado ─── */
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
