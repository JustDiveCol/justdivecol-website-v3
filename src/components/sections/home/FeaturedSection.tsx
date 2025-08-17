// src/components/sections/home/FeaturedSection.tsx
import { useTranslation } from 'react-i18next';
import { FeaturedCard } from '../shared/FeaturedCard';
import type { FeaturedSectionProps } from './types';
import { MotionBlock } from '../../motion/MotionBlock';
import { useMotionPresets } from '../../../hooks/animations';

export const FeaturedSection = ({
  titleKey,
  translationNS,
  cards,
}: FeaturedSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { fadeIn } = useMotionPresets();

  const cardsToDisplay = [...cards];

  return (
    <section
      className="bg-brand-primary-medium py-16 px-4"
      aria-labelledby="featured-heading"
    >
      <div className="container mx-auto">
        <MotionBlock
          kind="inView"
          variants={fadeIn()}
          className="mx-auto max-w-max text-center mb-12"
        >
          <h2 className="heading-3 text-white">{t(titleKey)}</h2>
        </MotionBlock>

        <div className="flex flex-wrap justify-center gap-8">
          {cardsToDisplay.map((card, index) => (
            <FeaturedCard
              key={`${card.id}-${index}`}
              cardData={card}
              className="aspect-[4/5] w-[calc(50%-1rem)] flex-shrink-0 sm:w-5/12 md:w-4/12 lg:w-[30%] xl:w-[22%] drop-shadow-strong"
              translationNS={translationNS}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
