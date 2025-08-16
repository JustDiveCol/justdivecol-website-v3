// src/components/layout/Footer.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { footerContent } from '../../content/footer/footer.content';
import { contactContent } from '../../content/pages/contact/contact.content';
import { BRAND_ASSETS_SAFE } from '../../constants';

import {
  WhatsappIcon,
  MailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  ChevronUpIcon,
  ScubaMaskIcon,
} from '../ui';

import type { FooterProps } from './types';
import {
  isStaticPath,
  type StaticRoutePath,
  type StaticRouteName,
} from '../../constants/routes.schema';
import { useLocalizedRoutes } from '../../hooks/useLocalizedRoutes';

type SocialIconType = 'instagram' | 'tiktok' | 'youtube';

const socialIcons: Record<SocialIconType, React.ReactNode> = {
  instagram: <InstagramIcon className='w-6 h-6' />,
  tiktok: <TikTokIcon className='w-6 h-6' />,
  youtube: <YouTubeIcon className='w-6 h-6' />,
};

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation(['common', 'navigation', 'contact']);
  const { to: localizedTo } = useLocalizedRoutes();
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const ticking = useRef(false);

  const { contactInfo } = contactContent;
  const currentYear = new Date().getFullYear();

  // Scroll handler
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setIsVisible(window.pageYOffset > 300);
          ticking.current = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    if (reduceMotion) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // WhatsApp
  const prefilledText = t('whatsapp_message', { ns: 'common' });
  const phone = contactInfo.phone.replace(/\s+/g, '');
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    prefilledText
  )}`;

  // Email
  const subject = encodeURIComponent(
    t(contactInfo.emailSubjectKey, { ns: 'contact' })
  );
  const body = encodeURIComponent(
    t(contactInfo.emailBodyKey, { ns: 'contact' })
  );
  const emailLink = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

  return (
    <footer
      className='bg-gradient-to-t from-brand-primary-dark to-brand-primary-medium text-brand-neutral/80 relative select-none'
      aria-labelledby='site-footer-heading'>
      <div className='section text-center'>
        <h2
          id='site-footer-heading'
          className='sr-only'>
          {t('common:footerAria', 'Pie de página')}
        </h2>

        {/* Logo y slogan */}
        <div className='flex flex-col items-center'>
          <Link
            to={localizedTo('/')}
            aria-label={t('common:home', 'Inicio')}>
            <img
              src={BRAND_ASSETS_SAFE.mainLogo.url}
              alt='Logo'
              className='h-10 w-auto'
              loading='lazy'
              width={160}
              height={40}
            />
          </Link>

          <p className='mt-4 max-w-xl text-base'>
            {t(footerContent.sloganKey, { ns: 'common' })}
          </p>
          <p className='mt-2 max-w-xl font-semibold text-brand-white text-base'>
            {t(footerContent.closingMessageKey, { ns: 'common' })}
          </p>

          {/* Social links */}
          <div
            className='flex justify-center items-center space-x-6 mt-8'
            aria-label={t('common:contact_us', 'Contáctanos')}>
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              title='WhatsApp'
              className='text-brand-neutral/70 hover:text-brand-cta-orange transition-transform duration-300 hover:scale-110 inline-block focus:outline-none focus:ring-2 focus:ring-brand-cta-orange/70 rounded'>
              <WhatsappIcon className='w-6 h-6' />
              <span className='sr-only'>WhatsApp</span>
            </a>

            <a
              href={emailLink}
              title='Email'
              className='text-brand-neutral/70 hover:text-brand-cta-orange transition-transform duration-300 hover:scale-110 inline-block focus:outline-none focus:ring-2 focus:ring-brand-cta-orange/70 rounded'>
              <MailIcon className='w-6 h-6' />
              <span className='sr-only'>Email</span>
            </a>

            {contactInfo.socials.map((social) => {
              const Icon = socialIcons[social.type as SocialIconType];
              if (!Icon) return null;
              return (
                <a
                  key={social.name}
                  href={social.path}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={social.name}
                  className='text-brand-neutral/70 hover:text-brand-cta-orange transition-transform duration-300 hover:scale-110 inline-block focus:outline-none focus:ring-2 focus:ring-brand-cta-orange/70 rounded'>
                  {Icon}
                  <span className='sr-only'>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div
          className='flex items-center justify-center my-10'
          aria-hidden='true'>
          <div className='flex-grow border-t border-brand-primary-light/20' />
          <div className='px-4'>
            <ScubaMaskIcon className='h-8 w-8 text-brand-cta-orange' />
          </div>
          <div className='flex-grow border-t border-brand-primary-light/20' />
        </div>

        {/* Footer links */}
        <nav
          className='text-center mb-8'
          aria-label={t('common:important_links', 'Enlaces importantes')}>
          <h3 className='heading-6 font-bold text-brand-white mb-4'>
            {t(footerContent.importantLinksTitle, { ns: 'common' })}
          </h3>
          <div className='flex flex-wrap justify-center gap-x-4 gap-y-2'>
            {footerContent.navLinks.map((link) => {
              const label = t(`nav.${link.nameKey as StaticRouteName}`, {
                ns: 'common',
              });
              const isInternal = isStaticPath(link.path);

              return isInternal ? (
                <Link
                  key={link.nameKey}
                  to={localizedTo(link.path as StaticRoutePath)}
                  className='text-brand-neutral/80 hover:text-brand-cta-orange transition-colors text-xs p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-cta-orange/70'>
                  {label}
                </Link>
              ) : (
                <a
                  key={link.nameKey}
                  href={link.path}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-brand-neutral/80 hover:text-brand-cta-orange transition-colors text-xs p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-cta-orange/70'>
                  {label}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Copyright */}
        <div className='text-xs'>
          <p>
            &copy; {currentYear}{' '}
            {t(footerContent.copyrightKey, { ns: 'common' })}
          </p>
          <p className='text-xs text-brand-neutral/60 mt-1'>
            {t(footerContent.creditsKey, { ns: 'common' })}
          </p>
        </div>
      </div>

      {/* Scroll-to-top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className='fixed right-8 bg-brand-cta-orange text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity cursor-pointer z-[60] focus:outline-none focus:ring-2 focus:ring-white/80'
            style={{ bottom: 'calc(2rem + var(--safe-bottom))' }}
            aria-label={t('common:back_to_top', 'Volver arriba')}
            type='button'>
            <ChevronUpIcon className='w-6 h-6' />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
