// src/components/sections/shared/types.ts
import { z } from 'zod';
import {
  ContentButtonSchema,
  ImageComponentDataSchema,
  TranslationNSSchema,
} from '../../common/types';
import type { I18NNamespace } from '../../../constants/i18n';
// import { AvailableTypeSchema } from '../../../lib/db/constants';

// ––– ActiveDestinationCard –––
export const DestinationCardSchema = z.object({
  imageData: ImageComponentDataSchema,
});
export type DestinationCard = z.infer<typeof DestinationCardSchema>;

export const DestinationSummarySchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  nameKey: z.string().min(1),
  subtitleKey: z.string().optional(),
  card: DestinationCardSchema,
});
export type DestinationSummary = z.infer<typeof DestinationSummarySchema>;

export const ActiveExperienceSummarySchema = z.object({
  id: z.string().min(1),
  nameKey: z.string().min(1),
});
export type ActiveExperienceSummary = z.infer<
  typeof ActiveExperienceSummarySchema
>;

export const ActiveDestinationCardPropsSchema = z.object({
  destination: DestinationSummarySchema,
  activeExperiences: z.array(ActiveExperienceSummarySchema).min(0),
  className: z.string().optional(),
});

export type ActiveDestinationCardProps = z.infer<
  typeof ActiveDestinationCardPropsSchema
>;

// ––– AlternatingFeature –––
export const ImagePositionSchema = z.enum(['left', 'right']);
export type ImagePosition = z.infer<typeof ImagePositionSchema>;

export const PrincipleDetailContentSchema = z.object({
  titleKey: z.string().min(1),
  descriptionKey: z.string().min(1),
  imageData: ImageComponentDataSchema,
  imagePosition: ImagePositionSchema,
});
export type PrincipleDetailContent = z.infer<
  typeof PrincipleDetailContentSchema
>;

export const AlternatingFeaturePropsSchema = z.object({
  featureData: PrincipleDetailContentSchema,
  translationNS: TranslationNSSchema,
});
export type AlternatingFeatureProps = Omit<
  z.infer<typeof AlternatingFeaturePropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– CertificationCard –––
// export const CertificationCardContentSchema = z.object({
//   card: z.object({
//     imageData: ImageComponentDataSchema,
//   }),
//   nameKey: z.string().min(1),
//   subtitleKey: z.string().optional(),
//   slug: z.string().min(1),
//   agency: z.string().min(1),
// });
// export type CertificationCardContent = z.infer<
//   typeof CertificationCardContentSchema
// >;

// export const CertificationCardPropsSchema = z.object({
//   certificationData: CertificationCardContentSchema,
//   availabilityStatus: AvailableTypeSchema,
//   className: z.string().optional(),
// });
// export type CertificationCardProps = z.infer<
//   typeof CertificationCardPropsSchema
// >;

// ––– CtaSection –––
export const CtaSectionPropsSchema = z.object({
  translationNS: TranslationNSSchema,
  titleKey: z.string(),
  subtitleKey: z.string(),
  backgroundImageUrl: z.string(),
  button: ContentButtonSchema.optional(),
  hubspotFormTitle: z.string().optional(),
});
export type CtaSectionProps = Omit<
  z.infer<typeof CtaSectionPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– DestinationPill –––
export const DestinationPillDestinationSchema = DestinationSummarySchema.pick({
  slug: true,
  nameKey: true,
});
export type DestinationPillDestination = z.infer<
  typeof DestinationPillDestinationSchema
>;

export const DestinationPillPropsSchema = z.object({
  destination: DestinationPillDestinationSchema,
  translationNS: TranslationNSSchema,
});
export type DestinationPillProps = Omit<
  z.infer<typeof DestinationPillPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– LegalContent –––
export const LegalPointSchema = z.object({
  titleKey: z.string().optional(),
  textKey: z.string().optional(),
  subpoints: z.array(z.string()).optional(),
});
export type LegalPoint = z.infer<typeof LegalPointSchema>;

export const LegalSectionSchema = z.object({
  id: z.string().min(1),
  titleKey: z.string().min(1),
  points: z.array(LegalPointSchema).min(1),
});
export type LegalSection = z.infer<typeof LegalSectionSchema>;

export const LegalContentPropsSchema = z.object({
  sections: z.array(LegalSectionSchema).min(1),
  translationNS: TranslationNSSchema,
});
export type LegalContentProps = Omit<
  z.infer<typeof LegalContentPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– PageHeader –––
export const PageHeaderPropsSchema = z.object({
  titleKey: z.string().min(1),
  subtitleKey: z.string().optional(),
  translationNS: TranslationNSSchema,
  imageData: ImageComponentDataSchema,
});
export type PageHeaderProps = Omit<
  z.infer<typeof PageHeaderPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– PhotoGallery –––
export const PhotoGalleryPropsSchema = z.object({
  titleKey: z.string().min(1),
  images: z.array(ImageComponentDataSchema).min(1),
  translationNS: TranslationNSSchema,
});

export type PhotoGalleryProps = Omit<
  z.infer<typeof PhotoGalleryPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– TestimonialCard –––
export const TestimonialDataSchema = z.object({
  id: z.union([z.string(), z.number()]),
  quoteKey: z.string().min(1),
  name: z.string().min(1),
  originKey: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  avatarUrl: z.string().min(1),
});
export type TestimonialData = z.infer<typeof TestimonialDataSchema>;

export const TestimonialCardPropsSchema = z.object({
  cardData: TestimonialDataSchema,
  translationNS: TranslationNSSchema,
});
export type TestimonialCardProps = Omit<
  z.infer<typeof TestimonialCardPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };
