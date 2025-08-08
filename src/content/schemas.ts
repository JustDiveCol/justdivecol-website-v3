// src/content/schemas.ts
import { z } from 'zod';
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  IMAGE_VARIANTS,
  SOCIAL,
} from './constants';
import { I18N_NAMESPACES } from '../constants/i18n';
import { UrlPathSchema } from './urlPathSchema';
import { FOOTER_LINKS } from '../constants/navigation';
import { EXPERIENCES_IDS } from '../lib/db/constants';

// ––– Image Definition –––
const ImageVariantSchema = z.enum(IMAGE_VARIANTS);

const ImageDataSchema = z.object({
  backgroundImage: z.string(),
  photoCredit: z.string(),
  complementaryLogo: z
    .object({
      url: z.string(),
      altKey: z.string(),
    })
    .optional(),
  variant: ImageVariantSchema.optional(),
});

// ––– Button Definition –––
const ButtonVariantSchema = z.enum(BUTTON_VARIANTS);
const ButtonSizesSchema = z.enum(BUTTON_SIZES);

const ButtonActionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('internal'),
    path: UrlPathSchema,
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

const ButtonContentSchema = z.object({
  textKey: z.string(),
  action: ButtonActionSchema,
  variant: ButtonVariantSchema,
  size: ButtonSizesSchema,
});

// ––– General –––
const TranslationNSSchema = z.enum(I18N_NAMESPACES);

// ––– SEO –––
const SeoContentSchema = z.object({
  titleKey: z.string(),
  descriptionKey: z.string(),
  keywordsKey: z.string(),
  imageUrl: z.string(),
  urlPath: UrlPathSchema,
  translationNS: TranslationNSSchema,
});

// ––– Hero - Home –––
const HeroSectionSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: TranslationNSSchema,
  button: ButtonContentSchema,
  imageData: ImageDataSchema,
});

// ––– Featured Section - Home –––
const FeaturedCardSchema = z.object({
  id: z.string(),
  titleKey: z.string(),
  subtitleKey: z.string().optional(),
  imageData: ImageDataSchema,
  link: UrlPathSchema,
});
const FeaturedSectionSchema = z.object({
  titleKey: z.string(),
  translationNS: TranslationNSSchema,
  cards: z.array(FeaturedCardSchema).min(1),
});

// ––– Principles Section - Home –––
const AssetItemSchema = z.object({
  url: z.string(),
  altKey: z.string(),
});

const PrinciplesCardSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  titleKey: z.string(),
  descriptionKey: z.string(),
  photoCredit: z.string(),
  complementaryLogo: AssetItemSchema.optional(),
});

const PrinciplesSectionSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: TranslationNSSchema,
  cards: z.array(PrinciplesCardSchema).min(1),
});

// ––– Testimonials Section - Hero –––
const TestimonialOriginSchema = z.enum(EXPERIENCES_IDS);

export type TestimonialOrigin = z.infer<typeof TestimonialOriginSchema>;

const TestimonialItemSchema = z.object({
  id: z.number().int(),
  quoteKey: z.string(),
  name: z.string(),
  originKey: TestimonialOriginSchema,
  rating: z.number().int().min(1).max(5),
  avatarUrl: z.string(),
});

const TestimonialsSectionSchema = z.object({
  titleKey: z.string(),
  translationNS: TranslationNSSchema,
  items: z.array(TestimonialItemSchema).min(1),
});

// ––– Allies Section –––
const AllyLogoSchema = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string(),
  link: z.string(),
});

const AlliesSectionSchema = z.object({
  titleKey: z.string(),
  translationNS: TranslationNSSchema,
  logos: z.array(AllyLogoSchema).min(1),
});

// ––– Cta Content –––
const CtaContentSchema = z.object({
  translationNS: TranslationNSSchema,
  titleKey: z.string(),
  subtitleKey: z.string(),
  backgroundImageUrl: z.string(),
  button: ButtonContentSchema.optional(),
  hubspotFormTitle: z.string().optional().optional(),
});

// ––– Page Header –––
const PageHeaderSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: TranslationNSSchema,
  imageData: ImageDataSchema,
});

// ––– Mission Section –––
const MissionSectionSchema = z.object({
  titleKey: z.string(),
  textKey: z.string(),
  translationNS: TranslationNSSchema,
  imageData: ImageDataSchema,
});

// ––– Team Section –––
const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  roleKey: z.string(),
  bioKey: z.string(),
  imageUrl: z.string(),
});

const TeamSectionSchema = z.object({
  titleKey: z.string(),
  members: z.array(TeamMemberSchema).min(1),
  translationNS: TranslationNSSchema,
});

// ––– ContactData –––
const SocialSchema = z.object({
  type: z.enum(SOCIAL.map((s) => s.type) as [string, ...string[]]),
  name: z.enum(SOCIAL.map((s) => s.name) as [string, ...string[]]),
  path: z.url(),
});

const ContactDataSchema = z.object({
  titleKey: z.string(),
  phone: z.string(),
  email: z.string(),
  emailSubjectKey: z.string(),
  emailBodyKey: z.string(),
  socials: z.array(SocialSchema).min(1).readonly(),
  translationNS: TranslationNSSchema,
  hubspotFormTitleKey: z.string(),
});

// ––– Faq Content –––
const FaqItemSchema = z.object({
  id: z.string(),
  questionKey: z.string(),
  answerKey: z.string(),
});

const FaqCategorySchema = z.object({
  id: z.string(),
  sectionTitleKey: z.string(),
  faqs: z.array(FaqItemSchema).min(1).readonly(),
});

const FaqContentSchema = z.object({
  topFaqIds: z.array(z.string()).min(1).readonly(),
  categories: z.array(FaqCategorySchema).min(1).readonly(),
});

// ––– Legal Content –––
const PointDataSchema = z.object({
  textKey: z.string(),
  titleKey: z.string().optional(),
  subpoints: z.array(z.string()).optional(),
});

const SectionDataSchema = z.object({
  id: z.string(),
  titleKey: z.string(),
  points: z.array(PointDataSchema).min(1).readonly(),
});

const LegalContentSchema = z.object({
  sections: z.array(SectionDataSchema).min(1).readonly(),
  translationNS: TranslationNSSchema,
});

// ––– Principle Detail –––
const PrincipleDetailSchema = z.object({
  id: z.string(),
  titleKey: z.string(),
  textKey: z.string(),
  imageData: ImageDataSchema,
  imagePosition: z.enum(['left', 'right']),
});

const DescriptionSchema = z.object({
  titleKey: z.string(),
  paragraphs: z.array(z.string()).min(1).readonly(),
});

// ––– Details –––
const ItemsSchema = z.object({
  labelKey: z.string(),
  valueKey: z.string(),
});

// ––– Curriculum –––
const ModulesSchema = z.object({
  id: z.string(),
  nameKey: z.string(),
  descriptionKey: z.string(),
});

const CurriculumSchema = z.object({
  titleKey: z.string(),
  modules: z.array(ModulesSchema).min(1).readonly(),
});

// ––– Payment –––
const PaymentPlanSchema = z.object({
  titleKey: z.string(),
  modules: z.array(ModulesSchema).min(1).readonly(),
  notes: z.array(z.string()).min(1).readonly(),
});

// ––– Gallery –––
const GallerySchema = z.object({
  titleKey: z.string(),
  images: z.array(ImageDataSchema).min(1).readonly(),
});

// ––– What Is Included –––
const WhatIsIncludedSchema = z.object({
  titleKey: z.string(),
  items: z.array(z.string()).min(1).readonly(),
});

// ––– Certification Only –––
const CertificationDetailsSchema = z.object({
  titleKey: z.string(),
  durationKey: z.string(),
  items: z.array(ItemsSchema).min(1).readonly(),
});

const CertificationOnlySchema = z.object({
  card: z.object({ imageData: ImageDataSchema }),
  details: CertificationDetailsSchema,
  curriculum: CurriculumSchema,
  whatIsIncluded: WhatIsIncludedSchema,
});

// ––– Unique Finds –––
const UniqueFindsSchema = z.object({
  titleKey: z.string(),
  items: z.array(z.string()).min(1).readonly(),
});

// ––– Destination Only –––
const DestinationDetailsSchema = z.object({
  titleKey: z.string(),
  items: z.array(ItemsSchema).min(1).readonly(),
});

const DestinationOnlySchema = z.object({
  card: z.object({ imageData: ImageDataSchema }),
  details: DestinationDetailsSchema,
  uniqueFinds: UniqueFindsSchema,
});

// ––– Itinerary –––
const ItineraryDaySchema = z.object({
  day: z.number(),
  titleKey: z.string(),
  descriptionKey: z.string(),
});

const ItinerarySchema = z.object({
  titleKey: z.string(),
  days: z.array(ItineraryDaySchema).min(1),
  notes: z.array(z.string()).default([]),
});

// ––– Experience Only –––
const WhatIsNotIncludedSchema = z.object({
  titleKey: z.string(),
  items: z.array(z.string()).min(1),
});

const ExperienceOnlySchema = z.object({
  itinerary: ItinerarySchema,
  whatIsIncluded: WhatIsIncludedSchema,
  whatIsNotIncluded: WhatIsNotIncludedSchema,
});

// ––– Upcoming Trips Section –––
const UpcomingTripsSectionContentSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  backgroundImageUrl: z.string(),
  translationNS: TranslationNSSchema,
  filtersAllDestinationsKey: z.string(),
  filtersAllMonthsKey: z.string(),
  filtersNoResultsKey: z.string(),
});

// ––– Certifications Section –––
const CertificationsSectionContentSchema = z.object({
  titleKey: z.string(),
  subtitleKey: z.string(),
  translationNS: TranslationNSSchema,
});

// ––– Destinations Section –––
const DestinationsSectionContentSchema = z.object({
  titleKey: z.string(),
  otherTitleKey: z.string(),
  translationNS: TranslationNSSchema,
});

// ––– Custom Trips Section –––
const BenefitsDataSchema = z.object({
  id: z.string(),
  textKey: z.string(),
  icon: z.string(),
});

const CustomTripsSectionContentSchema = z.object({
  titleKey: z.string(),
  textKey: z.string(),
  translationNS: TranslationNSSchema,
  imageData: ImageDataSchema,
  buttonTextKey: z.string(),
  benefits: z.array(BenefitsDataSchema).min(1).readonly(),
});

// ––– Footer –––
const FooterSchema = z.object({
  path: z.enum(FOOTER_LINKS.map((s) => s.path) as [string, ...string[]]),
  nameKey: z.enum(FOOTER_LINKS.map((s) => s.nameKey) as [string, ...string[]]),
});

// ––– General Page –––
export const PageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  description: DescriptionSchema,
  gallery: GallerySchema.optional(),
  ctaButton: ButtonContentSchema.optional(),
  cta: CtaContentSchema.optional(),
});

// ––– Certification –––
export const CertificationContentSchema = PageContentSchema.extend(
  CertificationOnlySchema.shape
);

// ––– Destination –––
export const DestinationContentSchema = PageContentSchema.extend(
  DestinationOnlySchema.shape
);

// ––– Experience –––
export const ExperienceContentSchema = PageContentSchema.extend(
  ExperienceOnlySchema.shape
);

// ––– Experience Session –––
export const ExperienceSessionContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  paymentPlan: PaymentPlanSchema,
});

// ––– Dive Experience Page General –––
export const DiveExperiencesPageContentSchema = z.object({
  seo: SeoContentSchema,
  upcomingTrips: UpcomingTripsSectionContentSchema,
  certifications: CertificationsSectionContentSchema,
  destinations: DestinationsSectionContentSchema,
  customTrips: CustomTripsSectionContentSchema,
});

// ––– Footer –––
export const FooterContentSchema = z.object({
  sloganKey: z.string(),
  closingMessageKey: z.string(),
  copyrightKey: z.string(),
  creditsKey: z.string(),
  importantLinksTitle: z.string(),
  navLinks: z.array(FooterSchema).min(1).readonly(),
  policiesLinkText: z.string(),
});

// ––– Home –––
export const HomePageContentSchema = z.object({
  seo: SeoContentSchema,
  hero: HeroSectionSchema,
  featured: FeaturedSectionSchema,
  principles: PrinciplesSectionSchema,
  testimonials: TestimonialsSectionSchema,
  allies: AlliesSectionSchema,
  cta: CtaContentSchema,
});

// ––– About Us –––
export const AboutUsPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  mission: MissionSectionSchema,
  team: TeamSectionSchema,
});

// ––– Contact –––
export const ContactPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  contactInfo: ContactDataSchema,
});

// ––– Faq –––
export const FaqPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  data: FaqContentSchema,
});

// ––– Principles –––
export const PrinciplesPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  principles: z.array(PrincipleDetailSchema).min(1).readonly(),
});

// ––– Legal –––
export const LegalPageContentSchema = z.object({
  seo: SeoContentSchema,
  header: PageHeaderSchema,
  content: LegalContentSchema,
});
