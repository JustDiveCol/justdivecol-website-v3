// src/components/sections/shared/PrincipleCard.tsx
import { useTranslation } from 'react-i18next';
import { useReducedMotion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { PrincipleCardProps } from '../home/types';
import { BRAND_ASSETS_SAFE } from '../../../constants';
import { MotionBlock } from '../../motion/MotionBlock';

export const PrincipleCard = ({
  cardData,
  translationNS,
}: PrincipleCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const mainLogo = BRAND_ASSETS_SAFE.mainLogo;
  const reduce = useReducedMotion();

  const { card, fadeIn } = useMotionPresets();

  // Clases de hover que se desactivan si reduce=true
  const hoverZoomImg = reduce ? '' : 'group-hover:scale-110';
  const hoverCredits = reduce
    ? ''
    : 'opacity-0 transition-opacity duration-300 group-hover:opacity-100';

  return (
    <MotionBlock
      kind='inView'
      variants={card}
      className='group flex h-full flex-col overflow-hidden rounded-lg bg-brand-neutral/80 shadow-xl transform-gpu will-change-transform'>
      <figure className='relative aspect-video m-0'>
        <div className='absolute inset-0 overflow-hidden'>
          <img
            src={cardData.imageUrl}
            alt={t(cardData.titleKey)}
            className={`h-full w-full object-cover transition-transform duration-300 ease-in-out ${hoverZoomImg}`}
            loading='lazy'
            decoding='async'
            width={1280}
            height={720}
          />
        </div>
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'
        />

        {/* Logos y créditos */}
        <div className='absolute inset-0'>
          {/* Logo principal */}
          <div className='absolute top-3 right-3 opacity-80 w-14 md:w-20 drop-shadow-strong'>
            <img
              src={mainLogo.url}
              alt={t(mainLogo.altKey)}
              className='h-auto w-full'
              loading='lazy'
              decoding='async'
              width={80}
              height={80}
            />
          </div>

          {/* Logo complementario */}
          {cardData.complementaryLogo && (
            <div className='absolute top-3 left-3 opacity-80 w-8 md:w-12 drop-shadow-strong'>
              <img
                src={cardData.complementaryLogo.url}
                alt={t(cardData.complementaryLogo.altKey)}
                className='h-auto w-full'
                loading='lazy'
                decoding='async'
                width={48}
                height={48}
              />
            </div>
          )}

          {/* Créditos de foto */}
          {cardData.photoCredit && (
            <figcaption
              className={`pointer-events-none absolute bottom-0 left-0 w-full select-none bg-brand-primary-dark/80 px-3 py-1 text-left text-xs text-white/80 ${hoverCredits}`}>
              {t('common:photoCreditPrefix')} {cardData.photoCredit}
            </figcaption>
          )}
        </div>

        {/* Título sobre la imagen */}
        <div className='relative flex h-full items-end p-6'>
          <h3 className='text-xs sm:text-sm md:text-lg lg:text-xl leading-snug font-semibold text-brand-white w-full text-center drop-shadow-strong'>
            {t(cardData.titleKey)}
          </h3>
        </div>
      </figure>

      {/* Cuerpo que crece para igualar alturas */}
      <MotionBlock
        kind='inView'
        variants={fadeIn({ delay: 0.05 })}
        className='flex flex-1 flex-col p-6 text-left lg:text-justify'>
        <p className='text-base-xs text-brand-primary-dark/80 line-clamp-4'>
          {t(cardData.descriptionKey)}
        </p>
      </MotionBlock>
    </MotionBlock>
  );
};
