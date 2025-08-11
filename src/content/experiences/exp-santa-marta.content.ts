// src/content/experiences/exp-santa-marta.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { ExperienceContentSchema, type ExperienceContent } from './types';

const rawSantaMartaExp: ExperienceContent = {
  id: 'exp-santa-marta',
  slug: 'santa-marta',
  destinationId: 'santa-marta',

  seo: {
    titleKey: 'experiences.santaMartaExp.seo.title',
    descriptionKey: 'experiences.santaMartaExp.seo.desc',
    keywordsKey: 'experiences.santaMartaExp.seo.keywords',
    urlPath: toUrlPath(ROUTES.diveExperiences),
    imageUrl: toAssetUrl('/images/social/experiences-social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.santaMartaExp.header.title',
    subtitleKey: 'experiences.santaMartaExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/experiences/santa-marta/header.webp'
      ),
      photoCredit: 'PADI®',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.santaMartaExp.description.title',
    paragraphs: ['expSmFunDiveDescP1', 'expSmFunDiveDescP2'],
  },

  itinerary: {
    titleKey: 'experiences.santaMartaExp.itinerary.title',
    days: [
      {
        day: 1,
        titleKey: 'experiences.santaMartaExp.itinerary.day1Title',
        descriptionKey: 'experiences.santaMartaExp.itinerary.day1Desc',
      },
    ],
    notes: ['experiences.santaMartaExp.itinerary.note1'],
  },

  whatIsIncluded: {
    titleKey: 'experiences.santaMartaExp.whatIsIncluded.title',
    items: [
      'experiences.santaMartaExp.whatIsIncluded.item1',
      'experiences.santaMartaExp.whatIsIncluded.item2',
    ],
  },

  whatIsNotIncluded: {
    titleKey: 'experiences.santaMartaExp.whatIsNotIncluded.title',
    items: ['experiences.santaMartaExp.whatIsNotIncluded.item1'],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/santa-marta/gallery-01.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
    ],
  },

  ctaButton: {
    textKey: 'experiences.ctaButton.text',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'experiences.whatsappMessage',
    },
    variant: 'primary',
    size: 'default',
  },

  cta: {
    translationNS: 'home',
    titleKey: 'cta.homeCtaTitle',
    subtitleKey: 'cta.homeCtaSubtitle',
    backgroundImageUrl: '/images/home/cta-background.webp',

    button: {
      textKey: 'cta.contactButton',
      action: {
        type: 'whatsapp',
        whatsAppMessageKey: 'common:generalWhatsappMessage',
      },
      variant: 'primary',
      size: 'default',
    },

    hubspotFormTitle: 'cta.formTitle',
  },
};

export const santaMartaExpContent =
  ExperienceContentSchema.parse(rawSantaMartaExp);
