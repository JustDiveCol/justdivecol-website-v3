// src/content/pages/contact/types.ts
import type { ContactSectionContent } from '../../../components/sections/contact/types';
import type { PageHeaderContent } from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

// OK
export type ContactPageContent = {
  seo: SEOContent;
  header: PageHeaderContent;
  contactInfo: ContactSectionContent;
};
