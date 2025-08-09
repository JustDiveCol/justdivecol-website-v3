// src/pages/AboutUsPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { MissionSection } from '../components/sections/about/MissionSection';
import { TeamSection } from '../components/sections/about/TeamSection';
import { PrinciplesSection } from '../components/sections/home/PrinciplesSection';
import { CtaSection } from '../components/sections/shared/CtaSection';

import { aboutUsContent } from '../content/pages/about-us/about-us.content';
import { homeContent } from '../content/pages/home/home.content';

export const AboutUsPage = () => {
  return (
    <>
      <SEO {...aboutUsContent.seo} />

      <PageHeader {...aboutUsContent.header} />
      <MissionSection {...aboutUsContent.mission} />
      <TeamSection {...aboutUsContent.team} />
      <PrinciplesSection {...homeContent.principles} />
      <CtaSection {...homeContent.cta} />
    </>
  );
};
