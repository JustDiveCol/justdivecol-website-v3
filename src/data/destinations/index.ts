// src/data/destinations/index.ts
import santaMarta from './santa-marta';
import providencia from './providencia';
// ... importa otros destinos aquí (ej. 'import malpelo from ./malpelo';)

import type { Destination } from '../../types/data';

export const allDestinations: Destination[] = [santaMarta, providencia];
