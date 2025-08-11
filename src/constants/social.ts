// src/constants/social.ts
import { z } from 'zod';

/** ——— Social types ——— */
export const SOCIAL_TYPES = ['instagram', 'tiktok', 'youtube'] as const;
export const SocialTypeSchema = z.enum(SOCIAL_TYPES);
export type SocialType = z.infer<typeof SocialTypeSchema>;

/** ——— Social item ——— */
export const SocialSchema = z.object({
  type: SocialTypeSchema,
  name: z.string().min(1),
  path: z.url(),
});
export type Social = z.infer<typeof SocialSchema>;

/** ——— Social list (datos del sitio) ——— */
export const SOCIAL = [
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
] as const satisfies readonly Social[];

/** Validado en runtime (opcional, pero útil) */
export const SOCIAL_SAFE = z.array(SocialSchema).parse(SOCIAL);

/** Helper opcional */
export const getSocialByType = (type: SocialType) =>
  SOCIAL_SAFE.find((s) => s.type === type);
