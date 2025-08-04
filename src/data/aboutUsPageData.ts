import { ROUTES } from '../constants/routes';
import type { AboutUsPageData } from '../types/data'; // Importamos el tipo central

// Definimos la estructura de un miembro del equipo

export const aboutUsPageData: AboutUsPageData = {
  seo: {
    titleKey: 'seo.aboutUsSeoTitle',
    descriptionKey: 'seo.aboutUsSeoDesc',
    keywordsKey: 'seo.aboutUsSeoKeywords',
    urlPath: ROUTES.aboutUs,
    imageUrl: '/images/social/about-us-social-card.webp',
    translationNS: 'aboutUs',
  },

  header: {
    titleKey: 'header.aboutHeaderTitle',
    subtitleKey: 'header.aboutHeaderSubtitle',
    translationNS: 'aboutUs',
    imageData: {
      backgroundImage: '/images/about/header-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  mission: {
    titleKey: 'mission.aboutMissionTitle',
    textKey: 'mission.aboutMissionText',
    translationNS: 'aboutUs',
    imageData: {
      backgroundImage: '/images/about/mission-image.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  team: {
    titleKey: 'team.aboutTeamTitle',
    translationNS: 'aboutUs',
    members: [
      {
        id: 'member-1',
        name: 'Camilo Beltrán',
        roleKey: 'team.teamRoleInstructor',
        bioKey: 'team.teamBioCamilo',
        imageUrl: '/images/team/camilo.webp',
      },
      {
        id: 'member-2',
        name: 'Alejandra Vargas',
        roleKey: 'team.teamRoleDivemaster',
        bioKey: 'team.teamBioAlejandra',
        imageUrl: '/images/team/alejandra.webp',
      },
      {
        id: 'member-3',
        name: 'Pablo Orjuela',
        roleKey: 'team.teamRoleInstructor',
        bioKey: 'team.teamBioPablo',
        imageUrl: '/images/team/pablo.webp',
      },
    ],
  },

  cta: {
    translationNS: 'aboutUs',
    titleKey: 'cta.aboutCtaTitle',
    subtitleKey: 'cta.aboutCtaSubtitle',
    backgroundImageUrl: '/images/about/cta-background.webp',
    button: {
      textKey: 'cta.contactButton',
      action: {
        type: 'whatsapp',
        whatsAppMessageKey: 'common:generalWhatsappMessage',
      },
      variant: 'primary',
      size: 'default',
    },

    hubspotFormTitle: 'cta.formTitle',
  },
};
