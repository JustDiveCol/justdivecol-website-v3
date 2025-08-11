// src/components/sections/contact/ContactSection.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import { useHubSpotForm } from '../../../hooks/useHubSpotForm';

import {
  WhatsappIcon,
  MailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from '../../ui';
import type { ContactSectionProps } from './types';

const socialIconMap: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon className='h-7 w-7' />,
  tiktok: <TikTokIcon className='h-7 w-7' />,
  youtube: <YouTubeIcon className='h-7 w-7' />,
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
  const { slideIn, fadeIn, baseTransition } = useMotionPresets();

  // HubSpot
  const formTargetId = 'hubspot-form-5fe58871-a1b6-4462-8a3e-ebcb21936a72';
  useHubSpotForm({
    portalId: '50063006',
    formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
    target: `#${formTargetId}`,
  });

  // Links
  const subject = encodeURIComponent(t(emailSubjectKey, { ns: 'contact' }));
  const body = encodeURIComponent(t(emailBodyKey, { ns: 'contact' }));
  const emailLink = `mailto:${email}?subject=${subject}&body=${body}`;

  const whatsappUrl = `https://wa.me/${phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(t('common:generalWhatsappMessage'))}`;

  return (
    <section
      className='bg-brand-primary-dark text-white'
      aria-labelledby='contact-heading'>
      <div className='section py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch'>
          {/* Columna izquierda */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={slideIn('left')}
            className='flex h-full flex-col items-center justify-center'>
            <div className='w-full max-w-lg text-left'>
              <motion.h2
                variants={fadeIn()}
                id='contact-heading'
                className='heading-3 mb-6 text-brand-white'>
                {t(titleKey)}
              </motion.h2>

              <div className='space-y-6'>
                <a
                  href={whatsappUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-4'
                  aria-label={t(
                    'common:contact_via_whatsapp',
                    'Contactar por WhatsApp'
                  )}>
                  <WhatsappIcon className='h-8 w-8 text-brand-cta-orange' />
                  <span className='font-serif text-lg text-brand-neutral transition-colors group-hover:text-brand-cta-orange'>
                    {phone}
                  </span>
                </a>

                <a
                  href={emailLink}
                  className='group flex items-center gap-4'
                  aria-label={t(
                    'common:contact_via_email',
                    'Contactar por correo'
                  )}>
                  <MailIcon className='h-8 w-8 text-brand-cta-orange' />
                  <span className='font-serif text-lg text-brand-neutral transition-colors group-hover:text-brand-cta-orange'>
                    {email}
                  </span>
                </a>
              </div>

              <div className='mt-8 flex items-center gap-6 border-t border-white/10 pt-6'>
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.path}
                    target='_blank'
                    rel='noopener noreferrer'
                    title={social.name}
                    aria-label={t('common:visit_social', {
                      defaultValue: 'Visitar {{name}}',
                      name: social.name,
                    })}
                    className='text-brand-neutral transition-transform hover:scale-110 hover:text-brand-cta-orange'>
                    {socialIconMap[social.type]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna derecha (HubSpot) */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={slideIn('right')}
            className='flex h-full w-full flex-col items-center justify-center'>
            <motion.h3
              variants={fadeIn()}
              className='heading-5 mb-4 font-bold text-brand-cta-orange'>
              {t(hubspotFormTitleKey)}
            </motion.h3>

            <motion.div
              variants={fadeIn()}
              transition={{ ...baseTransition, delay: 0.1 }}
              id={formTargetId}
              role='form'
              aria-label={t(hubspotFormTitleKey)}
              className='w-full max-w-lg rounded-lg bg-white p-6 text-brand-primary-dark shadow-2xl sm:p-8'>
              <noscript>
                <p>
                  {t(
                    'common:enable_js_to_view_form',
                    'Activa JavaScript para ver el formulario.'
                  )}
                </p>
              </noscript>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
