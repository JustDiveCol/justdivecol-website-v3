// src/components/sections/contact/types.ts
import { z } from 'zod';
import type { I18NNamespace } from '../../../constants/i18n.schema';
import { TranslationNSSchema } from '../../common/types';
import { SocialSchema } from '../../../constants/social.schema';

// ––– ContactSection –––
export const ContactSectionPropsSchema = z.object({
  titleKey: z.string().min(1),

  phone: z.string().min(1),
  email: z.email(),
  emailSubjectKey: z.string().min(1),
  emailBodyKey: z.string().min(1),

  socials: z.array(SocialSchema).min(0).readonly(),

  translationNS: TranslationNSSchema,
  hubspotFormTitleKey: z.string().min(1),
});

export type ContactSectionProps = Omit<
  z.infer<typeof ContactSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};

// ––– FaqSection –––
export const FaqSectionPropsSchema = z.object({
  translationNS: TranslationNSSchema,
});

export type FaqSectionProps = Omit<
  z.infer<typeof FaqSectionPropsSchema>,
  'translationNS'
> & {
  translationNS: I18NNamespace;
};
