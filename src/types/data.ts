// src/types/data.ts
import type { SEOProps } from '../components/common/SEO';
import type { HeroSectionProps } from '../components/sections/home/HeroSection';
import type { FeaturedSectionProps } from '../components/sections/home/FeaturedSection';
import type { PrinciplesSectionProps } from '../components/sections/home/PrinciplesSection';
import type { TestimonialsSectionProps } from '../components/sections/home/TestimonialsSection';
import type { AlliesSectionProps } from '../components/sections/home/AlliesSection';
import type { CtaSectionProps } from '../components/sections/shared/CtaSection';
import type { PageHeaderProps } from '../components/sections/shared/PageHeader';
import type { MissionSectionProps } from '../components/sections/about/MissionSection';
import type { TeamSectionProps } from '../components/sections/about/TeamSection';
import type { PrincipleDetail } from '../components/sections/shared/AlternatingFeature';
import type { FaqCategory } from '../data/faqData';
import type { LegalContentProps } from '../components/sections/shared/LegalContent';
import type { UpcomingTripsSectionProps } from '../components/sections/experiences/UpcomingTripsSection';
import type { CertificationsSectionProps } from '../components/sections/experiences/CertificationsSection';
import type { DestinationsSectionProps } from '../components/sections/experiences/DestinationsSection';
import type { CustomTripsSectionProps } from '../components/sections/experiences/CustomTripsSection';
import type { ContactSectionProps } from '../components/sections/contact/ContactSection';
import type { NavLink } from '../constants/navigation';
import type { UrlPath } from '../constants/routes';
import type { ExperienceId } from '../data/experiences';
import type { CertificationId } from '../data/certifications';
import type {
  ActionType,
  AgencyType,
  AvailableType,
  CategoryType,
  ImageVariant,
  SocialType,
  StatusType,
} from '../constants/ui';

export type Action = {
  type: ActionType;
  path?: UrlPath;
  whatsAppMessageKey?: string;
};

export type SocialsData = {
  name: string;
  link: string;
  icon: SocialType;
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
}

export interface PrinciplesPageData {
  seo: SEOProps;
  header: PageHeaderProps;
  principles: PrincipleDetail[];
}

export interface ContactPageData {
  seo: SEOProps;
  header: PageHeaderProps;
}

export interface ContactData {
  contactInfo: ContactSectionProps;
}

export interface FaqPageData {
  seo: SEOProps;
  header: PageHeaderProps;
}

export interface FaqData {
  topFaqIds: string[];
  categories: FaqCategory[];
}

export interface PolicyPageData {
  seo: SEOProps;
  header: PageHeaderProps;
  content: LegalContentProps;
}

export interface TermsPageData {
  seo: SEOProps;
  header: PageHeaderProps;
  content: LegalContentProps;
}

export interface PrivacyPageData {
  seo: SEOProps;
  header: PageHeaderProps;
  content: LegalContentProps;
}

export interface ExperiencesPageData {
  seo: SEOProps;
  upcomingTrips: UpcomingTripsSectionProps;
  certifications: CertificationsSectionProps;
  destinations: DestinationsSectionProps;
  customTrips: CustomTripsSectionProps;
}

export interface FooterData {
  sloganKey: string;
  closingMessageKey: string;
  copyrightKey: string;
  creditsKey: string;
  importantLinksTitle: string;
  navLinks: ReadonlyArray<NavLink>;
  policiesLinkText: string;
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

// Lo que el COMPONENTE ImageComponent espera recibir
export interface ImageComponentData {
  backgroundImage: string;
  complementaryLogo?: { url: string; altKey: string };
  photoCredit: string;
  textOverlayKey?: string;
  variant: ImageVariant;
}

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
  nameKey: string;
  subtitleKey?: string;
  status: StatusType;
  seo: SEOProps;
  header: PageHeaderProps;
  description: {
    titleKey: string;
    paragraphs: string[];
  };
  gallery?: {
    titleKey: string;
    images: ImageComponentData[];
  };
  cta?: CTAData;
}

// --- TIPOS DE CONTENIDO PRINCIPAL ---

export interface Certification extends PageContent {
  agency: AgencyType;
  prerequisiteIds: string[];
  card: {
    imageData: ImageComponentData;
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
  featuredImage: ImageComponentData;
  photos: ImageComponentData[];
}

export interface Destination extends PageContent {
  country: string;
  coords: [number, number];
  minZoom: number;
  maxZoom: number;
  card: {
    imageData: ImageComponentData;
  };
  details: {
    titleKey: string;
    items: { labelKey: string; valueKey: string }[];
  };
  uniqueFinds: {
    titleKey: string;
    items: string[];
  };
  experienceIds: ExperienceId[];
  diveSiteIds: string[];
}

export type CurrencyType = 'USD' | 'COP';

export interface PricingOption {
  id: string;
  titleKey: string;
  descriptionKey: string;
  price: number;
  currency: CurrencyType;
}

export interface ExperienceSession {
  id: string;
  experienceId: ExperienceId;
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
  certificationIds: CertificationId[];
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
