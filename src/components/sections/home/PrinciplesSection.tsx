// src/components/sections/home/PrinciplesSection.tsx
import { useTranslation } from 'react-i18next';
import { PrincipleCard } from '../shared/PrincipleCard';
import type { PrinciplesSectionProps } from './types';

export const PrinciplesSection = ({
  titleKey,
  subtitleKey,
  translationNS,
  cards,
}: PrinciplesSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  return (
    <section
      className='section bg-brand-primary-dark'
      aria-labelledby='principles-heading'>
      <div className='max-w-3xl mx-auto text-center mb-16'>
        <h2
          id='principles-heading'
          className='heading-2 text-white'>
          {t(titleKey)}
        </h2>
        <p className='text-subtitle mt-4'>{t(subtitleKey)}</p>
      </div>

      <div className='flex flex-wrap justify-center items-stretch gap-8'>
        {cards.map((card) => (
          <div
            key={card.id}
            className='flex w-[calc(50%-1rem)] flex-shrink-0 sm:w-5/12 md:w-4/12 lg:w-[30%] xl:w-[22%]'>
            <PrincipleCard
              cardData={card}
              translationNS={translationNS}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
