// src/types/data.ts
import type { FaqCategory } from '../data/faqData';
import type { NavLink } from '../constants/navigation';
import type { ActionType, CategoryType, StatusType } from '../constants/ui';
import type {
  AlliesSectionProps,
  FeaturedSectionProps,
  HeroSectionProps,
  PrinciplesSectionProps,
  TestimonialsSectionProps,
} from '../components/sections/home/types';
import type {
  CtaSectionProps,
  LegalContentProps,
  PageHeaderProps,
  PrincipleDetail,
} from '../components/sections/shared/types';
import type { ImageComponentData, SEOProps } from '../components/common/types';
import type {
  MissionSectionProps,
  TeamSectionProps,
} from '../components/sections/about/types';
import type { ContactSectionProps } from '../components/sections/contact/types';
import type {
  CertificationsSectionProps,
  CustomTripsSectionProps,
  DestinationsSectionProps,
  UpcomingTripsSectionProps,
} from '../components/sections/experiences/types';

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

export interface HeaderData {
  backgroundImage: string;
  titleKey: string;
  subtitleKey: string;
  photoCredit?: {
    prefixKey: string;
    text: string;
  };
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
