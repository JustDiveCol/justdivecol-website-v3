import type { PageContent } from '../types';

export interface ExperienceContent extends PageContent {
  itinerary: {
    titleKey: string;
    days: { day: number; titleKey: string; descriptionKey: string }[];
    notes: string[];
  };
  whatIsIncluded: {
    titleKey: string;
    items: string[];
  };
  whatIsNotIncluded: {
    titleKey: string;
    items: string[];
  };
}
