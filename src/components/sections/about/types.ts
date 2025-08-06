// src/components/sections/about/types.ts
import type { I18NNamespace } from '../../../constants/i18n';
import type { ImageComponentData } from '../../common/types';
import type { TeamMember } from '../shared/types';

export interface MissionSectionProps {
  titleKey: string;
  textKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
}

export interface TeamSectionProps {
  titleKey: string;
  members: TeamMember[];
  translationNS: I18NNamespace;
}

export interface TeamCardProps {
  memberData: TeamMember;
  className?: string;
  translationNS: I18NNamespace;
}
