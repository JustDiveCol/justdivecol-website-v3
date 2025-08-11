// src/pages/DiveSitesPage.tsx
import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { SEO } from '../components/common/SEO';
import { DiveSiteFilters } from '../components/sections/divesites/DiveSiteFilters';
import { DiveSiteList } from '../components/sections/divesites/DiveSiteList';
import { DiveSiteMap } from '../components/sections/divesites/DiveSiteMap';
import { DiveSiteModal } from '../components/sections/divesites/DiveSiteModal';

import { FilterIcon, CloseIcon, ChevronDoubleLeftIcon } from '../components/ui';

import type { FiltersData } from '../components/sections/divesites/types';
import type { DiveSite } from '../lib/db/schema';

import { diveSites } from '../lib/db/entities/divesites';
import {
  DIVE_CONDITIONS,
  DIVE_DIFFICULTIES,
  DIVE_TAG_CATEGORIES,
  DIVE_TYPES,
  type DiveTag,
} from '../lib/db/constants';

import { ROUTES } from '../constants/routes';
import { toUrlPath } from '../content/urlPathSchema';

const initialFilters: FiltersData = {
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
  const [filters, setFilters] = useState<FiltersData>(initialFilters);
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

    const finalFilteredSites = diveSites.filter((site) => {
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

      // Usa el campo real del schema
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

    const availableDifficultyIds = new Set(
      finalFilteredSites.map((s) => s.difficultyId)
    );
    const availableTypeIds = new Set(
      finalFilteredSites.flatMap((s) => s.typeIds)
    );
    const availableConditionIds = new Set(
      finalFilteredSites.flatMap((s) => s.conditionsIds)
    );
    const availableTagIds = new Set(
      finalFilteredSites.flatMap((s) => s.tagsIds)
    );

    return {
      filteredSites: finalFilteredSites,

      availableDifficulties: DIVE_DIFFICULTIES.filter((d) =>
        availableDifficultyIds.has(d.id)
      ).map(({ id, translationKey }) => ({ id, nameKey: translationKey })),

      availableTypes: DIVE_TYPES.filter((dt) =>
        availableTypeIds.has(dt.id)
      ).map(({ id, translationKey }) => ({ id, nameKey: translationKey })),

      availableConditions: DIVE_CONDITIONS.filter((c) =>
        availableConditionIds.has(c.id)
      ).map(({ id, translationKey }) => ({ id, nameKey: translationKey })),

      availableTags: DIVE_TAG_CATEGORIES.flatMap(
        (cat) => cat.tags as readonly DiveTag[]
      )
        .filter((tag) => availableTagIds.has(tag.id))
        .map(({ id, translationKey }) => ({ id, nameKey: translationKey })),
    };
  }, [filters, t]);

  const handleSelectSite = useCallback((siteId: string | null) => {
    if (siteId === null) {
      setSelectedSite(null);
      return;
    }
    const site = diveSites.find((s) => s.id === siteId);
    if (site) {
      setSelectedSite(site);
      setFocusedSite(site);
      if (window.innerWidth < 768) setIsMobilePanelOpen(false);
    }
  }, []);

  const handleHoverSite = useCallback((siteId: string | null) => {
    setHoveredSiteId(siteId);
  }, []);

  const handleCloseModal = () => setSelectedSite(null);

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
    <>
      <SEO
        titleKey='diveSitesSeoTitle'
        descriptionKey='diveSitesSeoDesc'
        keywordsKey=''
        imageUrl=''
        urlPath={toUrlPath(ROUTES['dive-sites'])}
        translationNS='dive-sites'
      />

      <div className='relative mt-20 flex h-[calc(100vh-5rem)] overflow-hidden'>
        <AnimatePresence>
          {isMobilePanelOpen && (
            <motion.div
              key='mobile-backdrop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobilePanelOpen(false)}
              className='absolute inset-0 z-20 bg-black/50 md:hidden'
            />
          )}
        </AnimatePresence>

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
          `}>
          <div className='flex h-full flex-col overflow-hidden'>
            <div className='flex flex-shrink-0 items-center justify-between border-b border-white/10 p-4'>
              <AnimatePresence>
                {isDesktopPanelExpanded && (
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='heading-5 whitespace-nowrap text-white'>
                    Filtros
                  </motion.h2>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsMobilePanelOpen(false)}
                className='text-white/80 hover:text-white md:hidden'>
                <CloseIcon className='h-6 w-6' />
              </button>
            </div>

            <div
              className={`flex min-h-0 flex-grow flex-col md:transition-opacity md:duration-200 ${
                isDesktopPanelExpanded
                  ? 'md:opacity-100'
                  : 'md:pointer-events-none md:opacity-0'
              }`}>
              <div className='overflow-y-auto p-4'>
                <DiveSiteFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                  availableDifficulties={availableDifficulties}
                  availableTypes={availableTypes}
                  availableConditions={availableConditions}
                  availableTags={availableTags}
                  translationNS='dive-sites'
                />
              </div>

              <div className='mt-4 flex-grow overflow-y-auto border-t border-white/10'>
                <DiveSiteList
                  sites={filteredSites}
                  onSelect={handleSelectSite}
                  onHover={handleHoverSite}
                  translationNS='dive-sites'
                />
              </div>
            </div>

            <div className='mt-auto hidden flex-shrink-0 items-center justify-center border-t border-white/10 p-4 md:flex'>
              <button
                onClick={() => setIsDesktopPanelExpanded((prev) => !prev)}
                className='flex h-10 w-full items-center justify-center gap-2 text-white/70 hover:text-white'>
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
                      className='whitespace-nowrap text-sm font-bold'>
                      Ocultar
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </aside>

        <main className='h-full flex-grow'>
          <DiveSiteMap
            sites={filteredSites}
            hoveredSiteId={hoveredSiteId}
            focusedSite={focusedSite}
            onSelect={handleSelectSite}
            onHover={handleHoverSite}
            translationNS='dive-sites'
          />
        </main>
      </div>

      <button
        onClick={() => setIsMobilePanelOpen((prev) => !prev)}
        className='absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-brand-primary-dark px-4 py-2 text-white shadow-lg md:hidden'>
        <FilterIcon className='h-5 w-5' />
        <span className='ml-2 font-bold'>Filtros</span>
      </button>

      {selectedSite && (
        <DiveSiteModal
          site={selectedSite}
          onClose={handleCloseModal}
          translationNS='dive-sites'
        />
      )}
    </>
  );
};
