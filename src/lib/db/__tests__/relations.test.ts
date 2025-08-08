// src/lib/db/__tests__/relations.test.ts
import { certifications } from '../entities/certifications';
import { destinations } from '../entities/destinations';
import { diveSites } from '../entities/divesites';
import { experiences } from '../entities/experiences';
import { sessions } from '../entities/sessions';

const setOf = <T extends { id: string }>(arr: T[]) =>
  new Set(arr.map((e) => e.id));

const destIds = setOf(destinations);
const expIds = setOf(experiences);
const certIds = setOf(certifications);

describe('Cross-entity relations (FKs “hacia arriba”)', () => {
  it('dive-site.destinationId existe', () => {
    diveSites.forEach((s) => expect(destIds.has(s.destinationId)).toBe(true));
  });

  it('experience.destinationId existe', () => {
    experiences.forEach((e) => expect(destIds.has(e.destinationId)).toBe(true));
  });

  it('session.experienceId existe', () => {
    sessions.forEach((s) => expect(expIds.has(s.experienceId)).toBe(true));
  });

  it('certification prereqs existen', () => {
    certifications.forEach((c) =>
      c.prerequisiteIds.forEach((id) => expect(certIds.has(id)).toBe(true))
    );
  });
});

/* Verificación inversa opcional:
   Cada destino tiene al menos una experiencia; cada experiencia, ≥1 sesión */
describe('Invert lookups (consistency)', () => {
  it('cada destino posee ≥1 experiencia', () => {
    destinations.forEach((d) => {
      const belongs = experiences.filter((e) => e.destinationId === d.id);
      expect(belongs.length).toBeGreaterThan(0);
    });
  });

  it('cada experiencia posee ≥1 sesión', () => {
    experiences.forEach((e) => {
      const sess = sessions.filter((s) => s.experienceId === e.id);
      expect(sess.length).toBeGreaterThan(0);
    });
  });
});
