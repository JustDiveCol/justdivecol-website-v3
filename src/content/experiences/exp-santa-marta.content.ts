// src/content/experiences/exp-santa-marta.content.ts
import { ROUTES } from '../../constants/routes';
import { ExperienceContentSchema } from '../schemas';
import type { ExperienceContent } from './types';

const rawSantaMartaExp: ExperienceContent = {
  seo: {
    titleKey: 'experiences.santaMartaExp.seo.title',
    descriptionKey: 'experiences.santaMartaExp.seo.desc',
    keywordsKey: 'experiences.santaMartaExp.seo.keywords',
    urlPath: ROUTES.diveExperiences,
    imageUrl: '/images/social/experiences-social-card.webp',
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.santaMartaExp.header.title',
    subtitleKey: 'experiences.santaMartaExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: '/images/experiences/santa-marta/header.webp',
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

  ctaButton: {
    textKey: 'experiences.ctaButton.text',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'experiences.whatsappMessage',
    },
    variant: 'primary',
    size: 'default',
  },
};

export const santaMartaExpContent =
  ExperienceContentSchema.parse(rawSantaMartaExp);
