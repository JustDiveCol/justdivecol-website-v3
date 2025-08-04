import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { FaqContent } from '../components/sections/faq/FaqContent';
import { faqPageData } from '../data/faqPageData';
import { useTranslation } from 'react-i18next';

export const FaqPage = () => {
  const { t } = useTranslation(['faqs', 'common']);
  const { seo, header } = faqPageData;

  return (
    <>
      <SEO
        titleKey={t(seo.titleKey)}
        descriptionKey={t(seo.descriptionKey)}
        keywordsKey={t(seo.keywordsKey)}
        urlPath={seo.urlPath}
      />
      <PageHeader
        titleKey={t(header.titleKey)}
        subtitleKey={t(header.subtitleKey)}
        imageData={header.imageData}
      />

      <FaqContent />
    </>
  );
};
