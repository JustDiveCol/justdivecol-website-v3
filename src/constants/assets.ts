// src/constants/assets.ts

// 1) Definición de constantes “congeladas” para inferencia literal
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
    // ... añade más logos complementarios aquí
  },

  seals: {
    soldOut: {
      url: '/images/logos/sold-out-logo.png',
      altKey: 'soldOutSealAlt',
    },
    // ... añade más seals aquí
  },
} as const;

// 2) Tipado derivado automáticamente
export type BrandAssets = typeof BRAND_ASSETS;

/** Grupos principales de assets: 'mainLogo' | 'complementaryLogos' | 'seals' */
export type BrandAssetGroup = keyof BrandAssets;

/** Item genérico de asset */
export type AssetItem = {
  url: string;
  altKey: string;
};

/** Tipo del logo principal */
export type MainLogo = BrandAssets['mainLogo'];

/** Mapa de logos complementarios */
export type ComplementaryLogos = BrandAssets['complementaryLogos'];

/** Mapa de seals */
export type Seals = BrandAssets['seals'];

/** Clave para cada logo complementario, e.g. 'padi' */
export type ComplementaryLogoKey = keyof ComplementaryLogos;

/** Clave para cada seal, e.g. 'soldOut' */
export type SealKey = keyof Seals;

/** Unión de todas las URLs disponibles en los assets */
export type AssetURL =
  | MainLogo['url']
  | ComplementaryLogos[ComplementaryLogoKey]['url']
  | Seals[SealKey]['url'];

/** Unión de todas las claves alt disponibles en los assets */
export type AssetAltKey =
  | MainLogo['altKey']
  | ComplementaryLogos[ComplementaryLogoKey]['altKey']
  | Seals[SealKey]['altKey'];

// 3) (Opcional) Helper genérico para obtener un asset por grupo y clave
export function getAsset<
  G extends BrandAssetGroup,
  K extends keyof BrandAssets[G]
>(group: G, key: K): BrandAssets[G][K] {
  return BRAND_ASSETS[group][key];
}
