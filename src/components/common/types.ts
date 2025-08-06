// src/components/common/types.ts
import type { LinkProps } from 'react-router-dom';
import type { AssetAltKey, AssetURL } from '../../constants/assets';
import type { I18NNamespace } from '../../constants/i18n';
import type { UrlPath } from '../../constants/routes';
import type {
  ActionType,
  ButtonSize,
  ButtonVariant,
  ImageVariant,
} from '../../constants/ui';
import type { AnchorHTMLAttributes } from 'react';

export type Action = {
  type: ActionType;
  path?: UrlPath;
  whatsAppMessageKey?: string;
};

export type ImageComponentData = {
  backgroundImage: string;
  complementaryLogo?: { url: AssetURL; altKey: AssetAltKey };
  photoCredit: string;
  textOverlayKey?: string;
  variant: ImageVariant;
};

export interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  keywordsKey: string;
  imageUrl: string;
  urlPath: UrlPath;
  translationNS: I18NNamespace;
}

export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface ImageComponentProps {
  className?: string;
  imageData: ImageComponentData;
  translationNS?: I18NNamespace;
}

export type ButtonProps = {
  action: Action;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & (Omit<LinkProps, 'to'> | AnchorHTMLAttributes<HTMLAnchorElement>);

export interface AccordionItemProps {
  question: string;
  answer: string;
}
