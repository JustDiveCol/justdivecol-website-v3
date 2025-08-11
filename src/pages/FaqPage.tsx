// src/pages/FaqPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { FaqContent } from '../components/sections/faq/FaqContent';

import { faqContent } from '../content/pages/faq/faq.content';

export const FaqPage = () => {
  return (
    <>
      <SEO {...faqContent.seo} />
      <PageHeader {...faqContent.header} />

      <FaqContent />
    </>
  );
};
