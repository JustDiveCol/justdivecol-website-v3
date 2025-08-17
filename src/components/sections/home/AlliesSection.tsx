// src/components/sections/home/AlliesSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import type { AlliesContent, AllyLogo as AllyLogoType } from './types';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const AlliesSection = ({
  titleKey,
  translationNS,
  logos,
}: AlliesContent) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { fadeIn, scaleIn } = useMotionPresets();

  const logoCount = logos.length;
  const marqueeThreshold = 6;
  const animationDuration = `${logoCount * 7}s`;

  const [paused, setPaused] = React.useState(false);

  const AllyLogo = ({ ally }: { ally: AllyLogoType }) => {
    const href = ally.link || '#';
    const isExternal = href.startsWith('http');

    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className='group relative inline-flex items-center justify-center h-10 sm:h-12 md:h-14 lg:h-16 px-2 focus:outline-none focus:ring-2 focus:ring-brand-cta-orange/60 rounded'
        aria-label={t('common:visitAlly', { allyName: ally.name })}>
        <img
          src={ally.logoUrl}
          alt={t('common:allyLogoAlt', { allyName: ally.name })}
          className='block h-full w-auto max-w-[7rem] sm:max-w-[8rem] md:max-w-[9rem] lg:max-w-[10rem] transition-all duration-300 opacity-80 grayscale contrast-125 brightness-110 group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100'
          loading='lazy'
          decoding='async'
        />
      </a>
    );
  };

  const shouldMarquee = logoCount >= marqueeThreshold;

  return (
    <section
      className='bg-brand-primary-dark py-16 px-4'
      aria-labelledby='allies-heading'>
      <div className='container mx-auto text-center mb-12'>
        {/* Header */}
        <MotionBlock
          kind='inView'
          variants={fadeIn()}
          className='mb-16'>
          <h2
            id='allies-heading'
            className='heading-4 text-brand-white'>
            {t(titleKey)}
          </h2>
        </MotionBlock>

        {!shouldMarquee ? (
          // GRID independiente: cada logo entra on-scroll
          <ul
            className='flex flex-wrap justify-center items-center gap-x-10 md:gap-x-12 gap-y-6 drop-shadow-strong'
            role='list'>
            {logos.map((ally) => (
              <li key={ally.id}>
                <MotionBlock
                  kind='inView'
                  variants={scaleIn()} // sutil y limpio para logos
                  className='transform-gpu will-change-transform'>
                  <AllyLogo ally={ally} />
                </MotionBlock>
              </li>
            ))}
          </ul>
        ) : (
          // MARQUEE: no animamos cada logo (evita observers excesivos); fadeIn del track al montar
          <MotionBlock
            kind='inView'
            variants={fadeIn()}
            className='relative w-full overflow-hidden'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
            aria-label={t('common:allies_marquee')}>
            <div
              className='flex w-max animate-infinite-scroll motion-reduce:animate-none transform-gpu will-change-transform'
              style={{
                animationDuration,
                animationPlayState: paused ? 'paused' : undefined,
              }}>
              {[...logos, ...logos].map((ally, index) => (
                <div
                  key={`${ally.id}-${index}`}
                  className='mx-6 md:mx-8'>
                  {/* sin inView aquí: el track se mueve */}
                  <AllyLogo ally={ally} />
                </div>
              ))}
            </div>
          </MotionBlock>
        )}
      </div>
    </section>
  );
};
