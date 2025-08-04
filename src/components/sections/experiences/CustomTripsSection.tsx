import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { experiencesPageData } from '../../../data/experiencesPageData';
import { Button } from '../../common/Button';
import { CheckIcon } from '../../ui/Icons';
import { ImageComponent } from '../../common/ImageComponent';

export const CustomTripsSection = () => {
  const { t } = useTranslation(['experiences', 'common']);
  const { customTrips } = experiencesPageData;

  return (
    <section
      className='bg-brand-primary-dark py-20 px-4 text-white'
      id='customs-trips-section'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Columna de la Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}>
            <ImageComponent imageData={customTrips.imageData} />
          </motion.div>

          {/* Columna del Texto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}>
            <h2 className='heading-2 mb-6'>{t(customTrips.titleKey)}</h2>
            <p className='text-base-md font-serif text-brand-neutral/90 mb-8'>
              {t(customTrips.textKey)}
            </p>

            {/* Lista de Beneficios */}
            <ul className='space-y-4 mb-8'>
              {customTrips.benefits.map((benefit) => (
                <li
                  key={benefit.id}
                  className='flex items-center gap-3'>
                  <CheckIcon className='h-6 w-6 text-brand-cta-green flex-shrink-0' />
                  <span className='text-brand-neutral'>
                    {t(benefit.textKey)}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              action={{
                type: 'whatsapp',
                whatsAppMessageKey: 'customTripWhatsappMessage',
              }}
              variant='primary'
              size='lg'>
              {t(customTrips.buttonTextKey)}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
