// src/content/pages/home/types.ts
import { z } from 'zod';
import {
  AlliesContentSchema,
  FeaturedSectionPropsSchema,
  HeroSectionPropsSchema,
  PrinciplesSectionPropsSchema,
} from '../../../components/sections/home/types';
import { CtaSectionPropsSchema } from '../../../components/sections/shared/types';

import { SEOPropsSchema } from '../../../components/common/types';
import { TestimonialsSectionContentSchema } from '../testimonials/types';

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
  testimonials: TestimonialsSectionContentSchema,
  allies: AlliesContentSchema,
  cta: CtaSectionPropsSchema,
});

export type HomePageContent = z.infer<typeof HomePageContentSchema>;
