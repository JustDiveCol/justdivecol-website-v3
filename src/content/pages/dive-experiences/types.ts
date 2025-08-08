import type {
  CertificationsSectionContent,
  CustomTripsSectionContent,
  DestinationsSectionContent,
  UpcomingTripsSectionContent,
} from '../../../components/sections/experiences/types';
import type { SEOContent } from '../../types';

export interface DiveExperiencesPageContent {
  seo: SEOContent;
  upcomingTrips: UpcomingTripsSectionContent;
  certifications: CertificationsSectionContent;
  destinations: DestinationsSectionContent;
  customTrips: CustomTripsSectionContent;
}
