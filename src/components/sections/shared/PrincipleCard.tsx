import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BRAND_ASSETS } from '../../../constants/assets';
import type { I18NNamespace } from '../../../constants/i18n';

// --- Tipado de Props ---
export type PrincipleCardData = {
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
  translationNS?: I18NNamespace;
}

export const PrincipleCard = ({
  cardData,
  translationNS,
}: PrincipleCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const mainLogo = BRAND_ASSETS.mainLogo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className='group flex h-full flex-col overflow-hidden rounded-lg bg-brand-primary-dark shadow-xl'>
      {/* Image Container */}
      <div className='relative aspect-video'>
        {/* Image */}
        <div className='absolute inset-0 overflow-hidden'>
          <img
            src={cardData.imageUrl}
            alt={t(cardData.titleKey)}
            className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
            loading='lazy'
          />
        </div>

        {/* Gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

        {/* Logos and Credits */}
        <div className='absolute inset-0'>
          {/* Main Logo */}
          <div className='absolute top-3 right-3 opacity-80 w-14 md:w-20 filter drop-shadow-lg'>
            <img
              src={mainLogo.url}
              alt={t(mainLogo.altKey)}
              className='h-auto w-full'
              loading='lazy'
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
              />
            </div>
          )}

          {/* Photo Credit */}
          {cardData.photoCredit && (
            <div className='pointer-events-none absolute bottom-0 left-0 w-full select-none bg-brand-primary-dark/80 px-3 py-1 text-left text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              {t('common:photoCreditPrefix')} {cardData.photoCredit}
            </div>
          )}
        </div>

        {/* Title Over the Image */}
        <div className='relative flex h-full items-end p-6'>
          <h3 className='heading-6 text-brand-white w-full text-center font-bold filter drop-shadow-lg'>
            {t(cardData.titleKey)}
          </h3>
        </div>
      </div>

      {/* Description */}
      <div className='flex flex-grow flex-col p-6 text-justify'>
        <p className='text-base-sm text-brand-neutral/80'>
          {t(cardData.descriptionKey)}
        </p>
      </div>
    </motion.div>
  );
};
