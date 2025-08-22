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
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.sm.header.title',
    subtitleKey: 'destinations.sm.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/santa-marta/header-background.webp'
      ),
      photoCredit: 'Luis Quintero @jibarocards',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/santa-marta/card-image.webp'
      ),
      photoCredit: 'Juan Manuel Rivera Gómez @jumriver',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.descriptionTitle',
    paragraphs: [
      'destinations.sm.description.paragraphs.p1',
      'destinations.sm.description.paragraphs.p2',
    ],
  },

  details: {
    titleKey: 'destinations.detailsTitle',
    items: [
      {
        labelKey: 'destinations.sm.details.items.label1',
        valueKey: 'destinations.sm.details.items.value1',
      },
      {
        labelKey: 'destinations.sm.details.items.label2',
        valueKey: 'destinations.sm.details.items.value2',
      },
      {
        labelKey: 'destinations.sm.details.items.label3',
        valueKey: 'destinations.sm.details.items.value3',
      },
      {
        labelKey: 'destinations.sm.details.items.label4',
        valueKey: 'destinations.sm.details.items.value4',
      },
      {
        labelKey: 'destinations.sm.details.items.label5',
        valueKey: 'destinations.sm.details.items.value5',
      },
      {
        labelKey: 'destinations.sm.details.items.label6',
        valueKey: 'destinations.sm.details.items.value6',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.uniqueFindsTitle',
    items: [
      'destinations.sm.uniqueFinds.items.find1',
      'destinations.sm.uniqueFinds.items.find2',
      'destinations.sm.uniqueFinds.items.find3',
      'destinations.sm.uniqueFinds.items.find4',
      'destinations.sm.uniqueFinds.items.find5',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/santa-marta/gallery-01.webp'
        ),
        photoCredit: 'Juan Segmentado',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/santa-marta/gallery-02.webp'
        ),
        photoCredit: 'Oscar Ivan Esquivel Arteaga @oscaresquivelfotografia',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/santa-marta/gallery-03.webp'
        ),
        photoCredit: 'Catalina Herrera @catalinac29',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/santa-marta/gallery-04.webp'
        ),
        photoCredit: 'Christian Forero',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/santa-marta/gallery-05.webp'
        ),
        photoCredit: 'HAROLD PRODUCTIONS @harold_productions',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/santa-marta/gallery-06.webp'
        ),
        photoCredit: 'JohnEGo! @johnego7',
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

export const santaMartaDestinationContent =
  DestinationContentSchema.parse(rawSantaMarta);
