// src/components/sections/contact/ContactSection.tsx
import { useTranslation } from 'react-i18next';
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
import { MotionBlock } from '../../motion/MotionBlock';

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
          {/* Columna izquierda (slide-in desde la izquierda) */}
          <MotionBlock
            kind='inView'
            variants={slideIn('left', { distance: 50 })}
            className='flex h-full flex-col items-center justify-center'>
            <div className='w-full max-w-lg text-left'>
              <MotionBlock
                kind='none'
                variants={fadeIn()}>
                <h2
                  id='contact-heading'
                  className='heading-3 mb-6 text-brand-white'>
                  {t(titleKey)}
                </h2>
              </MotionBlock>

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
                  <span className='font-serif text-base-sm text-brand-neutral transition-colors group-hover:text-brand-cta-orange'>
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
                  <span className='font-serif text-base-sm text-brand-neutral transition-colors group-hover:text-brand-cta-orange'>
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
          </MotionBlock>

          {/* Columna derecha (slide-in desde la derecha) */}
          <MotionBlock
            kind='inView'
            variants={slideIn('right', { distance: 50 })}
            className='flex h-full w-full flex-col items-center justify-center'>
            <MotionBlock
              kind='none'
              variants={fadeIn()}>
              <h3 className='heading-6 mb-4 font-bold text-brand-cta-orange'>
                {t(hubspotFormTitleKey)}
              </h3>
            </MotionBlock>

            <MotionBlock
              kind='none'
              variants={fadeIn()}
              className='w-full max-w-lg rounded-lg bg-white p-6 text-brand-primary-dark shadow-2xl sm:p-8'
              style={{
                transitionDuration: `${
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (baseTransition as any)?.duration ?? 0.8
                }s`,
              }}>
              <div
                id={formTargetId}
                role='form'
                aria-label={t(hubspotFormTitleKey)}
              />
              <noscript>
                <p>
                  {t(
                    'common:enable_js_to_view_form',
                    'Activa JavaScript para ver el formulario.'
                  )}
                </p>
              </noscript>
            </MotionBlock>
          </MotionBlock>
        </div>
      </div>
    </section>
  );
};
