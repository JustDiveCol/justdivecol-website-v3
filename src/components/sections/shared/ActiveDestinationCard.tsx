import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ImageComponent } from '../../common/ImageComponent';
import { twMerge } from 'tailwind-merge';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../../content/urlPathSchema';

import type { DestinationContent } from '../../../content/destinations/types';
import type { ExperienceSessionContent } from '../../../content/experiences/sessions/types';

type ActiveDestinationCardProps = {
  destination: DestinationContent;
  activeSessions: ExperienceSessionContent[];
  className?: string;
};

function tKey(
  t: (k: string, opts?: { ns?: string }) => string,
  key: string | undefined,
  ns: string
) {
  if (!key) return '';
  return key.includes(':') ? t(key) : t(key, { ns });
}

const toUTCDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

export const ActiveDestinationCard = ({
  destination,
  activeSessions,
  className,
}: ActiveDestinationCardProps) => {
  const { t, i18n } = useTranslation(['destinations', 'experiences', 'common']);
  const navigate = useNavigate();
  const destinationUrl = toUrlPath(
    `${ROUTES.destinations}/${destination.slug}`
  );

  const handleCardClick = () => navigate(destinationUrl);
  const handleCardKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(destinationUrl);
    }
  };

  return (
    <div
      role='link'
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      className={twMerge(
        // CONTENEDOR CARD
        'group w-full overflow-hidden rounded-2xl shadow-lg bg-brand-primary-dark transition-transform duration-300 hover:-translate-y-2 cursor-pointer',
        // si vive en flex, permite que respete alto/anchos
        'flex flex-col min-h-0',
        className
      )}>
      {/* ---------- ZONA DE IMAGEN (sección superior fija) ---------- */}
      <div className='relative w-full aspect-[16/10]'>
        {/* La imagen llena el contenedor y mantiene el ratio */}
        <ImageComponent
          imageData={destination.card.imageData}
          translationNS='destinations'
        />
        {/* Si quieres un leve overlay para legibilidad del borde inferior: */}
        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent' />
      </div>

      {/* ---------- ZONA DE CONTENIDO (sección inferior) ---------- */}
      <div className='flex flex-col gap-3 p-6 text-white min-h-0'>
        {/* Título destino */}
        <div className='min-w-0'>
          <h3 className='heading-4'>
            {t(destination.name, { ns: 'destinations' })}
          </h3>
        </div>

        {/* Título de bloque de sesiones */}
        {activeSessions.length > 0 && (
          <h4 className='text-xs font-bold uppercase text-green-300'>
            {t('activeExperiencesTitle', {
              ns: 'destinations',
              defaultValue: 'Próximas experiencias',
            })}
          </h4>
        )}

        {/* Lista de sesiones: área con altura máxima y scroll interno */}
        {activeSessions.length > 0 && (
          <div className='min-h-0 max-h-32 overflow-y-auto pr-1 flex flex-col gap-2'>
            {activeSessions.map((s) => {
              const name = tKey(t, s.nameKey, 'experiences');

              const start = toUTCDate(s.startDate);
              const end = toUTCDate(s.endDate);
              const monthFmt = new Intl.DateTimeFormat(i18n.language, {
                month: 'short',
                timeZone: 'UTC',
              });
              const month = monthFmt.format(start);
              const dateRange = `${month} ${start.getUTCDate()} - ${end.getUTCDate()}, ${start.getUTCFullYear()}`;

              return (
                <Link
                  key={s.id}
                  to={toUrlPath(`${ROUTES.diveExperiences}/${s.id}`)}
                  className='pointer-events-auto block group/link rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/70'
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  title={`${name} · ${dateRange}`}>
                  <span
                    className='block text-sm font-semibold text-brand-white leading-snug break-words transition-colors group-hover/link:text-brand-cta-orange focus-visible:text-brand-cta-orange'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                    {name}
                  </span>

                  <span className='block text-xs text-brand-neutral/80 mt-0.5 capitalize transition-colors group-hover/link:text-brand-cta-orange/80 focus-visible:text-brand-cta-orange/80'>
                    {dateRange}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
