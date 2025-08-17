// src/components/sections/experiences/ExperienceItinerary.tsx
import { useTranslation } from 'react-i18next';
import { useMotionPresets } from '../../../hooks/animations';
import type { ExperienceItineraryProps } from './types';
import { MotionBlock } from '../../motion/MotionBlock';

export const ExperienceItinerary = ({
  itinerary,
  translationNS,
}: ExperienceItineraryProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className="bg-brand-primary-medium">
      <div className="section max-w-4xl mx-auto">
        <MotionBlock
          kind="inView"
          variants={fadeIn()}
          className="text-center mb-12"
        >
          <h2 className="heading-3 text-white">{t(itinerary.titleKey)}</h2>
        </MotionBlock>

        <MotionBlock
          kind="inView"
          variants={container}
          className="relative pl-8 transform-gpu will-change-transform"
        >
          <div className="absolute left-0 top-0 h-full w-px bg-white/20 drop-shadow-strong" />

          {itinerary.days.map((day, index) => (
            <MotionBlock
              key={index}
              kind="none"
              variants={fadeIn()}
              className="relative mb-12"
            >
              <div className="absolute -left-12 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cta-orange font-bold text-white">
                {day.day}
              </div>
              <p className="text-sm uppercase tracking-wider text-brand-neutral/80">
                {t('common:day')} {day.day}
              </p>
              <h3 className="heading-5 text-white mt-1">{t(day.titleKey)}</h3>
              <p className="mt-2 text-base-xs text-brand-neutral/90 font-serif">
                {t(day.descriptionKey)}
              </p>
            </MotionBlock>
          ))}
        </MotionBlock>

        {itinerary.notes && itinerary.notes.length > 0 && (
          <MotionBlock
            kind="inView"
            variants={fadeIn()}
            className="mt-8 text-center"
          >
            <ul className="text-xs text-brand-neutral/70 italic space-y-1 text-left">
              {itinerary.notes.map((noteKey, i) => (
                <li key={i}>{t(noteKey)}</li>
              ))}
            </ul>
          </MotionBlock>
        )}
      </div>
    </section>
  );
};
