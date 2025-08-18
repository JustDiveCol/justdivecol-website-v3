// src/components/sections/certifications/RelatedExperiences.tsx
import { useTranslation } from 'react-i18next';
import type { RelatedExperiencesProps } from './types';
import { TripRow } from '../dive-experiences/TripRow';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const RelatedExperiences = ({
  titleKey,
  sessions,
  translationNS,
}: RelatedExperiencesProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { fadeIn } = useMotionPresets();

  if (sessions.length === 0) return null;

  return (
    <section className="bg-brand-primary-medium">
      <div className="section max-w-4xl mx-auto">
        <MotionBlock kind="inView" variants={fadeIn()}>
          <h2 className="heading-3 text-white mb-8 text-center">
            {t(titleKey)}
          </h2>
        </MotionBlock>

        <MotionBlock kind="inView" variants={fadeIn()} className="space-y-4">
          {sessions.map((session) => (
            <div key={session.id}>
              <TripRow session={session} translationNS="experiences" />
            </div>
          ))}
        </MotionBlock>
      </div>
    </section>
  );
};
