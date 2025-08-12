// src/content/destinations/santa-marta.content.ts

import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { DestinationContentSchema, type DestinationContent } from './types';

const rawSantaMarta: DestinationContent = {
  id: 'santa-marta',
  slug: 'santa-marta',
  name: 'Santa Marta',
  country: 'CO',
  coords: [-74.194777, 11.231811],
  minZoom: 10.5,
  maxZoom: 16,

  seo: {
    titleKey: 'destinations.sm.seo.title',
    descriptionKey: 'destinations.sm.seo.desc',
    keywordsKey: 'destinations.sm.seo.keywords',
    imageUrl: toAssetUrl('/images/social/sm-social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.sm.header.title',
    subtitleKey: 'destinations.sm.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/destinations/sm-header.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/santa-marta/sm-card.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.sm.description.title',
    paragraphs: [
      'destinations.sm.description.p1',
      'destinations.sm.description.p2',
    ],
  },

  details: {
    titleKey: 'destinations.sm.details.title',
    items: [
      {
        labelKey: 'destinations.sm.details.label1',
        valueKey: 'destinations.sm.details.value1',
      },
      {
        labelKey: 'destinations.sm.details.label2',
        valueKey: 'destinations.sm.details.value2',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.sm.uniqueFinds.title',
    items: [
      'destinations.sm.uniqueFinds.find1',
      'destinations.sm.uniqueFinds.find2',
      'destinations.sm.uniqueFinds.find3',
    ],
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
    textKey: 'destinations.sm.ctaButton.text',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'destinations.certificationWhatsappMessage',
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

export const santaMartaDestinationContent =
  DestinationContentSchema.parse(rawSantaMarta);
