// src/content/pages/contact/types.ts
import { z } from 'zod';
import { SEOPropsSchema } from '../../../components/common/types';
import { PageHeaderPropsSchema } from '../../../components/sections/shared/types';
import { ContactSectionPropsSchema } from '../../../components/sections/contact/types';

export const ContactPageContentSchema = z.object({
  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
  contactInfo: ContactSectionPropsSchema,
});

export type ContactPageContent = z.infer<typeof ContactPageContentSchema>;
