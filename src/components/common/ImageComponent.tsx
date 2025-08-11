// src/components/common/ImageComponent.tsx
import { useTranslation } from 'react-i18next';
import type { ImageComponentWithFitProps as Props } from './types';
import { BRAND_ASSETS_SAFE } from '../../constants';

const variantStyles: Record<string, string> = {
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
  fit = 'auto',
}: Props) => {
  const { t } = useTranslation([translationNS, 'common']);
  const {
    backgroundImage,
    complementaryLogo,
    textOverlayKey,
    photoCredit,
    variant,
  } = imageData;

  const mainLogo = BRAND_ASSETS_SAFE.mainLogo;

  const baseSizeClass =
    fit === 'parent' ? 'h-full w-full' : variantStyles[variant] || 'h-full';
  const wrapperClass = `relative group select-none bg-cover bg-center ${baseSizeClass} ${className}`;

  const photoCreditOpacityClass =
    variant === 'header' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';
  const photoCreditBgClass =
    variant === 'header' ? '' : 'bg-brand-primary-dark/50';

  return (
    <div
      className={wrapperClass}
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {textOverlayKey && (
        <div className='absolute top-2 left-2 select-none text-brand-neutral text-sm sm:text-base md:text-lg lg:text-2xl font-bold drop-shadow-md opacity-80 uppercase'>
          {t(textOverlayKey)}
        </div>
      )}

      {complementaryLogo && (
        <div className='absolute top-2 right-2 select-none w-8 h-auto sm:w-10 md:w-12 drop-shadow-md opacity-70'>
          <img
            src={complementaryLogo.url}
            alt={t(complementaryLogo.altKey)}
            className='h-auto w-full'
            loading='lazy'
            decoding='async'
            width={96}
            height={96}
          />
        </div>
      )}

      <div className='absolute bottom-2 right-2 select-none w-16 h-auto sm:w-20 md:w-24 drop-shadow-md opacity-70'>
        <img
          src={mainLogo.url}
          alt={t(mainLogo.altKey)}
          className='h-auto w-full'
          loading='lazy'
          decoding='async'
          width={192}
          height={72}
        />
      </div>

      {photoCredit && (
        <div
          className={`absolute bottom-0 left-0 select-none w-full ${photoCreditBgClass} px-2 py-1 text-xs text-brand-neutral transition-opacity duration-300 ${photoCreditOpacityClass}`}>
          {t('common:photoCreditPrefix')} {t(photoCredit)}
        </div>
      )}
    </div>
  );
};
