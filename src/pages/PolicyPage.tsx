import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { LegalContent } from '../components/sections/shared/LegalContent';
import { policyPageData } from '../data/policyPageData';
import { useTranslation } from 'react-i18next';

export const PolicyPage = () => {
  const { t } = useTranslation(['legal', 'common']);
  const { seo, header, content } = policyPageData;

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
      <div className='bg-brand-primary-dark px-4'>
        <LegalContent
          sections={content.sections}
          translationNS='legal'
        />
      </div>
    </>
  );
};
