// src/data/certifications/types.ts
import type { ImageComponentData } from '../../components/common/types';
import type { AgencyType } from '../../constants/ui';
import type { PageContent } from '../../types/data';

export interface Certification extends PageContent {
  agency: AgencyType;
  prerequisiteIds: string[];
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
  requirements: {
    titleKey: string;
    items: string[];
  };
  whatIsIncluded: {
    titleKey: string;
    items: string[];
  };
}
