// src/components/sections/certifications/CourseContent.tsx
import { useTranslation } from 'react-i18next';
import type { CourseContentProps } from './types';
import { CheckIcon, CheckboxIcon } from '../../ui';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const CourseContent = ({
  description,
  prerequisites,
  whatIsIncluded,
  translationNS,
}: CourseContentProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-dark'>
      <MotionBlock
        kind='eager'
        variants={container}
        className='section max-w-7xl mx-auto space-y-16 transform-gpu will-change-transform'>
        {/* --- Bloque de Descripción --- */}
        <MotionBlock
          kind='none'
          variants={fadeIn()}>
          <h2 className='heading-3 text-white mb-4 text-center md:text-left'>
            {t(description.titleKey)}
          </h2>
          <div className='prose prose-invert prose-lg text-brand-neutral/90 max-w-none'>
            {description.paragraphs.map((pKey, i) => (
              <MotionBlock
                key={i}
                kind='none'
                variants={fadeIn()}>
                <p className='whitespace-pre-line'>{t(pKey)}</p>
              </MotionBlock>
            ))}
          </div>
        </MotionBlock>

        {/* --- Bloque de Prerrequisitos (Tarjeta) --- */}
        <MotionBlock
          kind='none'
          variants={fadeIn()}
          className='bg-brand-primary-medium/30 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-5 text-white mb-6 flex items-center gap-3'>
            {t(prerequisites.titleKey)}
          </h3>
          {/* Micro-stagger para los ítems */}
          <MotionBlock
            kind='none'
            variants={container}>
            <ul className='space-y-4'>
              {prerequisites.items.map((itemKey, i) => (
                <MotionBlock
                  key={i}
                  kind='none'
                  variants={fadeIn({ delay: i * 0.03 })}>
                  <li className='flex items-start gap-4'>
                    <CheckboxIcon className='h-6 w-6 text-brand-cta-green flex-shrink-0 mt-1 drop-shadow-strong' />
                    <span className='text-brand-neutral/90 text-lg'>
                      {t(itemKey)}
                    </span>
                  </li>
                </MotionBlock>
              ))}
            </ul>
          </MotionBlock>
        </MotionBlock>

        {/* --- Bloque de Qué Incluye (Tarjeta) --- */}
        <MotionBlock
          kind='none'
          variants={fadeIn()}
          className='bg-brand-primary-medium/30 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-5 text-white mb-6 flex items-center gap-3'>
            {t(whatIsIncluded.titleKey)}
          </h3>
          <MotionBlock
            kind='none'
            variants={container}>
            <ul className='space-y-4'>
              {whatIsIncluded.items.map((itemKey, i) => (
                <MotionBlock
                  key={i}
                  kind='none'
                  variants={fadeIn({ delay: i * 0.03 })}>
                  <li className='flex items-start gap-4'>
                    <CheckIcon className='h-6 w-6 text-brand-cta-green flex-shrink-0 mt-1 drop-shadow-strong' />
                    <span className='text-brand-neutral/90 text-lg'>
                      {t(itemKey)}
                    </span>
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
