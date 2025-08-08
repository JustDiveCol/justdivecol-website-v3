/* eslint-disable @typescript-eslint/no-explicit-any */
// src/content/__tests__/test-utils/contentValidators.ts
export function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

export function isImageData(obj: any): boolean {
  return (
    !!obj &&
    isNonEmptyString(obj.backgroundImage) &&
    isNonEmptyString(obj.photoCredit)
  );
}

export function dotGet(obj: any, path: string): unknown {
  return path
    .split('.')
    .reduce(
      (acc, k) =>
        acc && typeof acc === 'object' ? (acc as any)[k] : undefined,
      obj
    );
}
