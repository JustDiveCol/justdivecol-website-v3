import { useTranslation } from 'react-i18next';
import { faqData } from '../../../data/faqData';
import { AccordionItem } from '../../common/AccordionItem';
import { ROUTES } from '../../../constants/routes';
import { Button } from '../../common/Button';
import type { I18NNamespace } from '../../../constants/i18n';

export type FaqSectionProps = {
  translationNS: I18NNamespace;
};

export const FaqSection = ({ translationNS }: FaqSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
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
            {t('faqs.seeAllFaqsButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};
