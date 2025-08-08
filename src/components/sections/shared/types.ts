// src/components/sections/shared/types.ts
import type { ExperienceId } from '../../../constants/experiences';
import type { I18NNamespace } from '../../../constants/i18n';
import type { CertificationContent } from '../../../content/certifications/types';
import type { ButtonContent } from '../../../content/types';
import type { Destination } from '../../../data/destinations/style';
import type { Experience } from '../../../data/experiences/styles';
import type { AvailableType } from '../../../lib/db/constants';
import type { ImageComponentData } from '../../common/types';
import type { CardData } from '../home/types';

// ––– Specific –––

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

export type TestimonialData = {
  id: number;
  quoteKey: string;
  name: string;
  originKey: ExperienceId;
  rating: number;
  avatarUrl: string;
};

export type PageHeaderContent = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
};

export type PrincipleDetailData = {
  id: string;
  titleKey: string;
  textKey: string;
  imageData: ImageComponentData;
  imagePosition: 'left' | 'right';
};

export type CtaContent = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  backgroundImageUrl: string;
  button: Omit<ButtonContent, 'children'> & { textKey: string };
  hubspotFormTitle: string;
};

// ----------------------------

export type TeamMember = {
  id: string;
  name: string;
  roleKey: string;
  bioKey: string;
  imageUrl: string;
};

export type CtaButtonData = Omit<ButtonContent, 'children'> & {
  textKey: string;
};

export type PointData = {
  textKey: string;
  titleKey?: string;
  subpoints?: string[];
};

export type SectionData = {
  id: string;
  titleKey: string;
  points: PointData[];
};

export interface ActiveDestinationCardProps {
  destination: Destination;
  activeExperiences: Experience[];
  className?: string;
}

export interface AlternatingFeatureProps {
  featureData: PrincipleDetailData;
  translationNS: I18NNamespace;
}

export interface CertificationCardProps {
  certificationData: CertificationContent;
  availabilityStatus: AvailableType;
  className?: string;
}

export interface PrincipleCardProps {
  cardData: PrincipleCardData;
  translationNS?: I18NNamespace;
}

export interface TestimonialCardProps {
  cardData: TestimonialData;
  translationNS: I18NNamespace;
}

export interface DestinationPillProps {
  destination: Destination;
  translationNS: I18NNamespace;
}

export interface FeaturedCardProps {
  cardData: CardData;
  className?: string;
  translationNS?: I18NNamespace;
}

export type LegalContentContent = {
  sections: SectionData[];
  translationNS: I18NNamespace;
};
