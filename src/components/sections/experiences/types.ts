// src/components/sections/experiences/types.ts
import type { I18NNamespace } from '../../../constants/i18n';
import type { ImageComponentData } from '../../common/types';

export type BenefitsData = {
  id: string;
  textKey: string;
  icon: string;
};

export interface CertificationsSectionProps {
  titleKey: string;
  subtitleKey: string;
  translationNS: I18NNamespace;
}

export interface CustomTripsSectionProps {
  titleKey: string;
  textKey: string;
  translationNS: I18NNamespace;
  imageData: ImageComponentData;
  buttonTextKey: string;
  benefits: BenefitsData[];
}

export interface DestinationsSectionProps {
  titleKey: string;
  otherTitleKey: string;
  translationNS: I18NNamespace;
}

export interface UpcomingTripsSectionProps {
  titleKey: string;
  subtitleKey: string;
  backgroundImageUrl: string;
  translationNS: I18NNamespace;
  filtersAllDestinationsKey: string;
  filtersAllMonthsKey: string;
  filtersNoResultsKey: string;
}
