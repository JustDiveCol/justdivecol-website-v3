// src/content/pages/not-found/types.ts
import { z } from 'zod';
import {
  ContentButtonSchema,
  SEOPropsSchema,
} from '../../../components/common/types';
import { I18NNamespaceSchema, type I18NNamespace } from '../../../constants';

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

export const NotFoundPageContentSchema = z.object({
  seo: SEOPropsSchema,
  hero: HeroSectionPropsSchema,
});

export type NotFoundPageContent = z.infer<typeof NotFoundPageContentSchema>;
