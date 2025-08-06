// src/pages/Home/HomePage.tsx
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/sections/home/HeroSection';
import { FeaturedSection } from '../components/sections/home/FeaturedSection';
import { PrinciplesSection } from '../components/sections/home/PrinciplesSection';
import { TestimonialsSection } from '../components/sections/home/TestimonialsSection';
import { AlliesSection } from '../components/sections/home/AlliesSection';
import { CtaSection } from '../components/sections/shared/CtaSection';

import { homePageData } from '../data/homePageData';

export const HomePage = () => {
  return (
    <>
      <SEO {...homePageData.seo} />

      <HeroSection {...homePageData.hero} />
      <FeaturedSection {...homePageData.featured} />
      <PrinciplesSection {...homePageData.principles} />
      <TestimonialsSection {...homePageData.testimonials} />
      <AlliesSection {...homePageData.allies} />
      <CtaSection {...homePageData.cta} />
    </>
  );
};
