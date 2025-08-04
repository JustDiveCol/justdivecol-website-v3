import { useTranslation } from 'react-i18next';
import { faqData } from '../../../data/faqData';
import { AccordionItem } from '../../common/AccordionItem';
import { ROUTES } from '../../../constants/routes';
import { Button } from '../../common/Button';

export const FaqSection = () => {
  const { t } = useTranslation('faqs');
  const topFaqs = faqData.categories
    .flatMap((category) => category.faqs)
    .filter((faq) => faqData.topFaqIds.includes(faq.id));

  return (
    <section className='bg-brand-primary-medium py-20 px-4'>
      <div className='container mx-auto max-w-3xl'>
        <div className='text-center mb-12'>
          <h2 className='heading-2 text-white'>
            {t('header.faqsHeaderTitle')}
          </h2>{' '}
          {/* Asumiendo que tienes un título general */}
        </div>

        <div className='space-y-2'>
          {topFaqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={t(faq.questionKey)}
              answer={t(faq.answerKey)}
            />
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Button
            action={{ type: 'internal', path: ROUTES.faq }}
            variant='outline'
            size='sm'>
            {/* ===== CAMBIO AQUÍ: Usamos la función t() ===== */}
            {t('faqs.seeAllFaqsButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};
