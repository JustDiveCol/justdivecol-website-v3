// src/data/faqPageData.ts
import { BRAND_ASSETS } from '../constants/assets';
import { ROUTES } from '../constants/routes';
import type { FaqPageData } from '../types/data';

export const faqPageData: FaqPageData = {
  seo: {
    titleKey: 'seo.faqsSeoTitle',
    descriptionKey: 'seo.faqsSeoDesc',
    keywordsKey: 'seo.faqsSeoKeywords',
    urlPath: ROUTES.faq,
    imageUrl: '/images/social/faq-card.webp',
    translationNS: 'faqs',
  },
  header: {
    titleKey: 'header.faqsHeaderTitle',
    subtitleKey: 'header.faqsHeaderSubtitle',
    translationNS: 'faqs',
    imageData: {
      backgroundImage: '/images/faq/header-background.webp',
      photoCredit: 'PADI®',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      variant: 'header',
    },
  },
};
