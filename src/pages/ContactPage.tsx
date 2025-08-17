// src/pages/ContactPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { ContactSection } from '../components/sections/contact/ContactSection';
import { FaqSection } from '../components/sections/contact/FaqSection';

import { contactContent } from '../content/pages/contact/contact.content';

export const ContactPage = () => {
  return (
    <>
      <SEO {...contactContent.seo} />
      <PageHeader {...contactContent.header} />
      <ContactSection {...contactContent.contactInfo} />
      <FaqSection translationNS={'faq'} showSeeAllButton={true} />
    </>
  );
};
