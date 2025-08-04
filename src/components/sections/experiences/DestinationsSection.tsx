import React from 'react';
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';
import {
  getActiveDestinations,
  getOtherDestinations,
} from '../../../data/dataService';
import { allExperiences } from '../../../data/experiences';
import { ActiveDestinationCard } from '../shared/ActiveDestinationCard';
import { DestinationPill } from '../shared/DestinationPill';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui/Icons';
import { experiencesPageData } from '../../../data/experiencesPageData';

export const DestinationsSection = () => {
  const { t } = useTranslation(['experiences', 'destinations']);

  const { titleKey, otherTitleKey } = experiencesPageData.destinations;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
  });

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const activeDestinations = getActiveDestinations();
  const otherDestinations = getOtherDestinations();

  // ===== LÓGICA INTELIGENTE AQUÍ =====
  // Definimos que el carrusel solo se usa si hay más de 3 elementos
  const shouldUseCarousel = activeDestinations.length > 3;

  return (
    <section
      className='bg-brand-primary-medium py-20 px-4'
      id='destinations-section'>
      {/* --- SECCIÓN DE DESTINOS ACTIVOS --- */}
      {activeDestinations.length > 0 && (
        <div className='container mx-auto mb-20'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='heading-2 text-white'>
              {t(titleKey, { ns: 'experiences' })}
            </h2>
          </div>

          {shouldUseCarousel ? (
            // --- VISTA DE CARRUSEL (si hay MÁS de 3 destinos) ---
            <div className='relative'>
              <div
                className='overflow-hidden'
                ref={emblaRef}>
                <div className='flex -ml-4'>
                  {activeDestinations.map((dest) => {
                    const activeExps = allExperiences.filter(
                      (exp) => exp.destinationId === dest.id
                    );
                    return (
                      <div
                        key={dest.id}
                        className='relative pl-4 flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]'>
                        <ActiveDestinationCard
                          destination={dest}
                          activeExperiences={activeExps}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={scrollPrev}
                className='absolute top-1/2 left-[-1rem] md:left-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 z-10'
                aria-label='Anterior'>
                <ChevronLeftIcon className='h-6 w-6' />
              </button>
              <button
                onClick={scrollNext}
                className='absolute top-1/2 right-[-1rem] md:right-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 z-10'
                aria-label='Siguiente'>
                <ChevronRightIcon className='h-6 w-6' />
              </button>
            </div>
          ) : (
            // --- VISTA ESTÁTICA (si hay 3 o menos destinos) ---
            <div className='flex flex-wrap justify-center gap-8'>
              {activeDestinations.map((dest) => {
                const activeExps = allExperiences.filter(
                  (exp) => exp.destinationId === dest.id
                );
                return (
                  <ActiveDestinationCard
                    key={dest.id}
                    destination={dest}
                    activeExperiences={activeExps}
                    className='w-full max-w-sm'
                  />
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* --- NUBE DE OTROS DESTINOS --- */}
      {otherDestinations.length > 0 && (
        <div className='container mx-auto'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='heading-3 text-white'>
              {t(otherTitleKey, { ns: 'experiences' })}
            </h2>
          </div>
          {/* 2. Reemplazamos la rejilla de tarjetas por una nube de píldoras centrada */}
          <div className='flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto'>
            {otherDestinations.map((dest) => (
              <DestinationPill
                key={dest.id}
                destination={dest}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
