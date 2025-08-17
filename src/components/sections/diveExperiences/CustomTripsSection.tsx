// src/components/sections/experiences/CustomTripsSection.tsx
import { useTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import { CheckIcon } from '../../ui';
import { ImageComponent } from '../../common/ImageComponent';
import type { CustomTripsSectionProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const CustomTripsSection = ({
  titleKey,
  textKey,
  translationNS,
  imageData,
  buttonTextKey,
  benefits,
}: CustomTripsSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, slideIn, fadeIn } = useMotionPresets();

  return (
    <section
      className='bg-brand-primary-dark py-20 px-4 text-white'
      id='custom-experiences'>
      <div className='container mx-auto'>
        <MotionBlock
          kind='inView'
          variants={container}
          className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Columna Imagen */}
          <MotionBlock
            kind='none'
            variants={slideIn('up', { distance: 40 })}
            className='transform-gpu will-change-transform'>
            <ImageComponent
              imageData={imageData}
              className='rounded-2xl drop-shadow-strong'
            />
          </MotionBlock>

          {/* Columna Texto */}
          <MotionBlock
            kind='none'
            variants={slideIn('up', { distance: 48 })}
            className='transform-gpu will-change-transform'>
            <MotionBlock
              kind='none'
              variants={fadeIn()}>
              <h2 className='heading-3 mb-6'>{t(titleKey)}</h2>
            </MotionBlock>

            <MotionBlock
              kind='none'
              variants={fadeIn({ delay: 0.06 })}>
              <p className='text-base-md font-serif text-brand-neutral/90 mb-8'>
                {t(textKey)}
              </p>
            </MotionBlock>

            {/* Lista de Beneficios */}
            <ul className='space-y-4 mb-8'>
              {benefits.map((benefit, i) => (
                <MotionBlock
                  key={benefit.id}
                  kind='none'
                  variants={fadeIn({ delay: 0.1 + i * 0.04 })}>
                  <li className='flex items-center gap-3'>
                    <CheckIcon className='h-6 w-6 text-brand-cta-green flex-shrink-0' />
                    <span className='text-brand-neutral text-base-xs'>
                      {t(benefit.textKey)}
                    </span>
                  </li>
                </MotionBlock>
              ))}
            </ul>

            <MotionBlock
              kind='none'
              variants={fadeIn({ delay: 0.12 })}>
              <Button
                action={{
                  type: 'whatsapp',
                  whatsAppMessageKey: 'customTripWhatsappMessage',
                }}
                variant='primary'
                size='sm'>
                {t(buttonTextKey)}
              </Button>
            </MotionBlock>
          </MotionBlock>
        </MotionBlock>
      </div>
    </section>
  );
};
