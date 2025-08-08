// src/lib/db/__tests__/repository.test.ts
import {
  getDestination,
  getExperiencesForDestination,
  getSessionsForExperience,
} from '../repository';

describe('Repository helpers', () => {
  it('getDestination devuelve objeto', () => {
    expect(getDestination('santa-marta')?.id).toBe('santa-marta');
  });

  it('experiencias filtradas por destino', () => {
    const list = getExperiencesForDestination('santa-marta');
    expect(list.every((l) => l.destinationId === 'santa-marta')).toBe(true);
  });

  it('sesiones filtradas por experiencia', () => {
    const exp = getExperiencesForDestination('santa-marta')[0];
    const list = getSessionsForExperience(exp.id);
    expect(list.every((s) => s.experienceId === exp.id)).toBe(true);
  });
});
