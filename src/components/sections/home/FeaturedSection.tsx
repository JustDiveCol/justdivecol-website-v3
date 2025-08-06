import { useTranslation } from 'react-i18next';
import { FeaturedCard } from '../shared/FeaturedCard';
import type { I18NNamespace } from '../../../constants/i18n';
import type { UrlPath } from '../../../constants/routes';

export type ImageInfo = {
  backgroundImageUrl: string;
  complementaryLogo?: {
    url: string;
    altKey: string;
  };
  photoCredit?: string;
};

export type CardData = {
  id: string;
  link: UrlPath;
  titleKey: string;
  subtitleKey?: string;
  imageData: ImageInfo;
};

export type FeaturedSectionProps = {
  titleKey: string;
  translationNS: I18NNamespace;
  cards: CardData[];
};

export const FeaturedSection = ({
  titleKey,
  translationNS,
  cards,
}: FeaturedSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const cardsToDisplay = [...cards];

  return (
    <section className='bg-brand-primary-medium py-20 px-4'>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-max text-center mb-16'>
          <h2 className='heading-2 text-white'>{t(titleKey)}</h2>
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
