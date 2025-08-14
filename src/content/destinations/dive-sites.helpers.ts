// src/content/destinations/dive-sites.helpers.ts
import {
  listDestinations,
  listDiveSites,
  listDiveSitesForDestination,
} from '../destinations';
import type { DestinationOption } from '../../components/sections/divesites/types';
import type { DiveSiteContent } from './dive-sites/types';
import type { DestinationId } from '../../constants';

/** Quita el metadato interno __filePath sin cambiar el orden ni el contenido */
const stripFilePath = <T extends { __filePath?: string }>(arr: readonly T[]) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  arr.map(({ __filePath, ...rest }) => rest);

/** Construye las opciones de destino para filtros (id + nameKey del header) */
export const buildDestinationOptions = (): DestinationOption[] => {
  const loaded = listDestinations(); // LoadedDestination[]
  return loaded.map((d) => ({
    id: d.id,
    nameKey: d.name,
  }));
};

/** Todos los sitios (como DiveSiteContent[]) */
export const gatherAllDiveSites = (): DiveSiteContent[] => {
  const loaded = listDiveSites(); // LoadedDiveSite[]
  return stripFilePath(loaded) as DiveSiteContent[];
};

/** Sitios por destino (como DiveSiteContent[]) */
export const gatherDiveSitesForDestination = (
  destinationId: DestinationId
): DiveSiteContent[] => {
  const loaded = listDiveSitesForDestination(destinationId); // LoadedDiveSite[]
  return stripFilePath(loaded) as DiveSiteContent[];
};
