// src/lib/db/helpers/schemaUtils.ts
import { z } from 'zod';

export const zStr = <T extends string>() =>
  z.custom<T>((v): v is T => typeof v === 'string');
