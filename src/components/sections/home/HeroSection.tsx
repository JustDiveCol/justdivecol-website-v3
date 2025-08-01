import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { homePageData } from '../../../data/homePageData';
import { BRAND_ASSETS } from '../../../constants/assets'; // Importamos los logos
import { Button } from '../../common/Button';
import { ChevronDownIcon } from '../../ui/Icons';

export const HeroSection = () => {
  const { t } = useTranslation('common');
  const { hero } = homePageData;

  const buttonAction = {
    type: 'internal' as const,
    path: hero.button.path,
  };

  return (
    // 1. La imagen de fondo se aplica directamente a la sección principal
    <section
      className='relative h-screen bg-cover bg-center text-white'
      style={{ backgroundImage: `url(${hero.imageData.backgroundImage})` }}>
      {/* 2. El overlay oscuro se renderiza encima */}
      <div className='absolute inset-0 bg-black/60 z-10' />

      {/* 3. El contenido de texto se renderiza encima de todo */}
      <div className='relative z-20 flex h-full flex-col items-center justify-center text-center p-4'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='heading-1'>
          {t(`hero.${hero.titleKey}`)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          className='text-subtitle'>
          {t(`hero.${hero.subtitleKey}`)}
        </motion.p>

        {hero.button.path && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
            className='mt-8'>
            <Button
              action={buttonAction}
              variant='primary'
              size='lg'>
              {t(`hero.${hero.button.textKey}`)}
            </Button>
          </motion.div>
        )}
      </div>

      {/* 4. Los logos y créditos se añaden como elementos separados, también encima de todo */}
      <div className='pointer-events-none absolute inset-0 z-20'>
        {hero.imageData.photoCredit && (
          <div className='absolute bottom-2 left-2 select-none text-xs text-white/70'>
            {t('photoCreditPrefix', { ns: 'common' })}{' '}
            {hero.imageData.photoCredit}
          </div>
        )}
        <div className='absolute bottom-6 right-4 select-none w-24 h-auto md:w-24 opacity-70'>
          <img
            src={BRAND_ASSETS.mainLogo.url}
            alt={t(BRAND_ASSETS.mainLogo.altKey)}
            className='h-auto w-full'
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 1,
        }}
        className='absolute bottom-8 z-40 left-1/2 -translate-x-1/2'>
        <ChevronDownIcon className='w-12 h-12 text-brand-cta-orange animate-bounce select-none' />
      </motion.div>
    </section>
  );
};
