// src/content/destinations/types.ts
import type { ImageComponentData } from '../../components/common/types';
import type { PageContent } from '../types';

export interface DestinationContent extends PageContent {
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
}
