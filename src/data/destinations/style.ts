// src/data/destinations/style.ts
import type { ImageComponentData } from '../../components/common/types';
import type { PageContent } from '../../types/data';

export interface Destination extends PageContent {
  country: string;
  coords: [number, number];
  minZoom: number;
  maxZoom: number;
  card: {
    imageData: ImageComponentData;
  };
  details: {
    titleKey: string;
    items: { labelKey: string; valueKey: string }[];
  };
  uniqueFinds: {
    titleKey: string;
    items: string[];
  };
  experienceIds: string[];
  diveSiteIds: string[];
}
