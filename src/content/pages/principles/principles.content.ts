// src/content/pages/principles/principles.content.t
import {
  BRAND_ASSETS_SAFE,
  toAssetUrl,
} from '../../../constants/assets.schema';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../urlPathSchema';
import {
  PrinciplesPageContentSchema,
  type PrinciplesPageContent,
} from './types';

const rawPrinciples: PrinciplesPageContent = {
  seo: {
    titleKey: 'principles.seo.title',
    descriptionKey: 'principles.seo.desc',
    keywordsKey: 'principles.seo.keywords',
    urlPath: toUrlPath(ROUTES.principles),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'principles',
  },

  header: {
    titleKey: 'principles.header.title',
    subtitleKey: 'principles.header.subtitle',
    translationNS: 'principles',
    imageData: {
      backgroundImage: toAssetUrl('/images/principles/header-background.webp'),
      photoCredit: 'Min An @minan1398',
      variant: 'header',
    },
  },

  principles: [
    {
      id: 'safety',
      titleKey: 'principles.principles.safety.title',
      descriptionKey: 'principles.principles.safety.text',
      imageData: {
        backgroundImage: toAssetUrl('/images/principles/sustainability.webp'),
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
        variant: 'horizontal',
      },
      imagePosition: 'left',
    },
    {
      id: 'conservation',
      titleKey: 'principles.principles.conservation.title',
      descriptionKey: 'principles.principles.conservation.text',
      imageData: {
        backgroundImage: toAssetUrl(
          '/images/principles/ocean-conservation.webp'
        ),
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
        variant: 'horizontal',
      },
      imagePosition: 'right',
    },
    {
      id: 'community',
      titleKey: 'principles.principles.community.title',
      descriptionKey: 'principles.principles.community.text',
      imageData: {
        backgroundImage: toAssetUrl(
          '/images/principles/people-and-humanity.webp'
        ),
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS_SAFE.complementaryLogos.padi,
        variant: 'horizontal',
      },
      imagePosition: 'left',
    },
  ],
};

export const principlesContent =
  PrinciplesPageContentSchema.parse(rawPrinciples);
