// src/lib/db/__tests__/schema.test.ts
import {
  CertificationSchema,
  DestinationSchema,
  DiveSiteSchema,
  ExperienceSchema,
  SessionSchema,
} from '../schema';

import { certifications } from '../entities/certifications';
import { destinations } from '../entities/destinations';
import { diveSites } from '../entities/divesites';
import { experiences } from '../entities/experiences';
import { sessions } from '../entities/sessions';

describe('Zod schema validation', () => {
  it('certifications válidas', () => {
    certifications.forEach((c) =>
      expect(() => CertificationSchema.parse(c)).not.toThrow()
    );
  });

  it('destinations válidas', () => {
    destinations.forEach((d) =>
      expect(() => DestinationSchema.parse(d)).not.toThrow()
    );
  });

  it('diveSites válidas', () => {
    diveSites.forEach((s) =>
      expect(() => DiveSiteSchema.parse(s)).not.toThrow()
    );
  });

  it('experiences válidas', () => {
    experiences.forEach((e) =>
      expect(() => ExperienceSchema.parse(e)).not.toThrow()
    );
  });

  it('sessions válidas', () => {
    sessions.forEach((s) => expect(() => SessionSchema.parse(s)).not.toThrow());
  });
});
