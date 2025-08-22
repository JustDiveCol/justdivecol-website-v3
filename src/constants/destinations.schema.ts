// src/constants/destinations.schema.ts
import { z } from 'zod';

export const DESTINATION_IDS = [
  'santa-marta',
  'providencia',
  'san-andres',
  'isla-fuerte',
  'curacao',
] as const;

export type DestinationId = (typeof DESTINATION_IDS)[number];
export const DestinationIdSchema = z.enum(DESTINATION_IDS);

export const COUNTRY_IDS = ['CO', 'CW'] as const;
export type CountryId = (typeof COUNTRY_IDS)[number];
export const CountryIdSchema = z.enum(COUNTRY_IDS);
