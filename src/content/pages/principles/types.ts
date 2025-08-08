// src/content/pages/principles/types.ts
import type {
  PageHeaderContent,
  PrincipleDetailContent,
} from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

// OK
export type PrinciplesPageContent = {
  seo: SEOContent;
  header: PageHeaderContent;
  principles: PrincipleDetailContent[];
};
