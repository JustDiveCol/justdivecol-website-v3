// src/constants/social.schema.ts
import { z } from 'zod';

export const SOCIAL_TYPES_RAW = ['instagram', 'tiktok', 'youtube'] as const;

export const SOCIAL_RAW = [
  {
    type: 'instagram',
    name: 'Instagram',
    path: 'https://www.instagram.com/justdivecol/',
  },
  {
    type: 'youtube',
    name: 'YouTube',
    path: 'https://www.youtube.com/@JustDiveCol',
  },
  {
    type: 'tiktok',
    name: 'TikTok',
    path: 'https://www.tiktok.com/@just.dive.col',
  },
] as const;

export const SocialTypeSchema = z.enum(SOCIAL_TYPES_RAW);

export const SocialSchema = z.object({
  type: SocialTypeSchema,
  name: z.string().min(1),
  path: z.string().url(),
});

export const SocialListSchema = z.array(SocialSchema).min(1);

export type SocialType = z.infer<typeof SocialTypeSchema>;
export type Social = z.infer<typeof SocialSchema>;
export type SocialList = z.infer<typeof SocialListSchema>;

export const SOCIAL_TYPES_SAFE = z
  .array(SocialTypeSchema)
  .parse(SOCIAL_TYPES_RAW);
export const SOCIAL_SAFE = SocialListSchema.parse(SOCIAL_RAW);

export const toSocialType = (v: unknown): SocialType =>
  SocialTypeSchema.parse(v);

export const getSocialByType = (type: SocialType) =>
  SOCIAL_SAFE.find((s) => s.type === type);
