// src/pages/ExperiencesPage.tsx
import { SEO } from '../components/common/SEO';
import { UpcomingTripsSection } from '../components/sections/experiences/UpcomingTripsSection';
// Importa otras secciones (Certifications, Destinations, etc.) aquí
import { CtaSection } from '../components/sections/shared/CtaSection';
import { CertificationsSection } from '../components/sections/experiences/CertificationsSection';
import { DestinationsSection } from '../components/sections/experiences/DestinationsSection';
import { CustomTripsSection } from '../components/sections/experiences/CustomTripsSection';
// Importa los datos si los necesitas para el SEO o el CTA
import { homePageData } from '../data/homePageData';
import { experiencesPageData } from '../data/experiencesPageData';

export const ExperiencesPage = () => {
  return (
    <>
      <SEO
        {...experiencesPageData.seo}
        translationNS={'experiences'}
      />
      <UpcomingTripsSection translationNS={'experiences'} />
      <CertificationsSection translationNS={'experiences'} />
      <DestinationsSection />
      <CustomTripsSection />
      <CtaSection {...homePageData.cta} />
    </>
  );
};
