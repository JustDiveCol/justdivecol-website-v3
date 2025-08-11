// src/utils/zod-helpers.ts
import { z } from 'zod';

export function unionLiterals<const T extends readonly string[]>(vals: T) {
  if (vals.length === 0) throw new Error('unionLiterals: empty array');
  return z.union(vals.map((v) => z.literal(v)) as any);
}
