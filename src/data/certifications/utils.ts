// src/data/certifications/utils.ts
import { allCertifications, type CertificationId } from './index';
import { buildCertificationDetailRoute } from '../../constants/routes';
import type { Certification } from './types';

export function getCertificationsWithSeoUrl(): readonly Certification[] {
  return allCertifications.map((cert) => ({
    ...cert,
    seo: {
      ...cert.seo,
      urlPath: buildCertificationDetailRoute(cert.slug),
    },
  }));
}

export function getCertificationById(
  id: CertificationId
): Certification | undefined {
  return allCertifications.find((cert) => cert.id === id);
}
