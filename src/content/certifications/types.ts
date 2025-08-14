// src/content/certifications/types.ts
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
import { AssetURLSchema } from '../../constants/assets.schema';
import {
  AgencyIdSchema,
  CertificationCodeSchema,
  CertificationIdSchema,
  CertificationLevelSchema,
} from '../../constants';

export const CertificationCardContentSchema = z.object({
  descriptionKey: z.string(),
  imageData: ImageComponentDataSchema,
});
export type CertificationCardContent = z.infer<
  typeof CertificationCardContentSchema
>;

export const CertificationDescriptionContentSchema = z.object({
  titleKey: z.string(),
  paragraphs: z.array(z.string()).min(1),
});
export type CertificationDescriptionContent = z.infer<
  typeof CertificationDescriptionContentSchema
>;

export const CertificationPrerequisitesSchema = z.object({
  titleKey: z.string(),
  items: z.array(z.string()).min(1),
});
export type CertificationPrerequisites = z.infer<
  typeof CertificationPrerequisitesSchema
>;

export const CertificationItemsSchema = z.object({
  labelKey: z.string(),
  valueKey: z.string(),
});
export type CertificationItems = z.infer<typeof CertificationItemsSchema>;

export const CertificationDetailsSchema = z.object({
  titleKey: z.string(),
  items: z.array(CertificationItemsSchema).min(1),
});
export type CertificationDetails = z.infer<typeof CertificationDetailsSchema>;

export const CertificationCurriculumModulesSchema = z.object({
  id: z.string(),
  nameKey: z.string(),
  descriptionKey: z.string(),
});
export type CertificationCurriculumModules = z.infer<
  typeof CertificationCurriculumModulesSchema
>;

export const CertificationCurriculumSchema = z.object({
  titleKey: z.string(),
  modules: z.array(CertificationCurriculumModulesSchema).min(1),
});
export type CertificationCurriculum = z.infer<
  typeof CertificationCurriculumSchema
>;

export const CertificationWhatIsIncludedSchema = z.object({
  titleKey: z.string(),
  items: z.array(z.string()).min(1),
});
export type CertificationWhatIsIncluded = z.infer<
  typeof CertificationWhatIsIncludedSchema
>;

export const CertificationBookingProcessStepsSchema = z.object({
  icon: z.string(),
  nameKey: z.string(),
  descriptionKey: z.string(),
});
export type CertificationBookingProcessSteps = z.infer<
  typeof CertificationBookingProcessStepsSchema
>;

export const CertificationBookingProcessSchema = z.object({
  titleKey: z.string(),
  steps: z.array(CertificationBookingProcessStepsSchema).min(1),
});
export type CertificationBookingProcess = z.infer<
  typeof CertificationBookingProcessSchema
>;

export const CertificationGallerySchema = z.object({
  titleKey: z.string(),
  images: z.array(ImageComponentDataSchema).min(1),
});
export type CertificationGallery = z.infer<typeof CertificationGallerySchema>;

export const CertificationTestimonialsItemsSchema = z.object({
  quoteKey: z.string(),
  author: z.string(),
  photoUrl: AssetURLSchema,
});
export type CertificationTestimonialsItems = z.infer<
  typeof CertificationTestimonialsItemsSchema
>;

export const CertificationTestimonialsSchema = z.object({
  titleKey: z.string(),
  items: z.array(CertificationTestimonialsItemsSchema).min(1),
});
export type CertificationTestimonials = z.infer<
  typeof CertificationTestimonialsSchema
>;

export const CertificationFaqItemSchema = z.object({
  questionKey: z.string(),
  answerKey: z.string(),
});
export type CertificationFaqItem = z.infer<typeof CertificationFaqItemSchema>;

export const CertificationFaqSchema = z.object({
  titleKey: z.string(),
  items: z.array(CertificationFaqItemSchema).min(1),
});
export type CertificationFaq = z.infer<typeof CertificationFaqSchema>;

export const CertificationInstructorInstructorsSchema = z.object({
  name: z.string(),
  descriptionKey: z.string(),
  photoUrl: AssetURLSchema,
});
export type CertificationInstructorInstructors = z.infer<
  typeof CertificationInstructorInstructorsSchema
>;

export const CertificationInstructorSchema = z.object({
  titleKey: z.string(),
  instructors: z.array(CertificationInstructorInstructorsSchema).min(1),
});
export type CertificationInstructor = z.infer<
  typeof CertificationInstructorSchema
>;

export const CertificationContentSchema = z.object({
  id: CertificationIdSchema,
  slug: z.string().min(1, 'slug is required'),
  name: z.string(),
  code: CertificationCodeSchema,
  level: CertificationLevelSchema,
  agency: AgencyIdSchema,
  minAge: z.number().int().min(8),
  maxDepthMeter: z.number().int(),
  maxDepthFt: z.number().int(),

  estimatedDuration: z.object({
    eLearningHours: z.tuple([z.number(), z.number()]),
    totalDays: z.tuple([z.number(), z.number()]),
  }),

  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
  card: CertificationCardContentSchema,
  description: CertificationDescriptionContentSchema,
  prerequisites: CertificationPrerequisitesSchema,
  details: CertificationDetailsSchema,
  curriculum: CertificationCurriculumSchema,
  whatIsIncluded: CertificationWhatIsIncludedSchema,
  bookingProcess: CertificationBookingProcessSchema,
  gallery: CertificationGallerySchema,
  testimonials: CertificationTestimonialsSchema,
  faq: CertificationFaqSchema,
  instructorProfile: CertificationInstructorSchema,
  ctaButton: ContentButtonSchema,
  cta: CtaSectionPropsSchema,
});
export type CertificationContent = z.infer<typeof CertificationContentSchema>;
