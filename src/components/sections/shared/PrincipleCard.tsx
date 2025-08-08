// src/components/sections/shared/PrincipleCard.tsx
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { BRAND_ASSETS } from '../../../constants/assets';

import type { I18NNamespace } from '../../../constants/i18n';
import type { PrincipleCardData } from './types';

type PrincipleCard = {
  cardData: PrincipleCardData;
  translationNS: I18NNamespace;
};

export const PrincipleCard = ({ cardData, translationNS }: PrincipleCard) => {
  const { t } = useTranslation([translationNS, 'common']);
  const mainLogo = BRAND_ASSETS.mainLogo;
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reduceMotion ? 0 : 0.6 }}
      className='group flex h-full flex-col overflow-hidden rounded-lg bg-brand-neutral/80 shadow-xl w-[calc(50%-1rem)] flex-shrink-0 sm:w-5/12 md:w-4/12 lg:w-[30%] xl:w-[22%]'>
      {/* Image Container */}
      <figure className='relative aspect-video m-0'>
        {/* Image */}
        <div className='absolute inset-0 overflow-hidden'>
          <img
            src={cardData.imageUrl}
            alt={t(cardData.titleKey)}
            className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
            loading='lazy'
            decoding='async'
            width={1280}
            height={720}
          />
        </div>

        {/* Gradient (decorativo) */}
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'
        />

        {/* Logos and Credits */}
        <div className='absolute inset-0'>
          {/* Main Logo */}
          <div className='absolute top-3 right-3 opacity-80 w-14 md:w-20 filter drop-shadow-lg'>
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

          {/* Complementary Logo */}
          {cardData.complementaryLogo && (
            <div className='absolute top-3 left-3 opacity-80 w-8 md:w-12 filter drop-shadow-lg'>
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

          {/* Photo Credit */}
          {cardData.photoCredit && (
            <figcaption className='pointer-events-none absolute bottom-0 left-0 w-full select-none bg-brand-primary-dark/80 px-3 py-1 text-left text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              {t('common:photoCreditPrefix')} {cardData.photoCredit}
            </figcaption>
          )}
        </div>

        {/* Title Over the Image */}
        <div className='relative flex h-full items-end p-6'>
          <h3 className='heading-6 text-brand-white w-full text-center font-bold filter drop-shadow-lg'>
            {t(cardData.titleKey)}
          </h3>
        </div>
      </figure>

      {/* Description */}
      <div className='flex flex-grow flex-col p-6 text-justify'>
        <p className='text-base-sm text-brand-primary-dark/80'>
          {t(cardData.descriptionKey)}
        </p>
      </div>
    </motion.div>
  );
};
