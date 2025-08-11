// src/components/sections/home/HeroSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { BRAND_ASSETS } from '../../../constants/assets';
import { Button } from '../../common/Button';
import { ChevronDownIcon } from '../../ui';
import type { HeroSectionProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';

export const HeroSection: React.FC<HeroSectionProps> = ({
  titleKey,
  subtitleKey,
  translationNS,
  button,
  imageData,
}) => {
  const { t } = useTranslation([translationNS, 'common']);

  const { baseTransition } = useMotionPresets();

  return (
    <section
      className='relative flex items-center justify-center min-h-[100dvh] py-24 bg-cover bg-center text-white'
      style={{
        backgroundImage: `url(${imageData.backgroundImage})`,
        // Cancela el padding-top del <main> para que el hero sea full screen
        marginTop: 'calc(var(--nav-h) * -1)',
      }}>
      {/* Overlay oscuro */}
      <div className='absolute inset-0 bg-black/60 z-10' />

      <div className='relative z-20 text-center px-4'>
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='heading-1'>
          {t(titleKey)}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          className='text-subtitle'>
          {t(subtitleKey)}
        </motion.p>

        {/* Botón */}
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
      </div>

      {/* Logos y créditos */}
      <div className='pointer-events-none absolute inset-0 z-20'>
        <div className='absolute bottom-6 right-4 select-none w-24 h-auto md:w-28 opacity-70'>
          <img
            src={BRAND_ASSETS.mainLogo.url}
            alt={t(BRAND_ASSETS.mainLogo.altKey)}
            className='h-auto w-full'
            loading='lazy'
          />
        </div>
        {imageData.photoCredit && (
          <div className='absolute bottom-2 left-2 select-none text-xs text-white/70'>
            {t('photoCreditPrefix', { ns: 'common' })} {imageData.photoCredit}
          </div>
        )}
      </div>

      {/* Chevron */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 1,
        }}
        className='absolute bottom-8 inset-x-0 z-40 flex justify-center'>
        <ChevronDownIcon className='w-12 h-12 text-brand-cta-orange animate-bounce select-none' />
      </motion.div>
    </section>
  );
};
