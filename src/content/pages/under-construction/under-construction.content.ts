import { ROUTES, toAssetUrl } from '../../../constants';
import { toUrlPath } from '../../urlPathSchema';
import {
  UnderConstructionPageContentSchema,
  type UnderConstructionPageContent,
} from './types';

const rawUnderConstruction: UnderConstructionPageContent = {
  seo: {
    titleKey: 'under-construction.seo.title',
    descriptionKey: 'under-construction.seo.desc',
    keywordsKey: 'under-construction.seo.keywords',
    imageUrl: toAssetUrl('/images/under-construction/social-card.webp'),
    urlPath: toUrlPath(ROUTES.underConstruction),
    translationNS: 'common',
  },

  hero: {
    titleKey: 'under-construction.hero.title',
    subtitleKey: 'under-construction.hero.subtitle',
    translationNS: 'common',
    button: {
      textKey: 'under-construction.hero.button.text',
      action: {
        type: 'internal',
        path: toUrlPath(ROUTES.home),
      },
      variant: 'primary',
      size: 'default',
    },
    imageData: {
      backgroundImage: '/images/under-construction/hero-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    },
  },
};

export const underConstructionContent =
  UnderConstructionPageContentSchema.parse(rawUnderConstruction);
