import { useTranslation } from 'react-i18next';
import { homePageData } from '../../../data/homePageData';

interface AlliesSectionProps {
  translationNS?: string;
}

export const AlliesSection = ({ translationNS }: AlliesSectionProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { allies } = homePageData;

  const logoCount = allies.logos.length;
  const marqueeThreshold = 6;
  const animationDuration = `${logoCount * 7}s`;

  // Creamos un componente interno para no repetir el código del logo
  const AllyLogo = ({ ally }: { ally: (typeof allies.logos)[0] }) => (
    <a
      href={ally.link || '#'}
      target='_blank'
      rel='noopener noreferrer'
      // El 'group' es clave para los efectos hover
      className='group relative flex-shrink-0'
      aria-label={`Visitar a ${ally.name}`}>
      {/* Estado Hover: La imagen real a color. Inicia invisible, aparece en hover. */}
      <img
        src={ally.logoUrl}
        alt={ally.name}
        className='h-16 max-w-xs object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        loading='lazy'
      />

      {/* Estado por Defecto: La silueta de color (la máscara). Inicia visible, desaparece en hover. */}
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
        <h2 className='heading-3 mb-16 text-brand-white'>
          {t(allies.titleKey)}
        </h2>

        {logoCount < marqueeThreshold ? (
          // --- MODO ESTÁTICO (Pocos Logos) ---
          <div className='flex flex-wrap justify-center items-center gap-x-16 gap-y-8'>
            {allies.logos.map((ally) => (
              <AllyLogo
                key={ally.id}
                ally={ally}
              />
            ))}
          </div>
        ) : (
          // --- MODO CARRUSEL (Muchos Logos) ---
          <div
            className='relative w-full overflow-hidden'
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}>
            <div
              className='flex w-max animate-infinite-scroll'
              style={{ animationDuration }}>
              {[...allies.logos, ...allies.logos].map((ally, index) => (
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
