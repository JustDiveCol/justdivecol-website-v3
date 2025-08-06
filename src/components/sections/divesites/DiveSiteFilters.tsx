// src/components/sections/divesites/DiveSiteFilters.tsx
import { useTranslation } from 'react-i18next';
import { allDestinations } from '../../../data/destinations';
import type { DiveSiteFiltersProps, FiltersData } from './types';
import type {
  DiveTypeId,
  DiveConditionId,
  DiveTagId,
} from '../../../constants/dive-sites';

export const DiveSiteFilters = ({
  filters,
  onFiltersChange,
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
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleMultiSelectToggle = <K extends 'types' | 'conditions' | 'tags'>(
    key: K,
    value: FiltersData[K] extends Array<infer U> ? U : never
  ) => {
    const currentValues = filters[key] as Array<typeof value>;
    const isSelected = currentValues.includes(value);
    const newValues = isSelected
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    onFiltersChange({ ...filters, [key]: newValues });
  };

  return (
    <div className='space-y-6'>
      {/* --- Campo de Búsqueda por Nombre --- */}
      <div>
        <label
          htmlFor='search-query'
          className='block text-sm font-bold text-brand-white mb-2'>
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
        <label className='block text-sm font-bold text-brand-white mb-2'>
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
          {allDestinations.map((d) => (
            <option
              key={d.id}
              value={d.id}>
              {t(d.nameKey, { ns: 'destinations' })}
            </option>
          ))}
        </select>
      </div>

      {/* --- Filtro por Dificultad --- */}
      <div>
        <label className='block text-sm font-bold text-brand-white mb-2'>
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

      {/* --- Filtro por Profundidad Máxima --- */}
      <div>
        <label
          htmlFor='max-depth'
          className='block text-sm font-bold text-brand-white mb-2'>
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
          className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer'
        />
      </div>

      {/* --- Filtro por Tipo de Buceo --- */}
      <div>
        <label className='block text-sm font-bold text-brand-white mb-2'>
          {t('filterByType')}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableTypes.map((type) => (
            <button
              key={type.id}
              onClick={() =>
                handleMultiSelectToggle('types', type.id as DiveTypeId)
              }
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filters.types.includes(type.id as DiveTypeId)
                  ? 'bg-brand-cta-orange text-white'
                  : 'bg-white/10 text-brand-neutral hover:bg-white/20'
              }`}>
              {t(type.nameKey)}
            </button>
          ))}
        </div>
      </div>

      {/* --- Filtro por Condiciones --- */}
      <div>
        <label className='block text-sm font-bold text-brand-white mb-2'>
          {t('filterByCondition')}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableConditions.map((cond) => (
            <button
              key={cond.id}
              onClick={() =>
                handleMultiSelectToggle(
                  'conditions',
                  cond.id as DiveConditionId
                )
              }
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filters.conditions.includes(cond.id as DiveConditionId)
                  ? 'bg-brand-cta-orange text-white'
                  : 'bg-white/10 text-brand-neutral hover:bg-white/20'
              }`}>
              {t(cond.nameKey)}
            </button>
          ))}
        </div>
      </div>

      {/* --- Filtro por Etiquetas --- */}
      <div>
        <label className='block text-sm font-bold text-brand-white mb-2'>
          {t('filterByTag')}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() =>
                handleMultiSelectToggle('tags', tag.id as DiveTagId)
              }
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
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
