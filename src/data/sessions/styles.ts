import type { AvailableType } from '../../constants/ui';
import type { CertificationId } from '../certifications';
import type { ExperienceId } from '../experiences';

export type CurrencyType = 'USD' | 'COP';

export interface PricingOption {
  id: string;
  titleKey: string;
  descriptionKey: string;
  price: number;
  currency: CurrencyType;
}

export interface ExperienceSession {
  id: string;
  experienceId: ExperienceId;
  startDate: string;
  endDate: string;
  imageUrl: string;
  availability: AvailableType;
  seatsAvailable: number;
  capacity: number;
  creyentes?: boolean;
  certificationIds: CertificationId[];

  pricingOptions: PricingOption[];

  paymentPlan?: {
    titleKey: string;
    modules: { id: string; nameKey: string; descriptionKey: string }[];
    notes: string[];
  };
}
