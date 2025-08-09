// src/pages/PrinciplesPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { AlternatingFeature } from '../components/sections/shared/AlternatingFeature';
import { CtaSection } from '../components/sections/shared/CtaSection';

import { principlesContent } from '../content/pages/principles/principles.content';
import { homeContent } from '../content/pages/home/home.content';

export const PrinciplesPage = () => {
  return (
    <>
      <SEO {...principlesContent.seo} />
      <PageHeader {...principlesContent.header} />
      <div className='bg-brand-primary-dark'>
        {principlesContent.principles.map((principle) => (
          <AlternatingFeature
            key={principle.id}
            featureData={principle}
            translationNS='principles'
          />
        ))}
      </div>
      <CtaSection {...homeContent.cta} />
    </>
  );
};
