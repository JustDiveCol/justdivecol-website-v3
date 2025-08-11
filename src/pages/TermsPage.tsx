// src/pages/TermsPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { LegalContent } from '../components/sections/shared/LegalContent';

import { termsContent } from '../content/pages/legal/terms/terms.content';

export const TermsPage = () => {
  return (
    <>
      <SEO {...termsContent.seo} />
      <PageHeader {...termsContent.header} />
      <LegalContent {...termsContent.content} />
    </>
  );
};
