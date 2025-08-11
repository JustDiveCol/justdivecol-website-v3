// src/content/destinations/types.ts
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
import { CountryIdSchema, DestinationIdSchema } from '../../lib/db/constants';

export const DestinationCardContentSchema = z.object({
  imageData: ImageComponentDataSchema,
});
export type DestinationCardContent = z.infer<
  typeof DestinationCardContentSchema
>;

export const DestinationDescriptionContentSchema = z.object({
  titleKey: z.string(),
  paragraphs: z.array(z.string()).min(1),
});
export type DestinationDescriptionContent = z.infer<
  typeof DestinationDescriptionContentSchema
>;

export const DestinationItemsSchema = z.object({
  labelKey: z.string(),
  valueKey: z.string(),
});
export type DestinationItems = z.infer<typeof DestinationItemsSchema>;

export const DestinationDetailsSchema = z.object({
  titleKey: z.string(),
  items: z.array(DestinationItemsSchema).min(1),
});
export type DestinationDetails = z.infer<typeof DestinationDetailsSchema>;

export const DestinationUniqueFindsSchema = z.object({
  titleKey: z.string(),
  items: z.array(z.string()).min(1),
});
export type DestinationUniqueFinds = z.infer<
  typeof DestinationUniqueFindsSchema
>;

export const DestinationGallerySchema = z.object({
  titleKey: z.string(),
  images: z.array(ImageComponentDataSchema).min(1),
});
export type DestinationGallery = z.infer<typeof DestinationGallerySchema>;

export const DestinationContentSchema = z.object({
  id: DestinationIdSchema,
  slug: z.string(),
  country: CountryIdSchema,
  coords: z
    .tuple([z.number(), z.number()])
    .describe('[lon, lat] — must be in WGS84'),
  minZoom: z.number(),
  maxZoom: z.number(),

  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
  card: DestinationCardContentSchema,
  description: DestinationDescriptionContentSchema,
  details: DestinationDetailsSchema,
  uniqueFinds: DestinationUniqueFindsSchema,
  gallery: DestinationGallerySchema,
  ctaButton: ContentButtonSchema,
  cta: CtaSectionPropsSchema,
});
export type DestinationContent = z.infer<typeof DestinationContentSchema>;
