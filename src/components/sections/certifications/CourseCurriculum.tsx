// src/components/sections/certifications/CourseCurriculum.tsx
import { useTranslation } from 'react-i18next';
import type { CourseCurriculumProps } from './types';
import { ComputerIcon, ScubaTanksIcon, DiverIcon } from '../../ui';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

const curriculumIconMap: Record<string, React.ReactNode> = {
  theory: (
    <ComputerIcon className="h-10 w-10 text-brand-cta-orange drop-shadow-strong" />
  ),
  'confined-water': (
    <ScubaTanksIcon className="h-10 w-10 text-brand-cta-orange drop-shadow-strong" />
  ),
  'open-water': (
    <DiverIcon className="h-10 w-10 text-brand-cta-orange drop-shadow-strong" />
  ),
};

export const CourseCurriculum = ({
  curriculum,
  translationNS,
}: CourseCurriculumProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className="bg-brand-primary-medium">
      <div className="section text-center drop-shadow-strong">
        <MotionBlock kind="inView" variants={fadeIn()}>
          <h2 className="heading-3 text-white mb-12">
            {t(curriculum.titleKey)}
          </h2>
        </MotionBlock>

        <MotionBlock
          kind="inView"
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transform-gpu will-change-transform"
        >
          {curriculum.modules.map((module, i) => (
            <MotionBlock
              key={module.id}
              kind="none"
              variants={fadeIn({ delay: i * 0.04 })}
              className="flex flex-col items-center p-6 bg-brand-primary-dark/50 rounded-lg border border-white/10"
            >
              {curriculumIconMap[module.id] ?? (
                <DiverIcon className="h-10 w-10 text-brand-cta-orange" />
              )}
              <h3 className="heading-6 text-white mt-4">{t(module.nameKey)}</h3>
              <p className="mt-2 text-base-xs font-serif text-brand-neutral/80">
                {t(module.descriptionKey)}
              </p>
            </MotionBlock>
          ))}
        </MotionBlock>
      </div>
    </section>
  );
};
