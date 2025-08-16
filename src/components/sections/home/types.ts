// src/pages/Home/types.ts
import { z } from 'zod';
import {
  I18NNamespaceSchema,
  type I18NNamespace,
} from '../../../constants/i18n.schema';

import { UrlPathSchema, type UrlPath } from '../../../content/urlPathSchema';
import {
  ComplementaryLogoSchema,
  ContentButtonSchema,
  ImageComponentDataSchema,
} from '../../common/types';

// ––– AlliesSection –––
export const AllyLogoSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  logoUrl: z.string().min(1),
  link: z.url().optional(),
});
export type AllyLogo = z.infer<typeof AllyLogoSchema>;

export const AlliesContentSchema = z.object({
  titleKey: z.string().min(1),
  translationNS: I18NNamespaceSchema,
  logos: z.array(AllyLogoSchema).min(1),
});
export type AlliesContent = Omit<
  z.infer<typeof AlliesContentSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// ––– FeaturedSection –––
export const CardDataSchema = z.object({
  id: z.string().min(1),
  titleKey: z.string().min(1),
  subtitleKey: z.string().min(1).optional(),
  link: UrlPathSchema,
  imageData: ImageComponentDataSchema,
});
export type CardData = Omit<z.infer<typeof CardDataSchema>, 'link'> & {
  link: UrlPath;
};

export const FeaturedCardPropsSchema = z.object({
  cardData: CardDataSchema,
  className: z.string().optional(),
  translationNS: I18NNamespaceSchema,
});
export type FeaturedCardProps = Omit<
  z.infer<typeof FeaturedCardPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

export const FeaturedSectionPropsSchema = z.object({
  titleKey: z.string().min(1),
  translationNS: I18NNamespaceSchema,
  cards: z.array(CardDataSchema).min(1),
});
export type FeaturedSectionProps = Omit<
  z.infer<typeof FeaturedSectionPropsSchema>,
  'cards' | 'translationNS'
> & {
  cards: CardData[];
  translationNS: I18NNamespace;
};

// ––– HeroSection –––
export const HeroImageDataSchema = z.object({
  backgroundImage: z.string().min(1),
  photoCredit: z.string().min(1).optional(),
});

export const HeroSectionPropsSchema = z.object({
  titleKey: z.string().min(1),
  subtitleKey: z.string().min(1),
  translationNS: I18NNamespaceSchema,
  button: ContentButtonSchema,
  imageData: HeroImageDataSchema,
});

export type HeroImageData = z.infer<typeof HeroImageDataSchema>;
export type HeroButton = z.infer<typeof ContentButtonSchema>;
export type HeroSectionProps = Omit<
  z.infer<typeof HeroSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// ––– PrinciplesSection –––
const PrincipleCardDataSchema = z.object({
  id: z.string().min(1),
  imageUrl: z.string().min(1),
  titleKey: z.string().min(1),
  descriptionKey: z.string().min(1),
  photoCredit: z.string().optional(),
  complementaryLogo: ComplementaryLogoSchema.optional(),
});
export type PrincipleCardData = z.infer<typeof PrincipleCardDataSchema>;

export const PrincipleCardPropsSchema = z.object({
  cardData: PrincipleCardDataSchema,
  translationNS: I18NNamespaceSchema,
});
export type PrincipleCardProps = Omit<
  z.infer<typeof PrincipleCardPropsSchema>,
  'translationNS'
> & { translationNS: I18NNamespace };

export const PrinciplesSectionPropsSchema = z.object({
  titleKey: z.string().min(1),
  subtitleKey: z.string().min(1),
  translationNS: I18NNamespaceSchema,
  cards: z.array(PrincipleCardDataSchema).min(1),
});
export type PrinciplesSectionProps = Omit<
  z.infer<typeof PrinciplesSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};
