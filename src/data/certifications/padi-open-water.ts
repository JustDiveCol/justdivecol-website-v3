// src/data/certifications/padi-open-water.ts
import type { Certification } from '../../types/data';

const padiOpenWaterDiver: Certification = {
  // Metadata
  id: 'padi-open-water',
  nameKey: 'owdName',
  subtitleKey: 'owdSubtitle',
  slug: 'open-water-diver',
  status: 'published',

  // SEO y Header (como en la interface PageContent)
  seo: {
    titleKey: 'owdSeoTitle',
    descriptionKey: 'owdSeoDesc',
    imageUrl: '/images/certifications/owd-seo-image.webp',
    url: '/certifications/open-water-diver',
  },
  header: {
    backgroundImage: '/images/certifications/owd-header.webp',
    titleKey: 'owdHeaderTitle',
    subtitleKey: 'owdHeaderSubtitle',
  },

  // Descripción
  description: {
    titleKey: 'owdDescTitle',
    paragraphs: ['owdDescP1', 'owdDescP2'],
  },

  // Datos específicos de Certificación
  agency: 'PADI',
  prerequisiteIds: [],
  card: {
    imageData: {
      backgroundImage: '/images/certifications/owd-card.webp',
      textOverlayKey: 'certificationsTextOverlay',
    },
  },
  details: {
    titleKey: 'certificationsDetailsTitle',
    durationKey: 'owdDetailDurationValue',
    items: [{ labelKey: 'owdDetailLabel1', valueKey: 'owdDetailValue1' }],
  },
  curriculum: {
    titleKey: 'certificationsCurriculumTitle',
    modules: [
      {
        id: 'theory',
        nameKey: 'owdModule1Name',
        descriptionKey: 'owdModule1Desc',
      },
      {
        id: 'confined-waters',
        nameKey: 'owdModule2Name',
        descriptionKey: 'owdModule2Desc',
      },
      {
        id: 'open-water',
        nameKey: 'owdModule3Name',
        descriptionKey: 'owdModule3Desc',
      },
    ],
  },
  requirements: {
    titleKey: 'certificationsRequirementsTitle',
    items: ['owdReqItem1', 'owdReqItem2', 'owdReqItem3'],
  },
  whatIsIncluded: {
    titleKey: 'certificationsIncludedTitle',
    items: ['owdIncludeItem1', 'owdIncludeItem2', 'owdIncludeItem3'],
  },
  gallery: {
    titleKey: 'certificationsGalleryTitle',
    images: [
      {
        backgroundImage: '/images/certifications/owd-gallery-1.webp',
        altTextKey: 'owdGalleryAlt1',
      },
      {
        backgroundImage: '/images/certifications/owd-gallery-2.webp',
        altTextKey: 'owdGalleryAlt2',
      },
    ],
  },
  cta: {
    textKey: 'certificationCtaButton',
    action: {
      type: 'whatsapp',
      whatsAppMessageKey: 'certificationWhatsappMessage',
    },
  },
};

export default padiOpenWaterDiver;
