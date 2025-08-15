// src/components/sections/divesites/types.ts
import { z } from 'zod';
import {
  DestinationIdSchema,
  DiveConditionIdSchema,
  DiveDifficultyIdSchema,
  DiveTagIdSchema,
  DiveTypeIdSchema,
  I18NNamespaceSchema,
  type I18NNamespace,
} from '../../../constants';
import {
  DiveSiteContentSchema,
  type DiveSiteContent,
} from '../../../content/destinations/dive-sites/types';

/* ──────────────────────────────
 * Helpers genéricos
 * ────────────────────────────── */

const OnSelectHandlerSchema = z.custom<(id: string) => void>().optional();
const OnHoverHandlerSchema = z.custom<(id: string | null) => void>().optional();

/* ──────────────────────────────
 * DiveSiteCard
 * ────────────────────────────── */

// Sólo lo que necesita la Card
export const DiveSiteCardSiteSchema = DiveSiteContentSchema.pick({
  id: true,
  nameKey: true,
  photos: true, // se mantiene optional como en el content
  maxDepthMeter: true,
  maxDepthFt: true,
  difficultyId: true,
});
export type DiveSiteCardSite = z.infer<typeof DiveSiteCardSiteSchema>;

export const DiveSiteCardPropsSchema = z.object({
  site: DiveSiteCardSiteSchema,
  translationNS: I18NNamespaceSchema,
  onSelect: OnSelectHandlerSchema,
  onHover: OnHoverHandlerSchema,
});
export type DiveSiteSelectHandler = (siteId: string) => void;
export type DiveSiteHoverHandler = (siteId: string | null) => void;
export type DiveSiteCardProps = {
  site: DiveSiteCardSite;
  translationNS: I18NNamespace;
  onSelect?: DiveSiteSelectHandler;
  onHover?: DiveSiteHoverHandler;
};

/* ──────────────────────────────
 * DiveSiteFilters
 * ────────────────────────────── */

// Select con “all”
export const DestinationIdAllSchema = z.union([
  DestinationIdSchema,
  z.literal('all'),
]);
export type DestinationIdAll = z.infer<typeof DestinationIdAllSchema>;

export const DiveDifficultyIdAllSchema = z.union([
  DiveDifficultyIdSchema,
  z.literal('all'),
]);
export type DiveDifficultyIdAll = z.infer<typeof DiveDifficultyIdAllSchema>;

// Opciones de selects
export const DestinationOptionSchema = z.object({
  id: DestinationIdSchema,
  nameKey: z.string(),
});
export type DestinationOption = z.infer<typeof DestinationOptionSchema>;

export const DifficultyOptionSchema = z.object({
  id: DiveDifficultyIdSchema,
  nameKey: z.string(),
});
export type DifficultyOption = z.infer<typeof DifficultyOptionSchema>;

export const TypeOptionSchema = z.object({
  id: DiveTypeIdSchema,
  nameKey: z.string(),
});
export type TypeOption = z.infer<typeof TypeOptionSchema>;

export const ConditionOptionSchema = z.object({
  id: DiveConditionIdSchema,
  nameKey: z.string(),
});
export type ConditionOption = z.infer<typeof ConditionOptionSchema>;

export const TagOptionSchema = z.object({
  id: DiveTagIdSchema,
  nameKey: z.string(),
});
export type TagOption = z.infer<typeof TagOptionSchema>;

// Estado de filtros
export const FiltersDataSchema = z.object({
  searchQuery: z.string(),
  destinationId: DestinationIdAllSchema,
  difficulty: DiveDifficultyIdAllSchema,
  maxDepth: z.number().int(),
  types: z.array(DiveTypeIdSchema),
  conditions: z.array(DiveConditionIdSchema),
  tags: z.array(DiveTagIdSchema),
});
export type FiltersData = z.infer<typeof FiltersDataSchema>;

// Props (datos con Zod + callbacks en TS)
export type DiveSiteFiltersProps = {
  filters: FiltersData;
  onFiltersChange: (next: FiltersData) => void;

  availableDestinations: DestinationOption[];
  availableDifficulties: DifficultyOption[];
  availableTypes: TypeOption[];
  availableConditions: ConditionOption[];
  availableTags: TagOption[];

  translationNS: I18NNamespace;
};

/* ──────────────────────────────
 * DiveSiteList
 * ────────────────────────────── */

// Item mínimo para la lista
export const DiveSiteListItemSchema = DiveSiteContentSchema.pick({
  id: true,
  nameKey: true,
  photos: true,
  maxDepthMeter: true,
  maxDepthFt: true,
  difficultyId: true,
});
export type DiveSiteListItem = z.infer<typeof DiveSiteListItemSchema>;

export const DiveSiteListPropsSchema = z.object({
  sites: z.array(DiveSiteListItemSchema).readonly(),
  onSelect: OnSelectHandlerSchema,
  onHover: OnHoverHandlerSchema,
  translationNS: I18NNamespaceSchema,
});
export type DiveSiteListProps = Omit<
  z.infer<typeof DiveSiteListPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

/* ──────────────────────────────
 * DiveSiteMap
 * ────────────────────────────── */

// Proyección mínima para el mapa
export const CoordinatesSchema = z
  .tuple([z.number(), z.number()])
  .describe('[lon, lat] — must be in WGS84');
export type Coordinates = z.infer<typeof CoordinatesSchema>;

export const DiveSiteForMapSchema = z.object({
  id: z.string(),
  nameKey: z.string(),
  coordinates: CoordinatesSchema,
  typeIds: z.array(DiveTypeIdSchema).optional(),
});
export type DiveSiteForMap = z.infer<typeof DiveSiteForMapSchema>;

export const DiveSiteMapPropsSchema = z.object({
  sites: z.array(DiveSiteForMapSchema).readonly(),
  hoveredSiteId: z.string().nullable(),
  focusedSite: DiveSiteForMapSchema.nullable(),
  onSelect: OnSelectHandlerSchema,
  onHover: OnHoverHandlerSchema,
  translationNS: I18NNamespaceSchema,
  initialCenter: CoordinatesSchema.optional(),
  initialZoom: z.number().optional(),
  minZoom: z.number().optional(),
  maxZoom: z.number().optional(),
});
export type DiveSiteMapProps = Omit<
  z.infer<typeof DiveSiteMapPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

/* ──────────────────────────────
 * DiveSiteModal
 * ────────────────────────────── */

// Lookups (alineados a los IDs del content)
export const DifficultyLookupItemSchema = z.object({
  id: DiveDifficultyIdSchema,
  nameKey: z.string(),
});
export type DifficultyLookupItem = z.infer<typeof DifficultyLookupItemSchema>;

export const TypeLookupItemSchema = z.object({
  id: DiveTypeIdSchema,
  nameKey: z.string(),
});
export type TypeLookupItem = z.infer<typeof TypeLookupItemSchema>;

export const ConditionLookupItemSchema = z.object({
  id: DiveConditionIdSchema,
  nameKey: z.string(),
});
export type ConditionLookupItem = z.infer<typeof ConditionLookupItemSchema>;

// Categorías de tags (si no existe en constants)
export const TagCategoryIdSchema = z.enum([
  'marine-life',
  'dive-characteristics',
  'features',
]);
export type TagCategoryId = z.infer<typeof TagCategoryIdSchema>;

export const TagLookupItemSchema = z.object({
  id: DiveTagIdSchema,
  nameKey: z.string(),
  categoryId: TagCategoryIdSchema.optional(),
});
export type TagLookupItem = z.infer<typeof TagLookupItemSchema>;

// Datos del modal (sin callbacks)
export const DiveSiteModalDataSchema = z.object({
  site: DiveSiteContentSchema.nullable(),
  translationNS: z.string(),
  difficulties: z.array(DifficultyLookupItemSchema),
  types: z.array(TypeLookupItemSchema),
  conditions: z.array(ConditionLookupItemSchema),
  tags: z.array(TagLookupItemSchema),
});
export type DiveSiteModalData = Omit<
  z.infer<typeof DiveSiteModalDataSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// Props completas del modal (TS añade el callback)
export type DiveSiteModalProps = DiveSiteModalData & {
  onClose: () => void;
};

// Icono que recibe className (nuestros íconos lo cumplen)
export type IconComponentType = React.ComponentType<
  React.SVGProps<SVGSVGElement>
>;

export const MotionMarkerPropsDataSchema = z.object({
  isSelected: z.boolean(),
});
export type MotionMarkerPropsData = z.infer<typeof MotionMarkerPropsDataSchema>;

export type MotionMarkerProps = MotionMarkerPropsData & {
  IconComponent: IconComponentType;
};

export const DiveSitesSectionPropsSchema = z.object({
  translationNS: I18NNamespaceSchema,
  sites: z.array(z.custom<DiveSiteContent>()).readonly(),
  destinations: z.array(DestinationOptionSchema).readonly(),
  initialFilters: z.custom<Partial<FiltersData>>().optional(),
  initialCenter: CoordinatesSchema.optional(),
  initialZoom: z.number().optional(),
  minZoom: z.number().optional(),
  maxZoom: z.number().optional(),
});

export type DiveSitesSectionProps = z.infer<typeof DiveSitesSectionPropsSchema>;
