// src/components/sections/experiences/ExperienceItinerary.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';
import type { ExperienceItineraryProps } from './types';
import type { ExperienceItineraryContent } from '../../../content/experiences/types';

export const ExperienceItinerary = ({
  itinerary,
  byPlan,
  planLabels,
  translationNS,
}: ExperienceItineraryProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  // ¿Modo multi-plan?
  const isMulti = byPlan && Object.keys(byPlan).length > 0;

  // Estado para el plan activo (si hay multi)
  const planIds = React.useMemo(
    () => (isMulti ? Object.keys(byPlan!) : []),
    [isMulti, byPlan]
  );
  const [activePlanId, setActivePlanId] = React.useState<string | null>(
    isMulti ? planIds[0] : null
  );

  // Itinerario a renderizar (single o el del plan activo)
  const currentItinerary: ExperienceItineraryContent | undefined =
    React.useMemo(() => {
      if (isMulti && activePlanId) return byPlan![activePlanId];
      return itinerary;
    }, [isMulti, activePlanId, byPlan, itinerary]);

  if (!currentItinerary) return null;

  return (
    <section className="bg-brand-primary-medium">
      <div className="section max-w-4xl mx-auto">
        {/* Título general */}
        <MotionBlock
          kind="inView"
          variants={fadeIn()}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="heading-3 text-white">
            {t(currentItinerary.titleKey)}
          </h2>
        </MotionBlock>

        {/* Selector de plan (solo en multi) */}
        {isMulti && (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {planIds.map((id) => {
              const label = planLabels?.[id] ?? id;
              const isActive = id === activePlanId;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActivePlanId(id)}
                  className={[
                    'px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors',
                    isActive
                      ? 'bg-brand-cta-orange text-white'
                      : 'bg-white/10 text-white hover:bg-white/20',
                  ].join(' ')}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {/* Timeline */}
        <MotionBlock
          kind="inView"
          variants={container}
          className="relative pl-8 transform-gpu will-change-transform"
        >
          <div className="absolute left-0 top-0 h-full w-px bg-white/20 drop-shadow-strong" />

          {currentItinerary.days.map((day, index) => (
            <MotionBlock
              key={`${day.day}-${index}`}
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
              <p className="mt-2 text-base-xs text-brand-neutral/90 font-serif text-justify">
                {t(day.descriptionKey)}
              </p>
            </MotionBlock>
          ))}
        </MotionBlock>

        {/* Notas */}
        {currentItinerary.notes && currentItinerary.notes.length > 0 && (
          <MotionBlock
            kind="inView"
            variants={fadeIn()}
            className="mt-6 md:mt-8 text-center"
          >
            <ul className="text-xs text-brand-neutral/70 italic space-y-1 text-justify">
              {currentItinerary.notes.map((noteKey, i) => (
                <li key={i}>{t(noteKey)}</li>
              ))}
            </ul>
          </MotionBlock>
        )}
      </div>
    </section>
  );
};
