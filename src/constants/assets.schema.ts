// src/constants/assets.schema.ts
import { z } from 'zod';
import { BRAND_ASSETS } from './assets';

// Regla simple para validar rutas de assets
const looksLikeAssetUrl = (s: string) => s.startsWith('/images/');

// Branded types (con nombres distintos para NO chocar con assets.ts)
export const AssetURLSchema = z
  .string()
  .refine(looksLikeAssetUrl, 'AssetURL must start with /images/')
  .brand<'AssetURL'>();

export const AssetAltKeySchema = z.string().min(1).brand<'AssetAltKey'>();

export type AssetURLBranded = z.infer<typeof AssetURLSchema>;
export type AssetAltKeyBranded = z.infer<typeof AssetAltKeySchema>;

// Item (url + altKey)
export const BrandAssetItemSchema = z.object({
  url: AssetURLSchema,
  altKey: AssetAltKeySchema,
});

// Estructura completa que valida tu objeto BRAND_ASSETS actual
export const BrandAssetsSchema = z.object({
  mainLogo: BrandAssetItemSchema,
  complementaryLogos: z.object({
    padi: BrandAssetItemSchema,
  }),
  seals: z.object({
    soldOut: BrandAssetItemSchema,
  }),
});

// Validación runtime del objeto actual (opcional pero recomendable)
export const BRAND_ASSETS_SAFE = BrandAssetsSchema.parse(BRAND_ASSETS);

// ✅ Helpers para “brandear” strings en contenido
export const toAssetUrl = (v: string): AssetURLBranded =>
  AssetURLSchema.parse(v);

export const toAssetAltKey = (v: string): AssetAltKeyBranded =>
  AssetAltKeySchema.parse(v);
