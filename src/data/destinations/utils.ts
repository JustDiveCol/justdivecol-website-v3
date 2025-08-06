// src/data/destinations/utils.ts
import { allDestinations } from './index';
import { buildDestinationDetailRoute } from '../../constants/routes';
import type { Destination } from './style';
import type { DestinationId } from '../../constants/destinations';

export function getDestinationsWithSeoUrl(): readonly Destination[] {
  return allDestinations.map((dest) => ({
    ...dest,
    seo: {
      ...dest.seo,
      urlPath: buildDestinationDetailRoute(dest.slug),
    },
  }));
}

export function getDestinationById(id: DestinationId): Destination | undefined {
  return allDestinations.find((d) => d.id === id);
}
