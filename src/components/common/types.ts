// src/components/common/types.ts

import type { AssetAltKey, AssetURL } from '../../constants/assets';
import type { I18NNamespace } from '../../constants/i18n';
import type { ImageVariant } from '../../content/constants';

// OK
export type ImageComponentData = {
  backgroundImage: string;
  complementaryLogo?: { url: AssetURL; altKey: AssetAltKey };
  photoCredit: string;
  textOverlayKey?: string;
  variant: ImageVariant;
};

export type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type ImageComponentProps = {
  className?: string;
  imageData: ImageComponentData;
  translationNS?: I18NNamespace;
};

export type AccordionItemProps = {
  question: string;
  answer: string;
};
