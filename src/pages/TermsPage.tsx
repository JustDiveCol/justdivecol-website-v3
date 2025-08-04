import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { LegalContent } from '../components/sections/shared/LegalContent';
import { termsPageData } from '../data/termsPageData'; // <- La única diferencia importante
import { useTranslation } from 'react-i18next';

export const TermsPage = () => {
  const { t } = useTranslation('legal'); // Usamos el mismo namespace 'legal'
  const { seo, header, content } = termsPageData;

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
