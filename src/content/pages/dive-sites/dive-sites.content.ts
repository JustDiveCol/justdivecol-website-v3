// src/content/pages/dive-sites/dive-sites.content.ts
import { toAssetUrl } from '../../../constants/assets.schema';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../urlPathSchema';
import { DiveSitesPageContentSchema, type DiveSitesPageContent } from './types';

const rawDiveSitesPage: DiveSitesPageContent = {
  seo: {
    titleKey: 'dive-sites.seo.title',
    descriptionKey: 'dive-sites.seo.desc',
    keywordsKey: 'dive-sites.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-sites']),
    imageUrl: toAssetUrl('/images/dive-sites/social-card.webp'),
    translationNS: 'dive-sites',
  },
  header: {
    titleKey: 'dive-sites.header.title',
    subtitleKey: 'dive-sites.header.subtitle',
    translationNS: 'dive-sites',
    imageData: {
      backgroundImage: toAssetUrl('/images/dive-sites/header-background.webp'),
      photoCredit: 'ArtHouse Studio',
      variant: 'header',
    },
  },
};

export const diveSitesContent =
  DiveSitesPageContentSchema.parse(rawDiveSitesPage);
