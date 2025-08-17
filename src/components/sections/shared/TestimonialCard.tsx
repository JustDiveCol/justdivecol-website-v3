// src/components/sections/shared/TestimonialCard.tsx
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { QuoteIcon, StarRating } from '../../ui';
import type { TestimonialCardProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const TestimonialCard = ({
  cardData,
  translationNS,
}: TestimonialCardProps) => {
  const { t, i18n } = useTranslation([
    translationNS,
    'common',
    'certifications',
  ]);
  const { card, fadeIn } = useMotionPresets();

  const {
    quoteKey,
    name,
    originKey,
    rating,
    avatarUrl,
    dateISO,
    certificationId,
  } = cardData;

  const dateLabel = useMemo(() => {
    if (!dateISO) return undefined;
    const d = new Date(dateISO);
    if (Number.isNaN(d.getTime())) return undefined;
    return d.toLocaleDateString(i18n.language, {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    });
  }, [dateISO, i18n.language]);

  const cert = certificationId
    ? t(`certifications:${certificationId}`, { defaultValue: '' })
    : '';

  return (
    <MotionBlock
      kind="inView"
      variants={card}
      className="
        relative flex h-full flex-col rounded-2xl border border-white/15
        bg-gradient-to-b from-white/10 to-white/5 backdrop-blur
        p-4 sm:p-5 md:p-7
        transform-gpu will-change-transform
      "
    >
      {/* Ícono decorativo */}
      <QuoteIcon
        className="pointer-events-none absolute right-3 top-3 hidden md:block md:h-16 md:w-16 lg:h-20 lg:w-20 text-white/10"
        aria-hidden
      />

      {/* Cita (micro fade) */}
      <MotionBlock
        kind="none"
        variants={fadeIn({ delay: 0.05 })}
        className="
          relative z-10 flex-grow
          font-serif leading-relaxed text-brand-neutral/90
          text-base-sm
          text-left md:text-justify
          break-words hyphens-auto
          line-clamp-5 md:line-clamp-none
        "
      >
        <blockquote>“{t(quoteKey)}”</blockquote>
      </MotionBlock>

      {/* Footer (micro fade) */}
      <MotionBlock
        kind="none"
        variants={fadeIn({ delay: 0.12 })}
        className="
          relative z-10 mt-5 md:mt-6
          flex flex-col md:flex-row md:items-center gap-3 md:gap-4
          border-t border-white/10 pt-5 md:pt-6
        "
      >
        {/* Avatar */}
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover ring-2 ring-white/30"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white/10 ring-2 ring-white/30"
            aria-hidden
          />
        )}

        <div className="min-w-0">
          <div className="truncate font-semibold text-brand-white text-base-sm sm:text-base">
            {name}
          </div>
          <div className="text-base-xs text-brand-neutral/75">
            {t(originKey)}
            {dateLabel ? ` · ${dateLabel}` : ''}
          </div>

          {cert && (
            <div className="mt-1 inline-flex rounded-md bg-white/10 px-2 py-0.5 text-base-xs text-brand-neutral/80">
              {cert}
            </div>
          )}
        </div>

        {/* Rating a la derecha en md+ */}
        <div
          className="md:ml-auto order-last md:order-none pt-2 md:pt-0"
          aria-label={t('common:ratingLabel', {
            defaultValue: 'Calificación: {{rating}} de 5',
            rating,
          })}
        >
          <StarRating rating={rating} />
        </div>
      </MotionBlock>
    </MotionBlock>
  );
};
