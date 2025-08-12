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

  // Puedes devolver el objeto completo (cert) y/o una proyección para UI
  const card: CertificationCardProjection = projectCertificationToCard(cert);

  return {
    cert, // CertificationContent completo (validado por Zod)
    card, // Proyección para cabecera/tarjeta
  };
}
