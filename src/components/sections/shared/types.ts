// src/components/sections/shared/types.ts
import type { I18NNamespace } from '../../../constants/i18n';
import type { ButtonContent } from '../../../content/types';
import type { ExperienceId } from '../../../lib/db/constants';
import type { ImageComponentData } from '../../common/types';

// ––– Specific –––

// OK
export type PrincipleCardData = {
  id: string;
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
  photoCredit?: string;
  complementaryLogo?: {
    url: string;
    altKey: string;
  };
};

// OK
export type TestimonialData = {
  id: number;
  quoteKey: string;
  name: string;
  originKey: ExperienceId;
  rating: number;
  avatarUrl: string;
};

// OK
export type PageHeaderContent = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
};

// OK
export type PrincipleDetailContent = {
  id: string;
  titleKey: string;
  textKey: string;
  imageData: ImageComponentData;
  imagePosition: 'left' | 'right';
};

// OK
export type CtaContent = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  backgroundImageUrl: string;
  button: Omit<ButtonContent, 'children'> & { textKey: string };
  hubspotFormTitle: string;
};

// OK
export type TeamMemberData = {
  id: string;
  name: string;
  roleKey: string;
  bioKey: string;
  imageUrl: string;
};

// OK
export type PointData = {
  textKey: string;
  titleKey?: string;
  subpoints?: string[];
};

// OK
export type SectionData = {
  id: string;
  titleKey: string;
  points: PointData[];
};

// OK
export type LegalContentContent = {
  sections: SectionData[];
  translationNS: I18NNamespace;
};
