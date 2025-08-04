// src/pages/PrinciplesPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { AlternatingFeature } from '../components/sections/shared/AlternatingFeature';
import { CtaSection } from '../components/sections/shared/CtaSection';

import { principlesPageData } from '../data/principlesPageData';

export const PrinciplesPage = () => {
  return (
    <>
      <SEO {...principlesPageData.seo} />
      <PageHeader {...principlesPageData.header} />
      <div className='bg-brand-primary-dark'>
        {principlesPageData.principles.map((principle) => (
          <AlternatingFeature
            key={principle.id}
            featureData={principle}
            translationNS='principles'
          />
        ))}
      </div>
      <CtaSection {...principlesPageData.cta} />
    </>
  );
};
