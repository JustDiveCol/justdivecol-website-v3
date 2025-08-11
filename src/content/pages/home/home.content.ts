// src/content/pages/home/home.content.ts
import type { CardData } from '../../../components/sections/home/types';
import { toAssetUrl } from '../../../constants/assets.schema';
import { ROUTES } from '../../../constants/routes';
import { principlesToHomeCards } from '../../selectors/principles.selectors';
import { toUrlPath } from '../../urlPathSchema';
import { principlesContent } from '../principles/principles.content';
import { HomePageContentSchema, type HomePageContent } from './types';

const rawCards: ReadonlyArray<Omit<CardData, 'link'>> = [
  {
    id: 'dive-experiences',
    titleKey: 'home.featured.card1Title',
    subtitleKey: 'home.featured.card1Subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/featured/featured-1.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'vertical',
    },
  },
  {
    id: 'certifications',
    titleKey: 'home.featured.card2Title',
    subtitleKey: 'home.featured.card2Subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/featured/featured-2.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'vertical',
    },
  },
  {
    id: 'destinations',
    titleKey: 'home.featured.card3Title',
    subtitleKey: 'home.featured.card3Subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/featured/featured-3.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'vertical',
    },
  },
  {
    id: 'custom-experiences',
    titleKey: 'home.featured.card4Title',
    subtitleKey: 'home.featured.card4Subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/featured/featured-4.webp'),
      photoCredit: '@parche_de_buceo',
      variant: 'vertical',
    },
  },
] as const;

export const featuredCards: CardData[] = rawCards.map((card) => ({
  ...card,
  link: toUrlPath(`${ROUTES.diveExperiences}#${card.id}`),
}));

const rawHome: HomePageContent = {
  seo: {
    titleKey: 'home.seo.title',
    descriptionKey: 'home.seo.desc',
    keywordsKey: 'home.seo.keywords',
    imageUrl: toAssetUrl('/images/social/home-social-card.webp'),
    urlPath: toUrlPath(ROUTES.home),
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
        path: toUrlPath(ROUTES.diveExperiences),
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
    cards: principlesToHomeCards(principlesContent.principles),
  },

  testimonials: {
    titleKey: 'home.testimonials.title',
    translationNS: 'home',
    items: [
      {
        id: 1,
        quoteKey: 'home.testimonials.quote1',
        name: 'Sunny Velez',
        originKey: 'providencia-sept-2025',
        rating: 5,
        avatarUrl: '/images/avatars/avatar1.webp',
      },
    ],
  },

  allies: {
    titleKey: 'home.allies.title',
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
    titleKey: 'home.cta.title',
    subtitleKey: 'home.cta.subtitle',
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

export const homeContent = HomePageContentSchema.parse(rawHome);
