// src/components/sections/about/types.ts
import { z } from 'zod';
import {
  I18NNamespaceSchema,
  type I18NNamespace,
} from '../../../constants/i18n.schema';
import { ImageComponentDataSchema } from '../../common/types';

// ––– MissionSection –––
export const MissionSectionPropsSchema = z.object({
  titleKey: z.string().min(1),
  textKey: z.string().min(1),
  translationNS: I18NNamespaceSchema,
  imageData: ImageComponentDataSchema, // mismo shape que usa <ImageComponent />
});

export type MissionSectionProps = Omit<
  z.infer<typeof MissionSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace; // TS fuerte
};

// ––– TeamSection –––
export const TeamMemberDataSchema = z.object({
  id: z.union([z.string(), z.number()]),
  imageUrl: z.string().min(1),
  name: z.string().min(1),
  roleKey: z.string().min(1),
  bioKey: z.string().min(1),
});
export type TeamMemberData = z.infer<typeof TeamMemberDataSchema>;

export const TeamCardPropsSchema = z.object({
  memberData: TeamMemberDataSchema,
  className: z.string().optional(),
  translationNS: I18NNamespaceSchema,
});
export type TeamCardProps = Omit<
  z.infer<typeof TeamCardPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

export const TeamSectionPropsSchema = z.object({
  titleKey: z.string().min(1),
  members: z.array(TeamMemberDataSchema).min(1),
  translationNS: I18NNamespaceSchema,
});
export type TeamSectionProps = Omit<
  z.infer<typeof TeamSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};
