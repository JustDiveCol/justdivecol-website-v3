// src/lib/availability.ts
import type { AvailableType } from '../constants';

export const FEW_SPOTS_PCT = 0.3;

export function fewSpotsThreshold(capacity: number, pct = FEW_SPOTS_PCT) {
  return Math.max(1, Math.ceil(capacity * pct));
}

export function deriveSessionAvailability(params: {
  seatsAvailable: number;
  capacity: number;
}): AvailableType {
  const { seatsAvailable, capacity } = params;

  if (seatsAvailable <= 0) return 'sold_out';

  const threshold = fewSpotsThreshold(capacity);
  if (seatsAvailable <= threshold) return 'few_spots';

  return 'available';
}
