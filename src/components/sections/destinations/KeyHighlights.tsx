// src/components/sections/destinations/KeyHighlights.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { KeyHighlightsProps } from './types';
import { InfoIcon, CheckIcon } from '../../ui'; // Usaremos íconos genéricos por ahora

export const KeyHighlights = ({
  details,
  uniqueFinds,
  translationNS,
}: KeyHighlightsProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <motion.section
      className='bg-brand-primary-medium py-16'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={container}>
      <div className='section grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        {/* Card de Detalles */}
        <motion.div
          variants={fadeIn()}
          className='bg-brand-primary-dark/50 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-4 text-white mb-6 flex items-center gap-3'>
            <InfoIcon className='h-8 w-8 text-brand-cta-orange' />
            {t(details.titleKey)}
          </h3>
          <ul className='space-y-4'>
            {details.items.map(({ labelKey, valueKey }) => (
              <li key={labelKey}>
                <span className='block text-sm font-bold text-brand-neutral/80 uppercase tracking-wider'>
                  {t(labelKey)}
                </span>
                <span className='block text-lg font-semibold text-white'>
                  {t(valueKey)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card de Hallazgos Únicos */}
        <motion.div
          variants={fadeIn()}
          className='bg-brand-primary-dark/50 border border-white/10 rounded-lg p-6 md:p-8'>
          <h3 className='heading-4 text-white mb-6 flex items-center gap-3'>
            <CheckIcon className='h-8 w-8 text-brand-cta-green' />
            {t(uniqueFinds.titleKey)}
          </h3>
          <ul className='space-y-3'>
            {uniqueFinds.items.map((itemKey, i) => (
              <li
                key={i}
                className='flex items-start gap-3'>
                <CheckIcon className='h-5 w-5 text-brand-cta-green flex-shrink-0 mt-1' />
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
