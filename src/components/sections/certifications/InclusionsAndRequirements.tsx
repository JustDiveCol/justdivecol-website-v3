// src/components/sections/certifications/InclusionsAndRequirements.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckIcon, RequirementsIcon } from '../../ui'; // Asumimos que tienes estos iconos
import type { Certification } from '../../../data/certifications/types';

// Tomamos los tipos específicos que este componente necesita
type Included = Certification['whatIsIncluded'];
type Requirements = Certification['requirements'];

interface InclusionsAndRequirementsProps {
  included: Included;
  requirements: Requirements;
}

const listItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const InclusionsAndRequirements = ({
  included,
  requirements,
}: InclusionsAndRequirementsProps) => {
  const { t } = useTranslation('certifications');

  return (
    <section className='bg-brand-primary-medium py-20 px-4'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto'>
          {/* Columna de "Qué Incluye" */}
          <div>
            <h2 className='heading-3 text-brand-white mb-8'>
              {t(included.titleKey)}
            </h2>
            <motion.ul
              className='space-y-4'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}>
              {included.items.map((itemKey) => (
                <motion.li
                  key={itemKey}
                  variants={listItemVariant}
                  className='flex items-start gap-3'>
                  <CheckIcon className='h-6 w-6 text-brand-cta-green flex-shrink-0 mt-1' />
                  <span className='text-brand-neutral/90 font-serif text-lg'>
                    {t(itemKey)}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Columna de "Requisitos" */}
          <div>
            <h2 className='heading-3 text-brand-white mb-8'>
              {t(requirements.titleKey)}
            </h2>
            <motion.ul
              className='space-y-4'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}>
              {requirements.items.map((itemKey) => (
                <motion.li
                  key={itemKey}
                  variants={listItemVariant}
                  className='flex items-start gap-3'>
                  {/* Podrías usar otro icono para los requisitos si quieres */}
                  <RequirementsIcon className='h-6 w-6 text-brand-cta-orange flex-shrink-0 mt-1' />
                  <span className='text-brand-neutral/90 font-serif text-lg'>
                    {t(itemKey)}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};
