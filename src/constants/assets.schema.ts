// src/constants/assets.schema.ts
import { z } from 'zod';

/** Regla simple para validar rutas de assets */
const looksLikeAssetUrl = (s: string) => s.startsWith('/images/');

/** Branded types para URLs y altKeys */
export const AssetURLSchema = z
  .string()
  .refine(looksLikeAssetUrl, 'AssetURL must start with /images/')
  .brand<'AssetURL'>();

export const AssetAltKeySchema = z.string().min(1).brand<'AssetAltKey'>();

export type AssetURL = z.infer<typeof AssetURLSchema>;
export type AssetAltKey = z.infer<typeof AssetAltKeySchema>;

/** Item básico (url + altKey) */
export const BrandAssetItemSchema = z.object({
  url: AssetURLSchema,
  altKey: AssetAltKeySchema,
});

/** Esquema completo de assets de marca */
export const BrandAssetsSchema = z.object({
  mainLogo: BrandAssetItemSchema,
  complementaryLogos: z.object({
    padi: BrandAssetItemSchema,
  }),
  seals: z.object({
    soldOut: BrandAssetItemSchema,
  }),
});

export type BrandAssets = z.infer<typeof BrandAssetsSchema>;
export type BrandAssetGroup = keyof BrandAssets;
export type MainLogo = BrandAssets['mainLogo'];
export type ComplementaryLogos = BrandAssets['complementaryLogos'];
export type Seals = BrandAssets['seals'];
export type ComplementaryLogoKey = keyof ComplementaryLogos;
export type SealKey = keyof Seals;

/** Datos crudos (fuente de verdad) */
export const BRAND_ASSETS_RAW = {
  mainLogo: {
    url: '/images/logos/logo.png',
    altKey: 'mainLogoAlt',
  },

  complementaryLogos: {
    padi: {
      url: '/images/logos/padi-logo.png',
      altKey: 'padiLogoAlt',
    },
  },

  seals: {
    soldOut: {
      url: '/images/logos/sold-out-logo.png',
      altKey: 'soldOutSealAlt',
    },
  },
} as const;

/**
 * Validación runtime para obtener una versión “segura”.
 * - Tipos brand aplicados a las URLs/altKeys
 * - Estructura validada por Zod
 */
export const BRAND_ASSETS_SAFE = BrandAssetsSchema.parse(BRAND_ASSETS_RAW);

/** Helpers para castear/validar valores sueltos */
export const toAssetUrl = (v: unknown): AssetURL => AssetURLSchema.parse(v);
export const toAssetAltKey = (v: unknown): AssetAltKey =>
  AssetAltKeySchema.parse(v);

/**
 * Acceso tipado a un asset específico (sobre la versión segura).
 * Ej: getAsset('complementaryLogos', 'padi')
 */
export function getAsset<
  G extends BrandAssetGroup,
  K extends keyof BrandAssets[G]
>(group: G, key: K): BrandAssets[G][K] {
  return BRAND_ASSETS_SAFE[group][key];
}
