// src/components/sections/shared/LegalContent.tsx
import { useTranslation } from 'react-i18next';
import type { LegalContentProps } from './types';

export const LegalContent = ({
  sections,
  translationNS,
}: LegalContentProps) => {
  const { t } = useTranslation(translationNS);

  return (
    <article
      className='
        prose prose-invert prose-lg
        mx-auto py-16
        text-brand-neutral/90
        prose-headings:text-brand-white
        prose-a:text-brand-cta-orange hover:prose-a:text-brand-cta-orange/80
      '>
      {sections.map((section) => (
        <section key={section.id}>
          <h2>{t(section.titleKey)}</h2>

          {section.points.map((point, i) => (
            <div
              key={i}
              className='mb-6 text-justify'>
              {/* Si hay título para este punto, lo mostramos */}
              {point.titleKey && <h3 className='mt-4'>{t(point.titleKey)}</h3>}

              {/* Texto principal del punto */}
              {point.textKey && (
                <p className='whitespace-pre-line mt-2'>{t(point.textKey)}</p>
              )}

              {/* Si hay subpuntos, listarlos */}
              {point.subpoints && (
                <ul className='list-disc ml-6 mt-2 space-y-1'>
                  {point.subpoints.map((spKey) => (
                    <li key={spKey}>{t(spKey)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      ))}
    </article>
  );
};
