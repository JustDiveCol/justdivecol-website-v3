// src/content/sessions/types.ts
import { z } from 'zod';
import {
  ContentButtonSchema,
  SEOPropsSchema,
} from '../../../components/common/types';
import {
  CtaSectionPropsSchema,
  PageHeaderPropsSchema,
} from '../../../components/sections/shared/types';
import {
  ExperienceDescriptionContentSchema,
  ExperienceGallerySchema,
  ExperienceItineraryContentSchema,
  ExperienceWhatIsIncludedSchema,
} from '../types';
import {
  AvailableTypeSchema,
  CertificationIdSchema,
  CurrencyIdSchema,
  ExperienceIdSchema,
} from '../../../constants';

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Formato ISO-8601 inválido' })
  .refine(
    (val) => {
      const [year, month, day] = val.split('-').map(Number);
      const date = new Date(val + 'T00:00:00Z');

      return (
        date instanceof Date &&
        !isNaN(date.getTime()) &&
        date.getUTCFullYear() === year &&
        date.getUTCMonth() + 1 === month &&
        date.getUTCDate() === day
      );
    },
    { message: 'Fecha inválida o inexistente' }
  );

export const PricingOptionSchema = z.object({
  id: z.string(),
  nameKey: z.string(),
  price: z.number().positive(),
  currency: CurrencyIdSchema,
});
export type PricingOption = z.infer<typeof PricingOptionSchema>;

/** Secciones de Experience que la sesión puede sobrescribir (todas opcionales) */
export const ExperienceSessionOverridesSchema = z.object({
  seo: SEOPropsSchema.optional(),
  header: PageHeaderPropsSchema.optional(),
  description: ExperienceDescriptionContentSchema.optional(),
  itinerary: ExperienceItineraryContentSchema.optional(),
  whatIsIncluded: ExperienceWhatIsIncludedSchema.optional(),
  whatIsNotIncluded: ExperienceWhatIsIncludedSchema.optional(),
  gallery: ExperienceGallerySchema.optional(),
  ctaButton: ContentButtonSchema.optional(),
  cta: CtaSectionPropsSchema.optional(),
});

export type ExperienceSessionOverrides = z.infer<
  typeof ExperienceSessionOverridesSchema
>;

export const ExperienceSessionContentSchema = z.object({
  id: z.string(),
  nameKey: z.string(),
  experienceId: ExperienceIdSchema,
  startDate: isoDate,
  endDate: isoDate,
  capacity: z.number().int().positive(),
  seatsAvailable: z.number().int().min(0),
  availability: AvailableTypeSchema,
  creyentes: z.boolean().default(false),
  pricingOptions: z.array(PricingOptionSchema),
  certificationIds: z.array(CertificationIdSchema).optional(),
  overrides: ExperienceSessionOverridesSchema.optional(),
});

export type ExperienceSessionContent = z.infer<
  typeof ExperienceSessionContentSchema
>;
