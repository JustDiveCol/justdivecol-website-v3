// src/components/sections/destinations/DestinationDiveSites.tsx
import { useTranslation } from 'react-i18next';
import type { DestinationDiveSitesProps } from './types';
import { DiveSitesSection } from '../divesites/DiveSitesSection';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

export const DestinationDiveSites = ({
  destinationName,
  diveSitesSectionProps,
}: DestinationDiveSitesProps) => {
  const { t } = useTranslation(['destinations', 'common']);
  const { fadeIn, container } = useMotionPresets();

  return (
    <section className='bg-brand-primary-medium'>
      <div className='section'>
        <MotionBlock
          kind='inView'
          variants={container}>
          <MotionBlock
            kind='none'
            variants={fadeIn()}
            className='text-center'>
            <h2 className='heading-3 text-white mb-4'>
              {t('destinations.diveSitesSectionTitle')}
            </h2>
            <p className='text-subtitle text-brand-neutral/80'>
              {t('destinations.diveSitesSectionSubtitle', {
                destination: destinationName,
              })}
            </p>
          </MotionBlock>

          <MotionBlock
            kind='none'
            variants={fadeIn()}
            className='mt-12 h-[85vh] min-h-[600px] w-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 transform-gpu will-change-transform'>
            <DiveSitesSection
              {...diveSitesSectionProps}
              translationNS='dive-sites'
            />
          </MotionBlock>
        </MotionBlock>
      </div>
    </section>
  );
};
