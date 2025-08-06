// src/data/dive-sites/index.ts
import { santaMartaDiveSites } from './santa-marta';
import type { DiveSite } from './style';

const rawDiveSites = [
  ...santaMartaDiveSites,
  // ... añade aquí otros arrays de sitios por destino
] as const;

export type DiveSiteId = (typeof rawDiveSites)[number]['id'];

export const allDiveSites = rawDiveSites as readonly DiveSite[];
