// src/selectors/certifications.selectors.ts
import type { CertificationId } from '../constants';
import {
  getCertificationById,
  projectCertificationToCard,
  type CertificationCardProjection,
} from '../content/certifications';

export function getCertificationDetail(id: CertificationId) {
  const cert = getCertificationById(id);
  if (!cert) return null;

  const card: CertificationCardProjection = projectCertificationToCard(cert);

  return {
    cert,
    card,
  };
}
