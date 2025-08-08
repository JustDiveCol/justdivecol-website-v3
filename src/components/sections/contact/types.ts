// src/components/sections/contact/types.ts
import type { I18NNamespace } from '../../../constants/i18n';
import type { Social } from '../../../content/constants';

export type ContactSectionContent = {
  titleKey: string;
  phone: string;
  email: string;
  emailSubjectKey: string;
  emailBodyKey: string;
  socials: readonly Social[];
  translationNS: I18NNamespace;
  hubspotFormTitleKey: string;
};

export interface FaqSectionProps {
  translationNS: I18NNamespace;
}
