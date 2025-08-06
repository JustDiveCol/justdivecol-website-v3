// src/data/certifications/index.ts
import padiOpenWater from './padi-open-water';
import padiAdvanced from './padi-advanced';
import padiRescue from './padi-rescue';
import type { Certification } from './types';

const certificationsList = [
  padiOpenWater,
  padiAdvanced,
  padiRescue,
] as const satisfies readonly Certification[];

export type CertificationId = (typeof certificationsList)[number]['id'];

export const allCertifications = certificationsList;
