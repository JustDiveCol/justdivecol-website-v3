// src/selectors/destinations.selectors.ts
import {
  getDestinationBySlug,
  listDiveSiteProjectionsForDestination,
  projectDestinationToCard,
} from '../content/destinations';

export function getDestinationPageData(slug: string) {
  const destination = getDestinationBySlug(slug);
  if (!destination) return null;

  const card = projectDestinationToCard(destination);
  const diveSites = listDiveSiteProjectionsForDestination(destination.id);

  return {
    destination,
    card,
    diveSites,
  };
}
