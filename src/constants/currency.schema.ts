// src/constants/currency.schema.ts
import { z } from 'zod';

export const CURRENCY_IDS = ['COP', 'USD'] as const;

export type CurrencyId = (typeof CURRENCY_IDS)[number];
export const CurrencyIdSchema = z.enum(CURRENCY_IDS);
