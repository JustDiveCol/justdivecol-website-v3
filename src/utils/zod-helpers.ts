// src/utils/zod-helpers.ts
import { z } from 'zod';

/** Crea un enum de Zod a partir de un array de literales string (no vacío) */
export function unionLiterals<const T extends readonly [string, ...string[]]>(
  vals: T
) {
  return z.enum(vals);
}
