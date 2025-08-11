// src/pages/PrivacyPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { LegalContent } from '../components/sections/shared/LegalContent';

import { privacyContent } from '../content/pages/legal/privacy/privacy.content';

export const PrivacyPage = () => {
  return (
    <>
      <SEO {...privacyContent.seo} />
      <PageHeader {...privacyContent.header} />
      <LegalContent {...privacyContent.content} />
    </>
  );
};
