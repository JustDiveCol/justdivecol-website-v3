// src/data/faqPageData.ts
import { ROUTES } from '../constants/routes';

export const faqPageData = {
  seo: {
    titleKey: 'seo.faqsSeoTitle',
    descriptionKey: 'seo.faqsSeoDesc',
    keywordsKey: 'seo.faqsSeoKeywords',
    urlPath: ROUTES.faq,
  },
  header: {
    titleKey: 'header.faqsHeaderTitle',
    subtitleKey: 'header.faqsHeaderSubtitle',
    imageData: {
      backgroundImage: '/images/faq/header-background.webp',
    },
  },
  // No necesitamos más datos aquí, porque el contenido de las FAQs ya está en faqData.ts
};
