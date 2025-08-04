import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

// Data Imports (rutas corregidas)
import { footerData } from '../../data/footerData';
import { contactData } from '../../data/contactData';

// Asset Imports (rutas corregidas)
import logo from '../../assets/images/logo.png';
import {
  WhatsappIcon,
  MailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  ChevronUpIcon,
  ScubaMaskIcon,
} from '../ui/Icons'; // Asumimos que todos los iconos están en Icons.tsx

const Footer = () => {
  // Usamos solo los namespaces que necesitamos para el footer
  const { t } = useTranslation(['common', 'contact']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Tipamos el objeto de iconos para mayor seguridad
  const socialIcons: { [key: string]: React.ReactNode } = {
    instagram: <InstagramIcon className='w-6 h-6' />,
    tiktok: <TikTokIcon className='w-6 h-6' />,
    youtube: <YouTubeIcon className='w-6 h-6' />,
  };

  // Construcción de URLs
  const prefilledText = t('whatsapp_message', { ns: 'common' });
  const whatsappUrl = `https://wa.me/${contactData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(prefilledText)}`;

  const subject = encodeURIComponent(
    t(contactData.contactInfo.emailSubjectKey, { ns: 'contact' })
  );
  const body = encodeURIComponent(
    t(contactData.contactInfo.emailBodyKey, { ns: 'contact' })
  );
  const emailLink = `mailto:${contactData.contactInfo.email}?subject=${subject}&body=${body}`;

  return (
    <footer className='bg-gradient-to-t from-brand-primary-dark to-brand-primary-medium text-brand-neutral/80 relative select-none'>
      <div className='container mx-auto px-8 py-16 text-center'>
        <div className='flex flex-col items-center'>
          <Link to='/'>
            <img
              src={logo}
              alt='Logo'
              className='h-10 w-auto'
              loading='lazy'
            />
          </Link>
          <p className='mt-4 max-w-xl text-base'>
            {t(footerData.sloganKey, { ns: 'common' })}
          </p>
          <p className='mt-2 max-w-xl font-semibold text-brand-white text-base'>
            {t(footerData.closingMessageKey, { ns: 'common' })}
          </p>

          <div className='flex justify-center items-center space-x-6 mt-8'>
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              title='WhatsApp'
              className='text-brand-neutral/70 hover:text-brand-cta-orange transition-all duration-300 hover:scale-110 inline-block'>
              <WhatsappIcon className='w-6 h-6' />
            </a>
            <a
              href={emailLink}
              title='Email'
              className='text-brand-neutral/70 hover:text-brand-cta-orange transition-all duration-300 hover:scale-110 inline-block'>
              <MailIcon className='w-6 h-6' />
            </a>
            {contactData.contactInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                title={social.name}
                className='text-brand-neutral/70 hover:text-brand-cta-orange transition-all duration-300 hover:scale-110 inline-block'>
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className='flex items-center justify-center my-10'>
          <div className='flex-grow border-t border-brand-primary-light/20' />
          <div className='px-4'>
            <ScubaMaskIcon className='h-8 w-8 text-brand-cta-orange' />
          </div>
          <div className='flex-grow border-t border-brand-primary-light/20' />
        </div>

        {/* Navigation links */}
        <div className='text-center mb-8'>
          <h3 className='heading-6 font-bold text-brand-white mb-4'>
            {t(footerData.importantLinksTitle, { ns: 'common' })}
          </h3>
          <div className='flex flex-wrap justify-center gap-x-4 gap-y-2'>
            {footerData.navLinks.map((link) => (
              <Link
                key={link.nameKey}
                to={link.path}
                className='text-brand-neutral/80 hover:text-brand-cta-orange transition-colors text-xs p-2'>
                {t(`nav.${link.nameKey}`, { ns: 'common' })}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className='text-xs'>
          <p>
            &copy; {new Date().getFullYear()}{' '}
            {t(footerData.copyrightKey, { ns: 'common' })}
          </p>
          <p className='text-xs text-brand-neutral/60 mt-1'>
            {t(footerData.creditsKey, { ns: 'common' })}
          </p>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 bg-brand-cta-orange text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity cursor-pointer z-40'
            aria-label='Scroll to top'>
            <ChevronUpIcon className='w-6 h-6' />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
