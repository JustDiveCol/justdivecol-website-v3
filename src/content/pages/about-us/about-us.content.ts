// src/content/pages/about-us/about-us.content.ts
import { ROUTES } from '../../../constants/routes';
import { AboutUsPageContentSchema } from '../../schemas';
import type { AboutUsPageContent } from './types';

const rawAboutUs: AboutUsPageContent = {
  seo: {
    titleKey: 'aboutUs.seo.title',
    descriptionKey: 'aboutUs.seo.desc',
    keywordsKey: 'aboutUs.seo.keywords',
    urlPath: ROUTES.aboutUs,
    imageUrl: '/images/social/about-us-social-card.webp',
    translationNS: 'aboutUs',
  },

  header: {
    titleKey: 'aboutUs.header.title',
    subtitleKey: 'aboutUs.header.subtitle',
    translationNS: 'aboutUs',
    imageData: {
      backgroundImage: '/images/about/header-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  mission: {
    titleKey: 'aboutUs.mission.title',
    textKey: 'aboutUs.mission.text',
    translationNS: 'aboutUs',
    imageData: {
      backgroundImage: '/images/about/mission-image.webp',
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
        bioKey: 'team.bioCamilo',
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
