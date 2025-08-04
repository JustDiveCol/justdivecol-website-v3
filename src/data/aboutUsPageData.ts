import { ROUTES } from '../constants/routes';
import type { ImageComponentData } from '../types/data'; // Importamos el tipo central

// Definimos la estructura de un miembro del equipo
interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  bioKey: string;
  imageUrl: string;
}

export const aboutUsPageData = {
  seo: {
    titleKey: 'aboutSeoTitle',
    descriptionKey: 'aboutSeoDesc',
    urlPath: ROUTES.aboutUs,
    imageUrl: '/images/about/header-background.webp',
  },
  header: {
    titleKey: 'aboutHeaderTitle',
    subtitleKey: 'aboutHeaderSubtitle',
    imageData: {
      backgroundImage: '/images/about/header-background.webp',
    },
  },

  mission: {
    titleKey: 'aboutMissionTitle',
    textKey: 'aboutMissionText',
    // La data de la imagen ahora cumple con el tipo 'ImageComponentData'
    imageData: {
      backgroundImage: '/images/about/mission-image.webp',
      photoCredit: {
        prefixKey: 'photoCreditPrefix',
        text: 'Tu Nombre Aquí',
      },
    } as ImageComponentData,
  },

  team: {
    titleKey: 'aboutTeamTitle',
    members: [
      {
        id: 'member-1',
        name: 'Camilo Beltrán',
        roleKey: 'teamRoleInstructor',
        bioKey: 'teamBioCamilo',
        imageUrl: '/images/team/camilo.webp',
      },
      {
        id: 'member-2',
        name: 'Alejandra Vargas',
        roleKey: 'teamRoleDivemaster',
        bioKey: 'teamBioAlejandra',
        imageUrl: '/images/team/alejandra.webp',
      },
      {
        id: 'member-3',
        name: 'Pablo Orjuela',
        roleKey: 'teamRoleInstructor',
        bioKey: 'teamBioPablo',
        imageUrl: '/images/team/pablo.webp',
      },
    ] as TeamMember[],
  },

  cta: {
    titleKey: 'aboutCtaTitle',
    subtitleKey: 'aboutCtaSubtitle',
    backgroundImageUrl: '/images/about/cta-background.webp',
    buttonAction: {
      type: 'internal' as const,
      path: ROUTES.experiences,
    },
    hubspotForm: {
      portalId: '50063006',
      formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
      titleKey: 'formTitle',
    },
  },
};
