import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DiveSite } from '../types/data';
import { SEO } from '../components/common/SEO';
import {
  DiveSiteFilters,
  type Filters,
} from '../components/sections/divesites/DiveSiteFilters';
import { DiveSiteList } from '../components/sections/divesites/DiveSiteList';
import { DiveSiteMap } from '../components/sections/divesites/DiveSiteMap';
import { DiveSiteModal } from '../components/sections/divesites/DiveSiteModal';
import { allDiveSites } from '../data/dive-sites';
import { diveDifficulties } from '../data/dive-filters/difficulties';
import { diveTypes } from '../data/dive-filters/types';
import { diveConditions } from '../data/dive-filters/conditions';
import { diveTags } from '../data/dive-filters/tags';
import {
  FilterIcon,
  CloseIcon,
  ChevronDoubleLeftIcon,
} from '../components/ui/Icons';
import { useTranslation } from 'react-i18next';

const initialFilters: Filters = {
  searchQuery: '',
  destinationId: 'all',
  difficulty: 'all',
  types: [],
  maxDepth: 40,
  conditions: [],
  tags: [],
};

export const DiveSitesPage = () => {
  const { t } = useTranslation(['dive-sites', 'common']);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [selectedSite, setSelectedSite] = useState<DiveSite | null>(null);
  const [focusedSite, setFocusedSite] = useState<DiveSite | null>(null);
  const [hoveredSiteId, setHoveredSiteId] = useState<string | null>(null);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const [isDesktopPanelExpanded, setIsDesktopPanelExpanded] = useState(false);

  const {
    filteredSites,
    availableDifficulties,
    availableTypes,
    availableConditions,
    availableTags,
  } = useMemo(() => {
    setFocusedSite(null);
    const finalFilteredSites = allDiveSites.filter((site) => {
      const searchMatch =
        filters.searchQuery === '' ||
        t(site.nameKey, { ns: 'dive-sites' })
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase());
      const destinationMatch =
        filters.destinationId === 'all' ||
        site.destinationId === filters.destinationId;
      const difficultyMatch =
        filters.difficulty === 'all' ||
        site.difficultyId === filters.difficulty;
      const depthMatch =
        typeof site.maxDepth === 'number'
          ? site.maxDepth <= filters.maxDepth
          : true;
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

    const availableDifficultyIds = new Set(
      finalFilteredSites.map((site) => site.difficultyId)
    );
    const availableTypeIds = new Set(
      finalFilteredSites.flatMap((site) => site.typeIds)
    );
    const availableConditionIds = new Set(
      finalFilteredSites.flatMap((site) => site.conditionsIds)
    );
    const availableTagIds = new Set(
      finalFilteredSites.flatMap((site) => site.tagsIds)
    );

    return {
      filteredSites: finalFilteredSites,
      availableDifficulties: diveDifficulties.filter((d) =>
        availableDifficultyIds.has(d.id)
      ),
      availableTypes: diveTypes.filter((t) => availableTypeIds.has(t.id)),
      availableConditions: diveConditions.filter((c) =>
        availableConditionIds.has(c.id)
      ),
      availableTags: diveTags.filter((t) => availableTagIds.has(t.id)),
    };
  }, [filters, t]);

  const handleSelectSite = useCallback((siteId: string | null) => {
    if (siteId === null) {
      setSelectedSite(null);
      return;
    }
    const site = allDiveSites.find((s) => s.id === siteId);
    if (site) {
      setSelectedSite(site);
      setFocusedSite(site);
      if (window.innerWidth < 768) {
        setIsMobilePanelOpen(false);
      }
    }
  }, []);

  const handleHoverSite = useCallback((siteId: string | null) => {
    setHoveredSiteId(siteId);
  }, []);

  const handleCloseModal = () => {
    setSelectedSite(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobilePanelOpen(false);
        setSelectedSite(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <SEO
        titleKey='diveSitesSeoTitle'
        descriptionKey='diveSitesSeoDesc'
      />

      <div className='relative flex h-[calc(100vh-5rem)] mt-20 overflow-hidden'>
        <AnimatePresence>
          {isMobilePanelOpen && (
            <motion.div
              key='mobile-backdrop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobilePanelOpen(false)}
              className='absolute inset-0 bg-black/50 z-20 md:hidden'
            />
          )}
        </AnimatePresence>

        <aside
          className={`
            h-full flex flex-col bg-brand-primary-dark shadow-lg z-30 
            transition-all duration-300 ease-in-out
            absolute top-0 left-0 md:relative md:z-10 md:translate-x-0
            ${
              isMobilePanelOpen
                ? 'translate-x-0 w-full sm:w-[350px]'
                : '-translate-x-full w-full sm:w-[350px]'
            }
            ${isDesktopPanelExpanded ? 'md:w-[350px]' : 'md:w-20'}
          `}>
          <div className='flex flex-col h-full overflow-hidden'>
            <div className='flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0'>
              <AnimatePresence>
                {isDesktopPanelExpanded && (
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='heading-5 text-white whitespace-nowrap'>
                    Filtros
                  </motion.h2>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsMobilePanelOpen(false)}
                className='md:hidden text-white/80 hover:text-white'>
                <CloseIcon className='h-6 w-6' />
              </button>
            </div>

            {/* ===== CAMBIO AQUÍ: Las clases de opacidad ahora son responsivas ('md:') ===== */}
            <div
              className={`flex-grow flex flex-col min-h-0 md:transition-opacity md:duration-200 ${
                isDesktopPanelExpanded
                  ? 'md:opacity-100'
                  : 'md:opacity-0 md:pointer-events-none'
              }`}>
              <div className='p-4 overflow-y-auto'>
                <DiveSiteFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                  availableDifficulties={availableDifficulties}
                  availableTypes={availableTypes}
                  availableConditions={availableConditions}
                  availableTags={availableTags}
                />
              </div>
              <div className='flex-grow overflow-y-auto border-t border-white/10 mt-4'>
                <DiveSiteList
                  sites={filteredSites}
                  onSelect={handleSelectSite}
                  onHover={handleHoverSite}
                />
              </div>
            </div>

            <div className='hidden md:flex items-center justify-center p-4 mt-auto border-t border-white/10 flex-shrink-0'>
              <button
                onClick={() => setIsDesktopPanelExpanded((prev) => !prev)}
                className='flex items-center justify-center gap-2 text-white/70 hover:text-white w-full h-10'>
                {isDesktopPanelExpanded ? (
                  <ChevronDoubleLeftIcon className='h-5 w-5' />
                ) : (
                  <FilterIcon className='h-6 w-6' />
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
                      exit={{ opacity: 0, width: 0, marginLeft: '0rem' }}
                      className='text-sm font-bold whitespace-nowrap'>
                      Ocultar
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </aside>

        <main className='flex-grow h-full'>
          <DiveSiteMap
            sites={filteredSites}
            hoveredSiteId={hoveredSiteId}
            focusedSite={focusedSite}
            onSelect={handleSelectSite}
            onHover={handleHoverSite}
          />
        </main>
      </div>

      <button
        onClick={() => setIsMobilePanelOpen((prev) => !prev)}
        className='md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 bg-brand-primary-dark text-white rounded-full shadow-lg border border-white/20'>
        <FilterIcon className='h-5 w-5' />
        <span className='font-bold'>Filtros</span>
      </button>

      {selectedSite && (
        <DiveSiteModal
          site={selectedSite}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
