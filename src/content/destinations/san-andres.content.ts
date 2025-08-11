// src/content/destinations/san-andres.content.ts

import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes';
import { toUrlPath } from '../urlPathSchema';
import { DestinationContentSchema, type DestinationContent } from './types';

const rawSanAndres: DestinationContent = {
  id: 'san-andres',
  slug: 'san-andres',
  country: 'CO',
  coords: [-81.715862, 12.538296],
  minZoom: 10,
  maxZoom: 15,

  seo: {
    titleKey: 'destinations.sai.seo.title',
    descriptionKey: 'destinations.sai.seo.desc',
    keywordsKey: 'destinations.sai.seo.keywords',
    imageUrl: toAssetUrl('/images/social/sai-social-card.webp'),
    urlPath: toUrlPath(ROUTES.destinations),
    translationNS: 'destinations',
  },

  header: {
    titleKey: 'destinations.sai.header.title',
    subtitleKey: 'destinations.sai.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl('/images/destinations/sai-header.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
    translationNS: 'destinations',
  },

  card: {
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/destinations/san-andres/sai-card.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'destinations.sai.description.title',
    paragraphs: [
      'destinations.sai.description.p1',
      'destinations.sai.description.p2',
    ],
  },

  details: {
    titleKey: 'destinations.sai.details.title',
    items: [
      {
        labelKey: 'destinations.sai.details.label1',
        valueKey: 'destinations.sai.details.value1',
      },
      {
        labelKey: 'destinations.sai.details.label2',
        valueKey: 'destinations.sai.details.value2',
      },
    ],
  },

  uniqueFinds: {
    titleKey: 'destinations.sai.uniqueFinds.title',
    items: [
      'destinations.sai.uniqueFinds.find1',
      'destinations.sai.uniqueFinds.find2',
      'destinations.sai.uniqueFinds.find3',
    ],
  },

  gallery: {
    titleKey: 'destinations.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/destinations/san-andres/gallery-01.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
    ],
  },

  ctaButton: {
    textKey: 'destinations.sai.ctaButton.text',
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
