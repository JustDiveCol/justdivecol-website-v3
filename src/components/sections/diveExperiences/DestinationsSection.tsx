// src/components/sections/experiences/DestinationsSection.tsx
import { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';

import { listDestinations } from '../../../content/destinations';
import { listExperiences } from '../../../content/experiences';
import { ActiveDestinationCard } from '../shared/ActiveDestinationCard';
import { DestinationPill } from '../shared/DestinationPill';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui';
import type { DestinationsSectionProps } from './types';
import type { DestinationContent } from '../../../content/destinations/types';

import { listSessions } from '../../../content/experiences';
import type { ExperienceSessionContent } from '../../../content/experiences/sessions/types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const DestinationsSection = ({
  titleKey,
  otherTitleKey,
  translationNS,
}: DestinationsSectionProps) => {
  const { t } = useTranslation([
    translationNS,
    'destinations',
    'experiences',
    'common',
  ]);
  const { fadeIn } = useMotionPresets();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const destinations = useMemo(() => listDestinations(), []);
  const experiences = useMemo(() => listExperiences(), []);
  const sessions = useMemo(() => listSessions(), []);

  const expIdToDestId = useMemo<Record<string, string>>(
    () =>
      experiences.reduce((acc, e) => {
        acc[e.id] = e.destinationId;
        return acc;
      }, {} as Record<string, string>),
    [experiences]
  );

  const sessionsByDestination = useMemo<
    Record<string, ExperienceSessionContent[]>
  >(() => {
    const todayUTC = new Date();
    todayUTC.setUTCHours(0, 0, 0, 0);
    const todayMs = todayUTC.getTime();

    const byDest: Record<string, ExperienceSessionContent[]> = {};

    for (const s of sessions) {
      const destId = expIdToDestId[s.experienceId];
      if (!destId) continue;

      const startMs = new Date(`${s.startDate}T00:00:00Z`).getTime();
      if (startMs < todayMs) continue;

      (byDest[destId] ||= []).push(s);
    }

    Object.values(byDest).forEach((arr) =>
      arr.sort(
        (a, b) =>
          new Date(`${a.startDate}T00:00:00Z`).getTime() -
          new Date(`${b.startDate}T00:00:00Z`).getTime()
      )
    );

    return byDest;
  }, [sessions, expIdToDestId]);

  const activeDestinations = useMemo<DestinationContent[]>(() => {
    return destinations.filter(
      (d) => (sessionsByDestination[d.id]?.length ?? 0) > 0
    );
  }, [destinations, sessionsByDestination]);

  const otherDestinations = useMemo<DestinationContent[]>(() => {
    const activeIds = new Set(activeDestinations.map((d) => d.id));
    return destinations.filter((d) => !activeIds.has(d.id));
  }, [destinations, activeDestinations]);

  const shouldUseCarousel = activeDestinations.length > 3;

  return (
    <section
      className='bg-brand-primary-medium py-16 px-4'
      id='destinations'>
      {/* --- ACTIVOS --- */}
      {activeDestinations.length > 0 && (
        <div className='container mx-auto mb-12'>
          <div className='max-w-max mx-auto text-center mb-12'>
            {/* Header del bloque: in-view suave (el padre NO controla a las cards) */}
            <MotionBlock
              kind='inView'
              variants={fadeIn()}>
              <h2 className='heading-3 text-white'>{t(titleKey)}</h2>
            </MotionBlock>
          </div>

          {shouldUseCarousel ? (
            <div className='relative'>
              <div
                className='overflow-hidden'
                ref={emblaRef}>
                {/* Track con GPU accel para el translateX del carrusel */}
                <div className='flex -ml-4 transform-gpu will-change-transform'>
                  {activeDestinations.map((dest) => {
                    const activeSess = sessionsByDestination[dest.id] || [];
                    return (
                      <div
                        key={dest.id}
                        className='relative pl-4 flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] drop-shadow-strong'>
                        {/* Cada card ya es in-view owner */}
                        <ActiveDestinationCard
                          destination={dest}
                          activeSessions={activeSess}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={scrollPrev}
                className='absolute top-1/2 left-[-1rem] md:left-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/70'
                aria-label={t('common:previous', 'Anterior')}
                type='button'>
                <ChevronLeftIcon className='h-6 w-6' />
              </button>
              <button
                onClick={scrollNext}
                className='absolute top-1/2 right-[-1rem] md:right-[-2rem] -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/70'
                aria-label={t('common:next', 'Siguiente')}
                type='button'>
                <ChevronRightIcon className='h-6 w-6' />
              </button>
            </div>
          ) : (
            <div className='flex flex-wrap justify-center gap-8 drop-shadow-strong'>
              {activeDestinations.map((dest) => {
                const activeSess = sessionsByDestination[dest.id] || [];
                return (
                  <ActiveDestinationCard
                    key={dest.id}
                    destination={dest}
                    activeSessions={activeSess}
                    className='w-full max-w-sm'
                  />
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* --- OTROS --- */}
      {otherDestinations.length > 0 && (
        <div className='container mx-auto'>
          <div className='max-w-max mx-auto text-center mb-12'>
            <MotionBlock
              kind='inView'
              variants={fadeIn()}>
              <h2 className='heading-4 text-white'>{t(otherTitleKey)}</h2>
            </MotionBlock>
          </div>

          {/* Cada pill es in-view owner; el padre no anima la grilla */}
          <div className='flex flex-wrap justify-center items-center gap-4 max-w-max mx-auto drop-shadow-strong'>
            {otherDestinations.map((dest) => (
              <DestinationPill
                key={dest.id}
                destination={dest}
                translationNS='destinations'
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
