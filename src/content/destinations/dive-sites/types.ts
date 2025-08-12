// src/content/destinations/dive-sites/types.ts
import { z } from 'zod';
import { ImageComponentDataSchema } from '../../../components/common/types';
import {
  DestinationIdSchema,
  DiveConditionIdSchema,
  DiveDifficultyIdSchema,
  DiveLevelIdSchema,
  DiveTagIdSchema,
  DiveTypeIdSchema,
} from '../../../constants';

export const DiveSiteContentSchema = z.object({
  id: z.string(),
  nameKey: z.string(),
  destinationId: DestinationIdSchema,
  isTopSite: z.boolean(),
  coordinates: z
    .tuple([z.number(), z.number()])
    .describe('[lon, lat] — must be in WGS84'),
  maxDepthMeter: z.number().int(),
  maxDepthFt: z.number().int(),
  levelRequiredId: DiveLevelIdSchema,
  difficultyId: DiveDifficultyIdSchema,
  typeIds: z.array(DiveTypeIdSchema).min(1),
  conditionsIds: z.array(DiveConditionIdSchema).min(1),
  descriptionKey: z.string(),
  tagsIds: z.array(DiveTagIdSchema).min(1),
  photos: z.array(ImageComponentDataSchema).optional(),
});
export type DiveSiteContent = z.infer<typeof DiveSiteContentSchema>;
