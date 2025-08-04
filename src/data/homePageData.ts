import { ROUTES } from '../constants/routes';
import { BRAND_ASSETS } from '../constants/assets';
import type { HomePageData } from '../types/data';

export const homePageData: HomePageData = {
  // SEO
  seo: {
    titleKey: 'seo.homeSeoTitle',
    descriptionKey: 'seo.homeSeoDesc',
    keywordsKey: 'seo.homeSeoKeywords',
    urlPath: ROUTES.home,
    imageUrl: '/images/social/home-social-card.webp',
    translationNS: 'home',
  },

  // Hero
  hero: {
    titleKey: 'hero.homeHeroTitle',
    subtitleKey: 'hero.homeHeroSubtitle',
    translationNS: 'home',

    button: {
      textKey: 'hero.experiencesButton',
      action: {
        type: 'internal',
        path: ROUTES.experiences,
      },
      variant: 'primary',
      size: 'default',
    },

    imageData: {
      backgroundImage: '/images/home/hero-background.webp',
      altTextKey: '',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    },
  },

  // Featured
  featured: {
    titleKey: 'featured.homeFeaturedTitle',
    translationNS: 'home',
    cards: [
      {
        id: 'experiences',
        link: ROUTES.experiences,
        titleKey: 'featured.featuredCard1Title',
        subtitleKey: 'featured.featuredCard1Subtitle',
        imageData: {
          backgroundImageUrl: '/images/featured/featured-1.webp',
          photoCredit: 'Camilo Beltran @JustDiveCol',
        },
      },
      {
        id: 'certifications',
        link: ROUTES.certificationsSection,
        titleKey: 'featured.featuredCard2Title',
        subtitleKey: 'featured.featuredCard2Subtitle',
        imageData: {
          backgroundImageUrl: '/images/featured/featured-2.webp',
          photoCredit: 'Camilo Beltran @JustDiveCol',
          complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
        },
      },
      {
        id: 'destinations',
        link: ROUTES.destinationsSection,
        titleKey: 'featured.featuredCard3Title',
        subtitleKey: 'featured.featuredCard3Subtitle',
        imageData: {
          backgroundImageUrl: '/images/featured/featured-3.webp',
          photoCredit: 'Camilo Beltran @JustDiveCol',
        },
      },
      {
        id: 'custom-experiences',
        link: ROUTES.customExperiencesSection,
        titleKey: 'featured.featuredCard4Title',
        subtitleKey: 'featured.featuredCard4Subtitle',
        imageData: {
          backgroundImageUrl: '/images/featured/featured-4.webp',
          photoCredit: '@parche_de_buceo',
        },
      },
    ],
  },

  // Principles
  principles: {
    titleKey: 'principles.homePrinciplesTitle',
    subtitleKey: 'principles.homePrinciplesSubtitle',
    translationNS: 'home',
    cards: [
      {
        id: 'sustainability',
        imageUrl: '/images/principles/sustainability.webp',
        titleKey: 'principles.principlesCard1Title',
        descriptionKey: 'principles.principlesCard1Desc',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      },
      {
        id: 'ocean-conservation',
        imageUrl: '/images/principles/ocean-conservation.webp',
        titleKey: 'principles.principlesCard2Title',
        descriptionKey: 'principles.principlesCard2Desc',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      },
      {
        id: 'people-and-humanity',
        imageUrl: '/images/principles/people-and-humanity.webp',
        titleKey: 'principles.principlesCard3Title',
        descriptionKey: 'principles.principlesCard3Desc',
        photoCredit: 'PADI®',
        complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
      },
    ],
  },

  // Testimonials
  testimonials: {
    titleKey: 'testimonials.homeTestimonialsTitle',
    translationNS: 'home',
    items: [
      {
        id: 1,
        quoteKey: 'testimonials.testimonial1Quote',
        name: 'Sunny Velez',
        originKey: 'testimonials.testimonial1Origin',
        rating: 5,
        avatarUrl: '/images/avatars/avatar1.webp',
      },
    ],
  },

  // Allies
  allies: {
    titleKey: 'allies.homeAlliesTitle',
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

  // CTA
  cta: {
    translationNS: 'home',
    titleKey: 'cta.homeCtaTitle',
    subtitleKey: 'cta.homeCtaSubtitle',
    backgroundImageUrl: '/images/home/cta-background.webp',

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
