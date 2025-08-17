// src/components/sections/certifications/BookingProcess.tsx
import { useTranslation } from 'react-i18next';
import type { BookingProcessProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const BookingProcess = ({
  bookingProcess,
  translationNS,
}: BookingProcessProps) => {
  const { t } = useTranslation([translationNS, 'common', 'certifications']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className="bg-brand-primary-dark">
      <div className="section text-center">
        <MotionBlock kind="inView" variants={fadeIn()}>
          <h2 className="heading-3 text-white mb-12">
            {t(bookingProcess.titleKey)}
          </h2>
        </MotionBlock>

        <MotionBlock
          kind="inView"
          variants={container}
          className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transform-gpu will-change-transform"
        >
          <div
            aria-hidden="true"
            className="absolute top-14 left-0 w-full h-px bg-white/20 hidden md:block z-0"
          />

          {bookingProcess.steps.map((step, index) => (
            <MotionBlock
              key={step.nameKey}
              kind="none"
              variants={fadeIn({ delay: index * 0.04 })}
              className="relative flex flex-col items-center text-center p-6"
            >
              <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary-medium border-2 border-brand-cta-orange text-white text-2xl font-bold drop-shadow-strong">
                {index + 1}
              </div>
              <h3 className="heading-6 text-white mt-4">{t(step.nameKey)}</h3>
              <p className="mt-2 text-base-xs text-brand-neutral/80">
                {t(step.descriptionKey)}
              </p>
            </MotionBlock>
          ))}
        </MotionBlock>
      </div>
    </section>
  );
};
