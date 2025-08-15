// src/components/sections/certifications/CertificationFaq.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { CertificationFaqProps } from './types';
import { AccordionItem } from '../../common/AccordionItem';

export const CertificationFaq = ({
  faq,
  translationNS,
}: CertificationFaqProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-dark py-16'>
      <div className='section max-w-4xl mx-auto'>
        <motion.h2
          className='heading-2 text-white mb-8 text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          {t(faq.titleKey)}
        </motion.h2>

        <motion.div
          className='space-y-2'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}>
          {faq.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn()}>
              <AccordionItem
                question={t(item.questionKey)}
                answer={t(item.answerKey)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
