// src/components/sections/shared/CtaSection.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import { useHubSpotForm } from '../../../hooks/useHubSpotForm';
import { Button } from '../../common/Button';
import type { CtaSectionProps } from './types';

export const CtaSection = ({
  translationNS,
  titleKey,
  subtitleKey,
  backgroundImageUrl,
  button,
  hubspotFormTitle,
}: CtaSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { baseTransition, fadeIn } = useMotionPresets();

  const formTargetId = 'hubspot-form-5fe58871-a1b6-4462-8a3e-ebcb21936a72';
  useHubSpotForm({
    portalId: '50063006',
    formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
    target: `#${formTargetId}`,
  });

  return (
    // Fondo full-bleed
    <section
      className='relative text-brand-white'
      aria-labelledby='cta-heading'>
      {/* Capa de fondo */}
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

      {/* Contenido (container) */}
      <div className='section relative z-10 py-24'>
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Columna izquierda */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
            <motion.h2
              variants={fadeIn()}
              id='cta-heading'
              className='heading-3 uppercase'>
              {t(titleKey)}
            </motion.h2>

            <motion.p
              variants={fadeIn()}
              className='text-subtitle mt-4'>
              {t(subtitleKey)}
            </motion.p>

            {button && (
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...baseTransition, delay: 0.2 }}
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
              </motion.div>
            )}
          </motion.div>

          {/* Columna derecha: HubSpot */}
          {hubspotFormTitle && (
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
              <h3 className='heading-6 text-brand-cta-orange mb-4 font-bold'>
                {t(hubspotFormTitle)}
              </h3>
              <div
                id={formTargetId}
                className='w-full p-6 sm:p-8 rounded-lg shadow-2xl bg-white text-brand-primary-dark'
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
