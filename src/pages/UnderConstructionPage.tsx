import { useTranslation } from 'react-i18next';
import { SEO } from '../components/common/SEO';
import { MotionBlock } from '../components/motion/MotionBlock';
import { useMotionPresets } from '../hooks/animations';
import { Button } from '../components/common/Button';
import { BRAND_ASSETS_SAFE } from '../constants';
import { underConstructionContent } from '../content/pages/under-construction/under-construction.content';

export const UnderConstructionPage = () => {
  const { titleKey, subtitleKey, translationNS, button, imageData } =
    underConstructionContent.hero;

  const { t } = useTranslation([translationNS, 'common']);

  const { container, slideIn, fadeIn, scaleIn } = useMotionPresets();

  return (
    <>
      <SEO {...underConstructionContent.seo} />

      <section
        className="relative flex items-center justify-center min-h-[100dvh] py-24 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${imageData.backgroundImage})`,
          marginTop: 'calc(var(--nav-h) * -1)',
        }}
        aria-label={t(titleKey)}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Contenido */}
        <MotionBlock
          kind="eager"
          variants={container}
          className="relative z-20 text-center px-4"
        >
          {/* Título */}
          <MotionBlock
            kind="eager"
            variants={slideIn('up', { distance: 40 })}
            className="heading-2 transform-gpu will-change-transform"
          >
            {t(titleKey)}
          </MotionBlock>

          {/* Subtítulo */}
          <MotionBlock
            kind="eager"
            variants={fadeIn({ delay: 0.1 })}
            className="text-subtitle mt-2 transform-gpu will-change-transform"
          >
            {t(subtitleKey)}
          </MotionBlock>

          {/* Botón */}
          {button && (
            <MotionBlock
              kind="eager"
              variants={scaleIn({ delay: 0.2 }, { type: 'spring' })}
              className="mt-8 md:self-center transform-gpu will-change-transform"
            >
              {button.action.type === 'internal' ? (
                <Button
                  action={{ type: 'internal', path: button.action.path }}
                  variant={button.variant}
                  size={button.size}
                  className={button.className}
                >
                  {t(button.textKey)}
                </Button>
              ) : button.action.type === 'external' ? (
                <Button
                  action={{ type: 'external', path: button.action.path }}
                  variant={button.variant}
                  size={button.size}
                  className={button.className}
                >
                  {t(button.textKey)}
                </Button>
              ) : (
                <Button
                  action={{
                    type: 'whatsapp',
                    whatsAppMessageKey: button.action.whatsAppMessageKey,
                  }}
                  variant={button.variant}
                  size={button.size}
                  className={button.className}
                >
                  {t(button.textKey)}
                </Button>
              )}
            </MotionBlock>
          )}
        </MotionBlock>

        {/* Logos y créditos */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="absolute bottom-6 right-6 select-none w-24 h-auto md:w-28 opacity-70 drop-shadow-strong">
            <img
              src={BRAND_ASSETS_SAFE.mainLogo.url}
              alt={t(BRAND_ASSETS_SAFE.mainLogo.altKey, { ns: 'common' })}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
          {imageData.photoCredit && (
            <div className="absolute bottom-2 left-2 select-none text-base-xs text-white/70">
              {t('common:photoCreditPrefix')} {imageData.photoCredit}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
