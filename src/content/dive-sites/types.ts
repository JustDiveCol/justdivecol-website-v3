// src/content/dive-sites/types.ts
import type { ImageComponentData } from '../../components/common/types';

// OK
export type DiveSiteContent = {
  nameKey: string;
  descriptionKey: string;
  markerIcon: string;
  gallery?: {
    titleKey: string;
    images: ImageComponentData[];
  };
};
