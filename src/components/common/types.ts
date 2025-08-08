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

export type ImageComponentData = {
  backgroundImage: string;
  complementaryLogo?: { url: AssetURL; altKey: AssetAltKey };
  photoCredit: string;
  textOverlayKey?: string;
  variant: ImageVariant;
};

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

export interface AccordionItemProps {
  question: string;
  answer: string;
}
