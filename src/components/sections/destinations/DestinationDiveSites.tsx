// src/components/sections/destinations/DestinationDiveSites.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { DestinationDiveSitesProps } from './types';
import { DiveSitesSection } from '../divesites/DiveSitesSection';

export const DestinationDiveSites = ({
  destinationName,
  diveSitesSectionProps,
}: DestinationDiveSitesProps) => {
  const { t } = useTranslation(['destinations', 'common']);
  const { fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-dark py-16'>
      <div className='section'>
        <motion.div
          className='text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          <h2 className='heading-2 text-white mb-4'>
            {t('destinations.diveSitesSectionTitle')}
          </h2>
          <p className='text-subtitle text-brand-neutral/80'>
            {t('destinations.diveSitesSectionSubtitle', {
              destination: destinationName,
            })}
          </p>
        </motion.div>

        <motion.div
          className='mt-12 h-[80vh] min-h-[400px] w-full rounded-xl shadow-2xl border-2 border-white/10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          <DiveSitesSection {...diveSitesSectionProps} />
        </motion.div>
      </div>
    </section>
  );
};
