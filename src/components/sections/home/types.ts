// src/pages/Home/types.ts

import type { I18NNamespace } from '../../../constants/i18n';

import type { ButtonContent } from '../../../content/types';
import type { UrlPath } from '../../../content/urlPathSchema';
import type { PrincipleCardData, TestimonialData } from '../shared/types';

// ––– Specific –––
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

export type AllyData = {
  id: string;
  name: string;
  logoUrl: string;
  link?: string;
};

// ––– General –––

export type HeroContent = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  button: Omit<ButtonContent, 'children'> & { textKey: string };
  imageData: ImageData;
};

export type FeaturedContent = {
  titleKey: string;
  translationNS: I18NNamespace;
  cards: CardData[];
};

export type PrinciplesContent = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  cards: PrincipleCardData[];
};

export type TestimonialsContent = {
  titleKey: string;
  translationNS: I18NNamespace;
  items: TestimonialData[];
};

export type AlliesContent = {
  titleKey: string;
  translationNS: I18NNamespace;
  logos: AllyData[];
};
