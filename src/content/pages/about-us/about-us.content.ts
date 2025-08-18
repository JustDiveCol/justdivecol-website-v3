// src/content/pages/about-us/about-us.content.ts
import { toAssetUrl } from '../../../constants/assets.schema';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../urlPathSchema';
import { AboutUsPageContentSchema, type AboutUsPageContent } from './types';

const rawAboutUs: AboutUsPageContent = {
  seo: {
    titleKey: 'about-us.seo.title',
    descriptionKey: 'about-us.seo.desc',
    keywordsKey: 'about-us.seo.keywords',
    urlPath: toUrlPath(ROUTES['about-us']),
    imageUrl: toAssetUrl('/images/about-us/social-card.webp'),
    translationNS: 'about-us',
  },

  header: {
    titleKey: 'about-us.header.title',
    subtitleKey: 'about-us.header.subtitle',
    translationNS: 'about-us',
    imageData: {
      backgroundImage: toAssetUrl('/images/about-us/header-background.webp'),
      photoCredit: 'Mica Asato @asatomica',
      variant: 'header',
    },
  },

  mission: {
    titleKey: 'about-us.mission.title',
    textKey: 'about-us.mission.text',
    translationNS: 'about-us',
    imageData: {
      backgroundImage: toAssetUrl('/images/about-us/mission-image.webp'),
      photoCredit: 'Bayu jefri @bayu_jefri',
      variant: 'horizontal',
    },
  },

  team: {
    titleKey: 'about-us.team.title',
    translationNS: 'about-us',
    members: [
      {
        id: 'member-1',
        name: 'Camilo Beltrán',
        roleKey: 'about-us.team.roleInstructor',
        bioKey: 'about-us.team.bioCamilo',
        imageUrl: '/images/about-us/team/camilo.webp',
      },
      {
        id: 'member-2',
        name: 'Alejandra Vargas',
        roleKey: 'about-us.team.roleDivemaster',
        bioKey: 'about-us.team.bioAlejandra',
        imageUrl: '/images/about-us/team/alejandra.webp',
      },
      {
        id: 'member-3',
        name: 'Pablo Orjuela',
        roleKey: 'about-us.team.roleInstructor',
        bioKey: 'about-us.team.bioPablo',
        imageUrl: '/images/about-us/team/pablo.webp',
      },
    ],
  },
};

export const aboutUsContent = AboutUsPageContentSchema.parse(rawAboutUs);
