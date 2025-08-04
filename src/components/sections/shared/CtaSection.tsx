import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useHubSpotForm } from '../../../hooks/useHubSpotForm';
import { Button, type ButtonProps } from '../../common/Button';
import type { I18NNamespace } from '../../../constants/i18n';

export type CtaButtonData = Omit<
  import('../../common/Button').ButtonProps,
  'children'
> & {
  textKey: string;
};

export type CtaSectionProps = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  backgroundImageUrl: string;
  button: Omit<ButtonProps, 'children'> & { textKey: string };
  hubspotFormTitle: string;
};

export const CtaSection = ({
  translationNS,
  titleKey,
  subtitleKey,
  backgroundImageUrl,
  button,
  hubspotFormTitle,
}: CtaSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const { textKey, ...buttonProps } = button;

  const formTargetId = `hubspot-form-5fe58871-a1b6-4462-8a3e-ebcb21936a72`;
  useHubSpotForm({
    portalId: '50063006',
    formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
    target: `#${formTargetId}`,
  });

  return (
    <section
      className='relative bg-cover bg-center py-24 px-4 text-brand-white'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className='absolute inset-0 bg-brand-primary-dark/80' />

      <div className='relative container mx-auto z-10'>
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Left Side */}
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              show: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
            className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className='heading-2 uppercase'>
              {t(titleKey)}
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className='text-subtitle mt-4'>
              {t(subtitleKey)}
            </motion.p>
            {buttonProps.action && (
              <motion.div
                className='mt-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}>
                <Button {...buttonProps}>{t(textKey)}</Button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side */}
          <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
            <h3 className='heading-5 text-brand-cta-orange mb-4 font-bold'>
              {t(hubspotFormTitle)}
            </h3>
            <div
              id={formTargetId}
              className='w-full p-6 sm:p-8 rounded-lg shadow-2xl bg-white'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
