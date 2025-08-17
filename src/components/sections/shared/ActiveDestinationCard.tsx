// src/components/sections/shared/ActiveDestinationCard.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ImageComponent } from '../../common/ImageComponent';
import { twMerge } from 'tailwind-merge';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../../content/urlPathSchema';
import { getExperienceById } from '../../../content/experiences';
import type { DestinationContent } from '../../../content/destinations/types';
import type { ExperienceSessionContent } from '../../../content/experiences/sessions/types';
import { useLocalizedRoutes } from '../../../hooks/useLocalizedRoutes';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

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
  const { to: localizedTo } = useLocalizedRoutes();
  const { card, fadeIn } = useMotionPresets();

  const destinationUrl = localizedTo(
    toUrlPath(`${ROUTES.destinations}/${destination.slug}`)
  );

  const experienceSlugMap = useMemo(() => {
    const map = new Map<string, string>();
    activeSessions.forEach((session) => {
      if (!map.has(session.experienceId)) {
        const experience = getExperienceById(session.experienceId);
        if (experience) {
          map.set(session.experienceId, experience.slug);
        }
      }
    });
    return map;
  }, [activeSessions]);

  const handleCardClick = () => navigate(destinationUrl);
  const handleCardKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(destinationUrl);
    }
  };

  return (
    <MotionBlock
      kind="inView"
      variants={card}
      className={twMerge(
        'group w-full overflow-hidden rounded-2xl shadow-lg bg-brand-primary-dark transition-transform duration-300 hover:-translate-y-2 cursor-pointer',
        'flex flex-col min-h-0 transform-gpu will-change-transform',
        className
      )}
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={destination.name}
    >
      <div className="relative w-full aspect-[16/10]">
        <ImageComponent
          imageData={destination.card.imageData}
          translationNS="destinations"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="flex flex-col gap-3 p-6 text-white min-h-0">
        <div className="min-w-0">
          <MotionBlock kind="none" variants={fadeIn()}>
            <h3 className="heading-6">{destination.name}</h3>
          </MotionBlock>
        </div>

        {activeSessions.length > 0 && (
          <MotionBlock kind="none" variants={fadeIn({ delay: 0.06 })}>
            <h4 className="text-base-xs font-bold uppercase text-green-300">
              {t('activeExperiencesTitle', {
                ns: 'destinations',
                defaultValue: 'Próximas experiencias',
              })}
            </h4>
          </MotionBlock>
        )}

        {activeSessions.length > 0 && (
          <MotionBlock
            kind="none"
            variants={fadeIn({ delay: 0.12 })}
            className="min-h-0 max-h-32 overflow-y-auto pr-1 flex flex-col gap-2"
          >
            {activeSessions.map((s) => {
              const experienceSlug = experienceSlugMap.get(s.experienceId);
              if (!experienceSlug) return null;

              const sessionUrl = localizedTo(
                toUrlPath(`${ROUTES.diveExperiences}/${experienceSlug}/${s.id}`)
              );
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
                  to={sessionUrl}
                  className="pointer-events-auto block group/link rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/70"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  title={`${name} · ${dateRange}`}
                >
                  <span
                    className="block text-sm font-semibold text-brand-white leading-snug break-words transition-colors group-hover/link:text-brand-cta-orange focus-visible:text-brand-cta-orange"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {name}
                  </span>
                  <span className="block text-xs text-brand-neutral/80 mt-0.5 capitalize transition-colors group-hover/link:text-brand-cta-orange/80 focus-visible:text-brand-cta-orange/80">
                    {dateRange}
                  </span>
                </Link>
              );
            })}
          </MotionBlock>
        )}
      </div>
    </MotionBlock>
  );
};
