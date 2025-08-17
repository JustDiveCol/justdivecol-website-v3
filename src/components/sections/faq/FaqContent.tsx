// src/components/sections/faq/FaqContent.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AccordionItem } from '../../common/AccordionItem';
import { useMotionPresets } from '../../../hooks/animations';
import { faqContent } from '../../../content/pages/faq/faq.content';

export const FaqContent = () => {
  const { t } = useTranslation(['faq', 'common']);
  const { container, fadeIn } = useMotionPresets();
  const { data } = faqContent;

  return (
    <section className="bg-brand-primary-dark">
      <div className="section py-16">
        {data.categories.map((category) => (
          <div key={category.id} className="mb-12">
            <motion.h2
              className="heading-3 mb-6 text-center text-brand-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn()}
            >
              {t(category.sectionTitleKey)}
            </motion.h2>

            <motion.div
              className="mx-auto max-w-3xl space-y-2"
              role="list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              {category.faqs.map((faq) => (
                <motion.div key={faq.id} variants={fadeIn()}>
                  <AccordionItem
                    question={t(faq.questionKey)}
                    answer={t(faq.answerKey)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
