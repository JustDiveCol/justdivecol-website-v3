export const CERTIFICATION_IDS = [
  'padi-open-water',
  'padi-advanced',
  'padi-rescue',
] as const;

export type CertificationId = (typeof CERTIFICATION_IDS)[number];
