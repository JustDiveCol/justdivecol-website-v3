// src/components/sections/contact/types.ts
import type { I18NNamespace } from '../../../constants/i18n';
import type { SocialType } from '../../../constants/ui';

export type SocialsData = {
  name: string;
  link: string;
  icon: SocialType;
};

export interface ContactSectionProps {
  titleKey: string;
  phone: string;
  email: string;
  emailSubjectKey: string;
  emailBodyKey: string;
  socials: SocialsData[];
  translationNS: I18NNamespace;
  hubspotFormTitleKey: string;
}

export interface FaqSectionProps {
  translationNS: I18NNamespace;
}
