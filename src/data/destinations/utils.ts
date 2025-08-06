// src/data/destinations/utils.ts
import type { Destination } from '../../types/data';
import { ROUTES } from '../../constants/routes';
import santaMarta from './santa-marta';

export function getDestinationsWithSeoUrl(): Destination[] {
  const raw: Destination[] = [santaMarta];

  return raw.map((cert) => ({
    ...cert,
    seo: {
      ...cert.seo,
      urlPath: `${ROUTES.destinations}/${cert.slug}`,
    },
  }));
}
