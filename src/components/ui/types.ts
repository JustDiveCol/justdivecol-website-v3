// src/components/ui/types.ts
import { z } from 'zod';

export const LanguageSwitcherPropsSchema = z.object({});
export type LanguageSwitcherProps = z.infer<typeof LanguageSwitcherPropsSchema>;
