// src/constants/ui.ts
import { z } from 'zod';

/** ——— Actions (para botones, links, etc.) ——— */
export const ACTION_TYPES = ['internal', 'external', 'whatsapp'] as const;
export const ActionTypeSchema = z.enum(ACTION_TYPES);
export type ActionType = z.infer<typeof ActionTypeSchema>;

/** ——— Button variants ——— */
export const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'outline',
  'ghost',
] as const;
export const ButtonVariantSchema = z.enum(BUTTON_VARIANTS);
export type ButtonVariant = z.infer<typeof ButtonVariantSchema>;

/** ——— Button sizes ——— */
export const BUTTON_SIZES = ['default', 'sm', 'lg'] as const;
export const ButtonSizeSchema = z.enum(BUTTON_SIZES);
export type ButtonSize = z.infer<typeof ButtonSizeSchema>;
