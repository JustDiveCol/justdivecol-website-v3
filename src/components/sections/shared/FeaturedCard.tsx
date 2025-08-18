// src/components/sections/shared/FeaturedCard.tsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReducedMotion } from 'framer-motion';
import type { FeaturedCardProps } from '../home/types';
import { BRAND_ASSETS_SAFE } from '../../../constants';
import { useLocalizedRoutes } from '../../../hooks/useLocalizedRoutes';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const FeaturedCard = ({
  cardData,
  className = '',
  translationNS,
}: FeaturedCardProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { to: localizedTo } = useLocalizedRoutes();
  const reduce = useReducedMotion();

  const { card, fadeIn } = useMotionPresets();
  const { imageData, link, titleKey, subtitleKey } = cardData;
  const mainLogo = BRAND_ASSETS_SAFE.mainLogo;

  const hoverZoomClass = reduce ? '' : 'group-hover:scale-110';

  return (
    <MotionBlock
      kind="inView"
      variants={card}
      className={`transform-gpu will-change-transform ${className}`}
    >
      <Link
        to={localizedTo(link)}
        aria-label={t(titleKey)}
        className="group relative block h-full w-full overflow-hidden rounded-lg shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/70"
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out ${hoverZoomClass}`}
          style={{ backgroundImage: `url(${imageData.backgroundImage})` }}
        />

        {/* Gradiente */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        />

        {/* Logos y créditos */}
        <div className="absolute inset-0 z-20">
          {/* Main Logo */}
          <div className="absolute top-4 right-4 opacity-80 w-14 md:w-20 drop-shadow-strong">
            <img
              src={mainLogo.url}
              alt={t(mainLogo.altKey, { ns: 'common' })}
              className="h-auto w-full"
              loading="lazy"
              width={80}
              height={80}
            />
          </div>

          {/* Logo complementario */}
          {imageData.complementaryLogo && (
            <div className="absolute top-4 left-4 opacity-80 w-8 md:w-12 drop-shadow-strong">
              <img
                src={imageData.complementaryLogo.url}
                alt={t(imageData.complementaryLogo.altKey, { ns: 'common' })}
                className="h-auto w-full"
                loading="lazy"
                width={48}
                height={48}
              />
            </div>
          )}

          {/* Créditos de foto (aparecen al hover si no hay reduce) */}
          {imageData.photoCredit && (
            <div
              className={`pointer-events-none absolute bottom-0 left-0 z-30 w-full select-none bg-brand-primary-dark/70 px-4 py-2 text-left text-xs text-brand-white ${
                reduce
                  ? ''
                  : 'opacity-0 transition-opacity duration-300 group-hover:opacity-100'
              }`}
            >
              {t('common:photoCreditPrefix')} {imageData.photoCredit}
            </div>
          )}
        </div>

        {/* Contenido de texto */}
        <div className="relative z-20 flex h-full flex-col items-center justify-end p-6 text-center text-white">
          <MotionBlock
            kind="inView"
            variants={fadeIn()}
            className={`transform-gpu will-change-transform ${
              reduce
                ? ''
                : 'transition-transform duration-500 ease-in-out group-hover:-translate-y-4'
            }`}
          >
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug font-bold uppercase tracking-tight text-brand-cta-orange">
              {t(titleKey)}
            </h3>
            {subtitleKey && (
              <p className="text-xs sm:text-xs md:text-sm lg:text-base leading-snug hidden sm:block mt-1 text-brand-neutral">
                {t(subtitleKey)}
              </p>
            )}
          </MotionBlock>
        </div>
      </Link>
    </MotionBlock>
  );
};
