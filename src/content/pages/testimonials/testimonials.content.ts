import { toAssetUrl } from '../../../constants';
import {
  TestimonialsSectionContentSchema,
  type TestimonialsSectionContent,
} from './types';

const rawTestimonials: TestimonialsSectionContent = {
  titleKey: 'testimonials.title',
  translationNS: 'testimonials',
  items: [
    {
      id: 't1',
      quoteKey: 'testimonials.quote1',
      name: 'Sunny Velez',
      originKey: 'testimonials.origin1',
      pagePosition: ['home'],
      rating: 5,
      dateISO: '2024-11-07',
      avatarUrl: toAssetUrl('/images/testimonials/avatar-1.webp'),
      certificationId: 'padi-open-water-diver',
      featured: true,
      verified: true,
    },
  ],
};

export const testimonialsContent =
  TestimonialsSectionContentSchema.parse(rawTestimonials);
