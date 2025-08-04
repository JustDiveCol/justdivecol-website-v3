// src/constants/assets.ts

export const BRAND_ASSETS = {
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

export type BrandAssets = typeof BRAND_ASSETS;

export type BrandAssetGroup = keyof BrandAssets;

export type ComplementaryLogoKey = keyof BrandAssets['complementaryLogos'];

export type SealKey = keyof BrandAssets['seals'];

export type AssetAltKey =
  | BrandAssets['mainLogo']['altKey']
  | BrandAssets['complementaryLogos'][ComplementaryLogoKey]['altKey']
  | BrandAssets['seals'][SealKey]['altKey'];
