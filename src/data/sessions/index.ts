// src/data/sessions/index.ts

// 1. Importa cada archivo de sesión individual que tengas en esta carpeta
import santaMartaFunDiveOct2025 from './santa-marta-fun-dive-oct-2025';
// ... cuando crees más sesiones, las importarás aquí

// 2. Importa el tipo para asegurar que todo sea consistente
import type { ExperienceSession } from '../../types/data';

// 3. Exporta un único array que contiene todas las sesiones
export const allSessions: ExperienceSession[] = [
  santaMartaFunDiveOct2025,
  // ... y las añades al array aquí
];
