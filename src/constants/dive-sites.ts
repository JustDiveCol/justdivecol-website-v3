// src/constants/diveConstants.ts

export const DIVE_LEVELS = [
  { id: 'none', translationKey: 'noneLevelKey' },
  { id: 'open-water-diver', translationKey: 'openWaterDiverLevelKey' },
  {
    id: 'advanced-open-water-diver',
    translationKey: 'advancedOpenWaterDiverLevelKey',
  },
  { id: 'technical-diver', translationKey: 'technicalDiverLevelKey' },
  { id: 'any', translationKey: 'anyLevelKey' },
] as const;

export const DIVE_DIFFICULTIES = [
  { id: 'easy', translationKey: 'easyDifficultyKey' },
  { id: 'medium', translationKey: 'mediumDifficultyKey' },
  { id: 'hard', translationKey: 'hardDifficultyKey' },
  { id: 'expert', translationKey: 'expertDifficultyKey' },
] as const;

export const DIVE_TYPES = [
  { id: 'reef', translationKey: 'reefTypeKey', icon: 'Reef' },
  { id: 'wreck', translationKey: 'wreckTypeKey', icon: 'Wreck' },
  { id: 'wall', translationKey: 'wallTypeKey', icon: 'Wall' },
  { id: 'pinnacle', translationKey: 'pinnacleTypeKey', icon: 'Pinnacle' },
  { id: 'cavern', translationKey: 'cavernTypeKey', icon: 'Cave' },
  { id: 'cave', translationKey: 'caveTypeKey', icon: 'Cave' },
  { id: 'drift', translationKey: 'driftTypeKey', icon: 'Drift' },
  { id: 'muck', translationKey: 'muckTypeKey', icon: 'Muck' },
  { id: 'blue-hole', translationKey: 'blueHoleTypeKey', icon: 'BlueHole' },
  { id: 'cenote', translationKey: 'cenoteTypeKey', icon: 'Cave' },
  { id: 'freshwater', translationKey: 'freshwaterTypeKey', icon: 'FreshWater' },
  {
    id: 'artificial-reef',
    translationKey: 'artificialReefTypeKey',
    icon: 'Reef',
  },
] as const;

export const DIVE_CONDITIONS = [
  { id: 'current', translationKey: 'currentConditionKey' },
  { id: 'mild-current', translationKey: 'mildCurrentConditionKey' },
  { id: 'moderate-current', translationKey: 'moderateCurrentConditionKey' },
  { id: 'strong-current', translationKey: 'strongCurrentConditionKey' },
  { id: 'deep', translationKey: 'deepConditionKey' },
  { id: 'visibility', translationKey: 'visibilityConditionKey' },
  {
    id: 'variable-visibility',
    translationKey: 'variableVisibilityConditionKey',
  },
  { id: 'good-visibility', translationKey: 'goodVisibilityConditionKey' },
  { id: 'limited-visibility', translationKey: 'limitedVisibilityConditionKey' },
  { id: 'thermocline', translationKey: 'thermoclineConditionKey' },
  { id: 'surge', translationKey: 'surgeConditionKey' },
  { id: 'surface', translationKey: 'surfaceConditionKey' },
  { id: 'rough-surface', translationKey: 'roughSurfaceConditionKey' },
  { id: 'calm-surface', translationKey: 'calmSurfaceConditionKey' },
  { id: 'entry', translationKey: 'entryConditionKey' },
  { id: 'boat-entry', translationKey: 'boatEntryConditionKey' },
  { id: 'shore-entry', translationKey: 'shoreEntryConditionKey' },
  { id: 'night', translationKey: 'nightConditionKey' },
] as const;

export const DIVE_TAG_CATEGORIES = [
  {
    id: 'marine-life',
    translationKey: 'marineLifeTagCategory',
    tags: [
      { id: 'sharks', translationKey: 'sharksTag' },
      { id: 'turtles', translationKey: 'turtlesTag' },
      { id: 'manta-rays', translationKey: 'mantaRaysTag' },
      { id: 'whale-sharks', translationKey: 'whaleSharksTag' },
      { id: 'nudibranchs', translationKey: 'nudibranchsTag' },
      { id: 'macro-life', translationKey: 'macroLifeTag' },
      { id: 'schooling-fish', translationKey: 'schoolingFishTag' },
      { id: 'barracuda', translationKey: 'barracudaTag' },
      { id: 'octopus', translationKey: 'octopusTag' },
      { id: 'dolphins', translationKey: 'dolphinsTag' },
      { id: 'seahorses', translationKey: 'seahorsesTag' },
      { id: 'frogfish', translationKey: 'frogfishTag' },
      { id: 'reef-fish', translationKey: 'reefFishTag' },
      { id: 'pelagics', translationKey: 'pelagicsTag' },
    ],
  },
  {
    id: 'dive-characteristics',
    translationKey: 'diveCharacteristicsTagCategory',
    tags: [
      { id: 'photography', translationKey: 'photographyTag' },
      { id: 'night-dive', translationKey: 'nightDiveTag' },
      { id: 'drift-dive', translationKey: 'driftDiveTag' },
      { id: 'deep-dive', translationKey: 'deepDiveTag' },
      { id: 'technical-dive', translationKey: 'technicalDiveTag' },
      { id: 'beginner-friendly', translationKey: 'beginnerFriendlyTag' },
      { id: 'advanced-only', translationKey: 'advancedOnlyTag' },
      { id: 'historical', translationKey: 'historicalTag' },
      { id: 'biodiversity-hotspot', translationKey: 'biodiversityHotspotTag' },
      { id: 'conservation-area', translationKey: 'conservationAreaTag' },
      { id: 'cold-water', translationKey: 'coldWaterTag' },
      { id: 'warm-water', translationKey: 'warmWaterTag' },
    ],
  },
  {
    id: 'features',
    translationKey: 'featuresTagCategory',
    tags: [
      { id: 'swim-throughs', translationKey: 'swimThroughsTag' },
      { id: 'canyons', translationKey: 'canyonsTag' },
      { id: 'caves', translationKey: 'cavesTag' },
      { id: 'overhangs', translationKey: 'overhangsTag' },
      { id: 'soft-corals', translationKey: 'softCoralsTag' },
      { id: 'hard-corals', translationKey: 'hardCoralsTag' },
      { id: 'anemones', translationKey: 'anemonesTag' },
    ],
  },
  {
    id: 'location',
    translationKey: 'locationTagCategory',
    tags: [
      { id: 'caribbean', translationKey: 'caribbeanTag' },
      { id: 'pacific', translationKey: 'pacificTag' },
      { id: 'red-sea', translationKey: 'redSeaTag' },
      { id: 'indian-ocean', translationKey: 'indianOceanTag' },
      { id: 'tropical', translationKey: 'tropicalTag' },
      { id: 'temperate', translationKey: 'temperateTag' },
    ],
  },
] as const;

// 2) Deriva tipos a partir de las constantes:
export type DiveLevel = (typeof DIVE_LEVELS)[number];
export type DiveLevelId = DiveLevel['id'];
export type DiveLevelTranslationKey = DiveLevel['translationKey'];

export type DiveDifficulty = (typeof DIVE_DIFFICULTIES)[number];
export type DiveDifficultyId = DiveDifficulty['id'];
export type DiveDifficultyTranslationKey = DiveDifficulty['translationKey'];

export type DiveType = (typeof DIVE_TYPES)[number];
export type DiveTypeId = DiveType['id'];
export type DiveTypeTranslationKey = DiveType['translationKey'];
export type DiveTypeIcon = DiveType['icon'];

export type DiveCondition = (typeof DIVE_CONDITIONS)[number];
export type DiveConditionId = DiveCondition['id'];
export type DiveConditionTranslationKey = DiveCondition['translationKey'];

export type DiveTag = (typeof DIVE_TAG_CATEGORIES)[number]['tags'][number];
export type DiveTagId = DiveTag['id'];
export type DiveTagTranslationKey = DiveTag['translationKey'];
export type DiveTagCategory = (typeof DIVE_TAG_CATEGORIES)[number];
export type DiveTagCategoryId = DiveTagCategory['id'];

export type DiveTagWithCategory = DiveTag & {
  categoryId: DiveTagCategoryId;
};

export function getDiveLevelById(id: DiveLevelId): DiveLevel | undefined {
  return DIVE_LEVELS.find((l) => l.id === id);
}

export function getDifficultyById(
  id: DiveDifficultyId
): DiveDifficulty | undefined {
  return DIVE_DIFFICULTIES.find((d) => d.id === id);
}

export function getDiveTypeById(id: DiveTypeId): DiveType | undefined {
  return DIVE_TYPES.find((t) => t.id === id);
}

export function getDiveConditionById(
  id: DiveConditionId
): DiveCondition | undefined {
  return DIVE_CONDITIONS.find((c) => c.id === id);
}

export function getDiveTagById(id: DiveTagId): DiveTagWithCategory | null {
  for (const category of DIVE_TAG_CATEGORIES) {
    const tag = category.tags.find((t) => t.id === id);
    if (tag) {
      return { ...tag, categoryId: category.id };
    }
  }
  return null;
}
