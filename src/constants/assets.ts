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

export type AssetItem = {
  url: string;
  altKey: string;
};

export type MainLogo = BrandAssets['mainLogo'];
export type ComplementaryLogos = BrandAssets['complementaryLogos'];
export type Seals = BrandAssets['seals'];

export type ComplementaryLogoKey = keyof ComplementaryLogos;
export type SealKey = keyof Seals;

export type AssetURL =
  | MainLogo['url']
  | ComplementaryLogos[ComplementaryLogoKey]['url']
  | Seals[SealKey]['url'];

export type AssetAltKey =
  | MainLogo['altKey']
  | ComplementaryLogos[ComplementaryLogoKey]['altKey']
  | Seals[SealKey]['altKey'];

export function getAsset<
  G extends BrandAssetGroup,
  K extends keyof BrandAssets[G]
>(group: G, key: K): BrandAssets[G][K] {
  return BRAND_ASSETS[group][key];
}
