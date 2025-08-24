// src/content/certifications/fun-dive.content.ts
import { toAssetUrl } from '../../constants/assets.schema';
import { ROUTES } from '../../constants/routes.schema';
import { toUrlPath } from '../urlPathSchema';
import { CertificationContentSchema, type CertificationContent } from './types';

const rawFunDive: CertificationContent = {
  id: 'fun-dive',
  slug: 'fun-dive',
  name: 'Fun Dive',
  code: 'FD',
  level: 'recreative',
  published: false,
  agency: 'None',
  minAge: 10,
  maxDepthMeter: 30,
  maxDepthFt: 100,

  estimatedDuration: {
    eLearningHours: [0, 0],
    totalDays: [1, 1],
  },

  seo: {
    titleKey: 'certifications.fd.seo.title',
    descriptionKey: 'certifications.fd.seo.desc',
    keywordsKey: 'certifications.fd.seo.keywords',
    imageUrl: toAssetUrl('/images/social/social-card.webp'),
    urlPath: toUrlPath(ROUTES.certifications),
    translationNS: 'certifications',
  },

  header: {
    titleKey: 'certifications.fd.header.title',
    subtitleKey: 'certifications.fd.header.subtitle',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/certifications/fd/header-background.webp'
      ),
      photoCredit: 'Pia B @pspov',
      variant: 'header',
    },
    translationNS: 'certifications',
  },

  card: {
    descriptionKey: 'certifications.fd.card.desc',
    imageData: {
      backgroundImage: toAssetUrl('/images/certifications/fd/card-image.webp'),
      photoCredit: 'Jondave Libiran @ar.davelibiran',
      textOverlayKey: 'certifications.fd.card.cardTextOverlay',
      variant: 'horizontal',
    },
  },

  description: {
    titleKey: 'certifications.descriptionTitle',
    paragraphs: [
      'certifications.fd.description.paragraphs.p1',
      'certifications.fd.description.paragraphs.p2',
    ],
  },

  prerequisites: {
    titleKey: 'certifications.prerequisitesTitle',
    items: [
      'certifications.fd.prerequisites.item1',
      'certifications.fd.prerequisites.item2',
      'certifications.fd.prerequisites.item3',
    ],
  },

  details: {
    titleKey: 'certifications.detailsTitle',
    items: [
      {
        labelKey: 'certifications.fd.details.items.label1',
        valueKey: 'certifications.fd.details.items.value1',
      },
      {
        labelKey: 'certifications.fd.details.items.label2',
        valueKey: 'certifications.fd.details.items.value2',
      },
      {
        labelKey: 'certifications.fd.details.items.label3',
        valueKey: 'certifications.fd.details.items.value3',
      },
      {
        labelKey: 'certifications.fd.details.items.label4',
        valueKey: 'certifications.fd.details.items.value4',
      },
    ],
  },

  curriculum: {
    titleKey: 'certifications.curriculumTitle',
    modules: [
      {
        id: 'theory',
        nameKey: 'certifications.fd.curriculum.modules.name1',
        descriptionKey: 'certifications.fd.curriculum.modules.desc1',
      },
      {
        id: 'confined-water',
        nameKey: 'certifications.fd.curriculum.modules.name2',
        descriptionKey: 'certifications.fd.curriculum.modules.desc2',
      },
      {
        id: 'open-water',
        nameKey: 'certifications.fd.curriculum.modules.name3',
        descriptionKey: 'certifications.fd.curriculum.modules.desc3',
      },
    ],
  },

  whatIsIncluded: {
    titleKey: 'certifications.whatIsIncludedTitle',
    items: [
      'certifications.fd.whatIsIncluded.items.item1',
      'certifications.fd.whatIsIncluded.items.item2',
      'certifications.fd.whatIsIncluded.items.item3',
      'certifications.fd.whatIsIncluded.items.item4',
    ],
  },

  bookingProcess: {
    titleKey: 'certifications.bookingProcessTitle',
    steps: [
      {
        icon: 'contact',
        nameKey: 'certifications.fd.bookingProcess.steps.name1',
        descriptionKey: 'certifications.fd.bookingProcess.steps.desc1',
      },
      {
        icon: 'theory',
        nameKey: 'certifications.fd.bookingProcess.steps.name2',
        descriptionKey: 'certifications.fd.bookingProcess.steps.desc2',
      },
      {
        icon: 'dive',
        nameKey: 'certifications.fd.bookingProcess.steps.name3',
        descriptionKey: 'certifications.fd.bookingProcess.steps.desc3',
      },
    ],
  },

  gallery: {
    titleKey: 'certifications.galleryTitle',
    images: [
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/fd/card-image.webp'
        ),
        photoCredit: 'Jondave Libiran @ar.davelibiran',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/fd/gallery-01.webp'
        ),
        photoCredit: 'Tirachard Kumtanom',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/fd/gallery-02.webp'
        ),
        photoCredit: 'Maël BALLAND @mael_balland',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/fd/gallery-03.webp'
        ),
        photoCredit: 'Francesco Ungaro @ungarophrancesco',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/fd/gallery-04.webp'
        ),
        photoCredit: 'Maël BALLAND @mael_balland',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/fd/gallery-05.webp'
        ),
        photoCredit: 'Max Zaharenkov @maxzaharenkov',
        variant: 'horizontal',
      },
      {
        backgroundImage: toAssetUrl(
          '/images/certifications/fd/gallery-06.webp'
        ),
        photoCredit: 'Pia B @pspov',
        variant: 'horizontal',
      },
    ],
  },

  faq: 'padi',

  ctaButton: {
    textKey: 'certifications.ctaButtonText',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'certifications.certificationWhatsappMessage',
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

export const funDiveContent = CertificationContentSchema.parse(rawFunDive);
