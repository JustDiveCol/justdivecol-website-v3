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
    imageUrl: toAssetUrl('/images/social/provi-social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.provi.header.title',
    subtitleKey: 'destinations.provi.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/destinations/provi-header.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/providencia/provi-card.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.provi.description.title',
    paragraphs: [
      'destinations.provi.description.p1',
      'destinations.provi.description.p2',
    ],
  },

  details: {
    titleKey: 'destinations.provi.details.title',
    items: [
      {
        labelKey: 'destinations.provi.details.label1',
        valueKey: 'destinations.provi.details.value1',
      },
      {
        labelKey: 'destinations.provi.details.label2',
        valueKey: 'destinations.provi.details.value2',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.provi.uniqueFinds.title',
    items: [
      'destinations.provi.uniqueFinds.find1',
      'destinations.provi.uniqueFinds.find2',
      'destinations.provi.uniqueFinds.find3',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/providencia/gallery-01.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
    ],
  },

  ctaButton: {
    textKey: 'destinations.provi.ctaButton.text',
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

export const providenciaDestinationContent =
  DestinationContentSchema.parse(rawProvidencia);
