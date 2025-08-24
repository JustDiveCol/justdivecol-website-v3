// src/content/experiences/custom-exp-santa-marta.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { ExperienceContentSchema, type ExperienceContent } from './types';

const rawCustomSantaMartaExp: ExperienceContent = {
  id: 'custom-exp-santa-marta',
  slug: 'custom-santa-marta',
  destinationId: 'santa-marta',

  seo: {
    titleKey: 'experiences.santaMartaCustomExp.seo.title',
    descriptionKey: 'experiences.santaMartaCustomExp.seo.desc',
    keywordsKey: 'experiences.santaMartaCustomExp.seo.keywords',
    urlPath: toUrlPath(ROUTES['dive-experiences']),
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.santaMartaCustomExp.header.title',
    subtitleKey: 'experiences.santaMartaCustomExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/experiences/santa-marta/header-background.webp'
      ),
      photoCredit: 'Cristhian David Duarte @duartefotografia.ph',
      variant: 'header',
    },
  },

  description: {
    titleKey: 'experiences.descriptionTitle',
    paragraphs: [
      'experiences.santaMartaCustomExp.description.paragraphs.p1',
      'experiences.santaMartaCustomExp.description.paragraphs.p2',
      'experiences.santaMartaCustomExp.description.paragraphs.p3',
    ],
  },

  whatIsIncluded: {
    titleKey: 'experiences.whatIsIncludedTitle',
    items: [],
  },

  whatIsNotIncluded: {
    titleKey: 'experiences.whatIsNotIncludedTitle',
    items: [],
  },

  gallery: {
    titleKey: 'experiences.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-01.webp'
        ),
        photoCredit: 'Oscar Ivan Esquivel Arteaga @oscaresquivelfotografia',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-02.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-03.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-04.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-05.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-06.webp'
        ),
        photoCredit: 'Carlos Jamaica @krlosjamaica',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-07.webp'
        ),
        photoCredit: 'Camilo Beltran @JustDiveCol',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-08.webp'
        ),
        photoCredit: 'Hotel Karaya @karaya.hotel',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-09.webp'
        ),
        photoCredit: 'Hotel Karaya @karaya.hotel',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/experiences/santa-marta/gallery-10.webp'
        ),
        photoCredit: 'Hotel Karaya @karaya.hotel',
        variant: 'horizontal',
      },
    ],
  },

  ctaButton: {
    textKey: 'experiences.ctaButtonText',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'experiences.experienceWhatsappMessage',
      translationNS: 'experiences',
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

export const customSantaMartaExpContent = ExperienceContentSchema.parse(
  rawCustomSantaMartaExp
);
