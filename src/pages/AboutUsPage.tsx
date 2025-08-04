// src/pages/AboutUsPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { aboutUsPageData } from '../data/aboutUsPageData';
import { MissionSection } from '../components/sections/about/MissionSection';
import { TeamSection } from '../components/sections/about/TeamSection';
import { PrinciplesSection } from '../components/sections/home/PrinciplesSection';
import { CtaSection } from '../components/sections/shared/CtaSection';

export const AboutUsPage = () => {
  const { seo, header, cta } = aboutUsPageData;

  return (
    <>
      <SEO
        titleKey={seo.titleKey}
        descriptionKey={seo.descriptionKey}
        urlPath={seo.urlPath}
        imageUrl={seo.imageUrl}
      />

      <PageHeader
        titleKey={header.titleKey}
        subtitleKey={header.subtitleKey}
        imageData={header.imageData}
      />
      <MissionSection />
      <TeamSection />
      <PrinciplesSection />
      <CtaSection {...cta} />
    </>
  );
};
