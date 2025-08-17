// src/components/sections/home/HeroSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';

import { MotionBlock } from '../../motion/MotionBlock';
import { Button } from '../../common/Button';
import { ChevronDownIcon } from '../../ui';
import type { HeroSectionProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { BRAND_ASSETS_SAFE } from '../../../constants';

export const HeroSection: React.FC<HeroSectionProps> = ({
  titleKey,
  subtitleKey,
  translationNS,
  button,
  imageData,
}) => {
  const { t } = useTranslation([translationNS, 'common']);
  const reduce = useReducedMotion();

  const { container, slideIn, fadeIn, scaleIn } = useMotionPresets();

  return (
    <section
      className='relative flex items-center justify-center min-h-[100dvh] py-24 bg-cover bg-center text-white'
      style={{
        backgroundImage: `url(${imageData.backgroundImage})`,
        marginTop: 'calc(var(--nav-h) * -1)',
      }}
      aria-label={t(titleKey)}>
      {/* Overlay oscuro */}
      <div className='absolute inset-0 bg-black/60 z-10' />

      {/* Contenido */}
      <MotionBlock
        kind='eager'
        variants={container}
        className='relative z-20 text-center px-4'>
        {/* Título */}
        <MotionBlock
          kind='eager'
          variants={slideIn('up', { distance: 40 })}
          className='heading-2 transform-gpu will-change-transform'>
          {t(titleKey)}
        </MotionBlock>

        {/* Subtítulo */}
        <MotionBlock
          kind='eager'
          variants={fadeIn({ delay: 0.1 })}
          className='text-subtitle mt-2 transform-gpu will-change-transform'>
          {t(subtitleKey)}
        </MotionBlock>

        {/* Botón */}
        {button && (
          <MotionBlock
            kind='eager'
            variants={scaleIn({ delay: 0.2 }, { type: 'spring' })}
            className='mt-8 md:self-center transform-gpu will-change-transform'>
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

      {/* Logos y créditos */}
      <div className='pointer-events-none absolute inset-0 z-20'>
        <div className='absolute bottom-6 right-6 select-none w-24 h-auto md:w-28 opacity-70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
          <img
            src={BRAND_ASSETS_SAFE.mainLogo.url}
            alt={t(BRAND_ASSETS_SAFE.mainLogo.altKey)}
            className='h-auto w-full'
            loading='lazy'
          />
        </div>
        {imageData.photoCredit && (
          <div className='absolute bottom-2 left-2 select-none text-base-xs text-white/70'>
            {t('common:photoCreditPrefix')} {imageData.photoCredit}
          </div>
        )}
      </div>

      {/* Chevron (baja sutil). Si reduce, lo mostramos estático */}
      <div className='absolute bottom-8 inset-x-0 z-40 flex justify-center'>
        {reduce ? (
          <ChevronDownIcon className='w-12 h-12 text-brand-cta-orange select-none' />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className='select-none'>
            <ChevronDownIcon className='w-12 h-12 text-brand-cta-orange' />
          </motion.div>
        )}
      </div>
    </section>
  );
};
