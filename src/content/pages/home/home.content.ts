// src/content/pages/home/home.content.ts
import type { CardData } from '../../../components/sections/home/types';
import { toAssetUrl } from '../../../constants/assets.schema';
import { ROUTES } from '../../../constants/routes.schema';
import { principlesToHomeCards } from '../../selectors/principles.selectors';
import { toUrlPath } from '../../urlPathSchema';
import { principlesContent } from '../principles/principles.content';
import { testimonialsContent } from '../testimonials/testimonials.content';
import { HomePageContentSchema, type HomePageContent } from './types';

const selectHomeTestimonials = (limit = 6) => {
  return testimonialsContent.items
    .filter((t) => t.pagePosition?.includes('home'))
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      const da = a.dateISO ? Date.parse(a.dateISO) : 0;
      const db = b.dateISO ? Date.parse(b.dateISO) : 0;
      if (db !== da) return db - da;

      return (b.rating ?? 0) - (a.rating ?? 0);
    })
    .slice(0, limit);
};

const rawCards: ReadonlyArray<Omit<CardData, 'link'>> = [
  {
    id: 'dive-experiences',
    titleKey: 'home.featured.cards.title1',
    subtitleKey: 'home.featured.cards.subtitle1',
    imageData: {
      backgroundImage: toAssetUrl('/images/home/featured-1.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'vertical',
    },
  },
  {
    id: 'certifications',
    titleKey: 'home.featured.cards.title2',
    subtitleKey: 'home.featured.cards.subtitle2',
    imageData: {
      backgroundImage: toAssetUrl('/images/home/featured-2.webp'),
      photoCredit: '27 1 @qinyi_1125',
      variant: 'vertical',
    },
  },
  {
    id: 'destinations',
    titleKey: 'home.featured.cards.title3',
    subtitleKey: 'home.featured.cards.subtitle3',
    imageData: {
      backgroundImage: toAssetUrl('/images/home/featured-3.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'vertical',
    },
  },
  {
    id: 'custom-experiences',
    titleKey: 'home.featured.cards.title4',
    subtitleKey: 'home.featured.cards.subtitle4',
    imageData: {
      backgroundImage: toAssetUrl('/images/home/featured-4.webp'),
      photoCredit: '@parche_de_buceo',
      variant: 'vertical',
    },
  },
] as const;

export const featuredCards: CardData[] = rawCards.map((card) => ({
  ...card,
  link: toUrlPath(`${ROUTES['dive-experiences']}#${card.id}`),
}));

const rawHome: HomePageContent = {
  seo: {
    titleKey: 'home.seo.title',
    descriptionKey: 'home.seo.desc',
    keywordsKey: 'home.seo.keywords',
    imageUrl: toAssetUrl('/images/home/social-card.webp'),
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
        path: toUrlPath(ROUTES['dive-experiences']),
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
    titleKey: 'testimonials.title',
    translationNS: 'testimonials',
    items: selectHomeTestimonials(6),
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
