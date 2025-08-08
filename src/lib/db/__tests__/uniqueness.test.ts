// src/lib/db/__tests__/uniqueness.test.ts
import { certifications } from '../entities/certifications';
import { destinations } from '../entities/destinations';
import { diveSites } from '../entities/divesites';
import { experiences } from '../entities/experiences';
import { sessions } from '../entities/sessions';

const unique = (arr: string[]) => new Set(arr).size === arr.length;

describe('ID uniqueness', () => {
  it.each([
    ['certifications', certifications.map((c) => c.id)],
    ['destinations', destinations.map((d) => d.id)],
    ['diveSites', diveSites.map((s) => s.id)],
    ['experiences', experiences.map((e) => e.id)],
    ['sessions', sessions.map((s) => s.id)],
  ])('%s IDs son únicos', (_, ids) => {
    expect(unique(ids)).toBe(true);
  });
});
