/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/layout/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

import { NAV_LINKS } from '../../constants/navigation';
import { LanguageSwitcherComponent } from '../ui/LanguageSwitcher';
import logo from '../../assets/images/logo.png';
import { MenuIcon, CloseIcon, ChevronDownIcon } from '../ui/Icons';

const NAV_H_MOBILE = '4rem'; // h-16
const NAV_H_DESKTOP = '5rem'; // h-20

const Navbar = () => {
  const { t } = useTranslation(['common', 'navigation']);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const moreRef = useRef<HTMLDivElement>(null);

  // Qué links esconder en tablet (>=md y <lg)
  const linksToHideOnTablet = NAV_LINKS.filter(
    (_, idx) => idx >= 2 && idx < NAV_LINKS.length - 1
  );
  const shouldHideOnTablet = (nameKey: string) =>
    linksToHideOnTablet.some((l) => l.nameKey === nameKey);

  // Scroll state (nav background)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMoreMenuOpen(false);
  }, [location]);

  // Cerrar con Escape + click afuera para el "More"
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsMoreMenuOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
    };
  }, []);

  // Scroll lock cuando el menú móvil está abierto
  useEffect(() => {
    if (!isMenuOpen) return;
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const NavLinkItem = ({
    to,
    nameKey,
    className = '',
  }: {
    to: string;
    nameKey: string;
    className?: string;
  }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative flex-shrink-0 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand-cta-orange/80 ${
          isActive ? 'text-brand-cta-orange' : ''
        } ${className}`
      }>
      {t(`nav.${nameKey}`)}
      <span
        className='absolute -bottom-0.5 left-0 h-0.5 w-full origin-center scale-x-0 bg-brand-cta-orange transition-transform duration-300 group-hover:scale-x-100'
        aria-hidden='true'
      />
    </NavLink>
  );

  return (
    <motion.nav
      initial={reduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
      style={{ ['--nav-h' as any]: NAV_H_MOBILE }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 md:[--nav-h:${NAV_H_DESKTOP}] ${
        isScrolled
          ? 'bg-brand-primary-dark/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}>
      {/* Skip link para accesibilidad */}
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-black/80 focus:px-3 focus:py-2 focus:text-white'>
        {t('common:skip_to_content', 'Saltar al contenido')}
      </a>

      <div
        className='container mx-auto flex items-center justify-between px-4'
        style={{ height: 'var(--nav-h)' }}>
        {/* Logo */}
        <NavLink
          to='/'
          className='flex-shrink-0 transition-transform duration-300 hover:scale-105'
          aria-label={t('common:home', 'Inicio')}>
          <img
            src={logo}
            alt='Logo'
            className='h-12 w-auto'
            loading='lazy'
          />
        </NavLink>

        {/* Desktop */}
        <div className='hidden items-center gap-x-6 md:flex'>
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.nameKey}
              to={link.path}
              nameKey={link.nameKey}
              className={
                shouldHideOnTablet(link.nameKey) ? 'hidden lg:flex' : 'flex'
              }
            />
          ))}

          {/* More (solo aparece cuando hay links escondidos en tablet) */}
          {linksToHideOnTablet.length > 0 && (
            <div
              ref={moreRef}
              className='relative lg:hidden'>
              <button
                onClick={() => setIsMoreMenuOpen((o) => !o)}
                className='flex cursor-pointer items-center text-sm font-semibold uppercase text-white transition-colors hover:text-brand-cta-orange/80'
                aria-haspopup='menu'
                aria-expanded={isMoreMenuOpen}
                aria-controls='more-menu'
                type='button'>
                {t('more_label')}
                <ChevronDownIcon
                  className={`ml-1 h-5 w-5 transition-transform ${
                    isMoreMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMoreMenuOpen && (
                  <motion.div
                    id='more-menu'
                    role='menu'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className='absolute right-0 top-full mt-2 w-48 rounded-md bg-brand-primary-dark/95 shadow-lg ring-1 ring-white/10 backdrop-blur-sm'>
                    <div className='py-1'>
                      {linksToHideOnTablet.map((link) => (
                        <NavLink
                          key={link.nameKey}
                          to={link.path}
                          role='menuitem'
                          className={({ isActive }) =>
                            `block w-full px-4 py-2 text-left text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-primary-light ${
                              isActive ? 'text-brand-cta-orange' : ''
                            }`
                          }>
                          {t(`nav.${link.nameKey}`)}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <LanguageSwitcherComponent />
        </div>

        {/* Mobile toggler + language */}
        <div className='flex items-center md:hidden'>
          <LanguageSwitcherComponent />
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={t('common:toggle_menu', 'Abrir o cerrar menú')}
            aria-controls='mobile-menu'
            aria-expanded={isMenuOpen}
            className='ml-4 text-white'
            type='button'>
            {isMenuOpen ? (
              <CloseIcon className='h-7 w-7' />
            ) : (
              <MenuIcon className='h-7 w-7' />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id='mobile-menu'
            role='dialog'
            aria-modal='true'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='overflow-hidden border-t border-white/10 bg-brand-primary-dark/95 backdrop-blur-lg md:hidden'>
            <div className='flex flex-col items-center space-y-2 px-4 pb-4 pt-2'>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.nameKey}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full rounded-md py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-primary-medium ${
                      isActive ? 'text-brand-cta-orange' : ''
                    }`
                  }>
                  {t(`nav.${link.nameKey}`)}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
