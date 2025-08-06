import { useTranslation } from 'react-i18next';
import type { AlliesSectionProps } from './types';

export const AlliesSection = ({
  titleKey,
  translationNS,
  logos,
}: AlliesSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const logoCount = logos.length;
  const marqueeThreshold = 6;
  const animationDuration = `${logoCount * 7}s`;

  // Logo Component
  const AllyLogo = ({ ally }: { ally: (typeof logos)[0] }) => (
    <a
      href={ally.link || '#'}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative flex-shrink-0'
      aria-label={`Visitar a ${ally.name}`}>
      {/* Hover Status */}
      <img
        src={ally.logoUrl}
        alt={ally.name}
        className='h-16 max-w-xs object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        loading='lazy'
      />

      {/* Default Status */}
      <div
        className='absolute inset-0 h-16 w-full bg-brand-neutral opacity-100 transition-opacity duration-300 group-hover:opacity-0'
        style={{
          maskImage: `url(${ally.logoUrl})`,
          maskSize: 'contain',
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
          WebkitMaskImage: `url(${ally.logoUrl})`,
          WebkitMaskSize: 'contain',
          WebkitMaskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
    </a>
  );

  return (
    <section className='bg-brand-primary-dark py-20'>
      <div className='container mx-auto text-center'>
        <h2 className='heading-3 mb-16 text-brand-white'>{t(titleKey)}</h2>

        {logoCount < marqueeThreshold ? (
          // Static Mode
          <div className='flex flex-wrap justify-center items-center gap-x-16 gap-y-8'>
            {logos.map((ally) => (
              <AllyLogo
                key={ally.id}
                ally={ally}
              />
            ))}
          </div>
        ) : (
          // Carrusel Mode
          <div
            className='relative w-full overflow-hidden'
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}>
            <div
              className='flex w-max animate-infinite-scroll'
              style={{ animationDuration }}>
              {[...logos, ...logos].map((ally, index) => (
                <div
                  key={`${ally.id}-${index}`}
                  className='mx-8'>
                  <AllyLogo ally={ally} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
