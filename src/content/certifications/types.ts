// src/content/certifications/types.ts
import type { ImageComponentData } from '../../components/common/types';
import type { PageContent } from '../types';

export interface CertificationContent extends PageContent {
  card: {
    imageData: ImageComponentData;
  };
  details: {
    titleKey: string;
    durationKey: string;
    items: { labelKey: string; valueKey: string }[];
  };
  curriculum: {
    titleKey: string;
    modules: { id: string; nameKey: string; descriptionKey: string }[];
  };
  whatIsIncluded: {
    titleKey: string;
    items: string[];
  };
}
