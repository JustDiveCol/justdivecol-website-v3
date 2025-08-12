import { z } from 'zod';
import { SEOPropsSchema } from '../../../components/common/types';
import {
  CertificationsSectionPropsSchema,
  CustomTripsSectionPropsSchema,
  DestinationsSectionPropsSchema,
  UpcomingTripsSectionPropsSchema,
} from '../../../components/sections/diveExperiences/types';

export const DiveExperiencesPageContentSchema = z.object({
  seo: SEOPropsSchema,
  upcomingTrips: UpcomingTripsSectionPropsSchema,
  certifications: CertificationsSectionPropsSchema,
  destinations: DestinationsSectionPropsSchema,
  customTrips: CustomTripsSectionPropsSchema,
});

export type DiveExperiencesPageContent = z.infer<
  typeof DiveExperiencesPageContentSchema
>;
