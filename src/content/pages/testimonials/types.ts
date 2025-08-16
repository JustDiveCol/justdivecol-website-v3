// src/content/pages/testimonials/types.ts
import { z } from 'zod';
import { I18NNamespaceSchema, type I18NNamespace } from '../../../constants';
import { TestimonialDataSchema } from '../../../components/sections/shared/types';

export const TestimonialsSectionContentSchema = z.object({
  titleKey: z.string().min(1),
  translationNS: I18NNamespaceSchema,
  items: z.array(TestimonialDataSchema).min(1),
});
export type TestimonialsSectionContent = Omit<
  z.infer<typeof TestimonialsSectionContentSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};
