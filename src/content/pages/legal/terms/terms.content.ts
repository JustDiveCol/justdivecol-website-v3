// src/content/pages/legal/terms/terms.content.ts

import { toAssetUrl } from '../../../../constants/assets.schema';
import { ROUTES } from '../../../../constants/routes.schema';
import { toUrlPath } from '../../../urlPathSchema';
import { LegalPageContentSchema, type LegalPageContent } from '../types';

const rawTerms: LegalPageContent = {
  seo: {
    titleKey: 'legal.terms.seo.title',
    descriptionKey: 'legal.terms.seo.desc',
    keywordsKey: 'legal.terms.seo.keywords',
    urlPath: toUrlPath(ROUTES.terms),
    imageUrl: toAssetUrl('/images/legal/terms/social-card.webp'),
    translationNS: 'legal',
  },

  header: {
    titleKey: 'legal.terms.header.title',
    subtitleKey: 'legal.terms.header.subtitle',
    translationNS: 'legal',
    imageData: {
      backgroundImage: toAssetUrl('/images/legal/terms/header-background.webp'),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  content: {
    translationNS: 'legal',
    sections: [
      {
        id: 'acceptance-terms',
        titleKey: 'legal.terms.content.sections.section1.title',
        points: [
          {
            textKey: 'legal.terms.content.sections.section1.point1.text',
          },
          {
            textKey: 'legal.terms.content.sections.section1.point2.text',
          },
        ],
      },
      {
        id: 'service-usage',
        titleKey: 'legal.terms.content.sections.section2.title',
        points: [
          {
            textKey: 'legal.terms.content.sections.section2.point1.text',
          },
          {
            textKey: 'legal.terms.content.sections.section2.point2.text',
          },
          {
            textKey: 'legal.terms.content.sections.section2.point3.text',
          },
        ],
      },
      {
        id: 'intellectual-property',
        titleKey: 'legal.terms.content.sections.section3.title',
        points: [
          {
            textKey: 'legal.terms.content.sections.section3.point1.text',
          },
          {
            textKey: 'legal.terms.content.sections.section3.point2.text',
          },
        ],
      },
      {
        id: 'responsibility-limitation',
        titleKey: 'legal.terms.content.sections.section4.title',
        points: [
          {
            textKey: 'legal.terms.content.sections.section4.point1.text',
          },
          {
            textKey: 'legal.terms.content.sections.section4.point2.text',
          },
          {
            textKey: 'legal.terms.content.sections.section4.point3.text',
          },
        ],
      },
      {
        id: 'third-party-links',
        titleKey: 'legal.terms.content.sections.section5.title',
        points: [
          {
            textKey: 'legal.terms.content.sections.section5.point1.text',
          },
          {
            textKey: 'legal.terms.content.sections.section5.point2.text',
          },
        ],
      },
      {
        id: 'law-jurisdiction',
        titleKey: 'legal.terms.content.sections.section6.title',
        points: [
          {
            textKey: 'legal.terms.content.sections.section6.point1.text',
          },
          {
            textKey: 'legal.terms.content.sections.section6.point2.text',
          },
        ],
      },
      {
        id: 'divisibility',
        titleKey: 'legal.terms.content.sections.section7.title',
        points: [
          {
            textKey: 'legal.terms.content.sections.section7.point1.text',
          },
        ],
      },
    ],
  },
};

export const termsContent = LegalPageContentSchema.parse(rawTerms);
