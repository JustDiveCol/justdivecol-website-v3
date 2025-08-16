// src/components/sections/shared/TestimonialCard.tsx
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { QuoteIcon, StarRating } from '../../ui';
import type { TestimonialCardProps } from './types';

function formatMonthYear(dateISO?: string) {
  if (!dateISO) return undefined;
  const d = new Date(dateISO);
  return Number.isNaN(d.getTime())
    ? undefined
    : d.toLocaleDateString('es-CO', { month: 'short', year: 'numeric' });
}

export const TestimonialCard = ({
  cardData,
  translationNS,
}: TestimonialCardProps) => {
  const { t } = useTranslation([translationNS, 'common', 'certifications']);
  const {
    quoteKey,
    name,
    originKey,
    rating,
    avatarUrl,
    dateISO,
    certificationId,
  } = cardData;

  const dateLabel = useMemo(() => formatMonthYear(dateISO), [dateISO]);
  const cert = certificationId
    ? t(`certifications:${certificationId}.short`, { defaultValue: '' })
    : '';

  return (
    <figure className='relative flex h-full flex-col rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-7 backdrop-blur'>
      <QuoteIcon
        className='absolute right-5 top-5 h-20 w-20 text-white/10'
        aria-hidden
      />

      <blockquote className='relative z-10 flex-grow text-justify font-serif text-base leading-relaxed text-brand-neutral/90'>
        “{t(quoteKey)}”
      </blockquote>

      <figcaption className='relative z-10 mt-6 flex items-center gap-4'>
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className='h-14 w-14 rounded-full object-cover ring-2 ring-white/30'
            loading='lazy'
            decoding='async'
          />
        ) : (
          <div
            className='h-14 w-14 rounded-full bg-white/10 ring-2 ring-white/30'
            aria-hidden
          />
        )}

        <div className='min-w-0'>
          <div className='truncate font-semibold text-brand-white'>{name}</div>
          <div className='text-sm text-brand-neutral/75'>
            {t(originKey)}
            {dateLabel ? ` · ${dateLabel}` : ''}
          </div>
          {cert && (
            <div className='mt-1 inline-flex rounded-md bg-white/10 px-2 py-0.5 text-xs text-brand-neutral/80'>
              {cert}
            </div>
          )}
        </div>

        <div
          className='ml-auto'
          aria-label={t('common:ratingLabel', {
            defaultValue: 'Calificación: {{rating}} de 5',
            rating,
          })}>
          <StarRating rating={rating} />
        </div>
      </figcaption>
    </figure>
  );
};
