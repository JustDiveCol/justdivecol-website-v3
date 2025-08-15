// src/pages/destinations/DestinationPage.tsx
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Helpers de contenido
import { getDestinationBySlug } from '../../content/destinations';
import { listSessions } from '../../content/experiences';
import {
  buildDestinationOptions,
  gatherAllDiveSites,
} from '../../content/destinations/dive-sites.helpers';

// Componentes comunes y compartidos
import { SEO } from '../../components/common/SEO';
import { PageHeader } from '../../components/sections/shared/PageHeader';
import { CtaSection } from '../../components/sections/shared/CtaSection';
import { PhotoGallery } from '../../components/sections/shared/PhotoGallery';
import { homeContent } from '../../content/pages/home/home.content';

// Componentes específicos de la página de Destinos
import { DestinationIntro } from '../../components/sections/destinations/DestinationIntro';
import { KeyHighlights } from '../../components/sections/destinations/KeyHighlights';
import { RelatedExperiences } from '../../components/sections/destinations/RelatedExperiences';
import { DestinationDiveSites } from '../../components/sections/destinations/DestinationDiveSites';
import { StickyCtaBar } from '../../components/common/StickyCtaBar';

const DestinationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const content = useMemo(
    () => (slug ? getDestinationBySlug(slug) : null),
    [slug]
  );

  const relatedSessions = useMemo(() => {
    if (!content) return [];

    const allSessions = listSessions();
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const futureSessions = allSessions.filter((session) => {
      const sessionDate = new Date(session.startDate + 'T00:00:00Z');
      const isFuture = sessionDate >= today;

      return isFuture && session.experienceId.includes(content.id);
    });

    futureSessions.sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );

    return futureSessions;
  }, [content]);

  const allDestinationsForFilters = useMemo(
    () => buildDestinationOptions(),
    []
  );
  const allDiveSites = useMemo(() => gatherAllDiveSites(), []);

  if (!slug || !content) {
    return <div>Destino no encontrado.</div>;
  }

  const diveSitesSectionProps = {
    translationNS: 'diveSites' as const,
    sites: allDiveSites,
    destinations: allDestinationsForFilters,
    initialFilters: {
      destinationId: content.id,
    },
    initialCenter: content.coords,
    initialZoom: content.minZoom,
    minZoom: content.minZoom,
    maxZoom: content.maxZoom,
  };

  return (
    <>
      <SEO {...content.seo} />
      <PageHeader {...content.header} />

      <main>
        <DestinationIntro
          description={content.description}
          translationNS={content.seo.translationNS}
        />

        <KeyHighlights
          details={content.details}
          uniqueFinds={content.uniqueFinds}
          translationNS={content.seo.translationNS}
        />

        <RelatedExperiences
          titleKey='destinations.upcomingTripsTitle'
          sessions={relatedSessions}
          translationNS={content.seo.translationNS}
        />

        <DestinationDiveSites
          destinationName={content.name}
          diveSitesSectionProps={diveSitesSectionProps}
        />

        <PhotoGallery
          {...content.gallery}
          translationNS={content.seo.translationNS}
        />

        <CtaSection {...homeContent.cta} />

        <div className='h-24 md:h-28' />
      </main>

      <StickyCtaBar buttonData={content.ctaButton} />
    </>
  );
};

export default DestinationPage;
