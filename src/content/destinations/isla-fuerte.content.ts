// src/content/destinations/isla-fuerte.content.ts

import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { DestinationContentSchema, type DestinationContent } from './types';

const rawIslaFuerte: DestinationContent = {
  id: 'isla-fuerte',
  slug: 'isla-fuerte',
  name: 'Isla Fuerte',
  country: 'CO',
  coords: [-76.180841, 9.388325],
  minZoom: 10.5,
  maxZoom: 15,

  seo: {
    titleKey: 'destinations.ifi.seo.title',
    descriptionKey: 'destinations.ifi.seo.desc',
    keywordsKey: 'destinations.ifi.seo.keywords',
    imageUrl: toAssetUrl('/images/social/ifi-social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.ifi.header.title',
    subtitleKey: 'destinations.ifi.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/destinations/ifi-header.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/isla-fuerte/ifi-card.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.ifi.description.title',
    paragraphs: [
      'destinations.ifi.description.p1',
      'destinations.ifi.description.p2',
    ],
  },

  details: {
    titleKey: 'destinations.ifi.details.title',
    items: [
      {
        labelKey: 'destinations.ifi.details.label1',
        valueKey: 'destinations.ifi.details.value1',
      },
      {
        labelKey: 'destinations.ifi.details.label2',
        valueKey: 'destinations.ifi.details.value2',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.ifi.uniqueFinds.title',
    items: [
      'destinations.ifi.uniqueFinds.find1',
      'destinations.ifi.uniqueFinds.find2',
      'destinations.ifi.uniqueFinds.find3',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/isla-fuerte/gallery-01.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
    ],
  },

  ctaButton: {
    textKey: 'destinations.ifi.ctaButton.text',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'destinations.certifiicationWhatsappMessage',
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

export const islaFuerteDestinationContent =
  DestinationContentSchema.parse(rawIslaFuerte);
