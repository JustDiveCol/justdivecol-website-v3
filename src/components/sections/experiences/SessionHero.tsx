// src/components/sections/experiences/SessionHero.tsx
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { SessionHeroProps } from './types';
import { Button } from '../../common/Button';
import { CalendarIcon, UserGroupIcon } from '../../ui';
import { deriveSessionAvailability } from '../../../lib/availability';
import { AvailabilityBadge } from '../diveExperiences/TripRow';

const toUTCDate = (isoDate: string) => new Date(`${isoDate}T00:00:00Z`);

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

  const renderCtaButton = () => {
    const commonProps = {
      className: 'w-full',
      size: 'lg' as const,
      children: t(experience.ctaButton.textKey),
    };

    switch (experience.ctaButton.action.type) {
      case 'internal':
        return (
          <Button
            {...commonProps}
            action={experience.ctaButton.action}
          />
        );
      case 'external':
        return (
          <Button
            {...commonProps}
            action={experience.ctaButton.action}
          />
        );
      case 'whatsapp':
        return (
          <Button
            {...commonProps}
            action={experience.ctaButton.action}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      className='bg-brand-primary-dark'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={container}>
      <div className='section grid grid-cols-1 lg:grid-cols-3 gap-12'>
        {/* Columna Izquierda: Descripción */}
        <motion.div
          className='lg:col-span-2'
          variants={fadeIn()}>
          <h2 className='heading-3 text-white mb-4'>
            {t(experience.description.titleKey)}
          </h2>
          <div className='prose prose-invert prose-lg text-brand-neutral/90 max-w-none'>
            {experience.description.paragraphs.map((pKey, i) => (
              <p
                key={i}
                className='text-base-sm whitespace-pre-line'>
                {t(pKey)}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Columna Derecha: Panel de Detalles */}
        <motion.div
          className='lg:col-span-1'
          variants={fadeIn()}>
          <div className='sticky top-28 bg-brand-primary-medium/30 border border-white/10 rounded-lg p-6 drop-shadow-strong'>
            {/* Fechas */}
            <div className='flex items-center gap-4 border-b border-white/10 pb-4'>
              <CalendarIcon className='h-8 w-8 text-brand-cta-orange flex-shrink-0' />
              <div>
                <p className='text-base-smfont-bold text-white capitalize'>
                  {formattedDateRange}
                </p>
                <p className='text-base-xs text-brand-neutral/80'>
                  {durationText}
                </p>
              </div>
            </div>

            {/* --- SECCIÓN DE DISPONIBILIDAD --- */}
            <div className='flex items-center justify-between gap-4 mt-4'>
              <div className='flex items-center gap-2'>
                <UserGroupIcon className='h-6 w-6 text-brand-cta-orange' />
                <p className='text-base-xs font-bold text-white'>
                  {t('common:availability')}
                </p>
              </div>
              {/* Contenedor para el badge y el texto de los cupos */}
              <div className='flex flex-col items-end'>
                <AvailabilityBadge status={derivedStatus} />
                <p className='text-xs text-brand-neutral/70 mt-1'>
                  {t('common:seatsAvailableText', {
                    count: session.seatsAvailable,
                    total: session.capacity,
                  })}
                </p>
              </div>
            </div>

            {/* Precios */}
            <div className='mt-6 space-y-2'>
              <p className='font-bold text-white'>{t('common:pricesFrom')}</p>
              {session.pricingOptions.map((opt) => (
                <div
                  key={opt.id}
                  className='flex justify-between items-center'>
                  <span className='text-base-xs text-brand-neutral/90'>
                    {t(opt.nameKey)}
                  </span>
                  <span className='text-base-xs font-semibold text-white'>
                    {new Intl.NumberFormat(i18n.language, {
                      style: 'currency',
                      currency: opt.currency,
                      maximumFractionDigits: 0,
                    }).format(opt.price)}
                  </span>
                </div>
              ))}
              {session.pricingOptionsNotes && (
                <p className='text-xs text-brand-neutral/70 italic pt-2'>
                  {t(session.pricingOptionsNotes)}
                </p>
              )}
            </div>

            {/* Botón CTA */}
            <div className='mt-6'>{renderCtaButton()}</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
