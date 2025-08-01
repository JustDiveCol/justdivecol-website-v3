import { ROUTES } from '../constants/routes';
import { BRAND_ASSETS } from '../constants/assets';

// --- Interfaces de Tipado ---
interface ImageInfo {
  backgroundImageUrl: string;
  complementaryLogo?: {
    url: string;
    altKey: string;
  };
  photoCredit?: string;
}

interface CardData {
  id: string;
  link: string;
  titleKey: string;
  subtitleKey?: string;
  imageData: ImageInfo;
}

interface PrincipleCardData {
  id: string;
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
  photoCredit?: string;
  complementaryLogo?: {
    url: string;
    altKey: string;
  };
}

interface TestimonialItem {
  id: number;
  quoteKey: string;
  name: string; // Usamos el nombre directamente
  origin: string; // Usamos el origen directamente
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
    titleKey: 'homeSeoTitle',
    descriptionKey: 'homeSeoDesc',
    urlPath: '/', // La ruta relativa de la página
    imageUrl: '/images/social/home-social-card.jpg', // Imagen para compartir en redes
  },
  hero: {
    titleKey: 'homeHeroTitle',
    subtitleKey: 'homeHeroSubtitle',
    button: {
      textKey: 'experiencesButton',
      path: ROUTES.experiences,
    },
    imageData: {
      backgroundImage: '/images/home/hero-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
    },
  },

  featured: {
    titleKey: 'homeFeaturedTitle',
    cards: [
      {
        id: 'experience-1',
        link: ROUTES.experiences,
        titleKey: 'featuredCard1Title',
        subtitleKey: 'featuredCard1Category',
        imageData: {
          backgroundImageUrl: '/images/featured/featured-1.webp',
          photoCredit: 'Fotógrafo 1',
          complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
        },
      },
      {
        id: 'experience-2',
        link: ROUTES.experiences,
        titleKey: 'featuredCard2Title',
        subtitleKey: 'featuredCard2Category',
        imageData: {
          backgroundImageUrl: '/images/featured/featured-2.webp',
          photoCredit: 'Fotógrafo 2',
          complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
        },
      },
      {
        id: 'experience-3',
        link: ROUTES.experiences,
        titleKey: 'featuredCard3Title',
        subtitleKey: 'featuredCard3Category',
        imageData: {
          backgroundImageUrl: '/images/featured/featured-3.webp',
          photoCredit: 'Fotógrafo 3',
          complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
        },
      },
      {
        id: 'experience-4',
        link: ROUTES.experiences,
        titleKey: 'featuredCard4Title',
        subtitleKey: 'featuredCard4Category',
        imageData: {
          backgroundImageUrl: '/images/featured/featured-4.webp',
          photoCredit: 'Fotógrafo 4',
          complementaryLogo: BRAND_ASSETS.complementaryLogos.padi,
        },
      },
    ] as CardData[],
  },

  principles: {
    titleKey: 'homePrinciplesTitle',
    subtitleKey: 'homePrinciplesSubtitle',
    cards: [
      {
        id: 'experiences',
        imageUrl: '/images/principles/experiences.webp',
        titleKey: 'principlesCard1Title',
        descriptionKey: 'principlesCard1Desc',
        photoCredit: 'Fotógrafo Principios 1',
      },
      {
        id: 'conservation',
        imageUrl: '/images/principles/conservation.webp',
        titleKey: 'principlesCard2Title',
        descriptionKey: 'principlesCard2Desc',
        photoCredit: 'Fotógrafo Principios 1',
      },
      {
        id: 'community',
        imageUrl: '/images/principles/community.webp',
        titleKey: 'principlesCard3Title',
        descriptionKey: 'principlesCard3Desc',
        photoCredit: 'Fotógrafo Principios 1',
      },
    ] as PrincipleCardData[],
  },

  testimonials: {
    titleKey: 'homeTestimonialsTitle',
    items: [
      {
        id: 1,
        quoteKey: 'testimonial1Quote',
        name: 'Carlos Mendoza',
        origin: 'Curso Open Water',
        rating: 5,
        avatarUrl: '/images/avatars/avatar1.webp',
      },
      {
        id: 2,
        quoteKey: 'testimonial2Quote',
        name: 'Laura Jiménez',
        origin: 'Fun Dive en Santa Marta',
        rating: 5,
        avatarUrl: '/images/avatars/avatar2.webp',
      },
      {
        id: 3,
        quoteKey: 'testimonial3Quote',
        name: 'David Smith',
        origin: 'Advanced Adventurer',
        rating: 5,
        avatarUrl: '/images/avatars/avatar3.webp',
      },
      {
        id: 4,
        quoteKey: 'testimonial4Quote',
        name: 'Sofia Vergara',
        origin: 'Viaje a Malpelo',
        rating: 5,
        avatarUrl: '/images/avatars/avatar4.webp',
      },
    ] as TestimonialItem[],
  },

  allies: {
    titleKey: 'homeAlliesTitle',
    logos: [
      {
        id: 'padi',
        name: 'PADI',
        logoUrl: '/images/allies/padi-logo-white.png',
        link: 'https://www.padi.com',
      },
      {
        id: 'divers-alert-network',
        name: 'Divers Alert Network',
        logoUrl: '/images/allies/dan-logo-white.png',
        link: 'https://dan.org',
      },
    ] as Ally[],
  },

  cta: {
    titleKey: 'homeCtaTitle',
    subtitleKey: 'homeCtaSubtitle',
    backgroundImageUrl: '/images/home/cta-background.webp',
    buttonAction: {
      type: 'whatsapp' as const,
      whatsAppMessageKey: 'generalWhatsappMessage',
    },
    // Objeto de configuración para el formulario
    hubspotForm: {
      portalId: '50063006', // Reemplaza con tus datos
      formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72', // Reemplaza con tus datos
      titleKey: 'formTitle', // ej. "Déjanos un mensaje"
    },
  },
};
