// src/types/data.ts
import type { LinkProps } from 'react-router-dom';
import type { AnchorHTMLAttributes } from 'react';
import type { SEOProps } from '../components/common/SEO';

// --- Types ---
export type ActionType = 'internal' | 'external' | 'whatsapp';

export type Action = {
  type: ActionType;
  path?: string;
  whatsAppMessageKey?: string;
};

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonSize = 'default' | 'sm' | 'lg';

// --- Props ---
export type ButtonProps = {
  action: Action;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & (Omit<LinkProps, 'to'> | AnchorHTMLAttributes<HTMLAnchorElement>);

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
  photoCredit?: string;
  textOverlayKey?: string;
  variant: 'fullscreen' | 'header' | 'horizontal' | 'vertical' | 'square';
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
    type: 'internal' | 'external' | 'whatsapp';
    path?: string;
    whatsAppMessageKey?: string;
    whatsAppMessageNS?: string;
  };
}

export interface DiveTag {
  id: string;
  nameKey: string;
  categoryId: 'marine-life' | 'dive-characteristics' | 'features' | 'location';
}

// Interfaz base para contenido que genera una página propia
export interface PageContent {
  id: string;
  slug: string;
  nameKey: string; // El nombre principal del contenido (ej. "Santa Marta")
  subtitleKey?: string; // Un subtítulo o descripción corta
  status: 'published' | 'draft';
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
  agency: 'PADI' | 'SSI';
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
  featuredImage: GalleryImage; // Imagen principal obligatoria
  photos: GalleryImage[]; // Galería de imágenes adicional
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
  titleKey: string; // Usaremos titleKey para consistencia
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
  availability: 'available' | 'few_spots' | 'sold_out';
  seatsAvailable: number;
  capacity: number;
  creyentes?: boolean;
  certificationIds: string[];

  // ===== CORRECCIÓN AQUÍ: Se añade la propiedad que faltaba =====
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
