// src/components/sections/experiences/types.ts
import type { I18NNamespace } from '../../../constants/i18n.schema';
import type { ImageComponentData } from '../../common/types';

// OK
export type UpcomingTripsSectionData = {
  titleKey: string;
  subtitleKey: string;
  backgroundImageUrl: string;
  translationNS: I18NNamespace;
  filtersAllDestinationsKey: string;
  filtersAllMonthsKey: string;
  filtersNoResultsKey: string;
};

// OK
export type CertificationsSectionData = {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
};

// OK
export type BenefitsData = {
  id: string;
  textKey: string;
  icon: string;
};

// OK
export type DestinationsSectionData = {
  titleKey: string;
  otherTitleKey: string;
  translationNS: I18NNamespace;
};

// OK
export type CustomTripsSectionContent = {
  titleKey: string;
  textKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
  buttonTextKey: string;
  benefits: BenefitsData[];
};
