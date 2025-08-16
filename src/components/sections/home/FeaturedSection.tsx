// src/components/sections/home/FeaturedSection.tsx
import { useTranslation } from 'react-i18next';
import { FeaturedCard } from '../shared/FeaturedCard';
import type { FeaturedSectionProps } from './types';

export const FeaturedSection = ({
  titleKey,
  translationNS,
  cards,
}: FeaturedSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const cardsToDisplay = [...cards];

  return (
    <section
      className='bg-brand-primary-medium py-16 px-4'
      aria-labelledby='featured-heading'>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-max text-center mb-12'>
          <h2 className='heading-3 text-white'>{t(titleKey)}</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {cardsToDisplay.map((card, index) => (
            <FeaturedCard
              key={`${card.id}-${index}`}
              cardData={card}
              className='aspect-[4/5] w-[calc(50%-1rem)] flex-shrink-0 sm:w-5/12 md:w-4/12 lg:w-[30%] xl:w-[22%]'
              translationNS={translationNS}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
