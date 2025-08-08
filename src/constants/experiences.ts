export const EXPERIENCES_IDS = ['exp-santa-marta'] as const;

export type ExperienceId = (typeof EXPERIENCES_IDS)[number];
