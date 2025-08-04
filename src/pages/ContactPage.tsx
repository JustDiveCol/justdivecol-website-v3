import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { ContactSection } from '../components/sections/contact/ContactSection';
import { FaqSection } from '../components/sections/contact/FaqSection';

import { contactPageData } from '../data/contactPageData';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
  const { t } = useTranslation('common');
  const { seo, header } = contactPageData;

  return (
    <>
      <SEO
        titleKey={seo.titleKey}
        descriptionKey={seo.descriptionKey}
        urlPath={seo.urlPath}
      />
      <PageHeader
        titleKey={t(`contact.${header.titleKey}`)}
        subtitleKey={t(`contact.${header.subtitleKey}`)}
        imageData={header.imageData}
      />
      <ContactSection />
      <FaqSection />
    </>
  );
};
