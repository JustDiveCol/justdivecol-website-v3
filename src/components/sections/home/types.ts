// src/pages/Home/types.ts

import type { I18NNamespace } from '../../../constants/i18n';
import type { UrlPath } from '../../../constants/routes';
import type { ButtonContent } from '../../../content/types';
import type { PrincipleCardData, TestimonialData } from '../shared/types';

// ––– Specific –––
// OK
export type ImageData = {
  backgroundImage: string;
  complementaryLogo?: {
    url: string;
    altKey: string;
  };
  photoCredit: string;
};

// OK
export type CardData = {
  id: string;
  link: UrlPath;
  titleKey: string;
  subtitleKey?: string;
  imageData: ImageData;
};

// OK
export type AllyData = {
  id: string;
  name: string;
  logoUrl: string;
  link?: string;
};

// ––– General –––
// OK
export type HeroContent = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  button: Omit<ButtonContent, 'children'> & { textKey: string };
  imageData: ImageData;
};

// OK
export type FeaturedContent = {
  titleKey: string;
  translationNS: I18NNamespace;
  cards: CardData[];
};

// OK
export type PrinciplesContent = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
  cards: PrincipleCardData[];
};

// OK
export type TestimonialsContent = {
  titleKey: string;
  translationNS: I18NNamespace;
  items: TestimonialData[];
};

// OK
export type AlliesContent = {
  titleKey: string;
  translationNS: I18NNamespace;
  logos: AllyData[];
};
