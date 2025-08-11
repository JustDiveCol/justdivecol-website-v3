// src/components/sections/shared/FeaturedCard.tsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import type { FeaturedCardProps } from '../home/types';
import { BRAND_ASSETS_SAFE } from '../../../constants';

export const FeaturedCard = ({
  cardData,
  className = '',
  translationNS,
}: FeaturedCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const reduceMotion = useReducedMotion();
  const { imageData, link, titleKey, subtitleKey } = cardData;

  const mainLogo = BRAND_ASSETS_SAFE.mainLogo;

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' }}
      className={className}>
      <Link
        to={link}
        aria-label={t(titleKey)}
        className='group relative block h-full w-full overflow-hidden rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-cta-orange/70'>
        {/* Background Image with Zoom on hover */}
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110'
          style={{ backgroundImage: `url(${imageData.backgroundImage})` }}
        />

        {/* Gradient */}
        <div
          aria-hidden='true'
          className='absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent'
        />

        {/* Logos and Credits */}
        <div className='absolute inset-0 z-20'>
          {/* Main Logo */}
          <div className='absolute top-4 right-4 drop-shadow-lg opacity-80 w-14 md:w-20'>
            <img
              src={mainLogo.url}
              alt={t(mainLogo.altKey)}
              className='h-auto w-full'
              loading='lazy'
              width={80}
              height={80}
            />
          </div>

          {/* Complementary Logo */}
          {imageData.complementaryLogo && (
            <div className='absolute top-4 left-4 drop-shadow-md opacity-80 w-8 md:w-12'>
              <img
                src={imageData.complementaryLogo.url}
                alt={t(imageData.complementaryLogo.altKey)}
                className='h-auto w-full'
                loading='lazy'
                width={48}
                height={48}
              />
            </div>
          )}

          {/* Photo Credits */}
          {imageData.photoCredit && (
            <div className='pointer-events-none absolute bottom-0 left-0 z-30 w-full select-none bg-brand-primary-dark/70 px-4 py-2 text-left text-xs text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              {t('common:photoCreditPrefix')} {imageData.photoCredit}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className='relative z-20 flex h-full flex-col items-center justify-end p-6 text-center text-white'>
          <div className='transition-transform duration-500 ease-in-out group-hover:-translate-y-4'>
            <h3 className='heading-6 text-brand-cta-orange font-bold'>
              {t(titleKey)}
            </h3>
            {subtitleKey && (
              <p className='hidden sm:block mt-1 font-serif text-base text-brand-neutral'>
                {t(subtitleKey)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
