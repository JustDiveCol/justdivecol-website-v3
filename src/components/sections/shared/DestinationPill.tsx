// src/components/sections/shared/DestinationPill.tsx
import { Link } from 'react-router-dom';
import type { DestinationContent } from '../../../content/destinations/types';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../../content/urlPathSchema';
import { useLocalizedRoutes } from '../../../hooks/useLocalizedRoutes';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

type DestinationPillProps = {
  destination: DestinationContent;
};

export const DestinationPill = ({ destination }: DestinationPillProps) => {
  const { to: localizedTo } = useLocalizedRoutes();
  const { scaleIn } = useMotionPresets();

  return (
    <MotionBlock
      kind="inView"
      variants={scaleIn()}
      className="inline-block transform-gpu will-change-transform"
    >
      <Link
        to={localizedTo(
          toUrlPath(`${ROUTES.destinations}/${destination.slug}`)
        )}
        className="rounded-full bg-white/25 px-4 py-2 text-sm font-semibold text-brand-neutral/80 transition-colors duration-300 hover:bg-brand-cta-orange hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/70"
        aria-label={destination.name}
      >
        {destination.name}
      </Link>
    </MotionBlock>
  );
};
