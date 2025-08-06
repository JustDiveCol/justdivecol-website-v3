// src/data/certifications/utils.ts
import type { Certification } from '../../types/data';
import { ROUTES } from '../../constants/routes';
import padiOpenWaterDiver from './padi-open-water';
import padiAdvanced from './padi-advanced';
import padiRescue from './padi-rescue';

/**
 * Añade dinámicamente el slug al seo.urlPath de cada Certification.
 * Devuelve un array de Certification con seo.urlPath = `${ROUTES.certifications}/${slug}`
 */
export function getCertificationsWithSeoUrl(): Certification[] {
  const raw: Certification[] = [padiOpenWaterDiver, padiAdvanced, padiRescue];

  return raw.map((cert) => ({
    ...cert,
    seo: {
      ...cert.seo,
      urlPath: `${ROUTES.certifications}/${cert.slug}`,
    },
  }));
}
