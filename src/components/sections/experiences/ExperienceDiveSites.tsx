// src/components/sections/experiences/ExperienceDiveSites.tsx
import { useTranslation } from 'react-i18next';
import { useMotionPresets } from '../../../hooks/animations';
import type { ExperienceDiveSitesProps } from './types';
import { DiveSitesSection } from '../divesites/DiveSitesSection';
import { MotionBlock } from '../../motion/MotionBlock';

export const ExperienceDiveSites = ({
  destinationName,
  diveSitesSectionProps,
}: ExperienceDiveSitesProps) => {
  const { t } = useTranslation(['experiences', 'common']);
  const { fadeIn } = useMotionPresets();

  return (
    <section className="bg-brand-primary-medium">
      <div className="section">
        <MotionBlock kind="inView" variants={fadeIn()} className="text-center">
          <h2 className="heading-2 text-white mb-4">
            {t('experiences.diveSitesSectionTitle')}
          </h2>
          <p className="text-subtitle text-brand-neutral/80">
            {t('experiences.diveSitesSectionSubtitle', {
              destination: destinationName,
            })}
          </p>
        </MotionBlock>

        <MotionBlock
          kind="inView"
          variants={fadeIn()}
          className="mt-12 h-[85vh] min-h-[600px] w-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 transform-gpu will-change-transform"
        >
          <DiveSitesSection
            {...diveSitesSectionProps}
            translationNS="dive-sites"
          />
        </MotionBlock>
      </div>
    </section>
  );
};
