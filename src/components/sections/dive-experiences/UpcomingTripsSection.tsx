// src/components/sections/dive-experiences/UpcomingTripsSection.tsx
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TripRow } from './TripRow';
import { PaginationControls } from '../../common/PaginationControls';
import type { UpcomingTripsSectionProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';

import { listExperiences } from '../../../content/experiences';
import { listDestinations } from '../../../content/destinations';
import { listSessions } from '../../../content/experiences';
import { ChevronDownIcon } from '../../ui';
import { useReducedMotion, motion } from 'framer-motion';
import { MotionBlock } from '../../motion/MotionBlock';

const ITEMS_PER_PAGE = 10;

export const UpcomingTripsSection = ({
  titleKey,
  subtitleKey,
  backgroundImageUrl,
  translationNS,
  filtersAllDestinationsKey,
  filtersAllMonthsKey,
  filtersNoResultsKey,
}: UpcomingTripsSectionProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const { fadeIn } = useMotionPresets();
  const reduce = useReducedMotion();

  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const experiences = useMemo(() => listExperiences(), []);
  const destinations = useMemo(() => listDestinations(), []);
  const sessions = useMemo(() => listSessions(), []);

  const destinationOptions = useMemo(() => {
    const destinationIds = new Set(experiences.map((exp) => exp.destinationId));
    return destinations.filter((dest) => destinationIds.has(dest.id));
  }, [experiences, destinations]);

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
  }, [i18n.language, sessions]);

  const toUTC = (iso: string) => {
    const [y, m, d] = iso.split('-').map(Number);
    return Date.UTC(y, m - 1, d);
  };

  const filteredSessions = useMemo(() => {
    setCurrentPage(1);

    const filtered = sessions.filter((session) => {
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

    filtered.sort((a, b) => toUTC(a.startDate) - toUTC(b.startDate));
    return filtered;
  }, [
    selectedDestination,
    selectedMonth,
    i18n.language,
    sessions,
    experiences,
  ]);

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
      id="dive-experiences"
      aria-labelledby="upcoming-trips-heading"
      className="relative min-h-[80svh] md:min-h-screen text-white"
    >
      {/* Fondo como IMG para mejor LCP */}
      <img
        src={backgroundImageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-brand-primary-dark/80"
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="section relative z-10 py-16 md:py-20">
        <MotionBlock
          kind="eager"
          variants={fadeIn()}
          className="max-w-max mx-auto text-center mb-12 md:mb-12"
        >
          <h1 id="upcoming-trips-heading" className="heading-2">
            {t(titleKey)}
          </h1>
          <p className="text-subtitle mt-4">{t(subtitleKey)}</p>
        </MotionBlock>

        <MotionBlock
          kind="eager"
          variants={fadeIn({ delay: 0.06 })}
          className="mx-auto mb-10 max-w-max rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="form-input w-full"
            >
              <option value="all">{t(filtersAllDestinationsKey)}</option>
              {destinationOptions.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {dest.name}
                </option>
              ))}
            </select>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="form-input w-full"
            >
              <option value="all">{t(filtersAllMonthsKey)}</option>
              {monthOptions.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </MotionBlock>

        <div className="mx-auto flex max-w-max flex-col gap-4 drop-shadow-strong">
          {paginatedSessions.length > 0 ? (
            paginatedSessions.map((session) => {
              const experience = experiences.find(
                (exp) => exp.id === session.experienceId
              );
              if (!experience) return null;

              return (
                <TripRow
                  key={session.id}
                  session={session}
                  translationNS={'experiences'}
                />
              );
            })
          ) : (
            <div className="flex items-center justify-center pt-12">
              <p className="text-center font-serif text-brand-neutral/80">
                {t(filtersNoResultsKey)}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-40 hidden -translate-x-1/2 md:block">
        {reduce ? (
          <ChevronDownIcon className="h-12 w-12 select-none text-brand-cta-orange" />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="select-none"
          >
            <ChevronDownIcon className="h-12 w-12 text-brand-cta-orange" />
          </motion.div>
        )}
      </div>
    </section>
  );
};
