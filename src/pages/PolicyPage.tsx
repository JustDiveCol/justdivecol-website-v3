import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { LegalContent } from '../components/sections/shared/LegalContent';

import { policyPageData } from '../data/policyPageData';

export const PolicyPage = () => {
  return (
    <>
      <SEO {...policyPageData.seo} />
      <PageHeader {...policyPageData.header} />
      <LegalContent {...policyPageData.content} />
    </>
  );
};
