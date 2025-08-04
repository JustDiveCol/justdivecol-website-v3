import { ROUTES } from '../constants/routes';
import { BRAND_ASSETS } from '../constants/assets';
import type { SEOProps } from '../components/common/SEO';
import type {
  HeroButtonData,
  HeroSectionProps,
} from '../components/sections/home/HeroSection';
import type { GalleryImage } from '../types/data';
import type {
  CardData,
  FeaturedSectionProps,
} from '../components/sections/home/FeaturedSection';
import type { PrincipleCardData } from '../components/sections/shared/PrincipleCard';
import type { PrinciplesSectionProps } from '../components/sections/home/PrinciplesSection';

// --- Interfaces de Tipado ---

interface TestimonialItem {
  id: number;
  quoteKey: string;
  name: string; // Usamos el nombre directamente
  originKey: string;
  rating: number;
  avatarUrl: string;
}

interface Ally {
  id: string;
  name: string; // Para el texto 'alt' de la imagen
  logoUrl: string; // Ruta al logo en /public/images/allies/
  link?: string; // Enlace opcional a la web del aliado
}

// --- Objeto de Datos ---
export const homePageData = {
  seo: {
    titleKey: 'seo.homeSeoTitle',
    descriptionKey: 'seo.homeSeoDesc',
    keywordsKey: 'seo.homeSeoKeywords',
    urlPath: ROUTES.home,
    imageUrl: '/images/social/home-social-card.webp',
    translationNS: 'home',
  } as SEOProps,

  hero: {
    titleKey: 'hero.homeHeroTitle',
    subtitleKey: 'hero.homeHeroSubtitle',
    translationNS: 'home',

    button: {
      textKey: 'hero.experiencesButton',
      path: ROUTES.experiences,
      variant: 'primary',
      size: 'default',
      actionType: 'internal',
    } as HeroButtonData,

    imageData: {
      backgroundImage: '/images/home/hero-background.webp',
      altTextKey: '',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    } as GalleryImage,
  } as HeroSectionProps,

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
    ] as CardData[],
  } as FeaturedSectionProps,

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
    ] as PrincipleCardData[],
  } as PrinciplesSectionProps,

  testimonials: {
    titleKey: 'testimonials.homeTestimonialsTitle',
    items: [
      {
        id: 1,
        quoteKey: 'testimonials.testimonial1Quote',
        name: 'Sunny Velez',
        originKey: 'testimonials.testimonial1Origin',
        rating: 5,
        avatarUrl: '/images/avatars/avatar1.webp',
      },
    ] as TestimonialItem[],
  },

  allies: {
    titleKey: 'allies.homeAlliesTitle',
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
    ] as Ally[],
  },

  cta: {
    titleKey: 'cta.homeCtaTitle',
    subtitleKey: 'cta.homeCtaSubtitle',
    backgroundImageUrl: '/images/home/cta-background.webp',
    contactButtonKey: 'cta.contactButton',
    buttonAction: {
      type: 'whatsapp' as const,
      whatsAppMessageKey: 'generalWhatsappMessage',
    },
    // Objeto de configuración para el formulario
    hubspotForm: {
      portalId: '50063006',
      formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
      titleKey: 'cta.formTitle',
    },
  },
};
