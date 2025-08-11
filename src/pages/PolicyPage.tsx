// src/pages/PolicyPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { LegalContent } from '../components/sections/shared/LegalContent';

import { policyContent } from '../content/pages/legal/policy/policy.content';

export const PolicyPage = () => {
  return (
    <>
      <SEO {...policyContent.seo} />
      <PageHeader {...policyContent.header} />
      <LegalContent {...policyContent.content} />
    </>
  );
};
