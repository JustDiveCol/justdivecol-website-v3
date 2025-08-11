// src/content/pages/about-us/about-us.content.ts
import { toAssetUrl } from '../../../constants/assets.schema';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../urlPathSchema';
import { AboutUsPageContentSchema, type AboutUsPageContent } from './types';

const rawAboutUs: AboutUsPageContent = {
  seo: {
    titleKey: 'aboutUs.seo.title',
    descriptionKey: 'aboutUs.seo.desc',
    keywordsKey: 'aboutUs.seo.keywords',
    urlPath: toUrlPath(ROUTES.aboutUs),
    imageUrl: toAssetUrl('/images/social/about-us-social-card.webp'),
    translationNS: 'aboutUs',
  },

  header: {
    titleKey: 'aboutUs.header.title',
    subtitleKey: 'aboutUs.header.subtitle',
    translationNS: 'aboutUs',
    imageData: {
      backgroundImage: toAssetUrl('/images/about/header-background.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  mission: {
    titleKey: 'aboutUs.mission.title',
    textKey: 'aboutUs.mission.text',
    translationNS: 'aboutUs',
    imageData: {
      backgroundImage: toAssetUrl('/images/about/mission-image.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  team: {
    titleKey: 'aboutUs.team.title',
    translationNS: 'aboutUs',
    members: [
      {
        id: 'member-1',
        name: 'Camilo Beltrán',
        roleKey: 'aboutUs.team.roleInstructor',
        bioKey: 'aboutUs.team.bioCamilo',
        imageUrl: '/images/team/camilo.webp',
      },
      {
        id: 'member-2',
        name: 'Alejandra Vargas',
        roleKey: 'aboutUs.team.roleDivemaster',
        bioKey: 'aboutUs.team.bioAlejandra',
        imageUrl: '/images/team/alejandra.webp',
      },
      {
        id: 'member-3',
        name: 'Pablo Orjuela',
        roleKey: 'aboutUs.team.roleInstructor',
        bioKey: 'aboutUs.team.bioPablo',
        imageUrl: '/images/team/pablo.webp',
      },
    ],
  },
};

export const aboutUsContent = AboutUsPageContentSchema.parse(rawAboutUs);
