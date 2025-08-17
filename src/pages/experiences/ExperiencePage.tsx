// src/pages/experiences/ExperiencePage.tsx
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { resolveExperienceForSession } from '../../content/experiences';
import { getCertificationById } from '../../content/certifications';
import { getDestinationById } from '../../content/destinations';
import {
  buildDestinationOptions,
  gatherAllDiveSites,
} from '../../content/destinations/dive-sites.helpers';

import { SEO } from '../../components/common/SEO';
import { PageHeader } from '../../components/sections/shared/PageHeader';
import { CtaSection } from '../../components/sections/shared/CtaSection';
import { PhotoGallery } from '../../components/sections/shared/PhotoGallery';
import { StickyCtaBar } from '../../components/common/StickyCtaBar';
import { homeContent } from '../../content/pages/home/home.content';

import { SessionHero } from '../../components/sections/experiences/SessionHero';
import { ExperienceItinerary } from '../../components/sections/experiences/ExperienceItinerary';
import { ExperienceInclusions } from '../../components/sections/experiences/ExperienceInclusions';
import { ExperienceDiveSites } from '../../components/sections/experiences/ExperienceDiveSites';
import { ExperiencePaymentPlan } from '../../components/sections/experiences/ExperiencePaymentPlan';

const ExperiencePage: React.FC = () => {
  const { experienceSlug, sessionSlug } = useParams<{
    experienceSlug: string;
    sessionSlug: string;
  }>();

  const content = useMemo(() => {
    if (!experienceSlug || !sessionSlug) return null;
    return resolveExperienceForSession(experienceSlug, sessionSlug);
  }, [experienceSlug, sessionSlug]);

  const {
    certificationInclusions,
    destinationContent,
    allDestinationsForFilters,
    allDiveSites,
  } = useMemo(() => {
    if (!content) {
      return {
        certificationInclusions: undefined,
        destinationContent: null,
        allDestinationsForFilters: [],
        allDiveSites: [],
      };
    }

    const certInclusions =
      content.session.certificationIds &&
      content.session.certificationIds.length > 0
        ? getCertificationById(content.session.certificationIds[0])
            ?.whatIsIncluded
        : undefined;

    const destContent = getDestinationById(content.experience.destinationId);

    return {
      certificationInclusions: certInclusions,
      destinationContent: destContent,
      allDestinationsForFilters: buildDestinationOptions(),
      allDiveSites: gatherAllDiveSites(),
    };
  }, [content]);

  if (!content || !destinationContent) {
    return <div>Experiencia no encontrada.</div>;
  }

  const { experience, session } = content;

  const diveSitesSectionProps = {
    translationNS: 'dive-sites' as const,
    sites: allDiveSites,
    destinations: allDestinationsForFilters,
    initialFilters: {
      destinationId: experience.destinationId,
    },
    initialCenter: destinationContent.coords,
    initialZoom: destinationContent.minZoom,
    minZoom: destinationContent.minZoom,
    maxZoom: destinationContent.maxZoom,
  };

  return (
    <>
      <SEO {...experience.seo} />
      <PageHeader {...experience.header} />

      <main>
        <SessionHero
          content={content}
          translationNS={experience.seo.translationNS}
        />

        <ExperienceItinerary
          itinerary={experience.itinerary}
          translationNS={experience.seo.translationNS}
        />

        <ExperienceInclusions
          whatIsIncluded={experience.whatIsIncluded}
          whatIsNotIncluded={experience.whatIsNotIncluded}
          certificationInclusions={certificationInclusions}
          translationNS={experience.seo.translationNS}
        />

        <PhotoGallery
          {...experience.gallery}
          translationNS={experience.seo.translationNS}
        />

        {session.paymentPlan && (
          <ExperiencePaymentPlan
            paymentPlan={session.paymentPlan}
            translationNS={experience.seo.translationNS}
          />
        )}

        <ExperienceDiveSites
          destinationName={destinationContent.name}
          diveSitesSectionProps={diveSitesSectionProps}
        />

        <CtaSection {...homeContent.cta} />
      </main>

      <StickyCtaBar
        buttonData={experience.ctaButton}
        translationNS={'experiences'}
      />
    </>
  );
};

export default ExperiencePage;
