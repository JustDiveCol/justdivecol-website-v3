// src/components/sections/shared/CtaSection.tsx
import { useTranslation } from 'react-i18next';
import { useMotionPresets } from '../../../hooks/animations';
import { useHubSpotForm } from '../../../hooks/useHubSpotForm';
import { Button } from '../../common/Button';
import type { CtaSectionProps } from './types';
import { MotionBlock } from '../../motion/MotionBlock';

export const CtaSection = ({
  translationNS,
  titleKey,
  subtitleKey,
  backgroundImageUrl,
  button,
  hubspotFormTitle,
}: CtaSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { fadeIn, slideIn } = useMotionPresets();

  const formTargetId = 'hubspot-form-5fe58871-a1b6-4462-8a3e-ebcb21936a72';
  useHubSpotForm({
    portalId: '50063006',
    formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
    target: `#${formTargetId}`,
  });

  return (
    <section
      className='relative text-brand-white'
      aria-labelledby='cta-heading'>
      {/* Fondo full-bleed */}
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      {/* Overlay */}
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-brand-primary-dark/80'
      />

      {/* Contenido */}
      <div className='section relative z-10'>
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Columna izquierda (owner inView) */}
          <MotionBlock
            kind='inView'
            variants={slideIn('up', { distance: 48 })}
            className='w-full md:w-1/2 flex flex-col justify-center items-center text-center transform-gpu will-change-transform'>
            <MotionBlock
              kind='none'
              variants={fadeIn()}
              className='w-full max-w-prose'>
              <h2
                id='cta-heading'
                className='heading-3 uppercase'>
                {t(titleKey)}
              </h2>
            </MotionBlock>

            <MotionBlock
              kind='none'
              variants={fadeIn({ delay: 0.08 })}
              className='w-full max-w-prose'>
              <p className='text-subtitle mt-4'>{t(subtitleKey)}</p>
            </MotionBlock>

            {button && (
              <MotionBlock
                kind='none'
                variants={fadeIn({ delay: 0.16 })}
                className='mt-8 md:self-center'>
                {button.action.type === 'internal' ? (
                  <Button
                    action={{ type: 'internal', path: button.action.path }}
                    variant={button.variant}
                    size={button.size}
                    className={button.className}>
                    {t(button.textKey)}
                  </Button>
                ) : button.action.type === 'external' ? (
                  <Button
                    action={{ type: 'external', path: button.action.path }}
                    variant={button.variant}
                    size={button.size}
                    className={button.className}>
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
                    className={button.className}>
                    {t(button.textKey)}
                  </Button>
                )}
              </MotionBlock>
            )}
          </MotionBlock>

          {/* Columna derecha (form HubSpot) — owner inView independiente */}
          {hubspotFormTitle && (
            <MotionBlock
              kind='inView'
              variants={slideIn('up', { distance: 48, delay: 0.06 })}
              className='w-full md:w-1/2 flex flex-col justify-center items-center transform-gpu will-change-transform'>
              <h3 className='heading-6 text-brand-cta-orange mb-4 font-bold'>
                {t(hubspotFormTitle)}
              </h3>
              <div
                id={formTargetId}
                className='w-full p-6 sm:p-8 rounded-lg shadow-2xl bg-white text-brand-primary-dark drop-shadow-strong'
                role='form'
                aria-label={t(hubspotFormTitle)}>
                <noscript>
                  <p>
                    {t(
                      'common:enable_js_to_view_form',
                      'Activa JavaScript para ver el formulario.'
                    )}
                  </p>
                </noscript>
              </div>
            </MotionBlock>
          )}
        </div>
      </div>
    </section>
  );
};
