// src/content/destinations/san-andres.content.ts

import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { DestinationContentSchema, type DestinationContent } from './types';

const rawSanAndres: DestinationContent = {
  id: 'san-andres',
  slug: 'san-andres',
  name: 'San Andres',
  country: 'CO',
  coords: [-81.715862, 12.538296],
  minZoom: 10,
  maxZoom: 15,

  seo: {
    titleKey: 'destinations.sai.seo.title',
    descriptionKey: 'destinations.sai.seo.desc',
    keywordsKey: 'destinations.sai.seo.keywords',
    imageUrl: toAssetUrl(
      '/images/destinations/san-andres-isla/sm-social-card.webp'
    ),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.sai.header.title',
    subtitleKey: 'destinations.sai.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/san-andres-isla/header-background.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/san-andres-isla/card-image.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.descriptionTitle',
    paragraphs: [
      'destinations.sai.description.paragraphs.p1',
      'destinations.sai.description.paragraphs.p2',
    ],
  },

  details: {
    titleKey: 'destinations.detailsTitle',
    items: [
      {
        labelKey: 'destinations.sai.details.items.label1',
        valueKey: 'destinations.sai.details.items.value1',
      },
      {
        labelKey: 'destinations.sai.details.items.label2',
        valueKey: 'destinations.sai.details.items.value2',
      },
      {
        labelKey: 'destinations.sai.details.items.label3',
        valueKey: 'destinations.sai.details.items.value3',
      },
      {
        labelKey: 'destinations.sai.details.items.label4',
        valueKey: 'destinations.sai.details.items.value4',
      },
      {
        labelKey: 'destinations.sai.details.items.label5',
        valueKey: 'destinations.sai.details.items.value5',
      },
      {
        labelKey: 'destinations.sai.details.items.label6',
        valueKey: 'destinations.sai.details.items.value6',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.uniqueFindsTitle',
    items: [
      'destinations.sai.uniqueFinds.items.find1',
      'destinations.sai.uniqueFinds.items.find2',
      'destinations.sai.uniqueFinds.items.find3',
      'destinations.sai.uniqueFinds.items.find4',
      'destinations.sai.uniqueFinds.items.find5',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/san-andres-isla/gallery-01.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/san-andres-isla/gallery-02.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/san-andres-isla/gallery-03.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/san-andres-isla/gallery-04.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/san-andres-isla/gallery-05.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/san-andres-isla/gallery-06.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
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

export const sanAndresDestinationContent =
  DestinationContentSchema.parse(rawSanAndres);
