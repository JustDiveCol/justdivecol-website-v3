export const SESSIONS_IDS = ['sm-fun-dive-oct-2025'] as const;

export type SessionId = (typeof SESSIONS_IDS)[number];
