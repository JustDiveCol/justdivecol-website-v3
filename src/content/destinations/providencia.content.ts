// src/content/destinations/providencia.content.ts

import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { DestinationContentSchema, type DestinationContent } from './types';

const rawProvidencia: DestinationContent = {
  id: 'providencia',
  slug: 'providencia',
  name: 'Providencia',
  country: 'CO',
  coords: [-81.37393, 13.352018],
  minZoom: 10,
  maxZoom: 15,

  seo: {
    titleKey: 'destinations.provi.seo.title',
    descriptionKey: 'destinations.provi.seo.desc',
    keywordsKey: 'destinations.provi.seo.keywords',
    imageUrl: toAssetUrl('/images/destinations/providencia/social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.provi.header.title',
    subtitleKey: 'destinations.provi.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/providencia/header-background.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/providencia/card-image.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.descriptionTitle',
    paragraphs: [
      'destinations.provi.description.paragraphs.p1',
      'destinations.provi.description.paragraphs.p2',
    ],
  },

  details: {
    titleKey: 'destinations.detailsTitle',
    items: [
      {
        labelKey: 'destinations.provi.details.items.label1',
        valueKey: 'destinations.provi.details.items.value1',
      },
      {
        labelKey: 'destinations.provi.details.items.label2',
        valueKey: 'destinations.provi.details.items.value2',
      },
      {
        labelKey: 'destinations.provi.details.items.label3',
        valueKey: 'destinations.provi.details.items.value3',
      },
      {
        labelKey: 'destinations.provi.details.items.label4',
        valueKey: 'destinations.provi.details.items.value4',
      },
      {
        labelKey: 'destinations.provi.details.items.label5',
        valueKey: 'destinations.provi.details.items.value5',
      },
      {
        labelKey: 'destinations.provi.details.items.label6',
        valueKey: 'destinations.provi.details.items.value6',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.uniqueFindsTitle',
    items: [
      'destinations.provi.uniqueFinds.items.find1',
      'destinations.provi.uniqueFinds.items.find2',
      'destinations.provi.uniqueFinds.items.find3',
      'destinations.provi.uniqueFinds.items.find4',
      'destinations.provi.uniqueFinds.items.find5',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-01.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-02.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-03.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-04.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-05.webp'
        ),
        photoCredit: 'XYZ',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-06.webp'
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

export const providenciaDestinationContent =
  DestinationContentSchema.parse(rawProvidencia);
