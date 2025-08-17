// src/components/sections/destinations/types.ts
import { z } from 'zod';
import { I18NNamespaceSchema, type I18NNamespace } from '../../../constants';
import {
  DestinationDescriptionContentSchema,
  DestinationDetailsSchema,
  DestinationUniqueFindsSchema,
} from '../../../content/destinations/types';
import type { ExperienceSessionContent } from '../../../content/experiences/sessions/types';
import type { DiveSitesSectionProps } from '../divesites/types';

// Props para la sección de introducción del destino
export const DestinationIntroPropsSchema = z.object({
  description: DestinationDescriptionContentSchema,
  translationNS: I18NNamespaceSchema,
});

export type DestinationIntroProps = Omit<
  z.infer<typeof DestinationIntroPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para la sección de KeyHighlights
export const KeyHighlightsPropsSchema = z.object({
  details: DestinationDetailsSchema,
  uniqueFinds: DestinationUniqueFindsSchema,
  translationNS: I18NNamespaceSchema,
});

export type KeyHighlightsProps = Omit<
  z.infer<typeof KeyHighlightsPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para la sección de experiencias relacionadas en la página de destino
export const RelatedExperiencesPropsSchema = z.object({
  titleKey: z.string(),
  sessions: z.array(z.custom<ExperienceSessionContent>()),
  translationNS: I18NNamespaceSchema,
});

export type RelatedExperiencesProps = Omit<
  z.infer<typeof RelatedExperiencesPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props para el nuevo componente contenedor del mapa de sitios de buceo
export const DestinationDiveSitesPropsSchema = z.object({
  destinationName: z.string(),
  diveSitesSectionProps: z.custom<DiveSitesSectionProps>(),
});

export type DestinationDiveSitesProps = z.infer<
  typeof DestinationDiveSitesPropsSchema
>;
