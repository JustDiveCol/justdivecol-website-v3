// src/components/sections/certifications/types.ts
import { z } from 'zod';
import { I18NNamespaceSchema, type I18NNamespace } from '../../../constants';

import {
  CertificationCurriculumSchema,
  CertificationDescriptionContentSchema,
  CertificationPrerequisitesSchema,
  CertificationWhatIsIncludedSchema,
} from '../../../content/certifications/types';
import type { ExperienceSessionContent } from '../../../content/experiences/sessions/types';

export const KeyMetricsPropsSchema = z.object({
  minAge: z.number(),
  maxDepthMeter: z.number(),
  maxDepthFt: z.number(),
  estimatedDuration: z.object({
    eLearningHours: z.tuple([z.number(), z.number()]),
    totalDays: z.tuple([z.number(), z.number()]),
  }),
  translationNS: I18NNamespaceSchema,
});

export type KeyMetricsProps = Omit<
  z.infer<typeof KeyMetricsPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para el contenido principal (SIN CAMBIOS)
export const CourseContentPropsSchema = z.object({
  description: CertificationDescriptionContentSchema,
  prerequisites: CertificationPrerequisitesSchema,
  whatIsIncluded: CertificationWhatIsIncludedSchema,
  curriculum: CertificationCurriculumSchema,
  translationNS: I18NNamespaceSchema,
});

export type CourseContentProps = Omit<
  z.infer<typeof CourseContentPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para el componente CourseCurriculum
export const CourseCurriculumPropsSchema = z.object({
  curriculum: CertificationCurriculumSchema,
  translationNS: I18NNamespaceSchema,
});
export type CourseCurriculumProps = Omit<
  z.infer<typeof CourseCurriculumPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para el componente BookingProcess
export const BookingProcessPropsSchema = z.object({
  bookingProcess: z.object({
    titleKey: z.string(),
    steps: z.array(
      z.object({
        icon: z.string(),
        nameKey: z.string(),
        descriptionKey: z.string(),
      })
    ),
  }),
  translationNS: I18NNamespaceSchema,
});
export type BookingProcessProps = Omit<
  z.infer<typeof BookingProcessPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para la nueva sección de experiencias relacionadas
export const RelatedExperiencesPropsSchema = z.object({
  titleKey: z.string(),
  sessions: z.array(z.custom<ExperienceSessionContent>()),
  translationNS: I18NNamespaceSchema,
});

export type RelatedExperiencesProps = Omit<
  z.infer<typeof RelatedExperiencesPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};
