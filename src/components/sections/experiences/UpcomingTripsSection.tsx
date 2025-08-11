// src/components/sections/experiences/UpcomingTripsSection.tsx
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TripRow } from './TripRow';
import { PaginationControls } from '../../common/PaginationControls';
import { ChevronDownIcon } from '../../ui';
import { BRAND_ASSETS } from '../../../constants/assets';
import type { UpcomingTripsSectionData } from './types';
import { experiences } from '../../../lib/db/entities/experiences';
import { destinations } from '../../../lib/db/entities/destinations';
import { sessions } from '../../../lib/db/entities/sessions';
import { useMotionPresets } from '../../../hooks/animations';

const ITEMS_PER_PAGE = 10;

export const UpcomingTripsSection = ({
  titleKey,
  subtitleKey,
  backgroundImageUrl,
  translationNS,
  filtersAllDestinationsKey,
  filtersAllMonthsKey,
  filtersNoResultsKey,
}: UpcomingTripsSectionData) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Destinos disponibles según las experiencias conectadas
  const destinationOptions = useMemo(() => {
    const destinationIds = new Set(experiences.map((exp) => exp.destinationId));
    return destinations.filter((dest) => destinationIds.has(dest.id));
  }, []);

  // Meses disponibles según fechas de sesiones
  const monthOptions = useMemo(() => {
    const months = new Set(
      sessions.map((session) => {
        const date = new Date(session.startDate);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return date.toLocaleString(i18n.language, {
          month: 'long',
          year: 'numeric',
        });
      })
    );
    return Array.from(months).sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );
  }, [i18n.language]);

  // Filtro por destino (via experience.destinationId) y por mes
  const filteredSessions = useMemo(() => {
    setCurrentPage(1);
    return sessions.filter((session) => {
      const experience = experiences.find(
        (exp) => exp.id === session.experienceId
      );
      if (!experience) return false;

      const tripDate = new Date(session.startDate);
      tripDate.setMinutes(tripDate.getMinutes() + tripDate.getTimezoneOffset());
      const tripMonthYear = tripDate.toLocaleString(i18n.language, {
        month: 'long',
        year: 'numeric',
      });

      const matchesDestination =
        selectedDestination === 'all' ||
        experience.destinationId === selectedDestination;
      const matchesMonth =
        selectedMonth === 'all' || tripMonthYear === selectedMonth;

      return matchesDestination && matchesMonth;
    });
  }, [selectedDestination, selectedMonth, i18n.language]);

  const totalPages = Math.ceil(filteredSessions.length / ITEMS_PER_PAGE);

  const paginatedSessions = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSessions.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, filteredSessions]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document
      .getElementById('dive-experiences')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='dive-experiences'
      aria-labelledby='upcoming-trips-heading'
      className='relative min-h-[80svh] md:min-h-screen text-white'>
      {/* Fondo como IMG para mejor LCP */}
      <img
        src={backgroundImageUrl}
        alt=''
        className='absolute inset-0 h-full w-full object-cover'
        loading='lazy'
        decoding='async'
      />
      {/* Overlay */}
      <div
        className='absolute inset-0 bg-brand-primary-dark/80'
        aria-hidden='true'
      />

      {/* Contenido */}
      <div className='section relative z-10 py-16 md:py-20'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='max-w-3xl mx-auto text-center mb-10 md:mb-12'>
          <motion.h1
            variants={fadeIn()}
            id='upcoming-trips-heading'
            className='heading-1'>
            {t(titleKey)}
          </motion.h1>
          <motion.p
            variants={fadeIn()}
            className='text-subtitle mt-4'>
            {t(subtitleKey)}
          </motion.p>
        </motion.div>

        {/* Panel de filtros */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='mx-auto mb-10 max-w-2xl rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <motion.select
              variants={fadeIn()}
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className='form-input w-full'>
              <option value='all'>{t(filtersAllDestinationsKey)}</option>
              {destinationOptions.map((dest) => (
                <option
                  key={dest.id}
                  value={dest.id}>
                  {t(`destinations.${dest.nameKey}`, { ns: 'destinations' })}
                </option>
              ))}
            </motion.select>

            <motion.select
              variants={fadeIn()}
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className='form-input w-full'>
              <option value='all'>{t(filtersAllMonthsKey)}</option>
              {monthOptions.map((month) => (
                <option
                  key={month}
                  value={month}>
                  {month}
                </option>
              ))}
            </motion.select>
          </div>
        </motion.div>

        {/* Listado */}
        <div className='mx-auto flex max-w-4xl flex-col gap-4'>
          {paginatedSessions.length > 0 ? (
            paginatedSessions.map((session) => {
              // Aún validamos que exista la experiencia (por el filtro de destino)
              const experience = experiences.find(
                (exp) => exp.id === session.experienceId
              );
              if (!experience) return null;

              return (
                <TripRow
                  key={session.id}
                  session={session as any} // si quieres, tipa sessions[] como el TripRowSession
                  translationNS='experiences'
                />
              );
            })
          ) : (
            <div className='flex items-center justify-center pt-12'>
              <p className='text-center font-serif text-brand-neutral/80'>
                {t(filtersNoResultsKey)}
              </p>
            </div>
          )}
        </div>

        <div className='mt-8 border-t border-white/10 pt-6'>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Logo */}
      <div className='pointer-events-none absolute bottom-6 right-4 z-10 h-auto w-24 select-none opacity-70 md:w-24'>
        <img
          src={BRAND_ASSETS.mainLogo.url}
          alt={t(BRAND_ASSETS.mainLogo.altKey)}
          className='h-auto w-full'
          loading='lazy'
        />
      </div>

      {/* Chevron (sólo desktop) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 1,
        }}
        className='absolute bottom-8 left-1/2 z-40 hidden -translate-x-1/2 md:block'>
        <ChevronDownIcon className='h-12 w-12 select-none text-brand-cta-orange' />
      </motion.div>
    </section>
  );
};
