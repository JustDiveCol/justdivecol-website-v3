// src/components/sections/certifications/CourseContentSection.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Certification } from '../../../data/certifications/types';

// Tomamos los tipos específicos que este componente necesita
type Description = Certification['description'];
type Curriculum = Certification['curriculum'];

interface CourseContentSectionProps {
  description: Description;
  curriculum: Curriculum;
}

const moduleVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const CourseContentSection = ({
  description,
  curriculum,
}: CourseContentSectionProps) => {
  const { t } = useTranslation('certifications');

  return (
    <section className='bg-brand-primary-dark py-16 px-4'>
      <div
        // Usamos el plugin 'prose' para dar estilo automático al contenido de texto
        className='prose prose-invert prose-lg mx-auto max-w-5xl text-brand-neutral/90 
                   prose-h2:heading-2 prose-h2:text-brand-white 
                   prose-h3:heading-5 prose-h3:text-brand-white
                   prose-p:font-serif'>
        {/* --- Sección de Descripción --- */}
        <h2>{t(description.titleKey)}</h2>
        <div className='whitespace-pre-line'>
          {description.paragraphs.map((pKey) => (
            <p key={pKey}>{t(pKey)}</p>
          ))}
        </div>

        {/* --- Sección de Currículo --- */}
        <div className='mt-16'>
          <h2>{t(curriculum.titleKey)}</h2>
          <div className='mt-8 not-prose flex flex-col gap-8'>
            {curriculum.modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                variants={moduleVariant}
                className='border-l-4 border-brand-cta-orange pl-6'>
                <h3 className='heading-5 text-brand-white'>
                  {t(module.nameKey)}
                </h3>
                <p className='mt-1 text-base text-brand-neutral/80 font-serif'>
                  {t(module.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
