// src/content/pages/legal/types.ts
import { z } from 'zod';
import { SEOPropsSchema } from '../../../components/common/types';
import {
  LegalContentPropsSchema,
  PageHeaderPropsSchema,
} from '../../../components/sections/shared/types';

export const LegalPageContentSchema = z.object({
  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
  content: LegalContentPropsSchema,
});

export type LegalPageContent = z.infer<typeof LegalPageContentSchema>;
