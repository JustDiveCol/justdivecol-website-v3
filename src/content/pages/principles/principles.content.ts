import { BRAND_ASSETS } from '../../../constants/assets';
import { ROUTES } from '../../../constants/routes';
import { PrinciplesPageContentSchema } from '../../schemas';
import type { PrinciplesPageContent } from './types';

const rawPrinciples: PrinciplesPageContent = {
  seo: {
    titleKey: 'principles.seo.title',
    descriptionKey: 'principles.seo.desc',
    keywordsKey: 'principles.seo.keywords',
    urlPath: ROUTES.principles,
    imageUrl: '/images/social/principles-social-card.webp',
    translationNS: 'principles',
  },

  header: {
    titleKey: 'principles.header.title',
    subtitleKey: 'principles.header.subtitle',
    translationNS: 'principles',
    imageData: {
      backgroundImage: '/images/principles/header-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  principles: [
    {
      id: 'safety',
      titleKey: 'principles.principles.safety.title',
      textKey: 'principles.principles.safety.text',
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
      titleKey: 'principles.principles.conservation.title',
      textKey: 'principles.principles.conservation.text',
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
      titleKey: 'principles.principles.community.title',
      textKey: 'principles.principles.community.text',
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

export const principlesContent =
  PrinciplesPageContentSchema.parse(rawPrinciples);
