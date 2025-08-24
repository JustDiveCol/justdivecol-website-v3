// src/content/destinations/curacao.content.ts

import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { DestinationContentSchema, type DestinationContent } from './types';

const rawCuracao: DestinationContent = {
  id: 'curacao',
  slug: 'curacao',
  name: 'Curaçao',
  country: 'CW',
  coords: [-68.981691, 12.178205],
  minZoom: 9.5,
  maxZoom: 16,

  seo: {
    titleKey: 'destinations.cw.seo.title',
    descriptionKey: 'destinations.cw.seo.desc',
    keywordsKey: 'destinations.cw.seo.keywords',
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.cw.header.title',
    subtitleKey: 'destinations.cw.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/curacao/header-background.webp'
      ),
      photoCredit: 'ClickerHappy',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/curacao/card-image.webp'
      ),
      photoCredit: 'thiago japyassu @thiagojapyassu',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.descriptionTitle',
    paragraphs: [
      'destinations.cw.description.paragraphs.p1',
      'destinations.cw.description.paragraphs.p2',
    ],
  },

  details: {
    titleKey: 'destinations.detailsTitle',
    items: [
      {
        labelKey: 'destinations.cw.details.items.label1',
        valueKey: 'destinations.cw.details.items.value1',
      },
      {
        labelKey: 'destinations.cw.details.items.label2',
        valueKey: 'destinations.cw.details.items.value2',
      },
      {
        labelKey: 'destinations.cw.details.items.label3',
        valueKey: 'destinations.cw.details.items.value3',
      },
      {
        labelKey: 'destinations.cw.details.items.label4',
        valueKey: 'destinations.cw.details.items.value4',
      },
      {
        labelKey: 'destinations.cw.details.items.label5',
        valueKey: 'destinations.cw.details.items.value5',
      },
      {
        labelKey: 'destinations.cw.details.items.label6',
        valueKey: 'destinations.cw.details.items.value6',
      },
      {
        labelKey: 'destinations.cw.details.items.label7',
        valueKey: 'destinations.cw.details.items.value7',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.uniqueFindsTitle',
    items: [
      'destinations.cw.uniqueFinds.items.find1',
      'destinations.cw.uniqueFinds.items.find2',
      'destinations.cw.uniqueFinds.items.find3',
      'destinations.cw.uniqueFinds.items.find4',
      'destinations.cw.uniqueFinds.items.find5',
      'destinations.cw.uniqueFinds.items.find6',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/curacao/gallery-01.webp'
        ),
        photoCredit: 'Jeffrey Czum @JeffreyCzum',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/curacao/gallery-02.webp'
        ),
        photoCredit: 'Jeffrey Czum @JeffreyCzum',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/curacao/gallery-03.webp'
        ),
        photoCredit: 'thiago japyassu @thiagojapyassu',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/curacao/gallery-04.webp'
        ),
        photoCredit: 'Wijs (Wise) @wijs_photo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/curacao/gallery-05.webp'
        ),
        photoCredit: 'Wijs (Wise) @wijs_photo',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/curacao/gallery-06.webp'
        ),
        photoCredit: 'RITRATTO VISUAL @ritrattovisual',
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

export const curacaoDestinationContent =
  DestinationContentSchema.parse(rawCuracao);
