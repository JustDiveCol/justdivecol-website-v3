// src/components/common/StickyCtaBar.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from './Button';
import type { StickyCtaBarProps } from './types';

export const StickyCtaBar = ({ buttonData }: StickyCtaBarProps) => {
  const { t } = useTranslation(['certifications', 'common']);

  if (!buttonData) return null;

  // Esta función auxiliar utiliza un switch para que TypeScript pueda
  // inferir el tipo exacto de 'action' en cada caso, eliminando el error.
  const renderButton = () => {
    const commonProps = {
      variant: buttonData.variant || 'primary',
      size: buttonData.size || 'lg',
      children: t(buttonData.textKey),
    };

    switch (buttonData.action.type) {
      case 'internal':
        return (
          <Button
            {...commonProps}
            action={buttonData.action}
          />
        );
      case 'external':
        return (
          <Button
            {...commonProps}
            action={buttonData.action}
          />
        );
      case 'whatsapp':
        return (
          <Button
            {...commonProps}
            action={buttonData.action}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className='fixed bottom-0 left-0 right-0 z-40'>
      <div
        className='bg-brand-primary-dark/80 backdrop-blur-lg p-4 pb-[calc(1rem+var(--safe-bottom))]'
        style={{ boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.2)' }}>
        <div className='container max-w-lg mx-auto'>{renderButton()}</div>
      </div>
    </motion.div>
  );
};
