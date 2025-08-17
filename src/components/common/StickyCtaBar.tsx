// src/components/common/StickyCtaBar.tsx
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import type { StickyCtaBarProps } from './types';
import { useMotionPresets } from '../../hooks/animations';
import { MotionBlock } from '../motion/MotionBlock';

export const StickyCtaBar = ({
  buttonData,
  translationNS,
}: StickyCtaBarProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { slideIn } = useMotionPresets();

  if (!buttonData) return null;

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
    <MotionBlock
      kind='eager'
      variants={slideIn('down', { distance: 32 })}
      className='fixed bottom-0 left-0 right-0 z-40 transform-gpu will-change-transform'
      role='region'
      aria-label={t('common:stickyCta', { defaultValue: 'Acción rápida' })}>
      <div
        className='w-full bg-brand-primary-light/20 backdrop-blur-lg p-4 pb-[calc(1rem+var(--safe-bottom))]'
        style={{ boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.2)' }}>
        <div className='container max-w-lg mx-auto flex justify-center'>
          {renderButton()}
        </div>
      </div>
    </MotionBlock>
  );
};
