// src/content/pages/faq/types.ts
import type { PageHeaderContent } from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

// OK
export type FaqPageContent = {
  seo: SEOContent;
  header: PageHeaderContent;
  data: FaqContent;
};

// OK
export type FaqItem = {
  id: string;
  questionKey: string;
  answerKey: string;
};

// OK
export type FaqCategory = {
  id: string;
  sectionTitleKey: string;
  faqs: FaqItem[];
};

// OK
export type FaqContent = {
  topFaqIds: string[];
  categories: FaqCategory[];
};
