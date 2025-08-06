// src/components/sections/experiences/TripRow.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Button } from '../../common/Button';
import { BRAND_ASSETS } from '../../../constants/assets';
import type { I18NNamespace } from '../../../constants/i18n';
import { ROUTES } from '../../../constants/routes';
import type { AvailableType } from '../../../constants/ui';
import type { ExperienceSession } from '../../../data/sessions/styles';

const AvailabilityBadge = ({ status }: { status: AvailableType }) => {
  const { t } = useTranslation('common');
  const baseClasses = 'px-3 py-1 text-xs font-bold rounded-full';

  const statusMap: { [key: string]: { textKey: string; classes: string } } = {
    available: {
      textKey: 'common:statusAvailable',
      classes: 'bg-green-500/20 text-green-300',
    },
    few_spots: {
      textKey: 'common:statusFewSpots',
      classes: 'bg-yellow-500/20 text-yellow-300',
    },
    sold_out: {
      textKey: 'common:statusSoldOut',
      classes: 'bg-red-500/20 text-red-400',
    },
  };

  const currentStatus = statusMap[status] || {
    textKey: 'statusUnknown',
    classes: 'bg-gray-500/20 text-gray-300',
  };

  const animationProps =
    status === 'available' || status === 'few_spots'
      ? {
          animate: { scale: [1, 1.1, 1] },
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'mirror' as const,
          },
        }
      : {};

  return (
    <motion.div
      className={`${baseClasses} ${currentStatus.classes}`}
      {...animationProps}>
      {t(currentStatus.textKey)}
    </motion.div>
  );
};

interface TripRowProps {
  session: ExperienceSession;
  experience: {
    nameKey: string;
  };
  translationNS: I18NNamespace;
}

export const TripRow = ({
  session,
  experience,
  translationNS,
}: TripRowProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const soldOutLogo = BRAND_ASSETS.seals.soldOut;

  // Lógica para formatear fechas y calcular duración
  const { formattedDateRange, durationText } = useMemo(() => {
    const startDate = new Date(session.startDate);
    const endDate = new Date(session.endDate);
    startDate.setMinutes(
      startDate.getMinutes() + startDate.getTimezoneOffset()
    );
    endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = startDate.toLocaleString(i18n.language, { month: 'long' });
    const year = startDate.getFullYear();
    const dateRange = `${month} ${startDay} - ${endDay}, ${year}`;

    const nights = Math.round(
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    );
    const days = nights + 1;
    const duration = `${days} ${t('common:durationDays')} / ${nights} ${t(
      'common:durationNights'
    )}`;

    return { formattedDateRange: dateRange, durationText: duration };
  }, [session.startDate, session.endDate, i18n.language, t]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row items-center gap-6 p-4 border rounded-lg transition-colors duration-300 ${
        session.availability === 'sold_out'
          ? 'border-red-500/20 bg-red-900/10'
          : 'border-white/10 bg-white/5 hover:bg-white/10'
      }`}>
      {/* Contenedor de la Imagen */}
      <div className='relative w-full md:w-48 h-32 md:h-24 flex-shrink-0 p-2 rounded'>
        <img
          src={session.imageUrl}
          alt={t(experience.nameKey)}
          className='w-full h-full object-contain'
          loading='lazy'
        />

        {session.creyentes && (
          <img
            src='/images/logos/creyentes-logo.png'
            alt={t('creyentesTripSealAlt')}
            className='absolute -top-3 -right-3 w-16 h-16 transform pointer-events-none'
            aria-hidden='true'
            loading='lazy'
          />
        )}
      </div>

      <div className='flex-grow text-center md:text-left'>
        <h3 className='text-xl font-bold text-brand-white'>
          {t(experience.nameKey)}
        </h3>
        <p className='text-brand-neutral/80 font-serif'>{formattedDateRange}</p>
        <p className='text-sm text-brand-neutral/70'>{durationText}</p>
      </div>

      <div className='w-full md:w-auto flex-shrink-0 flex flex-col items-center md:items-end justify-center gap-2'>
        {session.availability === 'sold_out' ? (
          <div className='flex flex-col items-center'>
            <img
              src={soldOutLogo.url}
              alt={t(soldOutLogo.altKey)}
              className='h-20 w-auto'
              loading='lazy'
            />
          </div>
        ) : (
          <>
            <AvailabilityBadge status={session.availability} />
            <p className='text-xs text-brand-neutral/70'>
              {t('common:seatsAvailableText', {
                count: session.seatsAvailable,
                total: session.capacity,
              })}
            </p>
            <div className='mt-1 cursor-pointer'>
              <Button
                action={{
                  type: 'internal',
                  path: `${ROUTES.diveExperiences}/${session.experienceId}`,
                }}
                variant='outline'
                size='sm'>
                {t('common:seeDetailsButton')}
              </Button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
