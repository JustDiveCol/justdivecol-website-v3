// src/data/destinations/index.ts
import santaMarta from './santa-marta';
// ... importa otros destinos aquí (ej. 'import malpelo from ./malpelo';)

import type { Destination } from '../../types/data';

const destinationsList = [santaMarta] as const;

export type DestinationId = (typeof destinationsList)[number]['id'];

export const allDestinations: readonly Destination[] = destinationsList;
