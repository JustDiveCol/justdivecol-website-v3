import type { CertificationId } from '../constants';
import { validatePrerequisites } from '../repository';
import { certifications } from '../entities/certifications';

describe('validatePrerequisites', () => {
  it('lanza error cuando hay prereq inexistente', () => {
    // ⬇️  indicamos a TS que “no lo compruebe”
    const bad = {
      ...certifications[0],
      prerequisiteIds: ['foo-bar'] as unknown as CertificationId[],
    };

    expect(() =>
      validatePrerequisites([bad, ...certifications.slice(1)])
    ).toThrow();
  });

  it('no lanza con datos correctos', () => {
    expect(() => validatePrerequisites()).not.toThrow();
  });
});
