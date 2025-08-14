// src/components/sections/divesites/DiveSiteFilters.tsx
import { useTranslation } from 'react-i18next';
import type {
  DiveSiteFiltersProps,
  FiltersData,
  TypeOption,
  ConditionOption,
  TagOption,
  DestinationIdAll,
  DiveDifficultyIdAll,
} from './types';

export const DiveSiteFilters = ({
  filters,
  onFiltersChange,
  availableDestinations,
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
          {t('filterBySearch', { ns: translationNS })}
        </label>
        <input
          id='search-query'
          type='text'
          value={filters.searchQuery}
          onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
          placeholder={t('searchPlaceholder', { ns: translationNS })}
          className='form-input w-full'
        />
      </div>

      {/* --- Destino --- */}
      <div>
        <label className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByDestination', { ns: translationNS })}
        </label>
        <select
          value={filters.destinationId}
          onChange={(e) =>
            handleFilterChange(
              'destinationId',
              (e.target.value || 'all') as DestinationIdAll
            )
          }
          className='form-input w-full'>
          <option value='all'>
            {t('filterAllDestinations', { ns: translationNS })}
          </option>
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
          {t('filterByDifficulty', { ns: translationNS })}
        </label>
        <select
          value={filters.difficulty}
          onChange={(e) =>
            handleFilterChange(
              'difficulty',
              (e.target.value || 'all') as DiveDifficultyIdAll
            )
          }
          className='form-input w-full'>
          <option value='all'>
            {t('filterAllDifficulties', { ns: translationNS })}
          </option>
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
          {t('filterByMaxDepth', { ns: translationNS })} ({filters.maxDepth}m)
        </label>
        <input
          id='max-depth'
          type='range'
          min={10}
          max={40}
          step={5}
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
          {t('filterByType', { ns: translationNS })}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableTypes.map((type: TypeOption) => {
            const selected = filters.types.includes(type.id);
            return (
              <button
                key={type.id}
                type='button'
                onClick={() => handleMultiSelectToggle('types', type.id)}
                aria-pressed={selected}
                className={`rounded-full px-3 py-1 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/60 ${
                  selected
                    ? 'bg-brand-cta-orange text-white'
                    : 'bg-white/10 text-brand-neutral hover:bg-white/20'
                }`}>
                {t(type.nameKey)}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- Condiciones --- */}
      <div>
        <label className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByCondition', { ns: translationNS })}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableConditions.map((cond: ConditionOption) => {
            const selected = filters.conditions.includes(cond.id);
            return (
              <button
                key={cond.id}
                type='button'
                onClick={() => handleMultiSelectToggle('conditions', cond.id)}
                aria-pressed={selected}
                className={`rounded-full px-3 py-1 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/60 ${
                  selected
                    ? 'bg-brand-cta-orange text-white'
                    : 'bg-white/10 text-brand-neutral hover:bg-white/20'
                }`}>
                {t(cond.nameKey)}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- Tags --- */}
      <div>
        <label className='mb-2 block text-sm font-bold text-brand-white'>
          {t('filterByTag', { ns: translationNS })}
        </label>
        <div className='flex flex-wrap gap-2'>
          {availableTags.map((tag: TagOption) => {
            const selected = filters.tags.includes(tag.id);
            return (
              <button
                key={tag.id}
                type='button'
                onClick={() => handleMultiSelectToggle('tags', tag.id)}
                aria-pressed={selected}
                className={`rounded-full px-3 py-1 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/60 ${
                  selected
                    ? 'bg-brand-cta-orange text-white'
                    : 'bg-white/10 text-brand-neutral hover:bg-white/20'
                }`}>
                {t(tag.nameKey)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
