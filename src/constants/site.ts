// src/constants/site.ts
import { z } from 'zod';

export const SITE_NAME = 'JustDiveCol' as const;
export const SITE_URL = 'https://www.justdivecol.com' as const;
export const DEFAULT_SOCIAL_IMAGE =
  '/images/social/default-social-image.jpg' as const;

export const SiteNameSchema = z.literal(SITE_NAME);
export const SiteUrlSchema = z.literal(SITE_URL);
export const DefaultSocialImageSchema = z.literal(DEFAULT_SOCIAL_IMAGE);

export type SiteName = typeof SITE_NAME;
export type SiteUrl = typeof SITE_URL;
export type DefaultSocialImage = typeof DEFAULT_SOCIAL_IMAGE;
