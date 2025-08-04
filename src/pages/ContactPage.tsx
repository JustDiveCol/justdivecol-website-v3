import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { ContactSection } from '../components/sections/contact/ContactSection';
import { FaqSection } from '../components/sections/contact/FaqSection';

import { contactPageData } from '../data/contactPageData';
import { contactData } from '../data/contactData';

export const ContactPage = () => {
  return (
    <>
      <SEO {...contactPageData.seo} />
      <PageHeader {...contactPageData.header} />
      <ContactSection {...contactData.contactInfo} />
      <FaqSection translationNS={'faqs'} />
    </>
  );
};
