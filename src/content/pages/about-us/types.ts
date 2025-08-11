// src/content/pages/about-us/types.ts
import { z } from 'zod';
import { SEOPropsSchema } from '../../../components/common/types';
import { PageHeaderPropsSchema } from '../../../components/sections/shared/types';
import {
  MissionSectionPropsSchema,
  TeamSectionPropsSchema,
} from '../../../components/sections/about/types';

export const AboutUsPageContentSchema = z.object({
  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
  mission: MissionSectionPropsSchema,
  team: TeamSectionPropsSchema,
});

export type AboutUsPageContent = z.infer<typeof AboutUsPageContentSchema>;
