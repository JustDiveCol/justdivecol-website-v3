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
import type { ExperienceItineraryContent } from '../../content/experiences/types';
import { useLocalizedRoutes } from '../../hooks/useLocalizedRoutes';

const ExperiencePage: React.FC = () => {
  const { t } = useTranslation(['experiences', 'destinations', 'common']);

  const { to: localizedTo } = useLocalizedRoutes();

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
        certificationInclusions: undefined as
          | Array<{
              nameKey: string;
              whatIsIncluded: { titleKey: string; items: string[] };
              url: string;
            }>
          | undefined,
        destinationContent: null as ReturnType<
          typeof getDestinationById
        > | null,
        allDestinationsForFilters: [] as ReturnType<
          typeof buildDestinationOptions
        >,
        allDiveSites: [] as ReturnType<typeof gatherAllDiveSites>,
      };
    }

    type CertIncUI = {
      nameKey: string;
      whatIsIncluded: { titleKey: string; items: string[] };
      url: string;
    };

    const certInclusions: CertIncUI[] | undefined =
      content.session.certificationIds &&
      content.session.certificationIds.length > 0
        ? content.session.certificationIds
            .map((id): CertIncUI | undefined => {
              const cert = getCertificationById(id);
              if (!cert) return undefined;

              let slug: string | undefined;
              const maybeSlug = cert as { slug?: unknown };
              if (typeof maybeSlug.slug === 'string') slug = maybeSlug.slug;

              const url = localizedTo(`/certifications/${slug ?? id}`);

              return {
                nameKey: cert.name,
                whatIsIncluded: cert.whatIsIncluded,
                url,
              };
            })
            .filter((x): x is CertIncUI => Boolean(x))
        : undefined;

    const destContent = getDestinationById(content.experience.destinationId);

    return {
      certificationInclusions: certInclusions,
      destinationContent: destContent,
      allDestinationsForFilters: buildDestinationOptions(),
      allDiveSites: gatherAllDiveSites(),
    };
  }, [content]);

  const sessionDisplayName = useMemo(() => {
    const sess = content?.session;
    if (!sess) return '';
    return t(sess.nameKey, { ns: 'experiences' });
  }, [content, t]);

  const stickyButtonData = useMemo(() => {
    const exp = content?.experience;
    if (!exp?.ctaButton) return undefined;

    const newAction = { ...exp.ctaButton.action };

    if (newAction.type === 'whatsapp' && newAction.whatsAppMessageKey) {
      const translatedMessage = t(newAction.whatsAppMessageKey, {
        itemName: sessionDisplayName,
        ns: 'experiences',
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (newAction as any).pretranslatedMessage = translatedMessage;
    }

    return { ...exp.ctaButton, action: newAction };
  }, [content, t, sessionDisplayName]);

  const endDate = content?.session?.endDate ?? null;
  const isPastSession = useMemo(() => {
    if (!endDate) return false;
    const end = new Date(`${endDate}T00:00:00Z`);
    const today = new Date();
    const todayUTC = Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate()
    );
    return end.getTime() < todayUTC;
  }, [endDate]);

  if (!experienceSlug || !sessionSlug) {
    return <div>Experiencia no encontrada.</div>;
  }
  if (!content || !destinationContent) {
    return <div>Experiencia no encontrada.</div>;
  }

  const { experience, session } = content;

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

  const overrides = content.session.overrides as
    | {
        itinerary?: ExperienceItineraryContent;
        itineraryByPricingOption?: Record<string, ExperienceItineraryContent>;
      }
    | undefined;

  return (
    <>
      <SEO {...experience.seo} />
      <PageHeader {...experience.header} />

      <main>
        <SessionHero
          content={content}
          translationNS={experience.seo.translationNS}
        />

        {!isPastSession && (
          <ExperienceItinerary
            translationNS={experience.seo.translationNS}
            itinerary={overrides?.itinerary ?? experience.itinerary}
            byPlan={overrides?.itineraryByPricingOption}
            planLabels={Object.fromEntries(
              content.session.pricingOptions.map((p) => [
                p.id,
                t(p.nameKey, { ns: experience.seo.translationNS }),
              ])
            )}
          />
        )}

        <ExperienceInclusions
          whatIsIncluded={experience.whatIsIncluded}
          whatIsNotIncluded={experience.whatIsNotIncluded}
          certificationInclusions={certificationInclusions}
          translationNS={experience.seo.translationNS}
        />

        {!isPastSession && session.paymentPlan && (
          <ExperiencePaymentPlan
            paymentPlan={session.paymentPlan}
            pricingOptions={session.pricingOptions}
            translationNS={experience.seo.translationNS}
          />
        )}

        <PhotoGallery
          {...experience.gallery}
          translationNS={experience.seo.translationNS}
          sectionBackgroundColor={'bg-brand-primary-dark'}
        />

        <ExperienceDiveSites
          destinationName={destinationContent.name}
          diveSitesSectionProps={diveSitesSectionProps}
        />

        <CtaSection {...homeContent.cta} />
      </main>

      {!isPastSession && stickyButtonData && (
        <StickyCtaBar
          buttonData={stickyButtonData}
          translationNS={'experiences'}
        />
      )}
    </>
  );
};

export default ExperiencePage;
