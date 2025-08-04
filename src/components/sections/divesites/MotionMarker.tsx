import { motion } from 'framer-motion';

interface MotionMarkerProps {
  IconComponent: React.ElementType;
  isSelected: boolean;
}

export const MotionMarker = ({
  IconComponent,
  isSelected,
}: MotionMarkerProps) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.3, zIndex: 20 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 border-brand-primary-dark shadow-lg transition-colors duration-300 ${
      isSelected ? 'bg-brand-cta-orange' : 'bg-white'
    }`}>
    <IconComponent
      className={`w-4 h-4 transition-colors duration-300 ${
        isSelected ? 'text-white' : 'text-brand-primary-dark'
      }`}
    />
  </motion.div>
);
