// src/lib/db/entities/divesites.ts
import { DiveSiteSchema, type DiveSite } from '../schema';

const rawDiveSites: DiveSite[] = [
  {
    id: 'sm-aguja',
    nameKey: 'siteSmAgujaName',
    destinationId: 'santa-marta',
    coordinates: [-74.195, 11.318],
    maxDepthMeter: 30,
    maxDepthFt: 100,
    levelRequiredId: 'advanced-open-water-diver',
    difficultyId: 'medium',
    typeIds: ['reef', 'wall'],
    conditionsIds: ['current'],
    tagsIds: ['advanced-only'],

    isTopSite: true,
  },

  // Agregarás más sitios aquí…
];

export const diveSites = rawDiveSites.map(
  (s) => DiveSiteSchema.parse(s) // valida al compilar
);
