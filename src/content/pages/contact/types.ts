import type { ContactSectionContent } from '../../../components/sections/contact/types';
import type { PageHeaderContent } from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

export type ContactPageContent = {
  seo: SEOContent;
  header: PageHeaderContent;
  contactInfo: ContactSectionContent;
};
