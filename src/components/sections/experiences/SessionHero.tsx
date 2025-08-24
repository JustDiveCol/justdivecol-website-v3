// src/components/sections/experiences/SessionHero.tsx
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import type { SessionHeroProps } from './types';
import { CalendarIcon, UserGroupIcon } from '../../ui';
import { deriveSessionAvailability } from '../../../lib/availability';
import { AvailabilityBadge } from '../dive-experiences/TripRow';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

const toUTCDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

export const SessionHero = ({ content, translationNS }: SessionHeroProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();
  const { experience, session } = content;

  const derivedStatus = useMemo(
    () =>
      deriveSessionAvailability({
        seatsAvailable: session.seatsAvailable,
        capacity: session.capacity,
      }),
    [session.seatsAvailable, session.capacity]
  );

  const { formattedDateRange, durationText } = useMemo(() => {
    const start = toUTCDate(session.startDate);
    const end = toUTCDate(session.endDate);
    const fmt = new Intl.DateTimeFormat(i18n.language, {
      month: 'long',
      timeZone: 'UTC',
    });
    const month = fmt.format(start);
    const startDay = start.getUTCDate();
    const endDay = end.getUTCDate();
    const year = start.getUTCFullYear();
    const dateRange = `${month} ${startDay} - ${endDay}, ${year}`;
    const diffDays = Math.round((+end - +start) / (1000 * 60 * 60 * 24)) + 1;
    const nights = diffDays - 1;
    const duration = `${diffDays} ${t('common:durationDays')} / ${nights} ${t(
      'common:durationNights'
    )}`;
    return { formattedDateRange: dateRange, durationText: duration };
  }, [session.startDate, session.endDate, i18n.language, t]);

  const isPastSession = useMemo(() => {
    const end = toUTCDate(session.endDate);
    const today = new Date();
    const todayUTC = Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate()
    );
    return end.getTime() < todayUTC;
  }, [session.endDate]);

  const pricingOptions = session.pricingOptions ?? [];
  const isPriceDefined = (p?: number) => typeof p === 'number' && p > 0;
  const allPricesUndefined =
    pricingOptions.length > 0 &&
    pricingOptions.every((opt) => !isPriceDefined(opt.price));

  return (
    <section className="bg-brand-primary-dark">
      <MotionBlock
        kind="eager"
        variants={container}
        className="section grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* Columna Izquierda: Descripción */}
        <MotionBlock kind="none" variants={fadeIn()} className="lg:col-span-2">
          <h2 className="heading-3 text-white mb-4">
            {t(experience.description.titleKey)}
          </h2>
          <div className="prose prose-invert prose-lg text-brand-neutral/90 max-w-none">
            {experience.description.paragraphs.map((pKey, i) => (
              <p
                key={i}
                className="text-base-sm whitespace-pre-line text-justify"
              >
                {t(pKey)}
              </p>
            ))}
          </div>
        </MotionBlock>

        {/* Columna Derecha: Panel de Detalles */}
        <MotionBlock kind="none" variants={fadeIn()} className="lg:col-span-1">
          <div className="sticky top-28 bg-brand-primary-medium/30 border border-white/10 rounded-lg p-6 drop-shadow-strong">
            {/* Sello Creyentes (flotante) */}
            {session.creyentes && (
              <img
                src="/images/logos/creyentes-logo.png"
                alt={t('common:creyentesTripSealAlt')}
                className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none drop-shadow-strong"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            )}

            {/* Sello Creyentes (flotante) */}
            {session.custom && (
              <img
                src="/images/logos/custom-logo.png"
                alt={t('common:customTripSealAlt')}
                className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none drop-shadow-strong"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            )}

            {/* Fechas */}
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <CalendarIcon className="h-8 w-8 text-brand-cta-orange flex-shrink-0" />
              <div>
                <p className="text-base-sm font-bold text-white capitalize">
                  {formattedDateRange}
                </p>
                <p className="text-base-xs text-brand-neutral/80">
                  {durationText}
                </p>
              </div>
            </div>

            {isPastSession ? (
              <div
                className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  {/* Reutilizamos el icono para consistencia visual */}
                  <div>
                    <p className="font-bold text-white">
                      {t('common:pastSessionTitle')}
                    </p>
                    <p className="text-base-xs text-brand-neutral/80 mt-1">
                      {t('common:pastSessionSubtitle')}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Disponibilidad */}
                <div className="flex items-center justify-between gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="h-6 w-6 text-brand-cta-orange" />
                    <p className="text-base-xs font-bold text-white">
                      {t('common:availability')}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <AvailabilityBadge status={derivedStatus} />
                    <p className="text-xs text-brand-neutral/70 mt-1">
                      {t('common:seatsAvailableText', {
                        count: session.seatsAvailable,
                        total: session.capacity,
                      })}
                    </p>
                  </div>
                </div>

                {/* Precios */}
                <div className="mt-6 space-y-2">
                  <p className="font-bold text-white">
                    {allPricesUndefined
                      ? t('common:pricesTBDTitle')
                      : t('common:pricesFrom')}
                  </p>

                  {pricingOptions.map((opt) => {
                    const showMoney = isPriceDefined(opt.price);
                    return (
                      <div
                        key={opt.id}
                        className="flex justify-between items-center"
                      >
                        <span className="text-base-xs text-brand-neutral/90">
                          {t(opt.nameKey)}
                        </span>

                        {showMoney ? (
                          <span className="text-base-xs font-semibold text-white">
                            {new Intl.NumberFormat(i18n.language, {
                              style: 'currency',
                              currency: opt.currency,
                              maximumFractionDigits: 0,
                            }).format(opt.price as number)}
                          </span>
                        ) : (
                          <span className="text-base-xs font-semibold text-yellow-300/90 border border-yellow-300/30 bg-yellow-500/10 px-2 py-0.5 rounded">
                            {t('common:priceTBD')}
                          </span>
                        )}
                      </div>
                    );
                  })}

                  {(() => {
                    const someMissing = pricingOptions.some(
                      (opt) => !isPriceDefined(opt.price)
                    );
                    if (session.pricingOptionsNotes) {
                      return (
                        <p className="text-xs text-brand-neutral/70 italic pt-2">
                          {t(session.pricingOptionsNotes)}
                        </p>
                      );
                    }
                    if (someMissing) {
                      return (
                        <p className="text-xs text-brand-neutral/70 italic pt-2">
                          {t(
                            'common:pricesTBDNote',
                            'Estamos ajustando este plan. Contáctanos para una cotización personalizada.'
                          )}
                        </p>
                      );
                    }
                    return null;
                  })()}
                </div>
              </>
            )}
          </div>
        </MotionBlock>
      </MotionBlock>
    </section>
  );
};
