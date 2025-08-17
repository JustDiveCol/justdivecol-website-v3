// src/components/sections/shared/types.ts
import { z } from 'zod';
import {
  ContentButtonSchema,
  ImageComponentDataSchema,
} from '../../common/types';
import {
  I18NNamespaceSchema,
  type I18NNamespace,
} from '../../../constants/i18n.schema';
import { AssetURLSchema, CertificationIdSchema } from '../../../constants';

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
  translationNS: I18NNamespaceSchema,
});
export type AlternatingFeatureProps = Omit<
  z.infer<typeof AlternatingFeaturePropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– CtaSection –––
export const CtaSectionPropsSchema = z.object({
  translationNS: I18NNamespaceSchema,
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
  translationNS: I18NNamespaceSchema,
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
  translationNS: I18NNamespaceSchema,
});
export type LegalContentProps = Omit<
  z.infer<typeof LegalContentPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– PageHeader –––
export const PageHeaderPropsSchema = z.object({
  titleKey: z.string().min(1),
  subtitleKey: z.string().optional(),
  translationNS: I18NNamespaceSchema,
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
  translationNS: I18NNamespaceSchema,
  sectionBackgroundColor: z.string().optional(),
});

export type PhotoGalleryProps = Omit<
  z.infer<typeof PhotoGalleryPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

// ––– TestimonialCard –––
export const PagePositionSchema = z.enum([
  'home',
  'destinations',
  'experiences',
  'owd',
  'aowd',
  'rd',
]);
export type TestimonialPagePosition = z.infer<typeof PagePositionSchema>;

export const TestimonialDataSchema = z
  .object({
    id: z.string().min(1),
    quoteKey: z.string().min(1),
    name: z.string().min(2),
    originKey: z.string().min(1),
    pagePosition: z.array(PagePositionSchema).min(1),
    rating: z.number().int().min(1).max(5).default(5),
    dateISO: z.iso.date().optional(),
    avatarUrl: AssetURLSchema,
    certificationId: CertificationIdSchema.optional(),
    featured: z.boolean().optional(),
    verified: z.boolean().optional(),
  })
  .refine((v) => !!v.quoteKey, {
    message: 'Debe existir quoteKey',
  })
  .refine((v) => !!v.originKey, {
    message: 'Debe existir originKey o originText',
  });
export type TestimonialData = z.infer<typeof TestimonialDataSchema>;

export const TestimonialCardPropsSchema = z.object({
  cardData: TestimonialDataSchema,
  translationNS: I18NNamespaceSchema,
});
export type TestimonialCardProps = Omit<
  z.infer<typeof TestimonialCardPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };
