// src/content/pages/home/types.ts

import type {
  AlliesContent,
  FeaturedContent,
  HeroContent,
  PrinciplesContent,
  TestimonialsContent,
} from '../../../components/sections/home/types';
import type { CtaContent, SEOContent } from '../../types';

export type HomePageContent = {
  seo: SEOContent;
  hero: HeroContent;
  featured: FeaturedContent;
  principles: PrinciplesContent;
  testimonials: TestimonialsContent;
  allies: AlliesContent;
  cta: CtaContent;
};
