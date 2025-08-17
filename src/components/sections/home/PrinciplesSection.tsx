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
      className='bg-brand-primary-dark py-16 px-4'
      aria-labelledby='principles-heading'>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-max text-center mb-12'>
          <h2
            id='principles-heading'
            className='heading-3 text-white'>
            {t(titleKey)}
          </h2>
          <p className='text-subtitle mt-4'>{t(subtitleKey)}</p>
        </div>

        <div className='flex flex-wrap justify-center items-stretch gap-8'>
          {cards.map((card) => (
            <div
              key={card.id}
              className='flex w-[calc(50%-1rem)] flex-shrink-0 sm:w-5/12 md:w-4/12 lg:w-[30%] xl:w-[22%] drop-shadow-strong'>
              <PrincipleCard
                cardData={card}
                translationNS={'principles'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
