import { useTranslation } from 'react-i18next';
import { homePageData } from '../../../data/homePageData';
import { FeaturedCard } from '../shared/FeaturedCard';

export const FeaturedSection = () => {
  const { t } = useTranslation('common');
  const { featured } = homePageData;

  const cardsToDisplay = [...featured.cards];

  return (
    <section className='bg-brand-primary-medium py-20 px-4'>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-3xl text-center mb-16'>
          <h2 className='heading-2 text-white'>
            {t(`featured.${featured.titleKey}`)}
          </h2>
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {cardsToDisplay.map((card, index) => (
            <FeaturedCard
              key={`${card.id}-${index}`}
              cardData={card}
              // Ahora definimos el ancho de cada tarjeta para diferentes pantallas.
              // Usamos 'flex-shrink-0' para que no se encojan.
              className='aspect-[4/5] w-full flex-shrink-0 sm:w-5/12 md:w-4/12 lg:w-[30%] xl:w-[22%]'
            />
          ))}
        </div>
      </div>
    </section>
  );
};
