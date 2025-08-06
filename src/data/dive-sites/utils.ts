// src/data/dive-sites/utils.ts
import { allDiveSites, type DiveSiteId } from './index';
import type { DiveSite } from './style';

export function getDiveSiteById(id: DiveSiteId): DiveSite | undefined {
  return allDiveSites.find((site) => site.id === id);
}

export function getDiveSitesByDestination(destinationId: string): DiveSite[] {
  return allDiveSites.filter((site) => site.destinationId === destinationId);
}
