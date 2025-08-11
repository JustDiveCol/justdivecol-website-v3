// src/constants/site.schema.ts
import { z } from 'zod';

export const SITE_NAME_RAW = 'JustDiveCol' as const;
export const SITE_URL_RAW = 'https://www.justdivecol.com' as const;
export const DEFAULT_SOCIAL_IMAGE_RAW =
  '/images/social/default-social-image.jpg' as const;

export const SiteNameSchema = z.literal(SITE_NAME_RAW);
export const SiteUrlSchema = z.literal(SITE_URL_RAW);
export const DefaultSocialImageSchema = z.literal(DEFAULT_SOCIAL_IMAGE_RAW);

export type SiteName = z.infer<typeof SiteNameSchema>;
export type SiteUrl = z.infer<typeof SiteUrlSchema>;
export type DefaultSocialImage = z.infer<typeof DefaultSocialImageSchema>;

export const SITE_NAME_SAFE = SiteNameSchema.parse(SITE_NAME_RAW);
export const SITE_URL_SAFE = SiteUrlSchema.parse(SITE_URL_RAW);
export const DEFAULT_SOCIAL_IMAGE_SAFE = DefaultSocialImageSchema.parse(
  DEFAULT_SOCIAL_IMAGE_RAW
);

export const toSiteName = (v: unknown): SiteName => SiteNameSchema.parse(v);
export const toSiteUrl = (v: unknown): SiteUrl => SiteUrlSchema.parse(v);
export const toDefaultSocialImage = (v: unknown): DefaultSocialImage =>
  DefaultSocialImageSchema.parse(v);
