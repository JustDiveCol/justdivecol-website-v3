// src/components/sections/shared/types.ts
import type { I18NNamespace } from '../../../constants/i18n';
import type { AvailableType } from '../../../constants/ui';
import type { Certification } from '../../../data/certifications/types';
import type { Destination } from '../../../data/destinations/style';
import type { ExperienceId } from '../../../data/experiences';
import type { Experience } from '../../../data/experiences/styles';
import type { ButtonProps, ImageComponentData } from '../../common/types';
import type { CardData } from '../home/types';

export type PrincipleDetail = {
  id: string;
  titleKey: string;
  textKey: string;
  imageData: ImageComponentData;
  imagePosition: 'left' | 'right';
};

export type TeamMember = {
  id: string;
  name: string;
  roleKey: string;
  bioKey: string;
  imageUrl: string;
};

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

export type CtaButtonData = Omit<ButtonProps, 'children'> & {
  textKey: string;
};

export type TestimonialData = {
  id: number;
  quoteKey: string;
  name: string;
  originKey: ExperienceId;
  rating: number;
  avatarUrl: string;
};

export type PointData = {
  textKey?: string;
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
  featureData: PrincipleDetail;
  translationNS: I18NNamespace;
}

export interface CertificationCardProps {
  certificationData: Certification;
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

export type CtaSectionProps = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  backgroundImageUrl: string;
  button: Omit<ButtonProps, 'children'> & { textKey: string };
  hubspotFormTitle: string;
};

export interface DestinationPillProps {
  destination: Destination;
  translationNS: I18NNamespace;
}

export interface FeaturedCardProps {
  cardData: CardData;
  className?: string;
  translationNS?: I18NNamespace;
}

export interface LegalContentProps {
  sections: SectionData[];
  translationNS: I18NNamespace;
}

export interface PageHeaderProps {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
}
