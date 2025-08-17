// src/components/sections/certifications/CourseContent.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { CourseContentProps } from './types';
import { CheckIcon, CheckboxIcon } from '../../ui';

export const CourseContent = ({
  description,
  prerequisites,
  whatIsIncluded,
  translationNS,
}: CourseContentProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <motion.section
      className='bg-brand-primary-dark'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={container}>
      <div className='section max-w-7xl mx-auto space-y-16'>
        {/* --- Bloque de Descripción --- */}
        <motion.div variants={fadeIn()}>
          <h2 className='heading-3 text-white mb-4 text-center md:text-left'>
            {t(description.titleKey)}
          </h2>
          <div className='prose prose-invert prose-lg text-brand-neutral/90 max-w-none'>
            {description.paragraphs.map((pKey, i) => (
              <p
                key={i}
                className='whitespace-pre-line'>
                {t(pKey)}
              </p>
            ))}
          </div>
        </motion.div>

        {/* --- Bloque de Prerrequisitos (Diseño de Tarjeta) --- */}
        <motion.div
          variants={fadeIn()}
          className='bg-brand-primary-medium/30 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-5 text-white mb-6 flex items-center gap-3'>
            {t(prerequisites.titleKey)}
          </h3>
          <ul className='space-y-4'>
            {prerequisites.items.map((itemKey, i) => (
              <li
                key={i}
                className='flex items-start gap-4'>
                <CheckboxIcon className='h-6 w-6 text-brand-cta-green flex-shrink-0 mt-1 drop-shadow-strong' />
                <span className='text-brand-neutral/90 text-lg'>
                  {t(itemKey)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* --- Bloque de Qué Incluye (Diseño de Tarjeta) --- */}
        <motion.div
          variants={fadeIn()}
          className='bg-brand-primary-medium/30 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-5 text-white mb-6 flex items-center gap-3'>
            {t(whatIsIncluded.titleKey)}
          </h3>
          <ul className='space-y-4'>
            {whatIsIncluded.items.map((itemKey, i) => (
              <li
                key={i}
                className='flex items-start gap-4'>
                <CheckIcon className='h-6 w-6 text-brand-cta-green flex-shrink-0 mt-1 drop-shadow-strong' />
                <span className='text-brand-neutral/90 text-lg'>
                  {t(itemKey)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
