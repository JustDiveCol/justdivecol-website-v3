import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiencesPageData } from '../../../data/experiencesPageData';
import { TripRow } from './TripRow';
import { allSessions } from '../../../data/sessions';
import { allExperiences } from '../../../data/experiences';
import { allDestinations } from '../../../data/destinations';
import { PaginationControls } from '../../common/PaginationControls';
import { ChevronDownIcon } from '../../ui/Icons';
import { BRAND_ASSETS } from '../../../constants/assets';

const ITEMS_PER_PAGE = 10;

interface UpcomingTripsSectionProps {
  translationNS?: string;
}

export const UpcomingTripsSection = ({
  translationNS,
}: UpcomingTripsSectionProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const { upcomingTrips } = experiencesPageData;

  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const destinationOptions = useMemo(() => {
    const destinationIds = new Set(
      allExperiences.map((exp) => exp.destinationId)
    );
    return allDestinations.filter((dest) => destinationIds.has(dest.id));
  }, []);

  const monthOptions = useMemo(() => {
    const months = new Set(
      allSessions.map((session) => {
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

  const filteredSessions = useMemo(() => {
    setCurrentPage(1);
    return allSessions.filter((session) => {
      const experience = allExperiences.find(
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
    const sectionElement = document.getElementById('upcoming-trips-section');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='upcoming-trips-section'
      // ===== CAMBIO 1: Añadimos 'min-h-screen' y 'flex' para la altura y alineación =====
      className='relative min-h-screen flex items-center bg-cover bg-center py-20 px-4'
      style={{ backgroundImage: `url(${upcomingTrips.backgroundImageUrl})` }}>
      <div className='absolute inset-0 bg-brand-primary-dark/80' />

      {/* ===== CAMBIO 2: Hacemos el contenedor relativo para el z-index ===== */}
      <div className='container mx-auto relative z-10'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <h1 className='heading-1 text-white'>
            {t('upcomingTrips.pageTitle', { ns: 'experiences' })}
          </h1>
          <p className='text-subtitle mt-4'>
            {t('upcomingTrips.pageSubtitle', { ns: 'experiences' })}
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12'>
          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            className='form-input w-full'>
            <option value='all'>
              {t('upcomingTrips.filters.allDestinations', {
                ns: 'experiences',
              })}
            </option>
            {destinationOptions.map((dest) => (
              <option
                key={dest.id}
                value={dest.id}>
                {t(`destinations.${dest.nameKey}`, { ns: 'destinations' })}
              </option>
            ))}
          </select>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className='form-input w-full'>
            <option value='all'>
              {t('upcomingTrips.filters.allMonths', { ns: 'experiences' })}
            </option>
            {monthOptions.map((month) => (
              <option
                key={month}
                value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className='max-w-4xl mx-auto flex flex-col gap-4'>
          {/* Eliminamos el min-h de aquí para que el centrado funcione bien */}
          {paginatedSessions.length > 0 ? (
            paginatedSessions.map((session) => {
              const experience = allExperiences.find(
                (exp) => exp.id === session.experienceId
              );
              if (!experience) return null;

              return (
                <TripRow
                  key={session.id}
                  session={session}
                  experience={{ nameKey: experience.nameKey }}
                  translationNS={'experiences'}
                />
              );
            })
          ) : (
            <div className='flex items-center justify-center h-full pt-16'>
              <p className='text-center text-brand-neutral/80 font-serif'>
                {t('upcomingTrips.filters.noResults', { ns: 'common' })}
              </p>
            </div>
          )}
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* 4. Los logos y créditos se añaden como elementos separados, también encima de todo */}

      <div className='absolute bottom-6 right-4 select-none w-24 h-auto md:w-24 opacity-70'>
        <img
          src={BRAND_ASSETS.mainLogo.url}
          alt={t(BRAND_ASSETS.mainLogo.altKey)}
          className='h-auto w-full'
          loading='lazy'
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 1,
        }}
        className='absolute bottom-8 z-40 left-1/2 -translate-x-1/2'>
        <ChevronDownIcon className='w-12 h-12 text-brand-cta-orange animate-bounce select-none' />
      </motion.div>
    </section>
  );
};
