// src/components/sections/certifications/CourseCurriculum.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { CourseCurriculumProps } from './types';
import { ComputerIcon, ScubaTanksIcon, DiverIcon } from '../../ui';

const curriculumIconMap: Record<string, React.ReactNode> = {
  theory: <ComputerIcon className='h-10 w-10 text-brand-cta-orange' />,
  'confined-water': (
    <ScubaTanksIcon className='h-10 w-10 text-brand-cta-orange' />
  ),
  'open-water': <DiverIcon className='h-10 w-10 text-brand-cta-orange' />,
};

export const CourseCurriculum = ({
  curriculum,
  translationNS,
}: CourseCurriculumProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  return (
    <section className='bg-brand-primary-medium py-16'>
      <div className='section text-center'>
        <motion.h2
          className='heading-2 text-white mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}>
          {t(curriculum.titleKey)}
        </motion.h2>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}>
          {curriculum.modules.map((module) => (
            <motion.div
              key={module.id}
              variants={fadeIn()}
              className='flex flex-col items-center p-6 bg-brand-primary-dark/50 rounded-lg border border-white/10'>
              {curriculumIconMap[module.id] || (
                <DiverIcon className='h-10 w-10 text-brand-cta-orange' />
              )}
              <h3 className='heading-5 text-white mt-4'>{t(module.nameKey)}</h3>
              <p className='mt-2 font-serif text-brand-neutral/80'>
                {t(module.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
