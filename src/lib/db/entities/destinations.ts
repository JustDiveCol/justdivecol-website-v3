// src/lib/db/entities/destinations.ts
import { DestinationSchema, type Destination } from '../schema';

/**
 * Lista de destinos (solo datos relacionales)
 * Todo lo visual/SEO se moverá después a i18n o a ficheros .content.ts
 */
const rawDestinations: Destination[] = [
  {
    id: 'santa-marta',
    slug: 'santa-marta',
    country: 'CO',
    coords: [-74.195044, 11.232135],
    minZoom: 10.5,
    maxZoom: 16,
  },
  {
    id: 'providencia',
    slug: 'providencia',
    country: 'CO',
    coords: [-81.37393, 13.350732],
    minZoom: 10.5,
    maxZoom: 16,
  },
  // añade otros destinos…
];

export const destinations = rawDestinations.map(
  (d) => DestinationSchema.parse(d) // valida al compilar
);
