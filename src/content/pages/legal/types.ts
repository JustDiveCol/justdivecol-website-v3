import type {
  LegalContentContent,
  PageHeaderContent,
} from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

export type LegalPageData = {
  seo: SEOContent;
  header: PageHeaderContent;
  content: LegalContentContent;
};
