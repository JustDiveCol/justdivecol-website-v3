// src/components/sections/shared/CertificationCard.tsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ImageComponent } from '../../common/ImageComponent';
import type { AvailableType } from '../../../constants';
import type { CertificationCardProjection } from '../../../content/certifications';
import { useMotionPresets } from '../../../hooks/animations';
import { useLocalizedRoutes } from '../../../hooks/useLocalizedRoutes';
import { useReducedMotion, motion } from 'framer-motion';
import { MotionBlock } from '../../motion/MotionBlock';

type CertificationCardProps = {
  certificationData: CertificationCardProjection;
  availabilityStatus: AvailableType;
  className?: string;
};

const AvailabilityStatus = ({ status }: { status: AvailableType }) => {
  const { t } = useTranslation(['certifications', 'common']);
  const reduce = useReducedMotion();

  if (status === 'available') {
    return (
      <div className="flex items-center gap-2">
        {reduce ? (
          <div className="h-2 w-2 rounded-full bg-green-400" />
        ) : (
          <motion.div
            className="h-2 w-2 rounded-full bg-green-400"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        )}
        <span className="text-sm text-green-300 font-semibold">
          {t('certifications:statusAvailable')}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
      <span className="text-sm text-yellow-300/80 font-semibold">
        {t('certifications:statusComingSoon')}
      </span>
    </div>
  );
};

export const CertificationCard = ({
  certificationData,
  availabilityStatus,
  className,
}: CertificationCardProps) => {
  const { t } = useTranslation(['certifications', 'common']);
  const { card, fadeIn } = useMotionPresets();
  const { to: localizedTo } = useLocalizedRoutes();

  const { agency, slug, name, cardDes, imageData } = certificationData;

  return (
    <MotionBlock
      kind="inView"
      variants={card}
      className={twMerge(
        'self-stretch flex flex-col min-h-0 transform-gpu will-change-transform',
        className
      )}
    >
      <Link
        to={localizedTo(`/certifications/${slug}`)}
        className="group flex flex-col flex-1 min-h-0 overflow-hidden rounded-lg bg-brand-primary-medium shadow-xl transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/70"
        aria-label={name}
      >
        <div className="overflow-hidden aspect-video relative">
          <ImageComponent
            imageData={imageData}
            translationNS="certifications"
          />
        </div>

        <div className="flex flex-col justify-between p-6 flex-1 min-h-0">
          <div>
            <MotionBlock kind="none" variants={fadeIn()}>
              <p className="font-bold text-sm text-brand-neutral/70">
                {agency}
              </p>
            </MotionBlock>

            <MotionBlock kind="none" variants={fadeIn({ delay: 0.05 })}>
              <h3 className="heading-5 text-brand-white mt-1 line-clamp-2">
                {name}
              </h3>
            </MotionBlock>

            {cardDes && (
              <MotionBlock kind="none" variants={fadeIn({ delay: 0.1 })}>
                <p className="font-serif text-sm text-brand-neutral/80 mt-1 line-clamp-4">
                  {t(cardDes)}
                </p>
              </MotionBlock>
            )}
          </div>

          <MotionBlock
            kind="none"
            variants={fadeIn({ delay: 0.15 })}
            className="mt-4 pt-4 border-t border-white/10"
          >
            <AvailabilityStatus status={availabilityStatus} />
          </MotionBlock>
        </div>
      </Link>
    </MotionBlock>
  );
};
