import { useTranslation } from 'react-i18next';
import { homePageData } from '../../../data/homePageData';
import { PrincipleCard } from '../shared/PrincipleCard';

export const PrinciplesSection = () => {
  const { t } = useTranslation('common');
  const { principles } = homePageData;

  return (
    <section className='bg-brand-primary-dark py-20 px-4'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='heading-2 text-white'>
            {t(`principles.${principles.titleKey}`)}
          </h2>
          <p className='text-subtitle mt-4'>
            {t(`principles.${principles.subtitleKey}`)}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {principles.cards.map((card) => (
            <PrincipleCard
              key={card.id}
              cardData={card}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
