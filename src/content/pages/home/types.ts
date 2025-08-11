// src/content/pages/home/types.ts
import { z } from 'zod';
import {
  AlliesContentSchema,
  FeaturedSectionPropsSchema,
  HeroSectionPropsSchema,
  PrinciplesSectionPropsSchema,
  TestimonialsSectionPropsSchema,
} from '../../../components/sections/home/types';
import { CtaSectionPropsSchema } from '../../../components/sections/shared/types';

import { SEOPropsSchema } from '../../../components/common/types';

export type RawCardData = {
  readonly id: string;
  readonly titleKey: string;
  readonly subtitleKey?: string;
  readonly imageData: ImageData;
};

export const HomePageContentSchema = z.object({
  seo: SEOPropsSchema,
  hero: HeroSectionPropsSchema,
  featured: FeaturedSectionPropsSchema,
  principles: PrinciplesSectionPropsSchema,
  testimonials: TestimonialsSectionPropsSchema,
  allies: AlliesContentSchema,
  cta: CtaSectionPropsSchema,
});

export type HomePageContent = z.infer<typeof HomePageContentSchema>;
