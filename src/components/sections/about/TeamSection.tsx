import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { aboutUsPageData } from '../../../data/aboutUsPageData';
import { TeamCard } from '../shared/TeamCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const TeamSection = () => {
  const { t } = useTranslation('common');
  const { team } = aboutUsPageData;

  return (
    <section className='bg-brand-primary-medium py-20 px-4'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='heading-2 text-white'>
            {t(`about.${team.titleKey}`)}
          </h2>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          // ===== CAMBIO PRINCIPAL AQUÍ: de 'grid' a 'flex' =====
          className='flex flex-wrap justify-center gap-12'>
          {team.members.map((member) => (
            <TeamCard
              key={member.id}
              memberData={member}
              // Asignamos el ancho a cada tarjeta para diferentes tamaños de pantalla
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
