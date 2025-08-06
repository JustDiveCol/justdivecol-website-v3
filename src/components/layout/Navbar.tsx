// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { NAV_LINKS } from '../../constants/navigation';
import { LanguageSwitcherComponent } from '../ui/LanguageSwitcher';
import logo from '../../assets/images/logo.png';
import { MenuIcon, CloseIcon, ChevronDownIcon } from '../ui/Icons';

const Navbar = () => {
  const { t } = useTranslation(['common', 'navigation']);
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const linksToHideOnTablet = NAV_LINKS.slice(2, -1);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMoreMenuOpen(false);
  }, [location]);

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
      className={`group relative flex-shrink-0 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand-cta-orange/80 [&.active]:text-brand-cta-orange ${className}`}>
      {t(`nav.${nameKey}`)}
      <span className='absolute -bottom-0.5 left-0 h-0.5 w-full origin-center scale-x-0 bg-brand-cta-orange transition-transform duration-300 group-hover:scale-x-100 group-[.active]:scale-x-100' />
    </NavLink>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? 'bg-brand-primary-dark/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <NavLink
          to='/'
          className='flex-shrink-0 transition-transform duration-300 hover:scale-105'>
          <img
            src={logo}
            alt='Logo'
            className='h-12 w-auto'
            loading='lazy'
          />
        </NavLink>

        <div className='hidden items-center gap-x-6 md:flex'>
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.nameKey}
              to={link.path}
              nameKey={link.nameKey}
              className={
                linksToHideOnTablet.includes(link) ? 'hidden lg:flex' : 'flex'
              }
            />
          ))}
          {linksToHideOnTablet.length > 0 && (
            <div className='relative lg:hidden'>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className='flex cursor-pointer items-center text-sm font-semibold uppercase text-white transition-colors hover:text-brand-cta-orange/80'>
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className='absolute right-0 top-full mt-2 w-48 rounded-md bg-brand-primary-dark/95 shadow-lg ring-1 ring-white/10 backdrop-blur-sm'>
                    <div className='py-1'>
                      {linksToHideOnTablet.map((link) => (
                        <NavLink
                          key={link.nameKey}
                          to={link.path}
                          className='block w-full px-4 py-2 text-left text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-primary-light [&.active]:text-brand-cta-orange'>
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

        <div className='flex items-center md:hidden'>
          <LanguageSwitcherComponent />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
            className='ml-4 text-white'>
            {isMenuOpen ? (
              <CloseIcon className='h-7 w-7' />
            ) : (
              <MenuIcon className='h-7 w-7' />
            )}
          </button>
        </div>
      </div>

      {/* Panel del Menú Móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
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
                  className='w-full rounded-md py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-primary-medium [&.active]:text-brand-cta-orange'>
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
