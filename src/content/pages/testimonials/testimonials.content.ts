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
      originKey: 'Curaçao 2024',
      pagePosition: ['home'],
      rating: 5,
      dateISO: '2024-11-07',
      avatarUrl: toAssetUrl('/images/testimonials/avatar-1.webp'),
      certificationId: 'padi-open-water-diver',
      featured: true,
      verified: true,
    },
    {
      id: 't2',
      quoteKey: 'testimonials.quote2',
      name: 'Carlos Gómez',
      originKey: 'providencia-ago-2025',
      pagePosition: ['home'],
      rating: 5,
      dateISO: '2025-08-05',
      avatarUrl: toAssetUrl('/images/testimonials/avatar-2.webp'),
      certificationId: 'padi-advanced-open-water-diver',
      featured: false,
      verified: true,
    },
    {
      id: 't3',
      quoteKey: 'testimonials.quote3',
      name: 'Emily Johnson',
      originKey: 'cartagena-jul-2025',
      pagePosition: ['destinations'],
      rating: 4,
      dateISO: '2025-07-20',
      avatarUrl: toAssetUrl('/images/testimonials/avatar-3.webp'),
      certificationId: 'padi-rescue-diver',
      featured: false,
      verified: true,
    },
  ],
};

export const testimonialsContent =
  TestimonialsSectionContentSchema.parse(rawTestimonials);
