import { z } from 'zod';
import { BUTTON_SIZES, BUTTON_VARIANTS, SOCIAL } from './constants';
import { I18N_NAMESPACES } from '../constants/i18n';
import { UrlPathSchema } from './urlPathSchema';

export const ImageDataSchema = z.object({
  backgroundImage: z.string(),
  photoCredit: z.string(),
  complementaryLogo: z
    .object({
      url: z.string(),
      altKey: z.string(),
    })
    .optional(),
});

const ButtonActionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('internal'),
    path: z.string(),
  }),
  z.object({
    type: z.literal('whatsapp'),
    whatsAppMessageKey: z.string(),
  }),
  z.object({
    type: z.literal('external'),
    url: z.url(),
  }),
]);

export const ButtonContentSchema = z.object({
  textKey: z.string(),
  action: ButtonActionSchema,
  variant: z.enum(BUTTON_VARIANTS),
  size: z.enum(BUTTON_SIZES),
});

export const SeoContentSchema = z.object({
  titleKey: z.string(),
  descriptionKey: z.string(),
  keywordsKey: z.string(),
  imageUrl: z.string(),
  urlPath: UrlPathSchema,
  translationNS: z.enum(I18N_NAMESPACES),
});

const HeroSectionSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  button: ButtonContentSchema,
  imageData: ImageDataSchema,
});

const FeaturedCardSchema = z.object({
  id: z.string(),
  titleKey: z.string(),
  subtitleKey: z.string().optional(),
  imageData: ImageDataSchema,
  link: UrlPathSchema,
});
const FeaturedSectionSchema = z.object({
  titleKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  cards: z.array(FeaturedCardSchema).min(1),
});

const PrinciplesCardSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  titleKey: z.string(),
  descriptionKey: z.string(),
  photoCredit: z.string(),
  complementaryLogo: z.string(),
});

const PrinciplesSectionSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  cards: z.array(PrinciplesCardSchema).min(1),
});

const TestimonialItemSchema = z.object({
  id: z.number().int(),
  quoteKey: z.string(),
  name: z.string(),
  originKey: z.string(),
  rating: z.number().int().min(1).max(5),
  avatarUrl: z.string(),
});

const TestimonialsSectionSchema = z.object({
  titleKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  items: z.array(TestimonialItemSchema).min(1),
});

const AllyLogoSchema = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string(),
  link: z.string(),
});

const AlliesSectionSchema = z.object({
  titleKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  logos: z.array(AllyLogoSchema).min(1),
});

export const CtaContentSchema = z.object({
  translationNS: z.enum(I18N_NAMESPACES),
  titleKey: z.string(),
  subtitleKey: z.string(),
  backgroundImageUrl: z.string(),
  button: ButtonContentSchema,
  hubspotFormTitle: z.string(),
});

export const PageHeaderSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  imageData: ImageDataSchema,
});

export const MissionSectionSchema = z.object({
  titleKey: z.string(),
  textKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  imageData: ImageDataSchema,
});

export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  roleKey: z.string(),
  bioKey: z.string(),
  imageUrl: z.string(),
});

export const TeamSectionSchema = z.object({
  titleKey: z.string(),
  members: z.array(TeamMemberSchema).min(1),
  translationNS: z.enum(I18N_NAMESPACES),
});

export const SocialSchema = z.object({
  type: z.enum(SOCIAL.map((s) => s.type) as [string, ...string[]]),
  name: z.enum(SOCIAL.map((s) => s.name) as [string, ...string[]]),
  path: z.url(),
});

export const ContactDataSchema = z.object({
  titleKey: z.string(),
  phone: z.string(),
  email: z.string(),
  emailSubjectKey: z.string(),
  emailBodyKey: z.string(),
  socials: z.array(SocialSchema).min(1).readonly(),
  translationNS: z.enum(I18N_NAMESPACES),
  hubspotFormTitleKey: z.string(),
});

export const FaqItemSchema = z.object({
  id: z.string(),
  questionKey: z.string(),
  answerKey: z.string(),
});

export const FaqCategorySchema = z.object({
  id: z.string(),
  sectionTitleKey: z.string(),
  faqs: z.array(FaqItemSchema).min(1).readonly(),
});

export const FaqContentSchema = z.object({
  topFaqIds: z.array(z.string()).min(1).readonly(),
  categories: z.array(FaqCategorySchema).min(1).readonly(),
});

export const PointDataSchema = z.object({
  textKey: z.string(),
  titleKey: z.string().optional(),
  subpoints: z.array(z.string()).optional(),
});

export const PrincipleDetailSchema = z.object({
  id: z.string(),
  titleKey: z.string(),
  textKey: z.string(),
  imageData: ImageDataSchema,
  imagePosition: z.enum(['left', 'right']),
});

export const SectionDataSchema = z.object({
  id: z.string(),
  titleKey: z.string(),
  points: z.array(PointDataSchema).min(1).readonly(),
});

export const LegalContentContentSchema = z.object({
  sections: z.array(SectionDataSchema).min(1).readonly(),
  translationNS: z.enum(I18N_NAMESPACES),
});

// ——— Esquema principal ———
export const HomePageContentSchema = z.object({
  seo: SeoContentSchema,
  hero: HeroSectionSchema,
  featured: FeaturedSectionSchema,
  principles: PrinciplesSectionSchema,
  testimonials: TestimonialsSectionSchema,
  allies: AlliesSectionSchema,
  cta: CtaContentSchema,
});

export const AboutUsPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  mission: MissionSectionSchema,
  team: TeamSectionSchema,
});

export const ContactPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  contactInfo: ContactDataSchema,
});

export const FaqPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  data: FaqContentSchema,
});

export const PrinciplesPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  principles: z.array(PrincipleDetailSchema).min(1).readonly(),
});

export const LegalPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  content: LegalContentContentSchema,
});

export const DescriptionSchema = z.object({
  titleKey: z.string(),
  paragraphs: z.array(z.string()).min(1).readonly(),
});

export const ItemsSchema = z.object({
  labelKey: z.string(),
  valueKey: z.string(),
});

export const DetailsSchema = z.object({
  titleKey: z.string(),
  durationKey: z.string(),
  items: z.array(ItemsSchema).min(1).readonly(),
});

export const ModulesSchema = z.object({
  id: z.string(),
  nameKey: z.string(),
  descriptionKey: z.string(),
});

export const CurriculumSchema = z.object({
  titleKey: z.string(),
  modules: z.array(ModulesSchema).min(1).readonly(),
});

export const WhatIsIncludedSchema = z.object({
  titleKey: z.string(),
  items: z.array(z.string()).min(1).readonly(),
});

export const GallerySchema = z.object({
  titleKey: z.string(),
  images: z.array(ImageDataSchema).min(1).readonly(),
});

export const PageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  description: DescriptionSchema,
  gallery: GallerySchema.optional(),
  ctaButton: ButtonContentSchema.optional(),
  cta: CtaContentSchema,
});

export const CertificationOnlySchema = z.object({
  card: z.object({
    imageData: ImageDataSchema,
  }),
  details: DetailsSchema,
  curriculum: CurriculumSchema,
  whatIsIncluded: WhatIsIncludedSchema,
});

export const CertificationContentSchema = PageContentSchema.extend(
  CertificationOnlySchema
);

export const DestinationOnlySchema = z.object({
  card: z.object({
    imageData: ImageDataSchema,
  }),
  details: DetailsSchema,
  curriculum: CurriculumSchema,
  whatIsIncluded: WhatIsIncludedSchema,
});

export const DestinationContentSchema = PageContentSchema.extend(
  DestinationOnlySchema
);

export const ExperienceOnlySchema = z.object({
  card: z.object({
    imageData: ImageDataSchema,
  }),
  details: DetailsSchema,
  curriculum: CurriculumSchema,
  whatIsIncluded: WhatIsIncludedSchema,
});

export const ExperienceContentSchema =
  PageContentSchema.extend(ExperienceOnlySchema);

export const PaymentPlanSchema = z.object({
  titleKey: z.string(),
  modules: z.array(ModulesSchema).min(1).readonly(),
  notes: z.array(z.string()).min(1).readonly(),
});

export const ExperienceSessionContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  paymentPlan: PaymentPlanSchema,
});

export const UpcomingTripsSectionContentSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  backgroundImageUrl: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  filtersAllDestinationsKey: z.string(),
  filtersAllMonthsKey: z.string(),
  filtersNoResultsKey: z.string(),
});

export const CertificationsSectionContentSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
});

export const DestinationsSectionContentSchema = z.object({
  titleKey: z.string(),
  otherTitleKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
});

export const BenefitsDataSchema = z.object({
  id: z.string(),
  textKey: z.string(),
  icon: z.string(),
});

export const CustomTripsSectionContentSchema = z.object({
  titleKey: z.string(),
  textKey: z.string(),
  translationNS: z.enum(I18N_NAMESPACES),
  imageData: ImageDataSchema,
  buttonTextKey: z.string(),
  benefits: z.array(BenefitsDataSchema).min(1).readonly(),
});

export const DiveExperiencesPageContentSchema = z.object({
  seo: SeoContentSchema,
  upcomingTrips: UpcomingTripsSectionContentSchema,
  certifications: CertificationsSectionContentSchema,
  destinations: DestinationsSectionContentSchema,
  customTrips: CustomTripsSectionContentSchema,
});
