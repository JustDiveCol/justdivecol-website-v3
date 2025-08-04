// src/pages/ExperiencesPage.tsx
import { SEO } from '../components/common/SEO';
import { UpcomingTripsSection } from '../components/sections/experiences/UpcomingTripsSection';

import { CtaSection } from '../components/sections/shared/CtaSection';
import { CertificationsSection } from '../components/sections/experiences/CertificationsSection';
import { DestinationsSection } from '../components/sections/experiences/DestinationsSection';
import { CustomTripsSection } from '../components/sections/experiences/CustomTripsSection';

import { experiencesPageData } from '../data/experiencesPageData';
import { homePageData } from '../data/homePageData';

export const ExperiencesPage = () => {
  return (
    <>
      <SEO {...experiencesPageData.seo} />
      <UpcomingTripsSection {...experiencesPageData.upcomingTrips} />
      <CertificationsSection {...experiencesPageData.certifications} />
      <DestinationsSection {...experiencesPageData.destinations} />
      <CustomTripsSection {...experiencesPageData.customTrips} />
      <CtaSection {...homePageData.cta} />
    </>
  );
};
