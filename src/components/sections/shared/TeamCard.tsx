import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge'; // Importamos la utilidad para unir clases

// --- Tipado de Props ---
type TeamMember = {
  id: string;
  name: string;
  roleKey: string;
  bioKey: string;
  imageUrl: string;
};

interface TeamCardProps {
  memberData: TeamMember;
  className?: string; // <-- Añadimos la prop className
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }, // Corregido: y: 0 para que suba
};

export const TeamCard = ({ memberData, className }: TeamCardProps) => {
  const { t } = useTranslation('common');

  return (
    <motion.div
      variants={cardVariants}
      // Unimos las clases base con las que vengan del padre
      className={twMerge('flex flex-col items-center text-center', className)}>
      <div className='relative'>
        <img
          src={memberData.imageUrl}
          alt={memberData.name}
          className='h-48 w-48 rounded-full object-cover shadow-lg'
        />
      </div>
      <div className='mt-4'>
        <h3 className='text-xl font-bold text-brand-white'>
          {memberData.name}
        </h3>
        <p className='text-base font-semibold text-brand-cta-orange'>
          {t(`about.${memberData.roleKey}`)}
        </p>
        <p className='mt-2 text-sm text-brand-neutral/80 font-serif'>
          {t(`about.${memberData.bioKey}`)}
        </p>
      </div>
    </motion.div>
  );
};
