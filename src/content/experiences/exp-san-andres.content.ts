// src/content/experiences/exp-san-andres.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { ExperienceContentSchema, type ExperienceContent } from './types';

const rawSanAndresExp: ExperienceContent = {
  id: 'exp-san-andres',
  slug: 'san-andres',
  destinationId: 'san-andres',

  seo: {
    titleKey: 'experiences.sanAndresExp.seo.title',
    descriptionKey: 'experiences.sanAndresExp.seo.desc',
    keywordsKey: 'experiences.sanAndresExp.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.sanAndresExp.header.title',
    subtitleKey: 'experiences.sanAndresExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/experiences/san-andres/header-background.webp'
      ),
      photoCredit: 'Cristhian David Duarte @duartefotografia.ph',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.descriptionTitle',
    paragraphs: [
      'experiences.sanAndresExp.description.paragraphs.p1',
      'experiences.sanAndresExp.description.paragraphs.p2',
      'experiences.sanAndresExp.description.paragraphs.p3',
    ],
  },

  itinerary: {
    titleKey: 'experiences.itineraryTitle',
    days: [
      {
        day: 1,
        titleKey: 'experiences.sanAndresExp.itinerary.days.title1',
        descriptionKey: 'experiences.sanAndresExp.itinerary.days.desc1',
      },
      {
        day: 2,
        titleKey: 'experiences.sanAndresExp.itinerary.days.title2',
        descriptionKey: 'experiences.sanAndresExp.itinerary.days.desc2',
      },
      {
        day: 3,
        titleKey: 'experiences.sanAndresExp.itinerary.days.title3',
        descriptionKey: 'experiences.sanAndresExp.itinerary.days.desc3',
      },
      {
        day: 4,
        titleKey: 'experiences.sanAndresExp.itinerary.days.title4',
        descriptionKey: 'experiences.sanAndresExp.itinerary.days.desc4',
      },
      {
        day: 5,
        titleKey: 'experiences.sanAndresExp.itinerary.days.title5',
        descriptionKey: 'experiences.sanAndresExp.itinerary.days.desc5',
      },
    ],
    notes: [
      'experiences.sanAndresExp.itinerary.notes.note1',
      'experiences.sanAndresExp.itinerary.notes.note2',
      'experiences.sanAndresExp.itinerary.notes.note3',
    ],
  },

  whatIsIncluded: {
    titleKey: 'experiences.whatIsIncludedTitle',
    items: [
      'experiences.sanAndresExp.whatIsIncluded.items.item1',
      'experiences.sanAndresExp.whatIsIncluded.items.item2',
      'experiences.sanAndresExp.whatIsIncluded.items.item3',
      'experiences.sanAndresExp.whatIsIncluded.items.item4',
      'experiences.sanAndresExp.whatIsIncluded.items.item5',
      'experiences.sanAndresExp.whatIsIncluded.items.item6',
      'experiences.sanAndresExp.whatIsIncluded.items.item7',
    ],
  },

  whatIsNotIncluded: {
    titleKey: 'experiences.whatIsNotIncludedTitle',
    items: [
      'experiences.sanAndresExp.whatIsNotIncluded.items.item1',
      'experiences.sanAndresExp.whatIsNotIncluded.items.item2',
      'experiences.sanAndresExp.whatIsNotIncluded.items.item3',
      'experiences.sanAndresExp.whatIsNotIncluded.items.item4',
      'experiences.sanAndresExp.whatIsNotIncluded.items.item5',
    ],
  },

  gallery: {
    titleKey: 'experiences.galleryTitle',
    images: [
      // {
      //   backgroundImage: toAssetUrl(
      //     '/images/experiences/san-andres/gallery-01.webp'
      //   ),
      //   photoCredit: 'Oscar Ivan Esquivel Arteaga @oscaresquivelfotografia',
      //   variant: 'horizontal',
      // },
    ],
  },

  ctaButton: {
    textKey: 'experiences.ctaButtonText',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'experiences.experienceWhatsappMessage',
      translationNS: 'experiences',
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

export const sanAndresExpContent =
  ExperienceContentSchema.parse(rawSanAndresExp);
