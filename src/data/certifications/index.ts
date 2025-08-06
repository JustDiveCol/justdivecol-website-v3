import padiOpenWater from './padi-open-water';
import padiAdvanced from './padi-advanced';
import padiRescue from './padi-rescue';
// ...importa otras certificaciones aquí...
import type { Certification } from '../../types/data';

const certificationsList = [padiOpenWater, padiAdvanced, padiRescue] as const;

export type CertificationId = (typeof certificationsList)[number]['id'];

export const allCertifications: readonly Certification[] = certificationsList;
