// src/components/sections/divesites/DiveSitesSection.tsx
import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  DIVE_CONDITIONS,
  DIVE_DIFFICULTIES,
  DIVE_TAG_CATEGORIES,
  DIVE_TYPES,
  type DiveTagId,
} from '../../../constants';
import type {
  ConditionLookupItem,
  DifficultyLookupItem,
  DiveSiteForMap,
  DiveSiteListItem,
  DiveSitesSectionProps,
  FiltersData,
  TagLookupItem,
  TypeLookupItem,
} from '../../../components/sections/divesites/types';
import type { DiveSiteContent } from '../../../content/destinations/dive-sites/types';
import {
  ChevronDoubleLeftIcon,
  CloseIcon,
  FilterIcon,
} from '../../../components/ui';
import { DiveSiteFilters } from '../../../components/sections/divesites/DiveSiteFilters';
import { DiveSiteList } from '../../../components/sections/divesites/DiveSiteList';
import { DiveSiteMap } from '../../../components/sections/divesites/DiveSiteMap';
import { DiveSiteModal } from '../../../components/sections/divesites/DiveSiteModal';

// ---- Helper mínimo para tipar los tags y evitar errores de unión
type TagLite = { id: DiveTagId; translationKey: string };
const ALL_TAGS: readonly TagLite[] = DIVE_TAG_CATEGORIES.flatMap(
  (cat) => cat.tags as readonly TagLite[]
);

// ---- Filtros iniciales
const initialFilters: FiltersData = {
  searchQuery: '',
  destinationId: 'all',
  difficulty: 'all',
  types: [],
  maxDepth: 40,
  conditions: [],
  tags: [],
};

export const DiveSitesSection = ({
  translationNS,
  sites,
  destinations,
  initialFilters: initialFiltersProp,
  initialCenter,
  initialZoom,
  minZoom,
  maxZoom,
}: DiveSitesSectionProps) => {
  const { t } = useTranslation([translationNS, 'dive-sites', 'common']);

  const [filters, setFilters] = useState<FiltersData>({
    ...initialFilters,
    ...initialFiltersProp,
  });
  const [selectedSite, setSelectedSite] = useState<DiveSiteContent | null>(
    null
  );
  const [focusedSite, setFocusedSite] = useState<DiveSiteContent | null>(null);
  const [hoveredSiteId, setHoveredSiteId] = useState<string | null>(null);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const [isDesktopPanelExpanded, setIsDesktopPanelExpanded] = useState(false);

  const difficultyLookup = useMemo<DifficultyLookupItem[]>(
    () =>
      DIVE_DIFFICULTIES.map(({ id, translationKey }) => ({
        id,
        nameKey: translationKey,
      })),
    []
  );

  const typeLookup = useMemo<TypeLookupItem[]>(
    () =>
      DIVE_TYPES.map(({ id, translationKey }) => ({
        id,
        nameKey: translationKey,
      })),
    []
  );

  const conditionLookup = useMemo<ConditionLookupItem[]>(
    () =>
      DIVE_CONDITIONS.map(({ id, translationKey }) => ({
        id,
        nameKey: translationKey,
      })),
    []
  );

  const tagLookup = useMemo<TagLookupItem[]>(
    () =>
      DIVE_TAG_CATEGORIES.flatMap((cat) =>
        (cat.tags as readonly TagLite[]).map((tag) => ({
          id: tag.id,
          nameKey: tag.translationKey,
          categoryId: cat.id,
        }))
      ),
    []
  );

  // Filtrado + sets disponibles
  const {
    filteredSites,
    availableDestinations,
    availableDifficulties,
    availableTypes,
    availableConditions,
    availableTags,
  } = useMemo(() => {
    setFocusedSite(null);

    const filtered = sites.filter((site) => {
      const searchMatch =
        filters.searchQuery === '' ||
        t(site.nameKey, { ns: translationNS })
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase());

      const destinationMatch =
        filters.destinationId === 'all' ||
        site.destinationId === filters.destinationId;

      const difficultyMatch =
        filters.difficulty === 'all' ||
        site.difficultyId === filters.difficulty;

      const depthMatch = site.maxDepthMeter <= filters.maxDepth;

      const typeMatch =
        filters.types.length === 0 ||
        filters.types.some((typeId) => site.typeIds.includes(typeId));

      const conditionMatch =
        filters.conditions.length === 0 ||
        filters.conditions.some((condId) =>
          site.conditionsIds.includes(condId)
        );

      const tagMatch =
        filters.tags.length === 0 ||
        filters.tags.some((tagId) => site.tagsIds.includes(tagId));

      return (
        searchMatch &&
        destinationMatch &&
        difficultyMatch &&
        depthMatch &&
        typeMatch &&
        conditionMatch &&
        tagMatch
      );
    });

    // Conjuntos para limitar opciones disponibles
    const destIds = new Set(filtered.map((s) => s.destinationId));
    const diffIds = new Set(filtered.map((s) => s.difficultyId));
    const typeIds = new Set(filtered.flatMap((s) => s.typeIds));
    const condIds = new Set(filtered.flatMap((s) => s.conditionsIds));
    const tagIds = new Set<DiveTagId>(filtered.flatMap((s) => s.tagsIds));

    return {
      filteredSites: filtered,

      availableDestinations: destinations.filter((d) => destIds.has(d.id)),

      availableDifficulties: DIVE_DIFFICULTIES.filter((d) =>
        diffIds.has(d.id)
      ).map(({ id, translationKey }) => ({ id, nameKey: translationKey })),

      availableTypes: DIVE_TYPES.filter((dt) => typeIds.has(dt.id)).map(
        ({ id, translationKey }) => ({ id, nameKey: translationKey })
      ),

      availableConditions: DIVE_CONDITIONS.filter((c) => condIds.has(c.id)).map(
        ({ id, translationKey }) => ({ id, nameKey: translationKey })
      ),

      availableTags: ALL_TAGS.filter((tag) => tagIds.has(tag.id)).map(
        ({ id, translationKey }) => ({ id, nameKey: translationKey })
      ),
    };
  }, [sites, destinations, filters, t, translationNS]);

  // Proyecciones para hijos (evitamos castear)
  const listItems = useMemo<readonly DiveSiteListItem[]>(
    () =>
      filteredSites.map((s) => ({
        id: s.id,
        nameKey: s.nameKey,
        photos: s.photos,
        maxDepthMeter: s.maxDepthMeter,
        maxDepthFt: s.maxDepthFt,
        difficultyId: s.difficultyId,
      })),
    [filteredSites]
  );

  const mapSites = useMemo<readonly DiveSiteForMap[]>(
    () =>
      filteredSites.map((s) => ({
        id: s.id,
        nameKey: s.nameKey,
        coordinates: s.coordinates,
        typeIds: s.typeIds,
      })),
    [filteredSites]
  );

  // Handlers
  const handleSelectSite = useCallback(
    (siteId: string | null) => {
      if (siteId === null) {
        setSelectedSite(null);
        return;
      }
      const site = sites.find((s) => s.id === siteId) ?? null;
      setSelectedSite(site);
      setFocusedSite(site);
      if (site && window.innerWidth < 768) setIsMobilePanelOpen(false);
    },
    [sites]
  );

  const handleHoverSite = useCallback((siteId: string | null) => {
    setHoveredSiteId(siteId);
  }, []);

  const handleCloseModal = () => setSelectedSite(null);

  // Esc para cerrar en móvil y modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobilePanelOpen(false);
        setSelectedSite(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="dive-sites"
      className="relative w-full h-full bg-brand-primary-dark"
    >
      <div className="relative flex h-full overflow-hidden">
        <AnimatePresence>
          {isMobilePanelOpen && (
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobilePanelOpen(false)}
              className="absolute inset-0 z-20 bg-black/50 md:hidden"
            />
          )}
        </AnimatePresence>

        {/* Sidebar de filtros/lista */}
        <aside
          className={`
            absolute left-0 top-0 z-30 flex h-full flex-col bg-brand-primary-dark shadow-lg
            transition-all duration-300 ease-in-out
            md:relative md:z-10 md:translate-x-0
            ${
              isMobilePanelOpen
                ? 'translate-x-0 w-full sm:w-[350px]'
                : '-translate-x-full w-full sm:w-[350px]'
            }
            ${isDesktopPanelExpanded ? 'md:w-[350px]' : 'md:w-20'}
          `}
        >
          <div className="flex h-full flex-col overflow-hidden">
            {/* Header */}
            <div className="flex flex-shrink-0 items-center justify-between border-b border-white/10 p-4">
              <AnimatePresence>
                {isDesktopPanelExpanded && (
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="heading-5 whitespace-nowrap text-white"
                  >
                    {t('filtersTitle', {
                      ns: translationNS,
                      defaultValue: 'Filtros',
                    })}
                  </motion.h2>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsMobilePanelOpen(false)}
                className="text-white/80 hover:text-white md:hidden"
                type="button"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Cuerpo: Filtros (70%) + Lista (30%) */}
            <div
              className={`flex-1 min-h-0 flex flex-col md:transition-opacity md:duration-200 ${
                isDesktopPanelExpanded
                  ? 'md:opacity-100'
                  : 'md:pointer-events-none md:opacity-0'
              }`}
            >
              {/* Filtros con más espacio */}
              <div className="min-h-0 overflow-y-auto p-4 flex-[0_0_70%]">
                <DiveSiteFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                  availableDestinations={availableDestinations}
                  availableDifficulties={availableDifficulties}
                  availableTypes={availableTypes}
                  availableConditions={availableConditions}
                  availableTags={availableTags}
                  translationNS={translationNS}
                />
              </div>

              {/* Lista con menos espacio */}
              <div className="min-h-0 overflow-y-auto border-t border-white/10 flex-[0_0_30%]">
                <DiveSiteList
                  sites={listItems}
                  onSelect={handleSelectSite}
                  onHover={handleHoverSite}
                  translationNS={translationNS}
                />
              </div>
            </div>

            {/* Footer (toggle expand) */}
            <div className="mt-auto hidden flex-shrink-0 items-center justify-center border-t border-white/10 p-4 md:flex">
              <button
                onClick={() => setIsDesktopPanelExpanded((prev) => !prev)}
                className="flex h-10 w-full items-center justify-center gap-2 text-white/70 hover:text-white"
                type="button"
              >
                {isDesktopPanelExpanded ? (
                  <ChevronDoubleLeftIcon className="h-5 w-5" />
                ) : (
                  <FilterIcon className="h-6 w-6" />
                )}
                <AnimatePresence>
                  {isDesktopPanelExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{
                        opacity: 1,
                        width: 'auto',
                        marginLeft: '0.5rem',
                      }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      className="whitespace-nowrap text-sm font-bold"
                    >
                      {t('hideFilters', {
                        ns: translationNS,
                        defaultValue: 'Ocultar',
                      })}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </aside>

        {/* Mapa */}
        <main className="h-full flex-grow">
          <DiveSiteMap
            sites={mapSites}
            hoveredSiteId={hoveredSiteId}
            focusedSite={
              focusedSite
                ? {
                    id: focusedSite.id,
                    nameKey: focusedSite.nameKey,
                    coordinates: focusedSite.coordinates,
                    typeIds: focusedSite.typeIds,
                  }
                : null
            }
            onSelect={handleSelectSite}
            onHover={handleHoverSite}
            translationNS={translationNS}
            initialCenter={initialCenter}
            initialZoom={initialZoom}
            minZoom={minZoom}
            maxZoom={maxZoom}
          />
        </main>
      </div>

      {/* Botón de filtros en móvil */}
      <button
        onClick={() => setIsMobilePanelOpen((prev) => !prev)}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-brand-primary-dark px-4 py-2 text-white shadow-lg md:hidden"
        type="button"
      >
        <FilterIcon className="h-5 w-5" />
        <span className="ml-2 font-bold">
          {t('filtersCta', { ns: translationNS, defaultValue: 'Filtros' })}
        </span>
      </button>

      {/* Modal del sitio */}
      {selectedSite && (
        <DiveSiteModal
          site={selectedSite}
          onClose={handleCloseModal}
          translationNS={translationNS}
          difficulties={difficultyLookup}
          types={typeLookup}
          conditions={conditionLookup}
          tags={tagLookup}
        />
      )}
    </section>
  );
};
