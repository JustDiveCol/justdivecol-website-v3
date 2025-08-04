import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { BRAND_ASSETS } from '../../../constants/assets';
import { Button } from '../../common/Button';
import { ChevronDownIcon } from '../../ui/Icons';
import type {
  ActionType,
  ButtonSize,
  ButtonVariant,
  GalleryImage,
} from '../../../types/data';

export type HeroButtonData = {
  textKey: string;
  path: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  actionType?: ActionType;
};

export type HeroSectionProps = {
  titleKey: string;
  subtitleKey: string;
  translationNS: string;
  button: HeroButtonData;
  imageData: GalleryImage;
};

export const HeroSection = ({
  titleKey,
  subtitleKey,
  button,
  imageData,
  translationNS,
}: HeroSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const buttonAction = {
    type: button.actionType ?? 'internal',
    path: button.path,
  };

  return (
    <section
      className='relative flex items-center justify-center min-h-screen py-24 bg-cover bg-center text-white'
      style={{ backgroundImage: `url(${imageData.backgroundImage})` }}>
      {/* Overlay over image */}
      <div className='absolute inset-0 bg-black/60 z-10' />

      <div className='relative z-20 text-center px-4'>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='heading-1'>
          {t(titleKey)}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          className='text-subtitle'>
          {t(subtitleKey)}
        </motion.p>

        {/* Button */}
        {button.path && (
          <motion.div className='mt-8'>
            <Button
              action={buttonAction}
              variant={button.variant}
              size={button.size}>
              {t(button.textKey)}
            </Button>
          </motion.div>
        )}
      </div>

      <div className='pointer-events-none absolute inset-0 z-20'>
        {/* Main Logo */}
        <div className='absolute bottom-6 right-4 select-none w-24 h-auto md:w-28 opacity-70'>
          <img
            src={BRAND_ASSETS.mainLogo.url}
            alt={t(BRAND_ASSETS.mainLogo.altKey)}
            className='h-auto w-full'
          />
        </div>

        {/* Credits */}
        {imageData.photoCredit && (
          <div className='absolute bottom-2 left-2 select-none text-xs text-white/70'>
            {t('photoCreditPrefix', { ns: 'common' })} {imageData.photoCredit}
          </div>
        )}
      </div>

      {/* Chevron Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 1,
        }}
        className='absolute bottom-8 inset-x-0 z-40 flex justify-center'>
        <ChevronDownIcon className='w-12 h-12 text-brand-cta-orange animate-bounce select-none' />
      </motion.div>
    </section>
  );
};
