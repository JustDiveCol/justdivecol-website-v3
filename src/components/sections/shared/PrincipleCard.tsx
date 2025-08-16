// src/components/sections/shared/PrincipleCard.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { PrincipleCardProps } from '../home/types';
import { BRAND_ASSETS_SAFE } from '../../../constants';

export const PrincipleCard = ({
  cardData,
  translationNS,
}: PrincipleCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const mainLogo = BRAND_ASSETS_SAFE.mainLogo;
  const { card } = useMotionPresets();

  return (
    <motion.div
      variants={card}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      className='group flex h-full flex-col overflow-hidden rounded-lg bg-brand-neutral/80 shadow-xl'>
      <figure className='relative aspect-video m-0'>
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
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'
        />

        {/* Logos and Credits */}
        <div className='absolute inset-0'>
          {/* Main Logo */}
          <div className='absolute top-3 right-3 opacity-80 w-14 md:w-20 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
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
            <div className='absolute top-3 left-3 opacity-80 w-8 md:w-12 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
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
          <h3 className='text-xs sm:text-sm md:text-lg lg:text-xl leading-snug font-semibold text-brand-white w-full text-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
            {t(cardData.titleKey)}
          </h3>
        </div>
      </figure>

      {/* cuerpo que crece para igualar alturas */}
      <div className='flex flex-1 flex-col p-6 text-justify'>
        <p className='text-base-xs text-brand-primary-dark/80 line-clamp-4'>
          {t(cardData.descriptionKey)}
        </p>
      </div>
    </motion.div>
  );
};
