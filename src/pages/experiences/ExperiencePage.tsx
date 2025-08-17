// src/pages/experiences/ExperiencePage.tsx
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation(['experiences', 'destinations', 'common']);
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
        destinationContent: null as ReturnType<
          typeof getDestinationById
        > | null,
        allDestinationsForFilters: [] as ReturnType<
          typeof buildDestinationOptions
        >,
        allDiveSites: [] as ReturnType<typeof gatherAllDiveSites>,
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

  // Nombre a usar: el de la session
  const sessionDisplayName = useMemo(() => {
    const sess = content?.session;
    if (!sess) return '';
    // Asumimos que `session.name` ya es una key de i18n
    return t(sess.nameKey, { ns: 'experiences' });
  }, [content, t]);

  const stickyButtonData = useMemo(() => {
    const exp = content?.experience;
    if (!exp?.ctaButton) return undefined;

    const newAction = { ...exp.ctaButton.action };

    if (newAction.type === 'whatsapp' && newAction.whatsAppMessageKey) {
      const translatedMessage = t(newAction.whatsAppMessageKey, {
        itemName: sessionDisplayName, // 👈 Usamos el nombre de la sesión
        ns: 'experiences',
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (newAction as any).pretranslatedMessage = translatedMessage;
    }

    return { ...exp.ctaButton, action: newAction };
  }, [content, t, sessionDisplayName]);

  if (!experienceSlug || !sessionSlug) {
    return <div>Experiencia no encontrada.</div>;
  }
  if (!content || !destinationContent) {
    return <div>Experiencia no encontrada.</div>;
  }

  const { experience, session } = content;

  // Props para el mapa de sitios de buceo
  const diveSitesSectionProps = {
    translationNS: 'dive-sites' as const,
    sites: allDiveSites,
    destinations: allDestinationsForFilters,
    initialFilters: { destinationId: experience.destinationId },
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
          // ✅ pasar nombre ya traducido
          destinationName={t(destinationContent.name, { ns: 'destinations' })}
          diveSitesSectionProps={diveSitesSectionProps}
        />

        <CtaSection {...homeContent.cta} />
      </main>

      {/* ✅ Usa el stickyButtonData con mensaje pretraducido */}
      {stickyButtonData && (
        <StickyCtaBar
          buttonData={stickyButtonData}
          translationNS={'experiences'}
        />
      )}
    </>
  );
};

export default ExperiencePage;
