// src/components/sections/experiences/ExperienceInclusions.tsx
import { useTranslation } from 'react-i18next';
import { useMotionPresets } from '../../../hooks/animations';
import type { ExperienceInclusionsProps } from './types';
import { CheckIcon, CloseIcon } from '../../ui';
import { MotionBlock } from '../../motion/MotionBlock';
import React from 'react';

export const ExperienceInclusions = ({
  whatIsIncluded,
  whatIsNotIncluded,
  certificationInclusions,
  translationNS,
}: ExperienceInclusionsProps) => {
  const { t } = useTranslation([translationNS, 'common', 'certifications']);
  const { container, fadeIn } = useMotionPresets();

  const hasCertInclusions =
    Array.isArray(certificationInclusions) &&
    certificationInclusions.length > 0;

  const [activeInclusionIdx, setActiveInclusionIdx] = React.useState(0);

  const safeActiveIdx = hasCertInclusions
    ? Math.min(activeInclusionIdx, certificationInclusions.length - 1)
    : 0;

  const activeInclusion = hasCertInclusions
    ? certificationInclusions[safeActiveIdx]
    : undefined;

  return (
    <section className="bg-brand-primary-dark">
      <MotionBlock
        kind="inView"
        variants={container}
        className="section grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto drop-shadow-strong"
      >
        {/* Qué incluye */}
        <MotionBlock
          kind="none"
          variants={fadeIn()}
          className="bg-brand-primary-medium/20 border border-white/10 rounded-lg p-6 md:p-8 flex flex-col"
        >
          <div>
            <h3 className="heading-5 text-white mb-6 flex items-center gap-3">
              {t(whatIsIncluded.titleKey)}
            </h3>

            <MotionBlock kind="none" variants={container}>
              <ul className="space-y-3">
                {whatIsIncluded.items.map((itemKey, i) => (
                  <MotionBlock
                    key={i}
                    kind="none"
                    variants={fadeIn({ delay: i * 0.03 })}
                  >
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-brand-cta-green flex-shrink-0 mt-1" />
                      <span className="text-brand-neutral/90 text-justify">
                        {t(itemKey)}
                      </span>
                    </li>
                  </MotionBlock>
                ))}
              </ul>
            </MotionBlock>
          </div>

          {/* Inclusiones de certificaciones (si hay) */}
          {hasCertInclusions && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-bold text-subtitle text-brand-cta-orange mb-4">
                {t('certifications:certificationInclusionsTitle')}
              </h4>

              {/* Botones arriba (estilo como Itinerary) */}
              {certificationInclusions.length > 1 && (
                <div className="mb-6 flex flex-wrap items-center justify-start gap-2">
                  {certificationInclusions.map((inc, idx) => {
                    const isActive = idx === safeActiveIdx;

                    const label =
                      (inc.nameKey && inc.nameKey) ||
                      `${t('common:option', { defaultValue: 'Opción' })} ${
                        idx + 1
                      }`;

                    return (
                      <button
                        key={`cert-inc-tab-${idx}`}
                        type="button"
                        onClick={() => setActiveInclusionIdx(idx)}
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

              {/* Contenido abajo (solo la inclusión activa) */}
              {activeInclusion &&
                (() => {
                  const items = activeInclusion?.whatIsIncluded?.items ?? [];
                  if (!items.length) return null;

                  const certHref = activeInclusion.url;

                  return (
                    <div className="mb-6">
                      {certificationInclusions.length === 1 &&
                        activeInclusion.nameKey && (
                          <p className="text-white/80 font-semibold mb-2">
                            {t(activeInclusion.nameKey, {
                              ns: 'certifications',
                            })}
                          </p>
                        )}

                      <MotionBlock kind="none" variants={container}>
                        <ul className="space-y-3">
                          {items.map((itemKey: string, i: number) => (
                            <MotionBlock
                              key={`${itemKey}-${i}`}
                              kind="none"
                              variants={fadeIn({ delay: i * 0.03 })}
                            >
                              <li className="flex items-start gap-3">
                                <CheckIcon className="h-5 w-5 text-brand-cta-green flex-shrink-0 mt-1" />
                                <span className="text-brand-neutral/90 text-sm text-justify">
                                  {t(itemKey, { ns: 'certifications' })}
                                </span>
                              </li>
                            </MotionBlock>
                          ))}
                        </ul>
                      </MotionBlock>

                      {/* CTA hacia la certificación (solo si hay URL) */}
                      {certHref && (
                        <div className="mt-6">
                          <a
                            href={certHref}
                            className="inline-flex items-center px-5 py-3 rounded-full bg-brand-cta-orange text-white font-bold uppercase tracking-wider text-xs hover:bg-brand-cta-orange/90 transition-colors"
                          >
                            {t('certifications:seeDetailsCta', {
                              defaultValue: 'Ver detalles de la certificación',
                            })}
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })()}
            </div>
          )}
        </MotionBlock>

        {/* Qué NO incluye */}
        <MotionBlock
          kind="none"
          variants={fadeIn()}
          className="bg-brand-primary-medium/20 border border-white/10 rounded-lg p-6 md:p-8"
        >
          <h3 className="heading-5 text-white mb-6 flex items-center gap-3">
            {t(whatIsNotIncluded.titleKey)}
          </h3>

          <MotionBlock kind="none" variants={container}>
            <ul className="space-y-3">
              {whatIsNotIncluded.items.map((itemKey, i) => (
                <MotionBlock
                  key={i}
                  kind="none"
                  variants={fadeIn({ delay: i * 0.03 })}
                >
                  <li className="flex items-start gap-3">
                    <CloseIcon className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                    <span className="text-brand-neutral/90 text-justify">
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
