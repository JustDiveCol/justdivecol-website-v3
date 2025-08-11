// src/components/common/types.ts
import { z } from 'zod';
import {
  I18N_NAMESPACES,
  type I18NNamespace,
} from '../../constants/i18n.schema';
import type { ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';
import {
  AssetAltKeySchema,
  AssetURLSchema,
} from '../../constants/assets.schema';
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  type ButtonSize,
  type ButtonVariant,
} from '../../constants/ui';
import { ImageVariantSchema } from '../../constants/images.schema';
import { UrlPathSchema } from '../../content/urlPathSchema';

export const TranslationNSSchema = z.enum(I18N_NAMESPACES);
export type TranslationNS = I18NNamespace;

// ––– AccordionItemSchema –––
export const AccordionItemPropsSchema = z.object({
  question: z.string(),
  answer: z.string(),
});
export type AccordionItemProps = z.infer<typeof AccordionItemPropsSchema>;

// ––– Button –––
export const ButtonVariantsSchema = z.enum(BUTTON_VARIANTS);
export type ButtonVariantType = ButtonVariant;

export const ButtonSizesSchema = z.enum(BUTTON_SIZES);
export type ButtonSizeType = ButtonSize;

export const ButtonActionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('internal'),
    path: z.string().optional(),
  }),
  z.object({
    type: z.literal('external'),
    path: z.string().optional(),
  }),
  z.object({
    type: z.literal('whatsapp'),
    whatsAppMessageKey: z.string().optional(),
  }),
]);

type InternalAction = { type: 'internal'; path?: string };
type ExternalAction = { type: 'external'; path?: string };
type WhatsappAction = { type: 'whatsapp'; whatsAppMessageKey?: string };

type BaseButtonProps = {
  action: InternalAction | ExternalAction | WhatsappAction;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type InternalButtonProps = BaseButtonProps & { action: InternalAction } & Omit<
    LinkProps,
    'to'
  >;

type AnchorButtonProps = BaseButtonProps &
  ({ action: ExternalAction } | { action: WhatsappAction }) &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = InternalButtonProps | AnchorButtonProps;

export const ContentButtonSchema = z.object({
  textKey: z.string(),
  action: ButtonActionSchema,
  variant: ButtonVariantsSchema.optional(),
  size: ButtonSizesSchema.optional(),
  className: z.string().optional(),
});
export type ContentButton = z.infer<typeof ContentButtonSchema>;

// ––– ImageComponent –––
export const ComplementaryLogoSchema = z.object({
  url: AssetURLSchema,
  altKey: AssetAltKeySchema,
});
export type ComplementaryLogo = z.infer<typeof ComplementaryLogoSchema>;

export const ImageComponentDataSchema = z.object({
  backgroundImage: AssetURLSchema,
  complementaryLogo: ComplementaryLogoSchema.optional(),
  photoCredit: z.string(),
  textOverlayKey: z.string().optional(),
  variant: ImageVariantSchema,
});
export type ImageComponentData = z.infer<typeof ImageComponentDataSchema>;

export const ImageComponentPropsSchema = z.object({
  className: z.string().optional(),
  imageData: ImageComponentDataSchema,
  translationNS: TranslationNSSchema.optional(),
});
export type ImageComponentProps = z.infer<typeof ImageComponentPropsSchema>;

export const ImageFitSchema = z.enum(['parent', 'auto']);
export type ImageFit = z.infer<typeof ImageFitSchema>;

export const ImageComponentWithFitPropsSchema =
  ImageComponentPropsSchema.extend({
    fit: ImageFitSchema.optional(),
  });
export type ImageComponentWithFitProps = z.infer<
  typeof ImageComponentWithFitPropsSchema
>;

// ––– PaginationControls –––
export const OnPageChangeSchema = z.custom<(page: number) => void>(
  (val) => typeof val === 'function',
  { message: 'onPageChange must be a function' }
);

export const PaginationControlsPropsSchema = z.object({
  currentPage: z.number().int().min(1),
  totalPages: z.number().int().min(1),
  onPageChange: OnPageChangeSchema,
});

export type PaginationControlsProps = z.infer<
  typeof PaginationControlsPropsSchema
>;

// ––– RouteScrollManager –––
export type RouteScrollManagerProps = Record<string, never>;

// ––– SEO –––
export const SEOPropsSchema = z.object({
  titleKey: z.string(),
  descriptionKey: z.string(),
  keywordsKey: z.string(),
  imageUrl: AssetURLSchema,
  urlPath: UrlPathSchema.optional(),
  translationNS: TranslationNSSchema,
});

export type SEOProps = Omit<z.infer<typeof SEOPropsSchema>, 'translationNS'> & {
  translationNS: I18NNamespace;
};
