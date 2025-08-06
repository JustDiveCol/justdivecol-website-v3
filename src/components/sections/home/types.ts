// src/pages/Home/types.ts
import type { PrincipleCardData, TestimonialData } from '../shared/types';
import type { I18NNamespace } from '../../../constants/i18n';
import type { UrlPath } from '../../../constants/routes';
import type { ButtonProps } from '../../common/types';

export type ImageData = {
  backgroundImage: string;
  complementaryLogo?: {
    url: string;
    altKey: string;
  };
  photoCredit: string;
};

export type CardData = {
  id: string;
  link: UrlPath;
  titleKey: string;
  subtitleKey?: string;
  imageData: ImageData;
};

export type Ally = {
  id: string;
  name: string;
  logoUrl: string;
  link?: string;
};

// Sections
export interface HeroSectionProps {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  button: Omit<ButtonProps, 'children'> & { textKey: string };
  imageData: ImageData;
}

export interface FeaturedSectionProps {
  titleKey: string;
  translationNS: I18NNamespace;
  cards: CardData[];
}

export interface PrinciplesSectionProps {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  cards: PrincipleCardData[];
}

export interface TestimonialsSectionProps {
  titleKey: string;
  translationNS: I18NNamespace;
  items: TestimonialData[];
}

export interface AlliesSectionProps {
  titleKey: string;
  translationNS: I18NNamespace;
  logos: Ally[];
}
