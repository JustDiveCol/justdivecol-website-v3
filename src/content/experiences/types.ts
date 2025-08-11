// src/content/experiences/types.ts
import { z } from 'zod';
import {
  ContentButtonSchema,
  ImageComponentDataSchema,
  SEOPropsSchema,
} from '../../components/common/types';
import {
  CtaSectionPropsSchema,
  PageHeaderPropsSchema,
} from '../../components/sections/shared/types';
import {
  DestinationIdSchema,
  ExperienceIdSchema,
} from '../../lib/db/constants';

export const ExperienceDescriptionContentSchema = z.object({
  titleKey: z.string(),
  paragraphs: z.array(z.string()).min(1),
});
export type ExperienceDescriptionContent = z.infer<
  typeof ExperienceDescriptionContentSchema
>;

export const ExperienceItineraryDayContentSchema = z.object({
  day: z.number().int().positive(),
  titleKey: z.string(),
  descriptionKey: z.string(),
});
export type ExperienceItineraryDayContent = z.infer<
  typeof ExperienceItineraryDayContentSchema
>;

export const ExperienceItineraryContentSchema = z.object({
  titleKey: z.string(),
  days: z.array(ExperienceItineraryDayContentSchema).min(1),
  notes: z.array(z.string()).optional(),
});
export type ExperienceItineraryContent = z.infer<
  typeof ExperienceItineraryContentSchema
>;

export const ExperienceWhatIsIncludedSchema = z.object({
  titleKey: z.string(),
  items: z.array(z.string()).min(1),
});
export type ExperienceWhatIsIncluded = z.infer<
  typeof ExperienceWhatIsIncludedSchema
>;

export const ExperienceGallerySchema = z.object({
  titleKey: z.string(),
  images: z.array(ImageComponentDataSchema).min(1),
});
export type ExperienceGallery = z.infer<typeof ExperienceGallerySchema>;

export const ExperienceContentSchema = z.object({
  id: ExperienceIdSchema,
  slug: z.string(),
  destinationId: DestinationIdSchema,

  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
  description: ExperienceDescriptionContentSchema,
  itinerary: ExperienceItineraryContentSchema,
  whatIsIncluded: ExperienceWhatIsIncludedSchema,
  whatIsNotIncluded: ExperienceWhatIsIncludedSchema,
  gallery: ExperienceGallerySchema,
  ctaButton: ContentButtonSchema,
  cta: CtaSectionPropsSchema,
});
export type ExperienceContent = z.infer<typeof ExperienceContentSchema>;
