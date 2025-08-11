// src/components/sections/contact/FaqSection.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AccordionItem } from '../../common/AccordionItem';
import { ROUTES } from '../../../constants/routes';
import { Button } from '../../common/Button';

import { useMotionPresets } from '../../../hooks/animations';
import { faqContent } from '../../../content/pages/faq/faq.content';
import { toUrlPath } from '../../../content/urlPathSchema';
import type { FaqSectionProps } from './types';

export const FaqSection = ({ translationNS }: FaqSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  const { data } = faqContent;
  const topFaqs = data.categories
    .flatMap((category) => category.faqs)
    .filter((faq) => data.topFaqIds.includes(faq.id));

  return (
    <section
      className='bg-brand-primary-medium'
      aria-labelledby='contact-faqs-heading'>
      <div className='section py-16'>
        {/* Título */}
        <div className='mb-12 text-center'>
          <motion.h2
            id='contact-faqs-heading'
            className='heading-2 text-white'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn()}>
            {t('faq:faq.contactFaqSectionTitle')}
          </motion.h2>
        </div>

        {/* Lista de FAQs */}
        <motion.div
          role='list'
          className='mx-auto max-w-3xl space-y-2'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={container}>
          {topFaqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={fadeIn()}>
              <AccordionItem
                question={t(faq.questionKey)}
                answer={t(faq.answerKey)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Botón ver todas */}
        <motion.div
          className='mt-12 text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn()}>
          <Button
            action={{ type: 'internal', path: toUrlPath(ROUTES.faq) }}
            variant='outline'
            size='sm'>
            {t('faq:faq.seeAllFaqsButton')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
