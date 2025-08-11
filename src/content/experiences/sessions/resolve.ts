// src/content/sessions/resolve.ts
import { z } from 'zod';
import { ExperienceContentSchema, type ExperienceContent } from '../types';
import type { ExperienceSessionContent } from './types';

export const ResolvedExperienceSessionSchema = ExperienceContentSchema.extend({
  sessionId: z.string(),
  sessionNameKey: z.string(),
  startDate: z.string(), // ISO-8601
  endDate: z.string(),
  capacity: z.number().int().positive(),
  seatsAvailable: z.number().int().min(0),
  availability: z.any(), // o AvailableTypeSchema si lo exportas aquí
  creyentes: z.boolean(),
  pricingOptions: z.array(
    z.object({
      id: z.string(),
      nameKey: z.string(),
      price: z.number().positive(),
      currency: z.string(),
    })
  ),
  certificationIds: z.array(z.string()).optional(),
});

export type ResolvedExperienceSession = z.infer<
  typeof ResolvedExperienceSessionSchema
>;

/** Merge simple: si hay overrides, reemplaza la sección completa */
export function resolveSessionContent(
  experience: ExperienceContent,
  session: ExperienceSessionContent
): ResolvedExperienceSession {
  const o = session.overrides ?? {};

  const merged: ResolvedExperienceSession = {
    ...experience,
    seo: o.seo ?? experience.seo,
    header: o.header ?? experience.header,
    description: o.description ?? experience.description,
    itinerary: o.itinerary ?? experience.itinerary,
    whatIsIncluded: o.whatIsIncluded ?? experience.whatIsIncluded,
    whatIsNotIncluded: o.whatIsNotIncluded ?? experience.whatIsNotIncluded,
    gallery: o.gallery ?? experience.gallery,
    ctaButton: o.ctaButton ?? experience.ctaButton,
    cta: o.cta ?? experience.cta,

    // Metadatos de la sesión
    sessionId: session.id,
    sessionNameKey: session.nameKey,
    startDate: session.startDate,
    endDate: session.endDate,
    capacity: session.capacity,
    seatsAvailable: session.seatsAvailable,
    availability: session.availability,
    creyentes: session.creyentes,
    pricingOptions: session.pricingOptions,
    certificationIds: session.certificationIds,
  };

  ResolvedExperienceSessionSchema.parse(merged);
  return merged;
}
