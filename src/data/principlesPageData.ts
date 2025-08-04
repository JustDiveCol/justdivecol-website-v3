// src/data/principlesPageData.ts
import { ROUTES } from '../constants/routes';

interface PrincipleDetail {
  id: string;
  titleKey: string;
  textKey: string; // Usaremos una key para un texto más largo y detallado
  imageUrl: string;
  imagePosition: 'left' | 'right'; // Para controlar el layout alternado
}

export const principlesPageData = {
  seo: {
    titleKey: 'principlesSeoTitle',
    descriptionKey: 'principlesSeoDesc',
    urlPath: ROUTES.principles,
  },
  header: {
    titleKey: 'principlesHeaderTitle',
    subtitleKey: 'principlesHeaderSubtitle',
    imageData: {
      backgroundImage: '/images/principles/header-background.webp',
    },
  },
  principles: [
    {
      id: 'safety',
      titleKey: 'principlesSafetyTitle',
      textKey: 'principlesSafetyDetailText',
      imageUrl: '/images/principles/safety-detail.webp',
      imagePosition: 'left',
    },
    {
      id: 'conservation',
      titleKey: 'principlesConservationTitle',
      textKey: 'principlesConservationDetailText',
      imageUrl: '/images/principles/conservation-detail.webp',
      imagePosition: 'right',
    },
    {
      id: 'community',
      titleKey: 'principlesCommunityTitle',
      textKey: 'principlesCommunityDetailText',
      imageUrl: '/images/principles/community-detail.webp',
      imagePosition: 'left',
    },
  ] as PrincipleDetail[],

  cta: {
    titleKey: 'principlesCtaTitle',
    subtitleKey: 'principlesCtaSubtitle',
    backgroundImageUrl: '/images/principles/cta-background.webp',
    contactButtonKey: '',
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
