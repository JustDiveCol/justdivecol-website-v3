// src/components/sections/experiences/TripRow.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Button } from '../../common/Button';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../../content/urlPathSchema';
import {
  BRAND_ASSETS_SAFE,
  type AvailableType,
  type ExperienceId,
} from '../../../constants';

import { getExperienceById } from '../../../content/experiences';
import { listDestinations } from '../../../content/destinations';
import type { ExperienceContent } from '../../../content/experiences/types';
import type { TOptions } from 'i18next';

// ✅ helper central para disponibilidad
import { deriveSessionAvailability } from '../../../lib/availability';

// ---------- AvailabilityBadge ----------
const AvailabilityBadge = ({ status }: { status: AvailableType }) => {
  const { t } = useTranslation('common');
  const baseClasses = 'px-3 py-1 text-xs font-bold rounded-full';

  const statusMap: Record<AvailableType, { textKey: string; classes: string }> =
    {
      available: {
        textKey: 'statusAvailable',
        classes: 'bg-green-500/20 text-green-300',
      },
      few_spots: {
        textKey: 'statusFewSpots',
        classes: 'bg-yellow-500/20 text-yellow-300',
      },
      sold_out: {
        textKey: 'statusSoldOut',
        classes: 'bg-red-500/20 text-red-400',
      },
      coming_soon: {
        textKey: 'statusComingSoon',
        classes: 'bg-yellow-500/20 text-yellow-300',
      },
    };

  const current = statusMap[status] ?? {
    textKey: 'statusUnknown',
    classes: 'bg-gray-500/20 text-gray-300',
  };

  const animationProps =
    status === 'available' || status === 'few_spots' || status === 'coming_soon'
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
      className={`${baseClasses} ${current.classes}`}
      {...animationProps}>
      {t(current.textKey)}
    </motion.div>
  );
};

// ---------- Tipos de props ----------
type TripRowSession = {
  id: string;
  experienceId: ExperienceId;
  startDate: string; // 'YYYY-MM-DD'
  endDate: string; // 'YYYY-MM-DD'
  seatsAvailable: number;
  capacity: number;

  // Estos dos pueden no venir si el selector ya adjunta derivedAvailability
  availability?: AvailableType; // estado "de origen" opcional
  derivedAvailability?: AvailableType; // calculado en selectors (si existe)

  creyentes?: boolean;
  nameKey?: string;
  subtitleKey?: string;
  imageUrl?: string;
};

type TripRowProps = {
  session: TripRowSession;
  translationNS: string; // p.ej. 'experiences'
};

type ExperienceHeaderWithSubtitle = ExperienceContent['header'] & {
  subtitleKey?: string;
};

// Util para traducir keys absolutas ("ns:key") o relativas (key) con ns dado
function tKey(
  t: (k: string, opts?: TOptions) => string,
  key: string | undefined,
  ns: string
) {
  if (!key) return '';
  return key.includes(':') ? t(key) : t(key, { ns });
}

// Fecha 'YYYY-MM-DD' → Date UTC seguro
const toUTCDate = (isoDate: string) => new Date(`${isoDate}T00:00:00Z`);

export const TripRow = ({ session, translationNS }: TripRowProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const soldOutLogo = BRAND_ASSETS_SAFE.seals.soldOut;

  // 0) Estado derivado (usa el que venga del selector o calcúlalo aquí)
  const derivedStatus = useMemo<AvailableType>(() => {
    if (session.derivedAvailability) return session.derivedAvailability;
    return deriveSessionAvailability({
      seatsAvailable: session.seatsAvailable,
      capacity: session.capacity,
    });
  }, [session.derivedAvailability, session.seatsAvailable, session.capacity]);

  // 1) Resolvemos experiencia, textos e imagen
  const { titleKey, subtitleKey, imageUrl, destinationId } = useMemo(() => {
    const exp = getExperienceById(session.experienceId) as
      | ExperienceContent
      | undefined;

    const header = exp?.header as ExperienceHeaderWithSubtitle | undefined;

    const titleKeyRaw = session.nameKey ?? header?.titleKey ?? '';
    const subtitleKeyRaw = session.subtitleKey ?? header?.subtitleKey ?? '';

    const expImg =
      exp?.gallery?.images?.[0]?.backgroundImage ??
      header?.imageData?.backgroundImage ??
      undefined;

    return {
      titleKey: titleKeyRaw,
      subtitleKey: subtitleKeyRaw || undefined,
      imageUrl: session.imageUrl ?? expImg,
      destinationId: exp?.destinationId,
    };
  }, [session]);

  const destinationNameKey = useMemo(() => {
    if (!destinationId) return '';
    const destination = listDestinations().find((d) => d.id === destinationId);
    // si tu proyección expone nameKey (i18n), usa destination?.nameKey
    return destination?.name ?? '';
  }, [destinationId]);

  // 2) Fechas + duración usando UTC
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

    const diffDays = Math.round((+end - +start) / (1000 * 60 * 60 * 24)) + 1; // inclusive
    const nights = diffDays - 1;

    const duration = `${diffDays} ${t('common:durationDays')} / ${nights} ${t(
      'common:durationNights'
    )}`;

    return { formattedDateRange: dateRange, durationText: duration };
  }, [session.startDate, session.endDate, i18n.language, t]);

  const isSoldOut = derivedStatus === 'sold_out';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row items-center gap-6 p-4 border rounded-lg transition-colors duration-300 ${
        isSoldOut
          ? 'border-red-500/20 bg-red-900/10'
          : 'border-white/10 bg-white/5 hover:bg-white/10'
      }`}>
      {/* Imagen */}
      <div className='relative w-full md:w-48 h-32 md:h-24 flex-shrink-0 p-2 rounded'>
        <img
          src={imageUrl}
          alt={titleKey ? tKey(t, titleKey, translationNS) : ''}
          className='w-full h-full object-contain'
          loading='lazy'
          decoding='async'
        />
        {session.creyentes && (
          <img
            src='/images/logos/creyentes-logo.png'
            alt={t('common:creyentesTripSealAlt')}
            className='absolute -top-3 -right-3 w-16 h-16 pointer-events-none'
            aria-hidden='true'
            loading='lazy'
            decoding='async'
          />
        )}
      </div>

      {/* Texto */}
      <div className='flex-grow text-center md:text-left'>
        <h3 className='text-xl font-bold text-brand-white'>
          {tKey(t, titleKey, translationNS)}
        </h3>

        {/* Nombre del destino */}
        {destinationNameKey && (
          <p className='text-sm font-medium text-brand-cta-orange'>
            {t(destinationNameKey)}
          </p>
        )}

        {subtitleKey && (
          <p className='text-sm text-brand-neutral/70'>
            {tKey(t, subtitleKey, translationNS)}
          </p>
        )}
        <p className='text-brand-neutral/80 font-serif capitalize'>
          {formattedDateRange}
        </p>
        <p className='text-sm text-brand-neutral/70'>{durationText}</p>
      </div>

      {/* Acciones */}
      <div className='w-full md:w-auto flex-shrink-0 flex flex-col items-center md:items-end justify-center gap-2'>
        {isSoldOut ? (
          <div className='flex flex-col items-center'>
            <img
              src={soldOutLogo.url}
              alt={t(soldOutLogo.altKey)}
              className='h-20 w-auto'
              loading='lazy'
              decoding='async'
            />
          </div>
        ) : (
          <>
            <AvailabilityBadge status={derivedStatus} />
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
                  path: toUrlPath(`${ROUTES.diveExperiences}/${session.id}`),
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
