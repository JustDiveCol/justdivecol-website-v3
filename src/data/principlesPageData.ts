// src/data/principlesPageData.ts
import { BRAND_ASSETS } from '../constants/assets';
import { ROUTES } from '../constants/routes';
import type { PrinciplesPageData } from '../types/data';

export const principlesPageData: PrinciplesPageData = {
  seo: {
    titleKey: 'seo.principlesSeoTitle',
    descriptionKey: 'seo.principlesSeoDesc',
    keywordsKey: 'seo.principlesSeoKeywords',
    urlPath: ROUTES.principles,
    imageUrl: '/images/social/principles-social-card.webp',
    translationNS: 'principles',
  },

  header: {
    titleKey: 'header.principlesHeaderTitle',
    subtitleKey: 'header.principlesHeaderSubtitle',
    translationNS: 'principles',
    imageData: {
      backgroundImage: '/images/principles/header-background.webp',
      photoCredit: 'PADI®',
      complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      variant: 'header',
    },
  },

  principles: [
    {
      id: 'safety',
      titleKey: 'principles.principlesSafetyTitle',
      textKey: 'principles.principlesSafetyDetailText',
      imageData: {
        backgroundImage: '/images/principles/sustainability.webp',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
        variant: 'horizontal',
      },
      imagePosition: 'left',
    },
    {
      id: 'conservation',
      titleKey: 'principles.principlesConservationTitle',
      textKey: 'principles.principlesConservationDetailText',
      imageData: {
        backgroundImage: '/images/principles/ocean-conservation.webp',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
        variant: 'horizontal',
      },
      imagePosition: 'right',
    },
    {
      id: 'community',
      titleKey: 'principles.principlesCommunityTitle',
      textKey: 'principles.principlesCommunityDetailText',
      imageData: {
        backgroundImage: '/images/principles/people-and-humanity.webp',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
        variant: 'horizontal',
      },
      imagePosition: 'left',
    },
  ],
};
