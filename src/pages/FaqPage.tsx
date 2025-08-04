import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { FaqContent } from '../components/sections/faq/FaqContent';

import { faqPageData } from '../data/faqPageData';

export const FaqPage = () => {
  return (
    <>
      <SEO {...faqPageData.seo} />
      <PageHeader {...faqPageData.header} />

      <FaqContent />
    </>
  );
};
