// src/content/pages/about-us/types.ts
import type {
  MissionSectionContent,
  TeamSectionContent,
} from '../../../components/sections/about/types';
import type { PageHeaderContent } from '../../../components/sections/shared/types';
import type { SEOContent } from '../../types';

// OK
export type AboutUsPageContent = {
  seo: SEOContent;
  header: PageHeaderContent;
  mission: MissionSectionContent;
  team: TeamSectionContent;
};
