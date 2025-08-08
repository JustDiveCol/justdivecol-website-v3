// src/content/pages/legal/types.ts
import type {
  LegalContentContent,
  PageHeaderContent,
} from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

// OK
export type LegalPageData = {
  seo: SEOContent;
  header: PageHeaderContent;
  content: LegalContentContent;
};
