// src/components/sections/experiences/ExperienceInclusions.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { ExperienceInclusionsProps } from './types';
import { CheckIcon, CloseIcon } from '../../ui';

export const ExperienceInclusions = ({
  whatIsIncluded,
  whatIsNotIncluded,
  certificationInclusions,
  translationNS,
}: ExperienceInclusionsProps) => {
  const { t } = useTranslation([translationNS, 'common', 'certifications']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <motion.section
      className='bg-brand-primary-dark py-16'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={container}>
      <div className='section grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        {/* Columna: Qué Incluye */}
        <motion.div
          variants={fadeIn()}
          className='bg-brand-primary-medium/30 border border-white/10 rounded-lg p-6 md:p-8 flex flex-col'>
          {/* Inclusiones del Viaje */}
          <div>
            <h3 className='heading-4 text-white mb-6 flex items-center gap-3'>
              <CheckIcon className='h-8 w-8 text-brand-cta-green' />
              {t(whatIsIncluded.titleKey)}
            </h3>
            <ul className='space-y-3'>
              {whatIsIncluded.items.map((itemKey, i) => (
                <li
                  key={i}
                  className='flex items-start gap-3'>
                  <CheckIcon className='h-5 w-5 text-brand-cta-green flex-shrink-0 mt-1' />
                  <span className='text-brand-neutral/90'>{t(itemKey)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloque Condicional para la Certificación */}
          {certificationInclusions && (
            <div className='mt-8 pt-6 border-t border-white/10'>
              <h4 className='font-bold text-brand-cta-orange mb-4'>
                {t('certifications:certificationInclusionsTitle')}
              </h4>
              <ul className='space-y-3'>
                {certificationInclusions.items.map((itemKey, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3'>
                    <CheckIcon className='h-5 w-5 text-brand-cta-green flex-shrink-0 mt-1' />
                    <span className='text-brand-neutral/90 text-sm'>
                      {t(itemKey, { ns: 'certifications' })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Columna: Qué NO Incluye */}
        <motion.div
          variants={fadeIn()}
          className='bg-brand-primary-medium/30 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-4 text-white mb-6 flex items-center gap-3'>
            <CloseIcon className='h-8 w-8 text-red-400' />
            {t(whatIsNotIncluded.titleKey)}
          </h3>
          <ul className='space-y-3'>
            {whatIsNotIncluded.items.map((itemKey, i) => (
              <li
                key={i}
                className='flex items-start gap-3'>
                <CloseIcon className='h-5 w-5 text-red-400 flex-shrink-0 mt-1' />
                <span className='text-brand-neutral/90'>{t(itemKey)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
