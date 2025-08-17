// src/components/sections/diveExperiences/types.ts
import { z } from 'zod';
import {
  I18NNamespaceSchema,
  type I18NNamespace,
} from '../../../constants/i18n.schema';
import {
  ContentButtonSchema,
  ImageComponentDataSchema,
} from '../../common/types';
import { AssetURLSchema } from '../../../constants';

export const UpcomingTripsSectionPropsSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  backgroundImageUrl: AssetURLSchema,
  translationNS: I18NNamespaceSchema,
  filtersAllDestinationsKey: z.string(),
  filtersAllMonthsKey: z.string(),
  filtersNoResultsKey: z.string(),
});
export type UpcomingTripsSectionProps = Omit<
  z.infer<typeof UpcomingTripsSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

export const CertificationsSectionPropsSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: I18NNamespaceSchema,
});
export type CertificationsSectionProps = Omit<
  z.infer<typeof CertificationsSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

export const BenefitsDataSchema = z.object({
  id: z.string(),
  textKey: z.string(),
});
export type BenefitsData = z.infer<typeof BenefitsDataSchema>;

export const DestinationsSectionPropsSchema = z.object({
  titleKey: z.string(),
  otherTitleKey: z.string(),
  translationNS: I18NNamespaceSchema,
});
export type DestinationsSectionProps = Omit<
  z.infer<typeof DestinationsSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

export const CustomTripsSectionPropsSchema = z.object({
  titleKey: z.string(),
  textKey: z.string(),
  translationNS: I18NNamespaceSchema,
  imageData: ImageComponentDataSchema,
  ctaButton: ContentButtonSchema,
  benefits: z.array(BenefitsDataSchema),
});
export type CustomTripsSectionProps = Omit<
  z.infer<typeof CustomTripsSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};
