// src/constants/ui.ts

// 1) Define cada “enum” de strings como array const
export const ACTION_TYPES = ['internal', 'external', 'whatsapp'] as const;
export const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'outline',
  'ghost',
] as const;
export const BUTTON_SIZES = ['default', 'sm', 'lg'] as const;
export const STATUS_TYPES = ['published', 'draft'] as const;
export const AVAILABILITY = ['available', 'few_spots', 'sold_out'] as const;
export const SOCIAL_TYPES = ['instagram', 'youtube', 'tiktok'] as const;
export const CATEGORY_TYPES = [
  'marine-life',
  'dive-characteristics',
  'features',
  'location',
] as const;
export const IMAGE_VARIANTS = [
  'fullscreen',
  'header',
  'horizontal',
  'vertical',
  'square',
] as const;
export const AGENCY_TYPES = ['PADI', 'SSI'] as const;

// 2) Deriva tus tipos de esos arrays
export type ActionType = (typeof ACTION_TYPES)[number];
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
export type StatusType = (typeof STATUS_TYPES)[number];
export type AvailableType = (typeof AVAILABILITY)[number];
export type SocialType = (typeof SOCIAL_TYPES)[number];
export type CategoryType = (typeof CATEGORY_TYPES)[number];
export type ImageVariant = (typeof IMAGE_VARIANTS)[number];
export type AgencyType = (typeof AGENCY_TYPES)[number];
