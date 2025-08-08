import type { PageHeaderContent } from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

export type FaqPageContent = {
  seo: SEOContent;
  header: PageHeaderContent;
  data: FaqContent;
};

export type FaqItem = {
  id: string;
  questionKey: string;
  answerKey: string;
};

export type FaqCategory = {
  id: string;
  sectionTitleKey: string;
  faqs: FaqItem[];
};

export type FaqContent = {
  topFaqIds: string[];
  categories: FaqCategory[];
};
