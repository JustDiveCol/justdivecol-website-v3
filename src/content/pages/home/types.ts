// src/content/pages/home/types.ts

import type {
  AlliesContent,
  FeaturedContent,
  HeroContent,
  PrinciplesContent,
  TestimonialsContent,
} from '../../../components/sections/home/types';
import type { CtaContent } from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

// OK
export type HomePageContent = {
  seo: SEOContent;
  hero: HeroContent;
  featured: FeaturedContent;
  principles: PrinciplesContent;
  testimonials: TestimonialsContent;
  allies: AlliesContent;
  cta: CtaContent;
};
