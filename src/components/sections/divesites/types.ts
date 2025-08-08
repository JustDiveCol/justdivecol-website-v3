// src/components/sections/divesites/types.ts
import type { DestinationId } from '../../../constants/destinations';
import type {
  DiveConditionId,
  DiveDifficultyId,
  DiveTagId,
  DiveTypeId,
} from '../../../constants/dive-sites';
import type { I18NNamespace } from '../../../constants/i18n';

export type Option = { id: string; nameKey: string };

export type FiltersData = {
  searchQuery: string;
  destinationId: DestinationId | 'all';
  difficulty: DiveDifficultyId | 'all';
  types: DiveTypeId[];
  maxDepth: number;
  conditions: DiveConditionId[];
  tags: DiveTagId[];
};

export type DiveSiteCardProps ={
  site: DiveSite;
  onSelect: (siteId: DiveSiteId) => void;
  onHover: (siteId: DiveSiteId | null) => void;
  translationNS: I18NNamespace;
}

export type DiveSiteFiltersProps ={
  filters: FiltersData;
  onFiltersChange: (newFilters: FiltersData) => void;
  availableDifficulties: Option[];
  availableTypes: Option[];
  availableConditions: Option[];
  availableTags: Option[];
  translationNS: I18NNamespace;
}

export type DiveSiteListProps ={
  sites: DiveSite[];
  onSelect: (siteId: string) => void;
  onHover: (siteId: string | null) => void;
  translationNS: I18NNamespace;
}

export type DiveSiteMapProps {
  sites: DiveSite[];
  hoveredSiteId: DiveSiteId | null;
  focusedSite: DiveSite | null;
  onSelect: (siteId: DiveSiteId | null) => void;
  onHover: (siteId: DiveSiteId | null) => void;
  translationNS: I18NNamespace;
}

export type DiveSiteModalProps ={
  site: DiveSite;
  onClose: () => void;
  translationNS: I18NNamespace;
}

export type MotionMarkerProps ={
  IconComponent: React.ElementType;
  isSelected: boolean;
}
