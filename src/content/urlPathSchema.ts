// src/content/urlPathSchema.ts
import { z } from 'zod';
import { ROUTES } from '../constants/routes.schema';

const ROUTE_VALUES = Object.values(ROUTES) as readonly string[];
const ROUTE_BASES = ROUTE_VALUES.map((r) => {
  const idx = r.indexOf('/:');
  return idx === -1 ? r : r.slice(0, idx);
});

function isValidUrlPath(v: string): boolean {
  if (ROUTE_VALUES.includes(v)) return true;
  if (ROUTE_BASES.some((base) => base && v.startsWith(base + '/'))) return true;
  if (ROUTE_BASES.some((base) => base && v.startsWith(base + '#'))) return true;
  return false;
}

export const UrlPathSchema = z
  .string()
  .refine(isValidUrlPath, { message: 'Invalid UrlPath for current ROUTES' })
  .brand<'UrlPath'>(); // ⬅️ IMPORTANTÍSIMO

export type UrlPath = z.infer<typeof UrlPathSchema>;

export const toUrlPath = (v: string): UrlPath => UrlPathSchema.parse(v);
