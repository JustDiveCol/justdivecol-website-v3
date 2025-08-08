import type { PageHeaderContent } from '../../components/sections/shared/types';
import type { SEOContent } from '../types';

export interface ExperienceSessionContent {
  seo: SEOContent;
  header: PageHeaderContent;
  paymentPlan: {
    titleKey: string;
    modules: { id: string; nameKey: string; descriptionKey: string }[];
    notes: string[];
  };
}
