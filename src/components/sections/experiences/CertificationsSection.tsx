import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CertificationCard } from '../shared/CertificationCard';
import {
  getCertificationAvailability,
  getCertifications,
} from '../../../data/dataService';
import type { I18NNamespace } from '../../../constants/i18n';

export interface CertificationsSectionProps {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const CertificationsSection = ({
  titleKey,
  subtitleKey,
  translationNS,
}: CertificationsSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const certifications = getCertifications();

  return (
    <section
      className='bg-brand-primary-medium py-20 px-4'
      id='certifications'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='heading-2 text-white'>{t(titleKey)}</h2>
          <p className='text-subtitle mt-4'>{t(subtitleKey)}</p>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className='flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto'>
          {certifications.map((cert) => {
            const status = getCertificationAvailability(cert.id);
            return (
              <CertificationCard
                key={cert.id}
                certificationData={cert}
                availabilityStatus={status}
                className='w-full sm:w-1/2 lg:w-[30%] h-full flex flex-col'
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
