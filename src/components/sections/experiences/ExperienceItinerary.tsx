// src/components/sections/experiences/ExperienceItinerary.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { ExperienceItineraryProps } from './types';

export const ExperienceItinerary = ({
  itinerary,
  translationNS,
}: ExperienceItineraryProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-medium py-16'>
      <div className='section max-w-4xl mx-auto'>
        <motion.div
          className='text-center mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          <h2 className='heading-2 text-white'>{t(itinerary.titleKey)}</h2>
        </motion.div>

        <motion.div
          className='relative pl-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={container}>
          {/* Línea de tiempo vertical */}
          <div className='absolute left-0 top-0 h-full w-px bg-white/20' />

          {itinerary.days.map((day, index) => (
            <motion.div
              key={index}
              className='relative mb-12'
              variants={fadeIn()}>
              <div className='absolute -left-12 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cta-orange font-bold text-white'>
                {day.day}
              </div>
              <p className='text-sm uppercase tracking-wider text-brand-neutral/80'>
                {t('common:day')} {day.day}
              </p>
              <h3 className='heading-4 text-white mt-1'>{t(day.titleKey)}</h3>
              <p className='mt-2 text-brand-neutral/90 font-serif'>
                {t(day.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Notas Adicionales */}
        {itinerary.notes && itinerary.notes.length > 0 && (
          <motion.div
            className='mt-8 text-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn()}>
            <ul className='text-sm text-brand-neutral/70 italic space-y-1'>
              {itinerary.notes.map((noteKey, i) => (
                <li key={i}>{t(noteKey)}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
};
