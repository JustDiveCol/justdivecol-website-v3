// src/constants/availability.schema.ts
import { z } from 'zod';

export const AVAILABILITY = [
  'available',
  'few_spots',
  'sold_out',
  'coming_soon',
] as const;

export type AvailableType = (typeof AVAILABILITY)[number];
export const AvailableTypeSchema = z.enum(AVAILABILITY);
