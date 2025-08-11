// src/constants/images.ts
import { z } from 'zod';

export const IMAGE_VARIANTS = [
  'fullscreen',
  'header',
  'horizontal',
  'vertical',
  'square',
] as const;

export type ImageVariant = (typeof IMAGE_VARIANTS)[number];

export const ImageVariantSchema = z.enum(IMAGE_VARIANTS);
