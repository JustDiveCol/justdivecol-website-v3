// src/components/sections/experiences/types.ts
import { z } from 'zod';
import { I18NNamespaceSchema, type I18NNamespace } from '../../../constants';
// Usamos el tipo correcto que viene del archivo de contenido
import { type ResolvedExperienceForSession } from '../../../content/experiences';
import type {
  ExperienceItineraryContent,
  ExperienceWhatIsIncluded,
} from '../../../content/experiences/types';
import type { CertificationWhatIsIncluded } from '../../../content/certifications/types';
import type { DiveSitesSectionProps } from '../divesites/types';
import type { PaymentPlanSchema } from '../../../content/experiences/sessions/types';

// Props para el componente SessionHero
export const SessionHeroPropsSchema = z.object({
  // El contenido es el objeto anidado { experience, session }
  content: z.custom<ResolvedExperienceForSession>(),
  translationNS: I18NNamespaceSchema,
});

export type SessionHeroProps = Omit<
  z.infer<typeof SessionHeroPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para el componente del itinerario
export const ExperienceItineraryPropsSchema = z.object({
  itinerary: z.custom<ExperienceItineraryContent>(),
  translationNS: I18NNamespaceSchema,
});

export type ExperienceItineraryProps = Omit<
  z.infer<typeof ExperienceItineraryPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Actualizamos las props del componente de inclusiones
export const ExperienceInclusionsPropsSchema = z.object({
  whatIsIncluded: z.custom<ExperienceWhatIsIncluded>(),
  whatIsNotIncluded: z.custom<ExperienceWhatIsIncluded>(),
  // Prop opcional para las inclusiones de la certificación
  certificationInclusions: z.custom<CertificationWhatIsIncluded>().optional(),
  translationNS: I18NNamespaceSchema,
});

export type ExperienceInclusionsProps = Omit<
  z.infer<typeof ExperienceInclusionsPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para el nuevo componente contenedor del mapa de sitios de buceo
export const ExperienceDiveSitesPropsSchema = z.object({
  destinationName: z.string(),
  diveSitesSectionProps: z.custom<DiveSitesSectionProps>(),
});

export type ExperienceDiveSitesProps = z.infer<
  typeof ExperienceDiveSitesPropsSchema
>;

// Props para el nuevo componente de plan de pagos
export const ExperiencePaymentPlanPropsSchema = z.object({
  paymentPlan: z.custom<z.infer<typeof PaymentPlanSchema>>(),
  translationNS: I18NNamespaceSchema,
});

export type ExperiencePaymentPlanProps = z.infer<
  typeof ExperiencePaymentPlanPropsSchema
>;
