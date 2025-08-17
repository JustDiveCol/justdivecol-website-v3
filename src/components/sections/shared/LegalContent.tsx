// src/components/sections/shared/LegalContent.tsx
import { useTranslation } from 'react-i18next';
import type { LegalContentProps } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const LegalContent = ({
  sections,
  translationNS,
}: LegalContentProps) => {
  const { t } = useTranslation(translationNS);
  const { container, fadeIn } = useMotionPresets();

  return (
    <article
      className="
        prose prose-invert prose-lg
        mx-auto py-16 max-w-7xl
        text-brand-neutral/90
        prose-headings:text-brand-white
        prose-a:text-brand-cta-orange hover:prose-a:text-brand-cta-orange/80
      "
    >
      {sections.map((section) => (
        <MotionBlock
          key={section.id}
          kind="inView"
          variants={container}
          className="px-4"
        >
          <MotionBlock kind="none" variants={fadeIn()}>
            <h2>{t(section.titleKey)}</h2>
          </MotionBlock>

          {section.points.map((point, i) => (
            <MotionBlock
              key={i}
              kind="none"
              variants={fadeIn({ delay: i * 0.02 })}
              className="mb-6 text-justify"
            >
              {point.titleKey && <h3 className="mt-4">{t(point.titleKey)}</h3>}

              {point.textKey && (
                <p className="whitespace-pre-line mt-2">{t(point.textKey)}</p>
              )}

              {point.subpoints && (
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  {point.subpoints.map((spKey) => (
                    <li key={spKey}>{t(spKey)}</li>
                  ))}
                </ul>
              )}
            </MotionBlock>
          ))}
        </MotionBlock>
      ))}
    </article>
  );
};
