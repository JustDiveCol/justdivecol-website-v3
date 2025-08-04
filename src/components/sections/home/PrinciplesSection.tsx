import { useTranslation } from 'react-i18next';
import { PrincipleCard, type PrincipleCardData } from '../shared/PrincipleCard';
import type { I18NNamespace } from '../../../constants/i18n';

export type PrinciplesSectionProps = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  cards: PrincipleCardData[];
};

export const PrinciplesSection = ({
  titleKey,
  subtitleKey,
  translationNS,
  cards,
}: PrinciplesSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  return (
    <section className='bg-brand-primary-dark py-20 px-4'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='heading-2 text-white'>{t(titleKey)}</h2>
          <p className='text-subtitle mt-4'>{t(subtitleKey)}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {cards.map((card) => (
            <PrincipleCard
              key={card.id}
              cardData={card}
              translationNS={translationNS}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
