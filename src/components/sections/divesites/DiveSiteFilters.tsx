// src/components/sections/divesites/DiveSiteFilters.tsx
import { useTranslation } from 'react-i18next';
import type { DiveSiteFiltersProps, FiltersData } from './types';

export const DiveSiteFilters = ({
  filters,
  onFiltersChange,
  availableDestinations, // ← viene del padre
  availableDifficulties,
  availableTypes,
  availableConditions,
  availableTags,
  translationNS,
}: DiveSiteFiltersProps) => {
  const { t } = useTranslation([translationNS, 'destinations', 'common']);

  const handleFilterChange = <K extends keyof FiltersData>(
    key: K,
    value: FiltersData[K]
  ) => onFiltersChange({ ...filters, [key]: value });

  const handleMultiSelectToggle = <
    K extends 'types' | 'conditions' | 'tags',
    V extends FiltersData[K][number]
  >(
    key: K,
    value: V
  ) => {
    const current = filters[key] as V[];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFiltersChange({ ...filters, [key]: next as FiltersData[K] });
  };

  return (
    <div className='space-y-6'>
      {/* --- Búsqueda --- */}
      <div>
        <label
          htmlFor='search-query'
          className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterBySearch')}
        </label>
        <input
          id='search-query'
          type='text'
          value={filters.searchQuery}
          onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
          placeholder={t('searchPlaceholder')}
          className='form-input w-full'
        />
      </div>

      {/* --- Filtro por Destino --- */}
      <div>
        <label className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByDestination')}
        </label>
        <select
          value={filters.destinationId}
          onChange={(e) =>
            handleFilterChange(
              'destinationId',
              e.target.value as FiltersData['destinationId']
            )
          }
          className='form-input w-full'>
          <option value='all'>{t('filterAllDestinations')}</option>
          {availableDestinations.map((d) => (
            <option
              key={d.id}
              value={d.id}>
              {t(d.nameKey, { ns: 'destinations' })}
            </option>
          ))}
        </select>
      </div>

      {/* --- Dificultad --- */}
      <div>
        <label className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByDifficulty')}
        </label>
        <select
          value={filters.difficulty}
          onChange={(e) =>
            handleFilterChange(
              'difficulty',
              e.target.value as FiltersData['difficulty']
            )
          }
          className='form-input w-full'>
          <option value='all'>{t('filterAllDifficulties')}</option>
          {availableDifficulties.map((d) => (
            <option
              key={d.id}
              value={d.id}>
              {t(d.nameKey)}
            </option>
          ))}
        </select>
      </div>

      {/* --- Profundidad máxima --- */}
      <div>
        <label
          htmlFor='max-depth'
          className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByMaxDepth')} ({filters.maxDepth}m)
        </label>
        <input
          id='max-depth'
          type='range'
          min='10'
          max='40'
          step='5'
          value={filters.maxDepth}
          onChange={(e) =>
            handleFilterChange('maxDepth', parseInt(e.target.value, 10))
          }
          className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700'
        />
      </div>

      {/* --- Tipos --- */}
      <div>
        <label className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByType')}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleMultiSelectToggle('types', type.id)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                filters.types.includes(type.id as DiveTypeId)
                  ? 'bg-brand-cta-orange text-white'
                  : 'bg-white/10 text-brand-neutral hover:bg-white/20'
              }`}>
              {t(type.nameKey)}
            </button>
          ))}
        </div>
      </div>

      {/* --- Condiciones --- */}
      <div>
        <label className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByCondition')}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableConditions.map((cond) => (
            <button
              key={cond.id}
              onClick={() => handleMultiSelectToggle('conditions', cond.id)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                filters.conditions.includes(cond.id as DiveConditionId)
                  ? 'bg-brand-cta-orange text-white'
                  : 'bg-white/10 text-brand-neutral hover:bg-white/20'
              }`}>
              {t(cond.nameKey)}
            </button>
          ))}
        </div>
      </div>

      {/* --- Tags --- */}
      <div>
        <label className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByTag')}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => handleMultiSelectToggle('tags', tag.id)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                filters.tags.includes(tag.id as DiveTagId)
                  ? 'bg-brand-cta-orange text-white'
                  : 'bg-white/10 text-brand-neutral hover:bg-white/20'
              }`}>
              {t(tag.nameKey)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
