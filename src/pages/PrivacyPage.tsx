import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { LegalContent } from '../components/sections/shared/LegalContent';
import { privacyPageData } from '../data/privacyPageData'; // <- Importa los datos de Privacy

export const PrivacyPage = () => {
  return (
    <>
      <SEO {...privacyPageData.seo} />
      <PageHeader {...privacyPageData.header} />
      <LegalContent {...privacyPageData.content} />
    </>
  );
};
