// src/content/types.ts

import type { LinkProps } from 'react-router-dom';
import type { I18NNamespace } from '../constants/i18n';
import type { ActionType, ButtonSize, ButtonVariant } from './constants';
import type { AnchorHTMLAttributes } from 'react';
import type {
  CtaContent,
  PageHeaderContent,
} from '../components/sections/shared/types';
import type { ImageComponentData } from '../components/common/types';
import type { UrlPath } from './urlPathSchema';

// ––– Specific –––
// OK
export type ButtonContent = {
  action: ActionContent;
  children: React.ReactNode;
  className?: string;
  variant: ButtonVariant;
  size: ButtonSize;
} & (Omit<LinkProps, 'to'> | AnchorHTMLAttributes<HTMLAnchorElement>);

// OK
export type ActionContent = {
  type: ActionType;
  path?: UrlPath;
  whatsAppMessageKey?: string;
};

// ––– General –––
// OK
export type SEOContent = {
  titleKey: string;
  descriptionKey: string;
  keywordsKey: string;
  imageUrl: string;
  urlPath: UrlPath;
  translationNS: I18NNamespace;
};

// OK
export type PageContent = {
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
};
