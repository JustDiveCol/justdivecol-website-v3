// src/types/data.ts
import type { NavLink } from '../constants/navigation';
import type { CategoryType } from '../constants/ui';

import type {
  CertificationsSectionProps,
  CustomTripsSectionProps,
  DestinationsSectionProps,
  UpcomingTripsSectionProps,
} from '../components/sections/experiences/types';

// --- Data ---

export interface ContactPageData {
  seo: SEOProps;
  header: PageHeaderProps;
}

export interface ContactData {
  contactInfo: ContactSectionProps;
}

export interface PolicyPageData {
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

export interface DiveTag {
  id: string;
  nameKey: string;
  categoryId: CategoryType;
}
