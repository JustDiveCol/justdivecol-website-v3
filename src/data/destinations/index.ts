// src/data/destinations/index.ts

import baseSantaMarta from './santa-marta';
import type { Destination } from './style';
import { allExperiences } from '../experiences';
import { allDiveSites } from '../dive-sites';

const rawDestinations = [baseSantaMarta] as const;

export const allDestinations: readonly Destination[] = rawDestinations.map(
  (d) => ({
    ...d,
    experienceIds: allExperiences
      .filter((exp) => exp.destinationId === d.id)
      .map((exp) => exp.id),
    diveSiteIds: allDiveSites
      .filter((site) => site.destinationId === d.id)
      .map((site) => site.id),
  })
);
