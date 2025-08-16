// src/components/sections/experiences/ExperiencePaymentPlan.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { ExperiencePaymentPlanProps } from './types';
import { WalletIcon } from '../../ui';

export const ExperiencePaymentPlan = ({
  paymentPlan,
  translationNS,
}: ExperiencePaymentPlanProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-dark py-16'>
      <div className='section max-w-4xl mx-auto'>
        <motion.div
          className='text-center mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          <h2 className='heading-2 text-white'>{t(paymentPlan.titleKey)}</h2>
        </motion.div>

        <motion.div
          className='relative pl-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={container}>
          <div className='absolute left-0 top-0 h-full w-px bg-white/20' />

          {paymentPlan.installments.map((installment, index) => {
            const date = installment.date
              ? new Date(`${installment.date}T00:00:00Z`)
              : null;
            const formattedDate = date
              ? new Intl.DateTimeFormat(i18n.language, {
                  dateStyle: 'long',
                  timeZone: 'UTC',
                }).format(date)
              : null;

            return (
              <motion.div
                key={index}
                className='relative mb-12'
                variants={fadeIn()}>
                <div className='absolute -left-12 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary-dark border-2 border-brand-cta-orange'>
                  <WalletIcon className='h-5 w-5 text-brand-cta-orange' />
                </div>

                <h3 className='heading-4 text-white mt-1'>
                  {installment.percentage ? `${installment.percentage}%` : ''}
                  {installment.amount ? `$${installment.amount}` : ''}
                </h3>
                <p className='mt-1 text-brand-neutral/90 font-serif'>
                  {t(installment.descriptionKey)}
                </p>
                {formattedDate && (
                  <p className='text-sm uppercase tracking-wider text-brand-neutral/80 mt-2'>
                    {t('common:paymentDueDate')}: {formattedDate}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
