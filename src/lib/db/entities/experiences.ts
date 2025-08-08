// src/lib/db/entities/experiences.ts
import { ExperienceSchema, type Experience } from '../schema';

const rawExperiences: Experience[] = [
  {
    id: 'exp-santa-marta',
    slug: 'exp-santa-marta',
    destinationId: 'santa-marta',
  },
  {
    id: 'exp-providencia',
    slug: 'exp-providencia',
    destinationId: 'providencia',
  },
  // …otras experiencias
];

export const experiences = rawExperiences.map((e) => ExperienceSchema.parse(e));
