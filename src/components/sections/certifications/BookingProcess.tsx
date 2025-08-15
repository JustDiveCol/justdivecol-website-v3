// src/components/sections/certifications/BookingProcess.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { BookingProcessProps } from './types';

export const BookingProcess = ({
  bookingProcess,
  translationNS,
}: BookingProcessProps) => {
  const { t } = useTranslation([translationNS, 'common', 'certifications']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-medium py-16'>
      <div className='section text-center'>
        <motion.h2
          className='heading-2 text-white mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          {t(bookingProcess.titleKey)}
        </motion.h2>
        <motion.div
          className='relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}>
          <div
            aria-hidden='true'
            className='absolute top-14 left-0 w-full h-px bg-white/20 hidden md:block z-0'
          />
          {bookingProcess.steps.map((step, index) => (
            <motion.div
              key={step.nameKey}
              variants={fadeIn()}
              className='relative flex flex-col items-center text-center p-6'>
              <div className='relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary-dark border-2 border-brand-cta-orange text-white text-2xl font-bold'>
                {index + 1}
              </div>
              <h3 className='heading-5 text-white mt-4'>{t(step.nameKey)}</h3>
              <p className='mt-2 font-serif text-brand-neutral/80'>
                {t(step.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
