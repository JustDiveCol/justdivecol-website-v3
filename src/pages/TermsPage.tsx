import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { LegalContent } from '../components/sections/shared/LegalContent';

import { termsPageData } from '../data/termsPageData';

export const TermsPage = () => {
  return (
    <>
      <SEO {...termsPageData.seo} />
      <PageHeader {...termsPageData.header} />
      <LegalContent {...termsPageData.content} />
    </>
  );
};
