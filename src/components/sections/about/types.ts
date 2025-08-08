// src/components/sections/about/types.ts
import type { I18NNamespace } from '../../../constants/i18n';
import type { ImageComponentData } from '../../common/types';
import type { TeamMemberData } from '../shared/types';

// ––– XX –––

// OK
export type MissionSectionContent = {
  titleKey: string;
  textKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
};

// OK
export type TeamSectionContent = {
  titleKey: string;
  members: TeamMemberData[];
  translationNS: I18NNamespace;
};

// OK
export type TeamCardProps = {
  memberData: TeamMemberData;
  className?: string;
  translationNS: I18NNamespace;
};
