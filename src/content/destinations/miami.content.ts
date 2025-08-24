// src/content/destinations/miami.content.ts

import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { DestinationContentSchema, type DestinationContent } from './types';

const rawMiami: DestinationContent = {
  id: 'miami',
  slug: 'miami',
  name: 'Miami',
  country: 'US',
  coords: [-80.191409, 25.772628],
  minZoom: 8,
  maxZoom: 16,

  seo: {
    titleKey: 'destinations.us.miami.seo.title',
    descriptionKey: 'destinations.us.miami.seo.desc',
    keywordsKey: 'destinations.us.miami.seo.keywords',
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.us.miami.header.title',
    subtitleKey: 'destinations.us.miami.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/miami/header-background.webp'
      ),
      photoCredit: 'Antonio Cuellar @antoniocuellarph',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl('/images/destinations/miami/card-image.webp'),
      photoCredit: 'aurora.kreativ on Unsplash',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.descriptionTitle',
    paragraphs: [
      'destinations.us.miami.description.paragraphs.p1',
      'destinations.us.miami.description.paragraphs.p2',
    ],
  },

  details: {
    titleKey: 'destinations.detailsTitle',
    items: [
      {
        labelKey: 'destinations.us.miami.details.items.label1',
        valueKey: 'destinations.us.miami.details.items.value1',
      },
      {
        labelKey: 'destinations.us.miami.details.items.label2',
        valueKey: 'destinations.us.miami.details.items.value2',
      },
      {
        labelKey: 'destinations.us.miami.details.items.label3',
        valueKey: 'destinations.us.miami.details.items.value3',
      },
      {
        labelKey: 'destinations.us.miami.details.items.label4',
        valueKey: 'destinations.us.miami.details.items.value4',
      },
      {
        labelKey: 'destinations.us.miami.details.items.label5',
        valueKey: 'destinations.us.miami.details.items.value5',
      },
      {
        labelKey: 'destinations.us.miami.details.items.label6',
        valueKey: 'destinations.us.miami.details.items.value6',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.uniqueFindsTitle',
    items: [
      'destinations.us.miami.uniqueFinds.items.find1',
      'destinations.us.miami.uniqueFinds.items.find2',
      'destinations.us.miami.uniqueFinds.items.find3',
      'destinations.us.miami.uniqueFinds.items.find4',
      'destinations.us.miami.uniqueFinds.items.find5',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-01.webp'
        ),
        photoCredit: 'Colin Lloyd on Unsplash',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-02.webp'
        ),
        photoCredit: 'Roland Denes on Unsplash',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-03.webp'
        ),
        photoCredit: 'Nextvoyage @next_voyage',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-04.webp'
        ),
        photoCredit: 'Arnie Watkins @arniewatkins',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/miami/gallery-05.webp'
        ),
        photoCredit: 'Todd Trapani',
        variant: 'horizontal',
      },
    ],
  },

  ctaButton: {
    textKey: 'destinations.ctaButtonText',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'destinations.destinationWhatsappMessage',
      translationNS: 'destinations',
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

export const miamiDestinationContent = DestinationContentSchema.parse(rawMiami);
