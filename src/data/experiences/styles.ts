// src/data/experiences/styles.ts
import type { DestinationId } from '../../constants/destinations';
import type { UrlPath } from '../../constants/routes';
import type { PageContent } from '../../types/data';
import type { CertificationId } from '../certifications';
import type { ExperienceSession } from '../sessions/styles';

export interface Experience extends PageContent {
  destinationId: DestinationId;
  certificationIds: CertificationId[];
  sessionIds: string[];
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

export interface ExperienceSessionPageData {
  experience: Experience;
  session: ExperienceSession;
  urlPath: UrlPath;
}
