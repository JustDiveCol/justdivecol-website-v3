import { useTranslation } from 'react-i18next';
import { BRAND_ASSETS } from '../../constants/assets';
import type { ImageComponentData } from '../../types/data';
interface ImageComponentProps {
  className?: string;
  imageData: ImageComponentData;
  variant?: string;
  translationNS?: string;
}

const variantStyles = {
  fullscreen: 'h-full',
  header: 'h-[600px]',
  horizontal: 'aspect-[4/3]',
  vertical: 'aspect-[3/4]',
  square: 'aspect-square',
};

export const ImageComponent = ({
  className = '',
  imageData,
  translationNS,
}: ImageComponentProps) => {
  const { t } = useTranslation(translationNS);
  const {
    backgroundImage,
    complementaryLogo,
    textOverlayKey,
    photoCredit,
    variant,
  } = imageData;

  const mainLogo = BRAND_ASSETS.mainLogo;

  const variantClass = variantStyles[variant] || 'h-full';

  const wrapperClass = `select-none relative group w-full h-full bg-cover bg-center ${variantClass} ${className}`;

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
            loading='lazy'
          />
        </div>
      )}
      <div className='select-none absolute bottom-2 right-2 w-16 h-auto sm:w-20 md:w-24 drop-shadow-md opacity-70'>
        <img
          src={mainLogo.url}
          alt={t(mainLogo.altKey)}
          className='h-auto w-full'
          loading='lazy'
        />
      </div>
      {photoCredit && (
        <div className='select-none absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 px-2 py-1 text-xs text-brand-neutral opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {t('common:photoCreditPrefix')} {t(photoCredit)}
        </div>
      )}
    </div>
  );
};
