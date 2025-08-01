import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { BRAND_ASSETS } from '../../../constants/assets';
import { homePageData } from '../../../data/homePageData';

// --- Tipado de Props ---
type CardData = (typeof homePageData.featured.cards)[0];

interface FeaturedCardProps {
  cardData: CardData;
  className?: string; // Para que el padre pueda pasar clases de tamaño/aspecto
}

export const FeaturedCard = ({
  cardData,
  className = '',
}: FeaturedCardProps) => {
  const { t } = useTranslation('common');
  const { imageData, link, titleKey, subtitleKey } = cardData;

  // Tomamos el logo principal de nuestras constantes de marca
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
        {/* Capa 1: Imagen de Fondo con Zoom en Hover */}
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110'
          style={{ backgroundImage: `url(${imageData.backgroundImageUrl})` }}
        />

        {/* Capa 2: Gradiente */}
        <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />

        {/* Capa 3: Logos y Créditos (elementos de marca) */}
        <div className='absolute inset-0 z-20'>
          {imageData.complementaryLogo && (
            <div className='absolute top-4 left-4 drop-shadow-md opacity-80'>
              <img
                src={imageData.complementaryLogo.url}
                alt={t(imageData.complementaryLogo.altKey)}
                className='h-auto w-10'
              />
            </div>
          )}

          {/* Logo Principal (Obligatorio) */}
          <div className='absolute top-4 right-4 drop-shadow-md opacity-80'>
            <img
              src={mainLogo.url}
              alt={t(mainLogo.altKey)}
              className='h-auto w-16'
            />
          </div>

          {imageData.photoCredit && (
            <div className='pointer-events-none absolute bottom-0 left-0 z-30 w-full select-none bg-brand-primary-dark/70 px-4 py-2 text-left text-xs text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              {t('photoCreditPrefix')} {imageData.photoCredit}
            </div>
          )}
        </div>

        {/* Capa 4: Contenido de Texto */}
        <div className='relative z-20 flex h-full flex-col items-center justify-end p-6 text-center text-white'>
          <div className='transition-transform duration-500 ease-in-out group-hover:-translate-y-4'>
            <h3 className='heading-4 text-brand-cta-orange'>
              {t(`featured.${titleKey}`)}
            </h3>
            {subtitleKey && (
              <p className='mt-1 font-serif text-base text-brand-neutral'>
                {t(`featured.${subtitleKey}`)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
