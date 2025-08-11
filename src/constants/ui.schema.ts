// src/constants/ui.schema.ts
import { z } from 'zod';

export const ACTION_TYPES_RAW = ['internal', 'external', 'whatsapp'] as const;
export const BUTTON_VARIANTS_RAW = [
  'primary',
  'secondary',
  'outline',
  'ghost',
] as const;
export const BUTTON_SIZES_RAW = ['default', 'sm', 'lg'] as const;

export const ActionTypeSchema = z.enum(ACTION_TYPES_RAW);
export const ButtonVariantSchema = z.enum(BUTTON_VARIANTS_RAW);
export const ButtonSizeSchema = z.enum(BUTTON_SIZES_RAW);

export type ActionType = z.infer<typeof ActionTypeSchema>;
export type ButtonVariant = z.infer<typeof ButtonVariantSchema>;
export type ButtonSize = z.infer<typeof ButtonSizeSchema>;

export const ACTION_TYPES_SAFE = z
  .array(ActionTypeSchema)
  .parse(ACTION_TYPES_RAW);
export const BUTTON_VARIANTS_SAFE = z
  .array(ButtonVariantSchema)
  .parse(BUTTON_VARIANTS_RAW);
export const BUTTON_SIZES_SAFE = z
  .array(ButtonSizeSchema)
  .parse(BUTTON_SIZES_RAW);

export const toActionType = (v: unknown): ActionType =>
  ActionTypeSchema.parse(v);
export const toButtonVariant = (v: unknown): ButtonVariant =>
  ButtonVariantSchema.parse(v);
export const toButtonSize = (v: unknown): ButtonSize =>
  ButtonSizeSchema.parse(v);
