// src/constants/images.schema.ts
import { z } from 'zod';

export const IMAGE_VARIANTS_RAW = [
  'fullscreen',
  'header',
  'horizontal',
  'vertical',
  'square',
] as const;

export const ImageVariantSchema = z.enum(IMAGE_VARIANTS_RAW);

export type ImageVariant = z.infer<typeof ImageVariantSchema>;

export const IMAGE_VARIANTS_SAFE = z
  .array(ImageVariantSchema)
  .parse(IMAGE_VARIANTS_RAW);

export const toImageVariant = (v: unknown): ImageVariant =>
  ImageVariantSchema.parse(v);
