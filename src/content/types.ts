// src/content/types.ts

import type { LinkProps } from 'react-router-dom';
import type { I18NNamespace } from '../constants/i18n';
import type { UrlPath } from '../constants/routes';
import type { ActionType, ButtonSize, ButtonVariant } from './constants';
import type { AnchorHTMLAttributes } from 'react';
import type {
  CtaContent,
  PageHeaderContent,
} from '../components/sections/shared/types';
import type { ImageComponentData } from '../components/common/types';

// ––– Specific –––
export type ButtonContent = {
  action: ActionContent;
  children: React.ReactNode;
  className?: string;
  variant: ButtonVariant;
  size: ButtonSize;
} & (Omit<LinkProps, 'to'> | AnchorHTMLAttributes<HTMLAnchorElement>);

export type ActionContent = {
  type: ActionType;
  path?: UrlPath;
  whatsAppMessageKey?: string;
};

export type DiveSiteContent = {
  nameKey: string;
  descriptionKey: string;
  markerIcon: string;
  gallery?: {
    titleKey: string;
    images: ImageComponentData[];
  };
};

// ––– General –––
export type SEOContent = {
  titleKey: string;
  descriptionKey: string;
  keywordsKey: string;
  imageUrl: string;
  urlPath: UrlPath;
  translationNS: I18NNamespace;
};

export interface PageContent {
  seo: SEOContent;
  header: PageHeaderContent;
  description: {
    titleKey: string;
    paragraphs: string[];
  };
  gallery?: {
    titleKey: string;
    images: ImageComponentData[];
  };
  ctaButton?: Omit<ButtonContent, 'children'> & { textKey: string };
  cta?: CtaContent;
}
