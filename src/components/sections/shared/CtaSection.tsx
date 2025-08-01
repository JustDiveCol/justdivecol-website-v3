import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useHubSpotForm } from '../../../hooks/useHubSpotForm';
import { Button } from '../../common/Button';

// --- Tipado de Props ---
interface CtaSectionProps {
  titleKey: string;
  subtitleKey: string;
  backgroundImageUrl: string;
  buttonAction: {
    type: 'internal' | 'external' | 'whatsapp';
    path?: string;
    whatsAppMessageKey?: string;
  };
  hubspotForm: {
    portalId: string;
    formId: string;
    titleKey: string;
  };
}

export const CtaSection = (props: CtaSectionProps) => {
  const { t } = useTranslation('common');
  const {
    titleKey,
    subtitleKey,
    backgroundImageUrl,
    buttonAction,
    hubspotForm,
  } = props;

  const formTargetId = `hubspot-form-${hubspotForm.formId}`;
  useHubSpotForm({
    portalId: hubspotForm.portalId,
    formId: hubspotForm.formId,
    target: `#${formTargetId}`,
  });

  return (
    <section
      className='relative bg-cover bg-center py-24 px-4 text-brand-white'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className='absolute inset-0 bg-brand-primary-dark/80' />

      <div className='relative container mx-auto z-10'>
        {/* El contenedor principal ya NO controla la alineación vertical con 'items-*' */}
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Mitad Izquierda: Texto y Botón */}
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              show: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
            // ===== CAMBIO 1: Esta columna ahora centra su PROPIO contenido verticalmente =====
            className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className='heading-2 uppercase'>
              {t(`cta.${titleKey}`)}
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className='text-subtitle mt-4'>
              {t(`cta.${subtitleKey}`)}
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className='mt-8'>
              <Button
                action={buttonAction}
                variant='primary'
                size='default'>
                {t(`cta.contactButton`)}
              </Button>
            </motion.div>
          </motion.div>

          {/* Mitad Derecha: Formulario HubSpot */}
          <div
            // ===== CAMBIO 2: Esta columna también centra su PROPIO contenido =====
            className='w-full md:w-1/2 flex flex-col justify-center items-center'>
            <h3 className='heading-5 text-brand-cta-orange mb-4 font-bold'>
              {t(`cta.${hubspotForm.titleKey}`)}
            </h3>
            <div
              id={formTargetId}
              // El formulario ahora ocupa el ancho completo de esta columna
              className='w-full p-6 sm:p-8 rounded-lg shadow-2xl bg-white'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
