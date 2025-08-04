// src/pages/AboutUsPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { MissionSection } from '../components/sections/about/MissionSection';
import { TeamSection } from '../components/sections/about/TeamSection';
import { PrinciplesSection } from '../components/sections/home/PrinciplesSection';
import { CtaSection } from '../components/sections/shared/CtaSection';

import { aboutUsPageData } from '../data/aboutUsPageData';
import { homePageData } from '../data/homePageData';

export const AboutUsPage = () => {
  return (
    <>
      <SEO {...aboutUsPageData.seo} />

      <PageHeader {...aboutUsPageData.header} />
      <MissionSection {...aboutUsPageData.mission} />
      <TeamSection {...aboutUsPageData.team} />
      <PrinciplesSection {...homePageData.principles} />
      <CtaSection {...homePageData.cta} />
    </>
  );
};
