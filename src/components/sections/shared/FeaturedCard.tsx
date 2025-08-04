import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { BRAND_ASSETS } from '../../../constants/assets';
import type { CardData } from '../home/FeaturedSection';

export type FeaturedCardProps = {
  cardData: CardData;
  className?: string;
  translationNS?: string;
};

export const FeaturedCard = ({
  cardData,
  className = '',
  translationNS,
}: FeaturedCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { imageData, link, titleKey, subtitleKey } = cardData;

  // Logo
  const mainLogo = BRAND_ASSETS.mainLogo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className} // El padre controla el tamaño aquí
    >
      <Link
        to={link}
        className='group relative block h-full w-full overflow-hidden rounded-lg shadow-lg'>
        {/* Background Image with Zoom on hover */}
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110'
          style={{ backgroundImage: `url(${imageData.backgroundImageUrl})` }}
        />

        {/* Gradient */}
        <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />

        {/* Logos and Credits */}
        <div className='absolute inset-0 z-20'>
          {/* Main Logo (Mandatory) */}
          <div className='absolute top-4 right-4 drop-shadow-lg opacity-80 w-14 md:w-20'>
            <img
              src={mainLogo.url}
              alt={t(mainLogo.altKey)}
              className='h-auto w-full'
            />
          </div>

          {/* Complementary Logo */}
          {imageData.complementaryLogo && (
            <div className='absolute top-4 left-4 drop-shadow-md opacity-80 w-8 md:w-12'>
              <img
                src={imageData.complementaryLogo.url}
                alt={t(imageData.complementaryLogo.altKey)}
                className='h-auto w-full'
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
