// src/components/sections/about/types.ts
import type { I18NNamespace } from '../../../constants/i18n';
import type { ImageComponentData } from '../../common/types';
import type { TeamMember } from '../shared/types';

// ––– XX –––
export interface MissionSectionContent {
  titleKey: string;
  textKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
}

export interface TeamSectionContent {
  titleKey: string;
  members: TeamMember[];
  translationNS: I18NNamespace;
}

export interface TeamCardProps {
  memberData: TeamMember;
  className?: string;
  translationNS: I18NNamespace;
}
