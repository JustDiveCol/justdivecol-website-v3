// src/components/sections/experiences/types.ts
import { z } from 'zod';
import { I18NNamespaceSchema, type I18NNamespace } from '../../../constants';
import { type ResolvedExperienceForSession } from '../../../content/experiences';
import {
  ExperienceItineraryContentSchema,
  type ExperienceWhatIsIncluded,
} from '../../../content/experiences/types';
import type { DiveSitesSectionProps } from '../divesites/types';
import type {
  PaymentPlanSchema,
  PricingOptionSchema,
} from '../../../content/experiences/sessions/types';

export const SessionHeroPropsSchema = z.object({
  content: z.custom<ResolvedExperienceForSession>(),
  translationNS: I18NNamespaceSchema,
});

export type SessionHeroProps = Omit<
  z.infer<typeof SessionHeroPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

export const ExperienceItineraryPropsSchema = z.object({
  itinerary: ExperienceItineraryContentSchema.optional(),
  byPlan: z.record(z.string(), ExperienceItineraryContentSchema).optional(),
  planLabels: z.record(z.string(), z.string()).optional(),
  translationNS: I18NNamespaceSchema,
});

export type ExperienceItineraryProps = Omit<
  z.infer<typeof ExperienceItineraryPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

export const CertificationInclusionsForUISchema = z.object({
  nameKey: z.string(),
  whatIsIncluded: z.object({
    titleKey: z.string(),
    items: z.array(z.string()),
  }),
  url: z.url().optional(),
});
export type CertificationInclusionsForUI = z.infer<
  typeof CertificationInclusionsForUISchema
>;

export const ExperienceInclusionsPropsSchema = z.object({
  whatIsIncluded: z.custom<ExperienceWhatIsIncluded>(),
  whatIsNotIncluded: z.custom<ExperienceWhatIsIncluded>(),
  certificationInclusions: z
    .array(CertificationInclusionsForUISchema)
    .optional(),
  translationNS: I18NNamespaceSchema,
});
export type ExperienceInclusionsProps = Omit<
  z.infer<typeof ExperienceInclusionsPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

export const ExperienceDiveSitesPropsSchema = z.object({
  destinationName: z.string(),
  diveSitesSectionProps: z.custom<DiveSitesSectionProps>(),
});

export type ExperienceDiveSitesProps = z.infer<
  typeof ExperienceDiveSitesPropsSchema
>;

export const ExperiencePaymentPlanPropsSchema = z.object({
  paymentPlan: z.custom<z.infer<typeof PaymentPlanSchema>>(),
  pricingOptions: z.array(z.custom<z.infer<typeof PricingOptionSchema>>()),
  translationNS: I18NNamespaceSchema,
});

export type ExperiencePaymentPlanProps = z.infer<
  typeof ExperiencePaymentPlanPropsSchema
>;
