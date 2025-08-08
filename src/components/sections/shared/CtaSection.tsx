// src/components/sections/shared/CtaSection.tsx
import { useTranslation } from 'react-i18next';
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from 'framer-motion';
import { useHubSpotForm } from '../../../hooks/useHubSpotForm';
import { Button } from '../../common/Button';
import type { CtaContent } from './types';

export const CtaSection = ({
  translationNS,
  titleKey,
  subtitleKey,
  backgroundImageUrl,
  button,
  hubspotFormTitle,
}: CtaContent) => {
  const { t } = useTranslation([translationNS, 'common']);
  const reduceMotion = useReducedMotion();

  // Monta el formulario normalmente (sin 'enabled' ni 'any')
  const formTargetId = 'hubspot-form-5fe58871-a1b6-4462-8a3e-ebcb21936a72';
  useHubSpotForm({
    portalId: '50063006',
    formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
    target: `#${formTargetId}`,
  });

  // Transiciones tipadas (sin strings en 'ease')
  const baseTransition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }; // cubic-bezier estándar

  const variants: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: baseTransition },
  };

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
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
            <motion.h2
              variants={variants}
              id='cta-heading'
              className='heading-2 uppercase'>
              {t(titleKey)}
            </motion.h2>

            <motion.p
              variants={variants}
              className='text-subtitle mt-4'>
              {t(subtitleKey)}
            </motion.p>

            {button && (
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  ...baseTransition,
                  delay: reduceMotion ? 0 : 0.2,
                }}
                className='mt-8 md:self-center' // ← para mantener el botón centrado en md+
              >
                <Button {...button}>{t(button.textKey)}</Button>
              </motion.div>
            )}
          </motion.div>

          {/* Columna derecha: HubSpot */}
          {hubspotFormTitle && (
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
              <h3 className='heading-5 text-brand-cta-orange mb-4 font-bold'>
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
