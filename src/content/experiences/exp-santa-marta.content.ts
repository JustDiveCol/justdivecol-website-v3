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
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.santaMartaExp.header.title',
    subtitleKey: 'experiences.santaMartaExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/experiences/santa-marta/header-background.webp'
      ),
      photoCredit: 'Cristhian David Duarte @duartefotografia.ph',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.descriptionTitle',
    paragraphs: [
      'experiences.santaMartaExp.description.paragraphs.p1',
      'experiences.santaMartaExp.description.paragraphs.p2',
    ],
  },

  itinerary: {
    titleKey: 'experiences.itineraryTitle',
    days: [
      {
        day: 1,
        titleKey: 'experiences.santaMartaExp.itinerary.days.title1',
        descriptionKey: 'experiences.santaMartaExp.itinerary.days.desc1',
      },
      {
        day: 2,
        titleKey: 'experiences.santaMartaExp.itinerary.days.title2',
        descriptionKey: 'experiences.santaMartaExp.itinerary.days.desc2',
      },
      {
        day: 3,
        titleKey: 'experiences.santaMartaExp.itinerary.days.title3',
        descriptionKey: 'experiences.santaMartaExp.itinerary.days.desc3',
      },
      {
        day: 4,
        titleKey: 'experiences.santaMartaExp.itinerary.days.title4',
        descriptionKey: 'experiences.santaMartaExp.itinerary.days.desc4',
      },
    ],
    notes: ['experiences.santaMartaExp.itinerary.notes.note1'],
  },

  whatIsIncluded: {
    titleKey: 'experiences.whatIsIncludedTitle',
    items: [
      'experiences.santaMartaExp.whatIsIncluded.items.item1',
      'experiences.santaMartaExp.whatIsIncluded.items.item2',
      'experiences.santaMartaExp.whatIsIncluded.items.item3',
      'experiences.santaMartaExp.whatIsIncluded.items.item4',
    ],
  },

  whatIsNotIncluded: {
    titleKey: 'experiences.whatIsNotIncludedTitle',
    items: [
      'experiences.santaMartaExp.whatIsNotIncluded.items.item1',
      'experiences.santaMartaExp.whatIsNotIncluded.items.item2',
      'experiences.santaMartaExp.whatIsNotIncluded.items.item3',
      'experiences.santaMartaExp.whatIsNotIncluded.items.item4',
    ],
  },

  gallery: {
    titleKey: 'experiences.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-01.webp'
        ),
        photoCredit: 'Oscar Ivan Esquivel Arteaga @oscaresquivelfotografia',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-02.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-03.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-04.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-05.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-06.webp'
        ),
        photoCredit: 'Carlos Jamaica @krlosjamaica',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-07.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-08.webp'
        ),
        photoCredit: 'Hotel Karaya @karaya.hotel',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-09.webp'
        ),
        photoCredit: 'Hotel Karaya @karaya.hotel',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-09.webp'
        ),
        photoCredit: 'Hotel Karaya @karaya.hotel',
        variant: 'horizontal',
      },
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

export const santaMartaExpContent =
  ExperienceContentSchema.parse(rawSantaMartaExp);
