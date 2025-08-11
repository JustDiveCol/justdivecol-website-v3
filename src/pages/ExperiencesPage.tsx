// src/pages/ExperiencesPage.tsx
import { SEO } from '../components/common/SEO';
import { UpcomingTripsSection } from '../components/sections/experiences/UpcomingTripsSection';

import { CtaSection } from '../components/sections/shared/CtaSection';
// import { CertificationsSection } from '../components/sections/experiences/CertificationsSection';
// import { DestinationsSection } from '../components/sections/experiences/DestinationsSection';
// import { CustomTripsSection } from '../components/sections/experiences/CustomTripsSection';

import { diveExperiencesContent } from '../content/pages/dive-experiences/dive-experiences.content';
import { homeContent } from '../content/pages/home/home.content';

export const ExperiencesPage = () => {
  return (
    <>
      <SEO {...diveExperiencesContent.seo} />
      <UpcomingTripsSection {...diveExperiencesContent.upcomingTrips} />
      {/* <CertificationsSection {...diveExperiencesContent.certifications} />
      <DestinationsSection {...diveExperiencesContent.destinations} />
      <CustomTripsSection {...diveExperiencesContent.customTrips} /> */}
      <CtaSection {...homeContent.cta} />
    </>
  );
};
