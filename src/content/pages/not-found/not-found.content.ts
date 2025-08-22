import { ROUTES, toAssetUrl } from '../../../constants';
import { toUrlPath } from '../../urlPathSchema';
import { NotFoundPageContentSchema, type NotFoundPageContent } from './types';

const rawNotFound: NotFoundPageContent = {
  seo: {
    titleKey: 'not-found.seo.title',
    descriptionKey: 'not-found.seo.desc',
    keywordsKey: 'not-found.seo.keywords',
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    urlPath: toUrlPath(ROUTES.notFound),
    translationNS: 'common',
  },

  hero: {
    titleKey: 'not-found.hero.title',
    subtitleKey: 'not-found.hero.subtitle',
    translationNS: 'common',
    button: {
      textKey: 'not-found.hero.button.text',
      action: {
        type: 'internal',
        path: toUrlPath(ROUTES.home),
      },
      variant: 'primary',
      size: 'default',
    },
    imageData: {
      backgroundImage: '/images/not-found/hero-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    },
  },
};

export const notFoundContent = NotFoundPageContentSchema.parse(rawNotFound);
