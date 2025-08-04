// src/data/contactPageData.ts
import { BRAND_ASSETS } from '../constants/assets';
import { ROUTES } from '../constants/routes';
import type { ContactPageData } from '../types/data';

export const contactPageData: ContactPageData = {
  seo: {
    titleKey: 'seo.contactSeoTitle',
    descriptionKey: 'seo.contactSeoDesc',
    keywordsKey: 'seo.contactSeoKeywords',
    urlPath: ROUTES.contact,
    imageUrl: '/images/social/contact-social-card.webp',
    translationNS: 'contact',
  },

  header: {
    titleKey: 'header.contactHeaderTitle',
    subtitleKey: 'header.contactHeaderSubtitle',
    translationNS: 'contact',
    imageData: {
      backgroundImage: '/images/contact/header-background.webp',
      photoCredit: 'PADI®',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      variant: 'header',
    },
  },
};
