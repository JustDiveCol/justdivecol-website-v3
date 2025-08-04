// src/types/data.ts
import type { SEOProps } from '../components/common/SEO';
import type { HeroSectionProps } from '../components/sections/home/HeroSection';
import type { FeaturedSectionProps } from '../components/sections/home/FeaturedSection';
import type { PrinciplesSectionProps } from '../components/sections/home/PrinciplesSection';
import type { TestimonialsSectionProps } from '../components/sections/home/TestimonialsSection';
import type { AlliesSectionProps } from '../components/sections/home/AlliesSection';
import type { CtaSectionProps } from '../components/sections/shared/CtaSection';
import type { RoutePath } from '../constants/routes';
import type { PageHeaderProps } from '../components/sections/shared/PageHeader';
import type { MissionSectionProps } from '../components/sections/about/MissionSection';
import type { TeamSectionProps } from '../components/sections/about/TeamSection';
import type { PrincipleDetail } from '../components/sections/shared/AlternatingFeature';

// --- Types ---
export type ActionType = 'internal' | 'external' | 'whatsapp';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonSize = 'default' | 'sm' | 'lg';

export type StatusType = 'published' | 'draft';

export type AvailableType = 'available' | 'few_spots' | 'sold_out';

export type CategoryType =
  | 'marine-life'
  | 'dive-characteristics'
  | 'features'
  | 'location';

export type ImageVariant =
  | 'fullscreen'
  | 'header'
  | 'horizontal'
  | 'vertical'
  | 'square';

export type AgencyType = 'PADI' | 'SSI';

export type Action = {
  type: ActionType;
  path?: RoutePath;
  whatsAppMessageKey?: string;
};

// --- Data ---
export interface HomePageData {
  seo: SEOProps;
  hero: HeroSectionProps;
  featured: FeaturedSectionProps;
  principles: PrinciplesSectionProps;
  testimonials: TestimonialsSectionProps;
  allies: AlliesSectionProps;
  cta: CtaSectionProps;
}

export interface AboutUsPageData {
  seo: SEOProps;
  header: PageHeaderProps;
  mission: MissionSectionProps;
  team: TeamSectionProps;
  cta: CtaSectionProps;
}

export interface PrinciplesPageData {
  seo: SEOProps;
  header: PageHeaderProps;
  principles: PrincipleDetail[];
  cta: CtaSectionProps;
}

// --- Props ---

// --- TIPOS GENÉRICOS Y REUTILIZABLES ---
export interface HeaderData {
  backgroundImage: string;
  titleKey: string;
  subtitleKey: string;
  photoCredit?: {
    prefixKey: string;
    text: string;
  };
}

// --- TIPOS GENÉRICOS ---
export interface PhotoCreditData {
  prefixKey: string;
  text: string;
}

// Lo que el COMPONENTE ImageComponent espera recibir
export interface ImageComponentData {
  backgroundImage: string;
  complementaryLogo?: { url: string; altKey: string };
  photoCredit: string;
  textOverlayKey?: string;
  variant: ImageVariant;
}

// Lo que definimos para una IMAGEN en una GALERÍA
export type GalleryImage = {
  backgroundImage: string;
  altTextKey: string;
  photoCredit?: string;
};

export interface CTAData {
  textKey: string;
  action: {
    type: ActionType;
    path?: string;
    whatsAppMessageKey?: string;
    whatsAppMessageNS?: string;
  };
}

export interface DiveTag {
  id: string;
  nameKey: string;
  categoryId: CategoryType;
}

// Interfaz base para contenido que genera una página propia
export interface PageContent {
  id: string;
  slug: string;
  nameKey: string; // El nombre principal del contenido (ej. "Santa Marta")
  subtitleKey?: string; // Un subtítulo o descripción corta
  status: StatusType;
  seo: SEOProps;
  header: HeaderData;
  description: {
    titleKey: string;
    paragraphs: string[];
  };
  gallery?: {
    titleKey: string;
    images: GalleryImage[];
  };
  cta?: CTAData;
}

// --- TIPOS DE CONTENIDO PRINCIPAL ---

export interface Certification extends PageContent {
  agency: AgencyType;
  prerequisiteIds: string[];
  card: {
    imageData: Omit<ImageComponentData, 'variant'>;
  };
  details: {
    titleKey: string;
    durationKey: string;
    items: { labelKey: string; valueKey: string }[];
  };
  curriculum: {
    titleKey: string;
    modules: { id: string; nameKey: string; descriptionKey: string }[];
  };
  requirements: {
    titleKey: string;
    items: string[];
  };
  whatIsIncluded: {
    titleKey: string;
    items: string[];
  };
}

export interface DiveSite {
  id: string;
  nameKey: string;
  destinationId: string;
  isTopSite: boolean;
  coordinates: [number, number];
  maxDepth: number | string;
  levelRequiredId: string;
  difficultyId: string;
  typeIds: string[];
  conditionsIds: string[];
  descriptionP1Key: string;
  tagsIds: string[];
  featuredImage: GalleryImage;
  photos: GalleryImage[];
}

export interface Destination extends PageContent {
  country: string;
  coords: [number, number];
  minZoom: number;
  maxZoom: number;
  details: {
    titleKey: string;
    items: { labelKey: string; valueKey: string }[];
  };
  uniqueFinds: {
    titleKey: string;
    items: string[];
  };
  experienceIds: string[];
  diveSiteIds: string[];
}

export interface PricingOption {
  id: string;
  titleKey: string;
  descriptionKey: string;
  price: number;
  currency: string;
}

export interface ExperienceSession {
  id: string;
  experienceId: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  availability: AvailableType;
  seatsAvailable: number;
  capacity: number;
  creyentes?: boolean;
  certificationIds: string[];

  pricingOptions: PricingOption[];

  paymentPlan?: {
    titleKey: string;
    modules: { id: string; nameKey: string; descriptionKey: string }[];
    notes: string[];
  };
}

export interface Experience extends PageContent {
  destinationId: string;
  certificationIds: string[];
  sessionIds: string[];
  itinerary: {
    titleKey: string;
    days: { day: number; titleKey: string; descriptionKey: string }[];
    notes: string[];
  };
  whatIsIncluded: {
    titleKey: string;
    items: string[];
  };
  whatIsNotIncluded: {
    titleKey: string;
    items: string[];
  };
}
