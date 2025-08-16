// src/pages/Home/HomePage.tsx
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/sections/home/HeroSection';
import { FeaturedSection } from '../components/sections/home/FeaturedSection';
import { PrinciplesSection } from '../components/sections/home/PrinciplesSection';
import { TestimonialsSection } from '../components/sections/shared/TestimonialsSection';
import { AlliesSection } from '../components/sections/home/AlliesSection';
import { CtaSection } from '../components/sections/shared/CtaSection';

import { homeContent } from '../content/pages/home/home.content';

export const HomePage = () => {
  return (
    <>
      <SEO {...homeContent.seo} />

      <HeroSection {...homeContent.hero} />
      <FeaturedSection {...homeContent.featured} />
      <PrinciplesSection {...homeContent.principles} />
      <TestimonialsSection {...homeContent.testimonials} />
      <AlliesSection {...homeContent.allies} />
      <CtaSection {...homeContent.cta} />
    </>
  );
};
