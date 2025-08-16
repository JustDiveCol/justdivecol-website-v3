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
    imageUrl: toAssetUrl('/images/destinations/isla-fuerte/social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.ifi.header.title',
    subtitleKey: 'destinations.ifi.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/isla-fuerte/header-background.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/isla-fuerte/card-image.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.descriptionTitle',
    paragraphs: [
      'destinations.ifi.description.paragraphs.p1',
      'destinations.ifi.description.paragraphs.p2',
    ],
  },

  details: {
    titleKey: 'destinations.detailsTitle',
    items: [
      {
        labelKey: 'destinations.ifi.details.items.label1',
        valueKey: 'destinations.ifi.details.items.value1',
      },
      {
        labelKey: 'destinations.ifi.details.items.label2',
        valueKey: 'destinations.ifi.details.items.value2',
      },
      {
        labelKey: 'destinations.ifi.details.items.label3',
        valueKey: 'destinations.ifi.details.items.value3',
      },
      {
        labelKey: 'destinations.ifi.details.items.label4',
        valueKey: 'destinations.ifi.details.items.value4',
      },
      {
        labelKey: 'destinations.ifi.details.items.label5',
        valueKey: 'destinations.ifi.details.items.value5',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.uniqueFindsTitle',
    items: [
      'destinations.ifi.uniqueFinds.items.find1',
      'destinations.ifi.uniqueFinds.items.find2',
      'destinations.ifi.uniqueFinds.items.find3',
      'destinations.ifi.uniqueFinds.items.find4',
      'destinations.ifi.uniqueFinds.items.find5',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/isla-fuerte/gallery-01.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/isla-fuerte/gallery-02.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/isla-fuerte/gallery-03.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/isla-fuerte/gallery-04.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/isla-fuerte/gallery-05.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/isla-fuerte/gallery-06.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
    ],
  },

  ctaButton: {
    textKey: 'destinations.ctaButtonText',
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

export const islaFuerteDestinationContent =
  DestinationContentSchema.parse(rawIslaFuerte);
