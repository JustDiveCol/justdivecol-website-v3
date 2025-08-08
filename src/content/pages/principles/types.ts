import type {
  PageHeaderContent,
  PrincipleDetailData,
} from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

export type PrinciplesPageContent = {
  seo: SEOContent;
  header: PageHeaderContent;
  principles: PrincipleDetailData[];
};
