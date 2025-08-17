// src/components/sections/destinations/DestinationIntro.tsx
import { useTranslation } from 'react-i18next';
import type { DestinationIntroProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const DestinationIntro = ({
  description,
  translationNS,
}: DestinationIntroProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className="bg-brand-primary-dark">
      <MotionBlock
        kind="eager"
        variants={container}
        className="section max-w-4xl mx-auto text-center transform-gpu will-change-transform"
      >
        <MotionBlock kind="none" variants={fadeIn()}>
          <h2 className="heading-3 text-white mb-6">
            {t(description.titleKey)}
          </h2>
        </MotionBlock>

        <div className="prose prose-invert prose-lg text-brand-neutral/90 max-w-none">
          {description.paragraphs.map((pKey, i) => (
            <MotionBlock key={i} kind="none" variants={fadeIn()}>
              <p className="text-base-sm whitespace-pre-line">{t(pKey)}</p>
            </MotionBlock>
          ))}
        </div>
      </MotionBlock>
    </section>
  );
};
