import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useHubSpotForm } from '../../../hooks/useHubSpotForm';

import {
  WhatsappIcon,
  MailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from '../../ui/Icons';

import type { I18NNamespace } from '../../../constants/i18n';
import type { SocialsData } from '../../../types/data';

const socialIconMap: { [key: string]: React.ReactNode } = {
  instagram: <InstagramIcon className='h-7 w-7' />,
  tiktok: <TikTokIcon className='h-7 w-7' />,
  youtube: <YouTubeIcon className='h-7 w-7' />,
};

export type ContactSectionProps = {
  titleKey: string;
  phone: string;
  email: string;
  emailSubjectKey: string;
  emailBodyKey: string;
  socials: SocialsData[];
  translationNS: I18NNamespace;
  hubspotFormTitleKey: string;
};

export const ContactSection = ({
  titleKey,
  phone,
  email,
  emailSubjectKey,
  emailBodyKey,
  socials,
  translationNS,
  hubspotFormTitleKey,
}: ContactSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const subject = encodeURIComponent(t(emailSubjectKey, { ns: 'contact' }));
  const body = encodeURIComponent(t(emailBodyKey, { ns: 'contact' }));
  const emailLink = `mailto:${email}?subject=${subject}&body=${body}`;

  const formTargetId = 'hubspot-form-5fe58871-a1b6-4462-8a3e-ebcb21936a72';
  useHubSpotForm({
    portalId: '50063006',
    formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
    target: `#${formTargetId}`,
  });

  const whatsappUrl = `https://wa.me/${phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(t('common:generalWhatsappMessage'))}`;

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
            <h2 className='heading-3 mb-6 text-brand-white'>{t(titleKey)}</h2>
            <div className='space-y-6'>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 group'>
                <WhatsappIcon className='h-8 w-8 text-brand-cta-orange' />
                <span className='font-serif text-lg text-brand-neutral group-hover:text-brand-cta-orange transition-colors'>
                  {phone}
                </span>
              </a>
              <a
                href={emailLink}
                className='flex items-center gap-4 group'>
                <MailIcon className='h-8 w-8 text-brand-cta-orange' />
                <span className='font-serif text-lg text-brand-neutral group-hover:text-brand-cta-orange transition-colors'>
                  {email}
                </span>
              </a>
            </div>
            <div className='mt-8 pt-6 border-t border-white/10 flex items-center gap-6'>
              {socials.map((social) => (
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
              {t(hubspotFormTitleKey)}
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
