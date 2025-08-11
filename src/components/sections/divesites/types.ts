// src/components/sections/divesites/types.ts
import type React from 'react';
import type { I18NNamespace } from '../../../constants/i18n.schema';

// Si ya tienes un tipo enriquecido con imágenes/descripciones en content:
import type { DiveSiteContent } from '../../../content/dive-sites/types';

// Tipo del schema (DB)
import type { DiveSite as DiveSiteDb } from '../../../lib/db/schema';

import type {
  DestinationId,
  DiveConditionId,
  DiveDifficultyId,
  DiveTagId,
  DiveTypeId,
} from '../../../lib/db/constants';

/**
 * Durante la migración, algunos componentes consumen el tipo “content”
 * (con imágenes, descripción, etc.) y otros quieren el del DB.
 * Este alias permite que funcionen ambos sin romper nada.
 */
export type DiveSiteLike = DiveSiteContent | DiveSiteDb;

/** Opciones para filtros (id + i18n key) */

export type Option<T extends string = string> = { id: T; nameKey: string };

/**
 * ¡Ojo! Tu página usa `maxDepth` (en metros).
 * Mantengámoslo así para no romper el filtrado.
 */
export type FiltersData = {
  searchQuery: string;
  destinationId: DestinationId | 'all';
  difficulty: DiveDifficultyId | 'all';
  types: DiveTypeId[];
  maxDepth: number; // ← usa el mismo que consumen tus filtros/página
  conditions: DiveConditionId[];
  tags: DiveTagId[];
};

/** Cards/List/Map/Modal usan el alias unificado */
export type DiveSiteCardProps = {
  site: DiveSiteLike;
  onSelect: (siteId: string) => void;
  onHover: (siteId: string | null) => void;
  translationNS: I18NNamespace;
};

export type DiveSiteFiltersProps = {
  filters: FiltersData;
  onFiltersChange: (newFilters: FiltersData) => void;
  availableDestinations: Option<DestinationId>[];
  availableDifficulties: Option<DiveDifficultyId>[];
  availableTypes: Option<DiveTypeId>[];
  availableConditions: Option<DiveConditionId>[];
  availableTags: Option<DiveTagId>[];
  translationNS: I18NNamespace;
};

export type DiveSiteListProps = {
  sites: DiveSiteLike[];
  onSelect: (siteId: string) => void;
  onHover: (siteId: string | null) => void;
  translationNS: I18NNamespace;
};

export type DiveSiteMapProps = {
  sites: DiveSiteLike[];
  hoveredSiteId: string | null;
  focusedSite: DiveSiteLike | null;
  onSelect: (siteId: string | null) => void;
  onHover: (siteId: string | null) => void;
  translationNS: I18NNamespace;
};

export type DiveSiteModalProps = {
  site: DiveSiteLike;
  onClose: () => void;
  translationNS: I18NNamespace;
};

export type MotionMarkerProps = {
  IconComponent: React.ElementType;
  isSelected: boolean;
};
