// src/content/destinations/cancun.content.ts

import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { DestinationContentSchema, type DestinationContent } from './types';

const rawCancun: DestinationContent = {
  id: 'cancun',
  slug: 'cancun',
  name: 'Cancun - Cozumel',
  country: 'MX',
  coords: [-86.851384, 21.161597],
  minZoom: 8,
  maxZoom: 16,

  seo: {
    titleKey: 'destinations.mx.cancun.seo.title',
    descriptionKey: 'destinations.mx.cancun.seo.desc',
    keywordsKey: 'destinations.mx.cancun.seo.keywords',
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.mx.cancun.header.title',
    subtitleKey: 'destinations.mx.cancun.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/cancun/header-background.webp'
      ),
      photoCredit: 'Leonardo Rossatti @leorossatti',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/cancun/card-image.webp'
      ),
      photoCredit: 'Alexandra Nezhybová',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.descriptionTitle',
    paragraphs: [
      'destinations.mx.cancun.description.paragraphs.p1',
      'destinations.mx.cancun.description.paragraphs.p2',
    ],
  },

  details: {
    titleKey: 'destinations.detailsTitle',
    items: [
      {
        labelKey: 'destinations.mx.cancun.details.items.label1',
        valueKey: 'destinations.mx.cancun.details.items.value1',
      },
      {
        labelKey: 'destinations.mx.cancun.details.items.label2',
        valueKey: 'destinations.mx.cancun.details.items.value2',
      },
      {
        labelKey: 'destinations.mx.cancun.details.items.label3',
        valueKey: 'destinations.mx.cancun.details.items.value3',
      },
      {
        labelKey: 'destinations.mx.cancun.details.items.label4',
        valueKey: 'destinations.mx.cancun.details.items.value4',
      },
      {
        labelKey: 'destinations.mx.cancun.details.items.label5',
        valueKey: 'destinations.mx.cancun.details.items.value5',
      },
      {
        labelKey: 'destinations.mx.cancun.details.items.label6',
        valueKey: 'destinations.mx.cancun.details.items.value6',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.uniqueFindsTitle',
    items: [
      'destinations.mx.cancun.uniqueFinds.items.find1',
      'destinations.mx.cancun.uniqueFinds.items.find2',
      'destinations.mx.cancun.uniqueFinds.items.find3',
      'destinations.mx.cancun.uniqueFinds.items.find4',
      'destinations.mx.cancun.uniqueFinds.items.find5',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-01.webp'
        ),
        photoCredit: 'Ricky Esquivel',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-02.webp'
        ),
        photoCredit: 'Matias Mango @_matimango',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-03.webp'
        ),
        photoCredit: 'Christian Vergara @ch_vergara',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-04.webp'
        ),
        photoCredit: 'Matias Mango @_matimango',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-05.webp'
        ),
        photoCredit: 'Domingo Dias @domingodias',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-06.webp'
        ),
        photoCredit: 'Harvey Clements @Harv_clements',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/cancun/gallery-07.webp'
        ),
        photoCredit: 'Viviana Camacho @vivicamacho.photo',
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

export const cancunDestinationContent =
  DestinationContentSchema.parse(rawCancun);
