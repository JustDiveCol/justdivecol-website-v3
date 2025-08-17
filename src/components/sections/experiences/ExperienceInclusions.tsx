// src/components/sections/experiences/ExperienceInclusions.tsx
import { useTranslation } from 'react-i18next';
import { useMotionPresets } from '../../../hooks/animations';
import type { ExperienceInclusionsProps } from './types';
import { CheckIcon, CloseIcon } from '../../ui';
import { MotionBlock } from '../../motion/MotionBlock';

export const ExperienceInclusions = ({
  whatIsIncluded,
  whatIsNotIncluded,
  certificationInclusions,
  translationNS,
}: ExperienceInclusionsProps) => {
  const { t } = useTranslation([translationNS, 'common', 'certifications']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-dark'>
      {/* Owner del ciclo: in-view + stagger de columnas */}
      <MotionBlock
        kind='inView'
        variants={container}
        className='section grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto drop-shadow-strong'>
        {/* Columna: Qué Incluye */}
        <MotionBlock
          kind='none'
          variants={fadeIn()}
          className='bg-brand-primary-medium/20 border border-white/10 rounded-lg p-6 md:p-8 flex flex-col'>
          <div>
            <h3 className='heading-5 text-white mb-6 flex items-center gap-3'>
              {t(whatIsIncluded.titleKey)}
            </h3>

            {/* Lista con micro-stagger */}
            <MotionBlock
              kind='none'
              variants={container}>
              <ul className='space-y-3'>
                {whatIsIncluded.items.map((itemKey, i) => (
                  <MotionBlock
                    key={i}
                    kind='none'
                    variants={fadeIn({ delay: i * 0.03 })}>
                    <li className='flex items-start gap-3'>
                      <CheckIcon className='h-5 w-5 text-brand-cta-green flex-shrink-0 mt-1' />
                      <span className='text-brand-neutral/90'>
                        {t(itemKey)}
                      </span>
                    </li>
                  </MotionBlock>
                ))}
              </ul>
            </MotionBlock>
          </div>

          {/* Bloque Condicional para la Certificación */}
          {certificationInclusions && (
            <div className='mt-8 pt-6 border-t border-white/10'>
              <h4 className='font-bold text-subtitle text-brand-cta-orange mb-4'>
                {t('certifications:certificationInclusionsTitle')}
              </h4>

              <MotionBlock
                kind='none'
                variants={container}>
                <ul className='space-y-3'>
                  {certificationInclusions.items.map((itemKey, i) => (
                    <MotionBlock
                      key={i}
                      kind='none'
                      variants={fadeIn({ delay: i * 0.03 })}>
                      <li className='flex items-start gap-3'>
                        <CheckIcon className='h-5 w-5 text-brand-cta-green flex-shrink-0 mt-1' />
                        <span className='text-brand-neutral/90 text-sm'>
                          {t(itemKey, { ns: 'certifications' })}
                        </span>
                      </li>
                    </MotionBlock>
                  ))}
                </ul>
              </MotionBlock>
            </div>
          )}
        </MotionBlock>

        {/* Columna: Qué NO Incluye */}
        <MotionBlock
          kind='none'
          variants={fadeIn()}
          className='bg-brand-primary-medium/20 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-5 text-white mb-6 flex items-center gap-3'>
            {t(whatIsNotIncluded.titleKey)}
          </h3>

          <MotionBlock
            kind='none'
            variants={container}>
            <ul className='space-y-3'>
              {whatIsNotIncluded.items.map((itemKey, i) => (
                <MotionBlock
                  key={i}
                  kind='none'
                  variants={fadeIn({ delay: i * 0.03 })}>
                  <li className='flex items-start gap-3'>
                    <CloseIcon className='h-5 w-5 text-red-400 flex-shrink-0 mt-1' />
                    <span className='text-brand-neutral/90'>{t(itemKey)}</span>
                  </li>
                </MotionBlock>
              ))}
            </ul>
          </MotionBlock>
        </MotionBlock>
      </MotionBlock>
    </section>
  );
};
