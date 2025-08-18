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

  // Nota: mantenemos select-none a nivel contenedor
  const wrapperClass = `relative group select-none overflow-hidden ${baseSizeClass} ${className}`;

  const photoCreditOpacityClass =
    variant === 'header' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';
  const photoCreditBgClass =
    variant === 'header' ? '' : 'bg-brand-primary-dark/50';

  const prevent = (e: React.SyntheticEvent) => e.preventDefault();

  return (
    <div className={wrapperClass}>
      {/* Imagen responsive con srcset, sin arrastrar ni menú contextual */}
      <picture>
        <source
          srcSet={`${backgroundImage}?w=800&fm=webp 800w,
                   ${backgroundImage}?w=1200&fm=webp 1200w,
                   ${backgroundImage}?w=1600&fm=webp 1600w`}
          type="image/webp"
        />
        <img
          src={`${backgroundImage}?w=1200`}
          srcSet={`${backgroundImage}?w=800 800w,
                   ${backgroundImage}?w=1200 1200w,
                   ${backgroundImage}?w=1600 1600w`}
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          alt={t(textOverlayKey || 'common:defaultAlt')}
          className="h-full w-full object-cover pointer-events-none no-callout"
          loading="lazy"
          decoding="async"
          draggable={false}
          onDragStart={prevent}
          onContextMenu={prevent}
        />
      </picture>

      {textOverlayKey && (
        <div className="absolute top-2 left-2 select-none text-brand-neutral text-sm sm:text-base md:text-lg lg:text-2xl font-bold uppercase drop-shadow-strong">
          {t(textOverlayKey)}
        </div>
      )}

      {complementaryLogo && (
        <div className="absolute top-4 right-4 select-none w-8 h-auto sm:w-10 md:w-12 drop-shadow-md opacity-70">
          <img
            src={complementaryLogo.url}
            alt={t(complementaryLogo.altKey, { ns: 'common' })}
            className="h-auto w-full drop-shadow-strong pointer-events-none no-callout"
            loading="lazy"
            decoding="async"
            width={96}
            height={96}
            draggable={false}
            onDragStart={prevent}
            onContextMenu={prevent}
          />
        </div>
      )}

      <div className="absolute bottom-4 right-4 select-none w-16 h-auto sm:w-20 md:w-24 drop-shadow-md opacity-70">
        <img
          src={mainLogo.url}
          alt={t(mainLogo.altKey, { ns: 'common' })}
          className="h-auto w-full drop-shadow-strong pointer-events-none no-callout"
          loading="lazy"
          decoding="async"
          width={192}
          height={72}
          draggable={false}
          onDragStart={prevent}
          onContextMenu={prevent}
        />
      </div>

      {photoCredit && (
        <div
          className={`absolute bottom-0 left-0 select-none w-full ${photoCreditBgClass} px-2 py-1 text-xs text-brand-neutral transition-opacity duration-300 ${photoCreditOpacityClass}`}
        >
          {t('common:photoCreditPrefix')} {photoCredit}
        </div>
      )}
    </div>
  );
};
