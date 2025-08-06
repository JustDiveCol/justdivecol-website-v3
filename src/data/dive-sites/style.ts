import type { ImageComponentData } from '../../components/common/types';
import type { DestinationId } from '../../constants/destinations';
import type {
  DiveConditionId,
  DiveDifficultyId,
  DiveLevelId,
  DiveTagId,
  DiveTypeId,
} from '../../constants/dive-sites';

export type DiveSite = {
  id: string;
  nameKey: string;
  destinationId: DestinationId;
  isTopSite: boolean;
  coordinates: [number, number];
  maxDepth: number | string;
  levelRequiredId: DiveLevelId;
  difficultyId: DiveDifficultyId;
  typeIds: DiveTypeId[];
  conditionsIds: DiveConditionId[];
  descriptionKey: string;
  tagsIds: DiveTagId[];
  featuredImage: ImageComponentData;
  photos: ImageComponentData[];
};
