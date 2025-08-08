// src/content/pages/home/home.content.ts
import type { HomePageContent } from './types';
import { HomePageContentSchema } from '../../schemas';
import { ROUTES, type UrlPath } from '../../../constants/routes';
import type {
  CardData,
  ImageData,
} from '../../../components/sections/home/types';
import { BRAND_ASSETS } from '../../../constants/assets';

type RawCardData = {
  readonly id: string;
  readonly titleKey: string;
  readonly subtitleKey?: string;
  readonly imageData: ImageData;
};

const rawCards: ReadonlyArray<RawCardData> = [
  {
    id: 'dive-experiences',
    titleKey: 'home.featured.card1Title',
    subtitleKey: 'home.featured.card1Subtitle',
    imageData: {
      backgroundImage: '/images/featured/featured-1.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    },
  },
  {
    id: 'certifications',
    titleKey: 'home.featured.card2Title',
    subtitleKey: 'home.featured.card2Subtitle',
    imageData: {
      backgroundImage: '/images/featured/featured-2.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    },
  },
  {
    id: 'destinations',
    titleKey: 'home.featured.card3Title',
    subtitleKey: 'home.featured.card3Subtitle',
    imageData: {
      backgroundImage: '/images/featured/featured-3.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    },
  },
  {
    id: 'custom-experiences',
    titleKey: 'home.featured.card4Title',
    subtitleKey: 'home.featured.card4Subtitle',
    imageData: {
      backgroundImage: '/images/featured/featured-4.webp',
      photoCredit: '@parche_de_buceo',
    },
  },
] as const;

export const featuredCards: CardData[] = rawCards.map((card) => ({
  ...card,
  link: `${ROUTES.diveExperiences}#${card.id}` as UrlPath,
}));

const rawHome: HomePageContent = {
  seo: {
    titleKey: 'home.seo.title',
    descriptionKey: 'home.seo.desc',
    keywordsKey: 'home.seo.keywords',
    imageUrl: 'home.seo.title',
    urlPath: ROUTES.home,
    translationNS: 'home',
  },

  hero: {
    titleKey: 'home.hero.title',
    subtitleKey: 'home.hero.subtitle',
    translationNS: 'home',
    button: {
      textKey: 'home.hero.button.text',
      action: {
        type: 'internal',
        path: ROUTES.diveExperiences,
      },
      variant: 'primary',
      size: 'default',
    },
    imageData: {
      backgroundImage: '/images/home/hero-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    },
  },

  featured: {
    titleKey: 'home.featured.title',
    translationNS: 'home',
    cards: featuredCards,
  },

  principles: {
    titleKey: 'home.principles.title',
    subtitleKey: 'home.principles.subtitle',
    translationNS: 'home',
    cards: [
      {
        id: 'sustainability',
        imageUrl: '/images/principles/sustainability.webp',
        titleKey: 'home.principles.card1Title',
        descriptionKey: 'home.principles.card1Desc',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      },
      {
        id: 'ocean-conservation',
        imageUrl: '/images/principles/ocean-conservation.webp',
        titleKey: 'home.principles.card2Title',
        descriptionKey: 'home.principles.card2Desc',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      },
      {
        id: 'people-and-humanity',
        imageUrl: '/images/principles/people-and-humanity.webp',
        titleKey: 'home.principles.card3Title',
        descriptionKey: 'home.principles.card3Desc',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      },
    ],
  },

  testimonials: {
    titleKey: 'home.testimonials.testimonialsTitle',
    translationNS: 'home',
    items: [
      {
        id: 1,
        quoteKey: 'home.testimonials.quote1',
        name: 'Sunny Velez',
        originKey: 'exp-santa-marta',
        rating: 5,
        avatarUrl: '/images/avatars/avatar1.webp',
      },
    ],
  },

  allies: {
    titleKey: 'home.allies.alliesTitle',
    translationNS: 'home',
    logos: [
      {
        id: 'divers-alert-network',
        name: 'Divers Alert Network',
        logoUrl: '/images/allies/dan-logo.png',
        link: 'https://apps.dan.org/join-dan/?do=dw&rc=3318775',
      },
      {
        id: 'gio',
        name: 'Parche de Buceo',
        logoUrl: '/images/allies/gio-logo.png',
        link: 'https://www.instagram.com/parche_de_buceo/',
      },
      {
        id: 'atlantida',
        name: 'Atlántida Centro de Buceo',
        logoUrl: '/images/allies/atlantida-logo.png',
        link: 'https://www.atlantidabucea.com/',
      },
    ],
  },

  cta: {
    translationNS: 'home',
    titleKey: 'home.cta.ctaTitle',
    subtitleKey: 'home.cta.ctaSubtitle',
    backgroundImageUrl: '/images/home/cta-background.webp',

    button: {
      textKey: 'home.cta.buttonText',
      action: {
        type: 'whatsapp',
        whatsAppMessageKey: 'common:generalWhatsappMessage',
      },
      variant: 'primary',
      size: 'default',
    },

    hubspotFormTitle: 'home.cta.formTitle',
  },
} as const;

/* Validación runtime: si falta algo, Vite/Vitest explota al cargar el módulo */
export const homeContent = HomePageContentSchema.parse(rawHome);
