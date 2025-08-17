// src/components/sections/contact/FaqSection.tsx
import { useTranslation } from 'react-i18next';
import { AccordionItem } from '../../common/AccordionItem';
import { ROUTES } from '../../../constants/routes.schema';
import { Button } from '../../common/Button';

import { useMotionPresets } from '../../../hooks/animations';
import { faqContent } from '../../../content/pages/faq/faq.content';
import { toUrlPath } from '../../../content/urlPathSchema';
import type { FaqSectionProps } from './types';
import { MotionBlock } from '../../motion/MotionBlock';

export const FaqSection = ({
  translationNS,
  categoryId,
  titleKey = 'faq:faq.contactFaqSectionTitle',
  showSeeAllButton = true,
}: FaqSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets(); // <-- usamos container + fadeIn
  const { data } = faqContent;

  // Lógica para seleccionar las FAQs a mostrar
  const faqsToShow = (() => {
    if (categoryId) {
      const category = data.categories.find((c) => c.id === categoryId);
      return category ? category.faqs : [];
    }
    return data.categories
      .flatMap((category) => category.faqs)
      .filter((faq) => data.topFaqIds.includes(faq.id));
  })();

  return (
    <section
      className='bg-brand-primary-medium'
      aria-labelledby='contact-faqs-heading'>
      <div className='section py-16'>
        {/* Owner del ciclo: eager + stagger de hijos */}
        <MotionBlock
          kind='eager'
          variants={container}
          className='mx-auto max-w-3xl transform-gpu will-change-transform'>
          {/* Título (hijo 1) */}
          <MotionBlock
            kind='none'
            variants={fadeIn()}
            className='mb-12 text-center'>
            <h2
              id='contact-faqs-heading'
              className='heading-3 text-white'>
              {t(titleKey)}
            </h2>
          </MotionBlock>

          {/* Lista (hijo 2): micro-stagger por item */}
          <MotionBlock
            kind='none'
            variants={container}
            role='list'
            className='space-y-2'>
            {faqsToShow.map((faq, i) => (
              <MotionBlock
                key={faq.id}
                kind='none'
                variants={fadeIn({ delay: i * 0.03 })}>
                <AccordionItem
                  question={t(faq.questionKey)}
                  answer={t(faq.answerKey)}
                />
              </MotionBlock>
            ))}
          </MotionBlock>

          {/* Botón (hijo 3) */}
          {showSeeAllButton && (
            <MotionBlock
              kind='none'
              variants={fadeIn()}
              className='mt-12 text-center'>
              <Button
                action={{ type: 'internal', path: toUrlPath(ROUTES.faq) }}
                variant='outline'
                size='sm'>
                {t('faq:faq.seeAllFaqsButton')}
              </Button>
            </MotionBlock>
          )}
        </MotionBlock>
      </div>
    </section>
  );
};
