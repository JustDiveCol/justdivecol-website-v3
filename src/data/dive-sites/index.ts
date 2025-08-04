// src/data/dive-sites/index.ts
import { santaMartaDiveSites } from './santa-marta';
// ... importa los sitios de otros destinos aquí

import type { DiveSite } from '../../types/data';

// Creamos un array con TODOS los sitios de buceo de todas las localidades
export const allDiveSites: DiveSite[] = [...santaMartaDiveSites];
