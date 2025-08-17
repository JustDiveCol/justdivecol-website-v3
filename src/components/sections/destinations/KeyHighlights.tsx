// src/components/sections/destinations/KeyHighlights.tsx
import { useTranslation } from 'react-i18next';
import type { KeyHighlightsProps } from './types';
import { CheckIcon } from '../../ui';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const KeyHighlights = ({
  details,
  uniqueFinds,
  translationNS,
}: KeyHighlightsProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-medium'>
      <MotionBlock
        kind='inView'
        variants={container}
        className='section grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto transform-gpu will-change-transform'>
        {/* Card de Detalles */}
        <MotionBlock
          kind='none'
          variants={fadeIn()}
          className='bg-brand-primary-dark/50 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-5 text-white mb-6 flex items-center gap-3'>
            {t(details.titleKey)}
          </h3>
          <ul className='space-y-4'>
            {details.items.map(({ labelKey, valueKey }) => (
              <li key={labelKey}>
                <span className='block text-base-xs font-bold text-brand-neutral/80 uppercase tracking-wider'>
                  {t(labelKey)}
                </span>
                <span className='block text-base-sm text-white'>
                  {t(valueKey)}
                </span>
              </li>
            ))}
          </ul>
        </MotionBlock>

        {/* Card de Hallazgos Únicos */}
        <MotionBlock
          kind='none'
          variants={fadeIn()}
          className='bg-brand-primary-dark/50 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-5 text-white mb-6 flex items-center gap-3'>
            {t(uniqueFinds.titleKey)}
          </h3>
          <ul className='space-y-3'>
            {uniqueFinds.items.map((itemKey, i) => (
              <MotionBlock
                key={i}
                kind='none'
                variants={fadeIn({ delay: i * 0.03 })}>
                <li className='flex items-start gap-3'>
                  <CheckIcon className='h-5 w-5 text-brand-cta-green flex-shrink-0 mt-1' />
                  <span className='block text-base-sm text-brand-neutral/90'>
                    {t(itemKey)}
                  </span>
                </li>
              </MotionBlock>
            ))}
          </ul>
        </MotionBlock>
      </MotionBlock>
    </section>
  );
};
