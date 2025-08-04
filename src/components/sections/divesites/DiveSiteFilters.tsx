import { useTranslation } from 'react-i18next';
import { allDestinations } from '../../../data/destinations';

// Tipos para los datos de las opciones
type Option = { id: string; nameKey: string };

// Tipado para el objeto de filtros
export interface Filters {
  searchQuery: string;
  destinationId: string;
  difficulty: string;
  types: string[];
  maxDepth: number;
  conditions: string[];
  tags: string[];
}

interface DiveSiteFiltersProps {
  filters: Filters;
  onFiltersChange: (newFilters: Filters) => void;
  availableDifficulties: Option[];
  availableTypes: Option[];
  availableConditions: Option[];
  availableTags: Option[];
}

export const DiveSiteFilters = (props: DiveSiteFiltersProps) => {
  const {
    filters,
    onFiltersChange,
    availableDifficulties,
    availableTypes,
    availableConditions,
    availableTags,
  } = props;
  const { t } = useTranslation(['dive-sites', 'destinations', 'common']);

  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleMultiSelectToggle = (
    key: 'types' | 'conditions' | 'tags',
    value: string
  ) => {
    const currentValues = filters[key];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((id) => id !== value)
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
          onChange={(e) => handleFilterChange('destinationId', e.target.value)}
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
          onChange={(e) => handleFilterChange('difficulty', e.target.value)}
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
              onClick={() => handleMultiSelectToggle('types', type.id)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filters.types.includes(type.id)
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
              onClick={() => handleMultiSelectToggle('conditions', cond.id)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filters.conditions.includes(cond.id)
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
              onClick={() => handleMultiSelectToggle('tags', tag.id)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filters.tags.includes(tag.id)
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
