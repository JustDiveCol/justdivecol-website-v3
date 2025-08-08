// src/components/sections/faq/FaqContent.tsx
import { useTranslation } from 'react-i18next';
import { faqData } from '../../../data/faqData';
import { AccordionItem } from '../../common/AccordionItem';

export const FaqContent = () => {
  const { t } = useTranslation(['faqs', 'common']);

  return (
    <section className='bg-brand-primary-dark py-20 px-4'>
      <div className='container mx-auto max-w-3xl'>
        {faqData.categories.map((category) => (
          <div
            key={category.id}
            className='mb-12'>
            <h2 className='heading-3 mb-6 text-brand-white text-center'>
              {t(category.sectionTitleKey)}
            </h2>

            <div className='space-y-2'>
              {category.faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  question={t(faq.questionKey)}
                  answer={t(faq.answerKey)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
