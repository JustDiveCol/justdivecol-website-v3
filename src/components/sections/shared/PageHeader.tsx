import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// --- CORRECCIÓN EN LAS IMPORTACIONES ---
import { ImageComponent } from '../../common/ImageComponent';
import type { ImageComponentData } from '../../../types/data'; // Se importa desde el archivo de tipos central
import type { I18NNamespace } from '../../../constants/i18n';

// --- CORRECCIÓN EN LAS PROPS ---
export type PageHeaderProps = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
};

export const PageHeader = ({
  titleKey,
  subtitleKey,
  translationNS,
  imageData,
}: PageHeaderProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  return (
    <section className='relative h-[50vh] min-h-[400px] text-white'>
      <div className='absolute inset-0'>
        <ImageComponent
          imageData={imageData}
          translationNS={translationNS}
        />
      </div>

      <div className='absolute inset-0 bg-black/40' />

      <div className='relative z-10 flex h-full flex-col items-center justify-center text-center p-4'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='heading-1'>
          {t(titleKey)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-subtitle max-w-3xl'>
          {t(subtitleKey)}
        </motion.p>
      </div>
    </section>
  );
};
