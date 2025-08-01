import React from 'react';
import { useTranslation } from 'react-i18next';
import { BRAND_ASSETS } from '../../constants/assets';

// --- Tipado de Props (simplificado, sin 'variant') ---
interface ImageComponentData {
  backgroundImage: string;
  complementaryLogo?: { url: string; altKey: string };
  photoCredit?: string;
  textOverlayKey?: string;
}

interface ImageComponentProps {
  className?: string;
  imageData: ImageComponentData;
  translationNS?: string;
}

export const ImageComponent = ({
  className = '',
  imageData,
  translationNS,
}: ImageComponentProps) => {
  const { t } = useTranslation(translationNS);

  const { backgroundImage, complementaryLogo, textOverlayKey, photoCredit } =
    imageData;
  const mainLogo = BRAND_ASSETS.mainLogo;

  // El wrapper ahora siempre es w-full h-full para llenar a su padre
  const wrapperClass = `group relative w-full h-full select-none bg-cover bg-center ${className}`;

  return (
    <div
      className={wrapperClass}
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {textOverlayKey && (
        <div className='select-none absolute top-2 left-2 text-brand-neutral text-sm sm:text-base md:text-lg lg:text-2xl font-bold drop-shadow-md opacity-80 uppercase'>
          {t(textOverlayKey)}
        </div>
      )}
      {complementaryLogo && (
        <div className='select-none absolute top-2 right-2 w-8 h-auto sm:w-10 md:w-12 drop-shadow-md opacity-70'>
          <img
            src={complementaryLogo.url}
            alt={t(complementaryLogo.altKey)}
            className='h-auto w-full'
          />
        </div>
      )}
      <div className='select-none absolute bottom-2 right-2 w-16 h-auto sm:w-20 md:w-24 drop-shadow-md opacity-70'>
        <img
          src={mainLogo.url}
          alt={t(mainLogo.altKey)}
          className='h-auto w-full'
        />
      </div>
      {photoCredit && (
        <div className='pointer-events-none absolute bottom-0 left-0 w-full select-none bg-brand-primary-dark/50 px-2 py-1 text-xs text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {t('photoCreditPrefix', { ns: 'common' })} {photoCredit}
        </div>
      )}
    </div>
  );
};
