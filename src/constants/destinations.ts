// src/constants/destinations.ts

export const DEST_COUNTRIES = {
  'santa-marta': 'CO',
  providencia: 'CO',
  // …añade más destinos aquí—
};

export type DestinationId = keyof typeof DEST_COUNTRIES;
