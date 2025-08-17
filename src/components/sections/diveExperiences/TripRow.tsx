// src/components/sections/diveExperiences/TripRow.tsx
import { useTranslation } from 'react-i18next';
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
import { deriveSessionAvailability } from '../../../lib/availability';

import { useReducedMotion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const AvailabilityBadge = ({ status }: { status: AvailableType }) => {
  const { t } = useTranslation('common');
  const reduce = useReducedMotion();

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

  const shouldPulse =
    !reduce &&
    (status === 'available' ||
      status === 'few_spots' ||
      status === 'coming_soon');

  return (
    <div
      className={`${baseClasses} ${current.classes} ${
        shouldPulse ? 'animate-pulse' : ''
      }`}
    >
      {t(current.textKey)}
    </div>
  );
};

type TripRowSession = {
  id: string;
  experienceId: ExperienceId;
  startDate: string;
  endDate: string;
  seatsAvailable: number;
  capacity: number;
  availability?: AvailableType;
  derivedAvailability?: AvailableType;
  creyentes?: boolean;
  nameKey?: string;
  subtitleKey?: string;
  imageUrl?: string;
};

type TripRowProps = {
  session: TripRowSession;
  translationNS: string;
};

type ExperienceHeaderWithSubtitle = ExperienceContent['header'] & {
  subtitleKey?: string;
};

function tKey(
  t: (k: string, opts?: TOptions) => string,
  key: string | undefined,
  ns: string
) {
  if (!key) return '';
  return key.includes(':') ? t(key) : t(key, { ns });
}

const toUTCDate = (isoDate: string) => new Date(`${isoDate}T00:00:00Z`);

export const TripRow = ({ session, translationNS }: TripRowProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const { slideIn } = useMotionPresets();
  const soldOutLogo = BRAND_ASSETS_SAFE.seals.soldOut;

  const parentExperience = useMemo(
    () => getExperienceById(session.experienceId),
    [session.experienceId]
  );

  const sessionUrl = useMemo(() => {
    if (!parentExperience) {
      return toUrlPath(ROUTES.diveExperiences);
    }
    return toUrlPath(
      `${ROUTES.diveExperiences}/${parentExperience.slug}/${session.id}`
    );
  }, [parentExperience, session.id]);

  const derivedStatus = useMemo<AvailableType>(() => {
    if (session.derivedAvailability) return session.derivedAvailability;
    return deriveSessionAvailability({
      seatsAvailable: session.seatsAvailable,
      capacity: session.capacity,
    });
  }, [session.derivedAvailability, session.seatsAvailable, session.capacity]);

  const { titleKey, subtitleKey, destinationId } = useMemo(() => {
    const header = parentExperience?.header as
      | ExperienceHeaderWithSubtitle
      | undefined;

    const titleKeyRaw = session.nameKey ?? header?.titleKey ?? '';
    const subtitleKeyRaw = session.subtitleKey ?? header?.subtitleKey ?? '';

    const expImg =
      parentExperience?.gallery?.images?.[0]?.backgroundImage ??
      header?.imageData?.backgroundImage ??
      undefined;

    return {
      titleKey: titleKeyRaw,
      subtitleKey: subtitleKeyRaw || undefined,
      imageUrl: session.imageUrl ?? expImg,
      destinationId: parentExperience?.destinationId,
    };
  }, [session, parentExperience]);

  const destinationNameKey = useMemo(() => {
    if (!destinationId) return '';
    const destination = listDestinations().find((d) => d.id === destinationId);
    return destination?.name ?? '';
  }, [destinationId]);

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

  const isSoldOut = derivedStatus === 'sold_out';

  return (
    <MotionBlock
      kind="eager"
      variants={slideIn('up', { distance: 32 })}
      className={`relative flex flex-col md:flex-row items-center gap-6 p-4 border rounded-lg transition-colors duration-300 transform-gpu will-change-transform ${
        isSoldOut
          ? 'border-red-500/20 bg-red-900/10'
          : 'border-white/10 bg-white/5 hover:bg-white/10'
      }`}
    >
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

      {/* Texto */}
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-bold text-brand-white">
          {tKey(t, titleKey, translationNS)}
        </h3>
        {destinationNameKey && (
          <p className="text-sm font-medium text-brand-cta-orange">
            {destinationNameKey}
          </p>
        )}
        {subtitleKey && (
          <p className="text-sm text-brand-neutral/70">
            {tKey(t, subtitleKey, translationNS)}
          </p>
        )}
        <p className="text-brand-neutral/80 font-serif capitalize">
          {formattedDateRange}
        </p>
        <p className="text-sm text-brand-neutral/70">{durationText}</p>
      </div>

      {/* Acciones */}
      <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center md:items-end justify-center gap-2">
        {isSoldOut ? (
          <div className="flex flex-col items-center">
            <img
              src={soldOutLogo.url}
              alt={t(soldOutLogo.altKey)}
              className="h-20 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <>
            <AvailabilityBadge status={derivedStatus} />
            <p className="text-xs text-brand-neutral/70">
              {t('common:seatsAvailableText', {
                count: session.seatsAvailable,
                total: session.capacity,
              })}
            </p>
            <div className="mt-1 cursor-pointer">
              <Button
                action={{ type: 'internal', path: sessionUrl }}
                variant="outline"
                size="sm"
              >
                {t('common:seeDetailsButton')}
              </Button>
            </div>
          </>
        )}
      </div>
    </MotionBlock>
  );
};
