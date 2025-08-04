import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ImageComponent } from '../../common/ImageComponent';
import type { I18NNamespace } from '../../../constants/i18n';
import type { ImageComponentData } from '../../../types/data';

export type PrincipleDetail = {
  id: string;
  titleKey: string;
  textKey: string;
  imageData: ImageComponentData;
  imagePosition: 'left' | 'right';
};

interface AlternatingFeatureProps {
  featureData: PrincipleDetail;
  translationNS: I18NNamespace;
}

export const AlternatingFeature = ({
  featureData,
  translationNS,
}: AlternatingFeatureProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const { titleKey, textKey, imageData, imagePosition } = featureData;

  const isImageLeft = imagePosition === 'left';

  return (
    <section className='py-16 px-4'>
      <div className='container mx-auto'>
        <div
          className={`flex flex-col md:flex-row gap-12 items-center ${
            !isImageLeft ? 'md:flex-row-reverse' : '' // Invierte el orden si la imagen va a la derecha
          }`}>
          {/* Columna de Imagen */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-full md:w-1/2'>
            <div className='rounded-lg shadow-2xl overflow-hidden aspect-[4/3]'>
              <ImageComponent imageData={imageData} />
            </div>
          </motion.div>

          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-full md:w-1/2'>
            <h2 className='heading-3 mb-4 text-brand-white'>{t(titleKey)}</h2>
            <p className='text-base-md font-serif text-brand-neutral/90 whitespace-pre-line'>
              {t(textKey)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
