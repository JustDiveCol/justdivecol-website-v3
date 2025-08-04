import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useHubSpotForm } from '../../../hooks/useHubSpotForm';
import { contactPageData } from '../../../data/contactPageData';
import {
  WhatsappIcon,
  MailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from '../../ui/Icons'; // Asegúrate de tener todos los iconos

const socialIconMap: { [key: string]: React.ReactNode } = {
  instagram: <InstagramIcon className='h-7 w-7' />,
  tiktok: <TikTokIcon className='h-7 w-7' />,
  youtube: <YouTubeIcon className='h-7 w-7' />,
};

export const ContactSection = () => {
  const { t } = useTranslation('common');
  const { contactInfo, hubspotForm } = contactPageData;

  const formTargetId = `hubspot-form-${hubspotForm.formId}`;
  useHubSpotForm({ ...hubspotForm, target: `#${formTargetId}` });

  const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(t('generalWhatsappMessage'))}`;

  return (
    <section className='bg-brand-primary-dark py-20 px-4 text-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Columna Izquierda: Contacto Rápido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h2 className='heading-3 mb-6 text-brand-white'>
              {t(`contact.${contactInfo.titleKey}`)}
            </h2>
            <div className='space-y-6'>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 group'>
                <WhatsappIcon className='h-8 w-8 text-brand-cta-green' />
                <span className='font-serif text-lg text-brand-neutral group-hover:text-brand-cta-orange transition-colors'>
                  {contactInfo.phone}
                </span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className='flex items-center gap-4 group'>
                <MailIcon className='h-8 w-8 text-brand-cta-orange' />
                <span className='font-serif text-lg text-brand-neutral group-hover:text-brand-cta-orange transition-colors'>
                  {contactInfo.email}
                </span>
              </a>
            </div>
            <div className='mt-8 pt-6 border-t border-white/10 flex items-center gap-6'>
              {contactInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={social.name}
                  className='text-brand-neutral hover:text-brand-cta-orange transition-transform hover:scale-110'>
                  {socialIconMap[social.icon]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario HubSpot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-full flex flex-col justify-center items-center'>
            <h3 className='heading-5 text-brand-cta-orange mb-4 font-bold'>
              {t(`cta.${hubspotForm.titleKey}`)}
            </h3>
            <div
              id={formTargetId}
              className='w-full max-w-lg p-6 sm:p-8 rounded-lg shadow-2xl bg-white'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
