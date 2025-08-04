// src/data/dive-filters/tags.ts
import type { DiveTag } from '../../types/data'; // Importamos nuestro nuevo tipo

export const diveTags: DiveTag[] = [
  { id: 'sharks', nameKey: 'tagSharks', categoryId: 'marine-life' },
  { id: 'macro', nameKey: 'tagMacro', categoryId: 'marine-life' },
  { id: 'coral', nameKey: 'tagCoral', categoryId: 'features' },
  { id: 'large-fish', nameKey: 'tagLargeFish', categoryId: 'marine-life' },
  { id: 'turtles', nameKey: 'tagTurtles', categoryId: 'marine-life' },
];
