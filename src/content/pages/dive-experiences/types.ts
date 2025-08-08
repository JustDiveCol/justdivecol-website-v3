// src/content/pages/dive-experiences/types.ts
import type {
  CertificationsSectionData,
  CustomTripsSectionContent,
  DestinationsSectionData,
  UpcomingTripsSectionData,
} from '../../../components/sections/experiences/types';
import type { SEOContent } from '../../types';

// OK
export interface DiveExperiencesPageContent {
  seo: SEOContent;
  upcomingTrips: UpcomingTripsSectionData;
  certifications: CertificationsSectionData;
  destinations: DestinationsSectionData;
  customTrips: CustomTripsSectionContent;
}
