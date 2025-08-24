// src/components/sections/dive-experiences/UpcomingTripsSection.tsx
import { useState, useMemo, useEffect } from 'react';
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
import { BRAND_ASSETS_SAFE, type DestinationId } from '../../../constants';

const ITEMS_PER_PAGE = 10;

// Normaliza una fecha ISO (YYYY-MM-DD) a medianoche UTC en ms epoch
const toUTC = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};

// Devuelve medianoche UTC de "hoy"
const todayUTC = () => {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
};

export const UpcomingTripsSection = ({
  titleKey,
  subtitleKey,
  backgroundImageUrl,
  photoCredit,
  translationNS,
  filtersAllDestinationsKey,
  filtersAllMonthsKey,
  filtersNoResultsKey,
}: UpcomingTripsSectionProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common', 'experiences']);
  const { fadeIn } = useMotionPresets();
  const reduce = useReducedMotion();

  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const experiences = useMemo(() => listExperiences(), []);
  const destinations = useMemo(() => listDestinations(), []);
  const sessions = useMemo(() => listSessions(), []);

  const destinationOptions = useMemo(() => {
    const now = todayUTC();

    const upcomingDestIds = new Set(
      sessions
        .filter((s) => toUTC(s.startDate) >= now)
        .map((s) => {
          const exp = experiences.find((e) => e.id === s.experienceId);
          return exp?.destinationId;
        })
        .filter((id): id is DestinationId => Boolean(id))
    );

    return destinations
      .filter((d) => upcomingDestIds.has(d.id))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [sessions, experiences, destinations]);

  const monthOptions = useMemo(() => {
    const now = todayUTC();
    const monthBuckets = new Map<
      string,
      { date: Date; hasUpcoming: boolean }
    >();

    sessions.forEach((s) => {
      const d = new Date(s.startDate);
      const monthStartUTC = new Date(
        Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)
      );
      const key = `${monthStartUTC.getUTCFullYear()}-${String(
        monthStartUTC.getUTCMonth() + 1
      ).padStart(2, '0')}`;

      const hasUpcoming = toUTC(s.startDate) >= now;

      if (!monthBuckets.has(key)) {
        monthBuckets.set(key, { date: monthStartUTC, hasUpcoming });
      } else if (hasUpcoming) {
        monthBuckets.get(key)!.hasUpcoming = true;
      }
    });

    const items = Array.from(monthBuckets.values())
      .filter((b) => b.hasUpcoming)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map((b) =>
        new Intl.DateTimeFormat(i18n.language, {
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC',
        }).format(b.date)
      );

    return items;
  }, [sessions, i18n.language]);

  useEffect(() => {
    if (
      selectedDestination !== 'all' &&
      !destinationOptions.some((d) => d.id === selectedDestination)
    ) {
      setSelectedDestination('all');
    }

    if (selectedMonth !== 'all' && !monthOptions.includes(selectedMonth)) {
      setSelectedMonth('all');
    }
  }, [destinationOptions, monthOptions, selectedDestination, selectedMonth]);

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

    // Orden cronológico ascendente
    filtered.sort((a, b) => toUTC(a.startDate) - toUTC(b.startDate));

    // Reordenar: primero futuras/activas, luego pasadas (usabilidad)
    const nowUTC = todayUTC();
    const upcoming: typeof filtered = [];
    const past: typeof filtered = [];

    for (const s of filtered) {
      (toUTC(s.startDate) >= nowUTC ? upcoming : past).push(s);
    }

    past.sort((a, b) => toUTC(b.startDate) - toUTC(a.startDate));

    return [...upcoming, ...past];
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
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Logos y créditos */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute bottom-6 right-6 select-none w-24 h-auto md:w-28 opacity-70 drop-shadow-strong">
          <img
            src={BRAND_ASSETS_SAFE.mainLogo.url}
            alt={t(BRAND_ASSETS_SAFE.mainLogo.altKey, { ns: 'common' })}
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
        {photoCredit && (
          <div className="absolute bottom-2 left-2 select-none text-xs text-white/70">
            {t('common:photoCreditPrefix')} {photoCredit}
          </div>
        )}
      </div>

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

        {/* Filtros */}
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

        {/* Lista de viajes (activas arriba, pasadas abajo con estilo atenuado) */}
        <div className="mx-auto flex max-w-max flex-col gap-4">
          {paginatedSessions.length > 0 ? (
            (() => {
              let pastSeparatorInserted = false;
              const now = todayUTC();

              return paginatedSessions.map((session) => {
                const experience = experiences.find(
                  (exp) => exp.id === session.experienceId
                );
                if (!experience) return null;

                const isPast = toUTC(session.startDate) < now;

                const maybeSeparator =
                  isPast && !pastSeparatorInserted ? (
                    <div
                      key={`sep-${session.id}-${currentPage}`}
                      className="mt-6 mb-1 border-t border-white/20 pt-4"
                      aria-label={t(
                        'experiences:pastTripsTitle',
                        'Viajes pasados'
                      )}
                    >
                      <p className="text-sm uppercase tracking-wide text-white/70">
                        {t('experiences:pastTripsTitle', 'Viajes pasados')}
                      </p>
                    </div>
                  ) : null;

                if (isPast && !pastSeparatorInserted)
                  pastSeparatorInserted = true;

                return (
                  <div
                    key={session.id}
                    className={isPast ? 'opacity-60' : ''}
                    aria-disabled={isPast}
                  >
                    {maybeSeparator}
                    <TripRow
                      session={session}
                      translationNS={'experiences'}
                      isPast={isPast}
                    />
                  </div>
                );
              });
            })()
          ) : (
            <div className="flex items-center justify-center pt-12">
              <p className="text-center font-serif text-brand-neutral/80">
                {t(filtersNoResultsKey)}
              </p>
            </div>
          )}
        </div>

        {/* Paginación */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Indicador scroll */}
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
