// src/content/pages/dive-sites/types.ts
import { z } from 'zod';
import { SEOPropsSchema } from '../../../components/common/types';
import { PageHeaderPropsSchema } from '../../../components/sections/shared/types';

export const DiveSitesPageContentSchema = z.object({
  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
});

export type DiveSitesPageContent = z.infer<typeof DiveSitesPageContentSchema>;
