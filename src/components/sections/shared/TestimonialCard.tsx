// src/components/sections/shared/TestimonialCard.tsx
import { useTranslation } from 'react-i18next';
import { QuoteIcon, StarRating } from '../../ui/Icons';
import type { I18NNamespace } from '../../../constants/i18n';
import type { TestimonialData } from './types';

type TestimonialCard = {
  cardData: TestimonialData;
  translationNS: I18NNamespace;
};

export const TestimonialCard = ({
  cardData,
  translationNS,
}: TestimonialCard) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { quoteKey, name, originKey, rating, avatarUrl } = cardData;

  return (
    <figure className='relative flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm'>
      {/* Icono decorativo */}
      <QuoteIcon
        className='absolute top-4 right-4 h-24 w-24 text-white/5'
        aria-hidden='true'
      />

      <div className='relative z-10 flex flex-grow flex-col'>
        {/* Rating con label accesible */}
        <div aria-label={t('common:rating', 'Calificación')}>
          <StarRating rating={rating} />
        </div>

        {/* Cita */}
        <blockquote className='mt-4 flex-grow font-serif text-base text-brand-neutral/90 text-justify'>
          “{t(quoteKey)}”
        </blockquote>

        {/* Separador + autor */}
        <figcaption className='mt-6 border-t border-white/10 pt-6 flex items-center gap-4'>
          <img
            src={avatarUrl}
            alt={name}
            className='h-12 w-12 rounded-full object-cover ring-2 ring-brand-cta-green'
            loading='lazy'
            decoding='async'
            width={48}
            height={48}
          />
          <div className='text-left'>
            <div className='font-bold text-brand-white'>{name}</div>
            <div className='text-sm text-brand-neutral/80'>{t(originKey)}</div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};
