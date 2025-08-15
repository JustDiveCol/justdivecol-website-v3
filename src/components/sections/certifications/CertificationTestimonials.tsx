// src/components/sections/certifications/CertificationTestimonials.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useMotionPresets } from '../../../hooks/animations';
import type { CertificationTestimonialsProps } from './types';
import { TestimonialCard } from '../shared/TestimonialCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui';
import { useCallback, useState, useRef, useEffect } from 'react';

export const CertificationTestimonials = ({
  testimonials,
  translationNS,
}: CertificationTestimonialsProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { fadeIn } = useMotionPresets();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [showCarousel, setShowCarousel] = useState(false);
  const staticLayoutRef = useRef<HTMLDivElement>(null);

  // Lógica para decidir si mostrar el carrusel o un layout estático
  useEffect(() => {
    // Si hay un solo testimonio, nunca mostramos el carrusel
    if (testimonials.items.length <= 1) {
      setShowCarousel(false);
      return;
    }

    const el = staticLayoutRef.current;
    if (!el) return;

    let rafId = 0;
    const checkWrap = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length <= 1) {
        setShowCarousel(false);
        return;
      }
      const firstTop = children[0].offsetTop;
      const isWrapping = children.some((child) => child.offsetTop > firstTop);
      setShowCarousel(isWrapping);
    };

    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkWrap);
    });

    resizeObserver.observe(el);
    checkWrap(); // Comprobación inicial

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [testimonials.items.length]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const testimonialCards = testimonials.items.map((item, index) => {
    const cardData = {
      id: `cert-testimonial-${index}`,
      quoteKey: item.quoteKey,
      name: item.name,
      originKey: t(item.originKey),
      rating: item.rating,
      avatarUrl: item.photoUrl,
    };
    return (
      <TestimonialCard
        key={cardData.id}
        cardData={cardData}
        translationNS={translationNS}
      />
    );
  });

  return (
    <section className='bg-brand-primary-dark py-16'>
      <div className='section text-center'>
        <motion.h2
          className='heading-2 text-white mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          {t(testimonials.titleKey)}
        </motion.h2>

        <div className='relative max-w-5xl mx-auto'>
          {/* Layout Oculto para medir si los elementos se desbordan */}
          <div
            ref={staticLayoutRef}
            className='absolute opacity-0 pointer-events-none flex flex-wrap justify-center gap-6'>
            {testimonialCards.map((card, index) => (
              <div
                key={index}
                className='w-full sm:w-1/2 lg:w-1/3'>
                {card}
              </div>
            ))}
          </div>

          {showCarousel ? (
            <>
              {/* Carrusel (cuando es necesario) */}
              <div
                className='overflow-hidden'
                ref={emblaRef}>
                <div className='flex -ml-6'>
                  {testimonialCards.map((card, index) => (
                    <div
                      key={index}
                      className='pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]'>
                      {card}
                    </div>
                  ))}
                </div>
              </div>

              {/* Controles del Carrusel */}
              <button
                onClick={scrollPrev}
                className='absolute top-1/2 left-[-1rem] md:left-[-2.5rem] -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors'
                aria-label={t('common:previous', 'Anterior')}>
                <ChevronLeftIcon className='h-6 w-6' />
              </button>
              <button
                onClick={scrollNext}
                className='absolute top-1/2 right-[-1rem] md:right-[-2.5rem] -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors'
                aria-label={t('common:next', 'Siguiente')}>
                <ChevronRightIcon className='h-6 w-6' />
              </button>
            </>
          ) : (
            /* Layout Estático (cuando no se necesita carrusel) */
            <div className='flex flex-wrap justify-center gap-6'>
              {testimonialCards.map((card, index) => (
                <div
                  key={index}
                  className='w-full sm:w-1/2 lg:w-1/3 flex'>
                  {card}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
