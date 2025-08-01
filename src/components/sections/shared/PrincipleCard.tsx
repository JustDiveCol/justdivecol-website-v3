import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BRAND_ASSETS } from '../../../constants/assets';

// --- Tipado de Props ---
type PrincipleCardData = {
  id: string;
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
  photoCredit?: string;
  complementaryLogo?: {
    url: string;
    altKey: string;
  };
};

interface PrincipleCardProps {
  cardData: PrincipleCardData;
}

export const PrincipleCard = ({ cardData }: PrincipleCardProps) => {
  const { t } = useTranslation('common');
  const mainLogo = BRAND_ASSETS.mainLogo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className='group flex h-full flex-col overflow-hidden rounded-lg bg-brand-primary-dark shadow-xl'>
      {/* ===== Contenedor Superior: Imagen y Superposiciones ===== */}
      <div className='relative aspect-video'>
        {/* Capa 1: Imagen */}
        <div className='absolute inset-0 overflow-hidden'>
          <img
            src={cardData.imageUrl}
            alt={t(`principles.${cardData.titleKey}`)}
            className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
          />
        </div>

        {/* Capa 2: Gradiente para legibilidad del título */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

        {/* Capa 3: Logos y Créditos */}
        <div className='absolute inset-0'>
          {cardData.complementaryLogo && (
            <div className='absolute top-3 left-3 drop-shadow-md opacity-80'>
              <img
                src={cardData.complementaryLogo.url}
                alt={t(cardData.complementaryLogo.altKey)}
                className='h-auto w-10'
              />
            </div>
          )}
          <div className='absolute top-3 right-3 drop-shadow-md opacity-80'>
            <img
              src={mainLogo.url}
              alt={t(mainLogo.altKey)}
              className='h-auto w-16'
            />
          </div>
          {cardData.photoCredit && (
            <div className='pointer-events-none absolute bottom-0 left-0 w-full select-none bg-black/50 px-3 py-1 text-left text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              {t('photoCreditPrefix')} {cardData.photoCredit}
            </div>
          )}
        </div>

        {/* Capa 4: Título sobre la imagen */}
        <div className='relative flex h-full items-end p-6'>
          {/* ===== CAMBIO AQUÍ ===== */}
          <h3 className='heading-5 text-brand-white w-full text-center'>
            {t(`principles.${cardData.titleKey}`)}
          </h3>
        </div>
      </div>

      {/* ===== Contenedor Inferior: Descripción ===== */}
      <div className='flex flex-grow flex-col p-6 text-justify'>
        <p className='text-base-sm text-brand-neutral/80'>
          {t(`principles.${cardData.descriptionKey}`)}
        </p>
      </div>
    </motion.div>
  );
};
