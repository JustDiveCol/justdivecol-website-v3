// src/content/footer/types.ts
import { z } from 'zod';
import { FOOTER_LINKS } from '../../constants/navigation.schema';

const footerPaths = FOOTER_LINKS.map((s) => s.path) as [string, ...string[]];
const footerNames = FOOTER_LINKS.map((s) => s.nameKey) as [string, ...string[]];

export const FooterSchema = z.object({
  path: z.enum(footerPaths),
  nameKey: z.enum(footerNames),
});

export type FooterLinkItem = z.infer<typeof FooterSchema>;

export const FooterContentSchema = z.object({
  sloganKey: z.string(),
  closingMessageKey: z.string(),
  copyrightKey: z.string(),
  creditsKey: z.string(),
  importantLinksTitle: z.string(),
  navLinks: z.array(FooterSchema).min(1).readonly(),
  policiesLinkText: z.string(), // ← lo mantenemos como string
});

export type FooterContent = z.infer<typeof FooterContentSchema>;
