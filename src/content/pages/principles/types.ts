import { z } from 'zod';
import {
  SEOPropsSchema,
  ImageComponentDataSchema,
} from '../../../components/common/types';
import {
  PageHeaderPropsSchema,
  ImagePositionSchema,
} from '../../../components/sections/shared/types';

export const PrincipleItemSchema = z.object({
  id: z.string().min(1),
  titleKey: z.string().min(1),
  descriptionKey: z.string().min(1),
  imageData: ImageComponentDataSchema,
  imagePosition: ImagePositionSchema,
});
export type PrincipleItem = z.infer<typeof PrincipleItemSchema>;

export const PrinciplesPageContentSchema = z.object({
  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
  principles: z.array(PrincipleItemSchema).min(1),
});
export type PrinciplesPageContent = z.infer<typeof PrinciplesPageContentSchema>;
