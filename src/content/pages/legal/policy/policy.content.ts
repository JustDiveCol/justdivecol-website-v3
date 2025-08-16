// src/content/pages/legal/policy/policy.content.ts
import { toAssetUrl } from '../../../../constants/assets.schema';
import { ROUTES } from '../../../../constants/routes.schema';
import { toUrlPath } from '../../../urlPathSchema';
import { LegalPageContentSchema, type LegalPageContent } from '../types';

const rawPolicy: LegalPageContent = {
  seo: {
    titleKey: 'legal.policy.seo.title',
    descriptionKey: 'contact.seo.desc',
    keywordsKey: 'contact.seo.keywords',
    urlPath: toUrlPath(ROUTES.policy),
    imageUrl: toAssetUrl('/images/legal/policy/social-card.webp'),
    translationNS: 'legal',
  },

  header: {
    titleKey: 'legal.policy.header.title',
    subtitleKey: 'legal.policy.header.subtitle',
    translationNS: 'legal',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/legal/policy/header-background.webp'
      ),
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  content: {
    translationNS: 'legal',
    sections: [
      {
        id: 'reserves-payment',
        titleKey: 'legal.policy.content.sections.section1.title',
        points: [
          {
            textKey: 'legal.policy.content.sections.section1.point1.text',
          },
          {
            textKey: 'legal.policy.content.sections.section1.point2.text',
          },
          {
            textKey: 'legal.policy.content.sections.section1.point3.text',
          },
        ],
      },
      {
        id: 'cancellations-refunds',
        titleKey: 'legal.policy.content.sections.section2.title',
        points: [
          {
            textKey: 'legal.policy.content.sections.section2.point1.text',
            subpoints: [
              'legal.policy.content.sections.section2.point1.pointA',
              'legal.policy.content.sections.section2.point1.pointB',
              'legal.policy.content.sections.section2.point1.pointC',
              'legal.policy.content.sections.section2.point1.pointD',
            ],
          },
          {
            textKey: 'legal.policy.content.sections.section2.point2.text',
            subpoints: [
              'legal.policy.content.sections.section2.point2.pointA',
              'legal.policy.content.sections.section2.point2.pointB',
            ],
          },
          {
            textKey: 'legal.policy.content.sections.section2.point3',
            subpoints: ['legal.policy.content.sections.section2.point3.pointA'],
          },
        ],
      },
      {
        id: 'safety-regulations',
        titleKey: 'legal.policy.content.sections.section3.title',
        points: [
          {
            textKey: 'legal.policy.content.sections.section3.point1.text',
          },
          {
            textKey: 'legal.policy.content.sections.section3.point2.text',
          },
          {
            textKey: 'legal.policy.content.sections.section3.point3.text',
          },
          {
            textKey: 'legal.policy.content.sections.section3.point4.text',
          },
          {
            textKey: 'legal.policy.content.sections.section3.point5.text',
          },
        ],
      },
      {
        id: 'equipment-rental',
        titleKey: 'legal.policy.content.sections.section4.title',
        points: [
          {
            textKey: 'legal.policy.content.sections.section4.point1.text',
          },
          {
            textKey: 'legal.policy.content.sections.section4.point2.text',
          },
          {
            textKey: 'legal.policy.content.sections.section4.point3.text',
          },
          {
            textKey: 'legal.policy.content.sections.section4.point4.text',
          },
        ],
      },
      {
        id: 'responsibility-risks',
        titleKey: 'legal.policy.content.sections.section5.title',
        points: [
          {
            textKey: 'legal.policy.content.sections.section5.point1.text',
          },
          {
            textKey: 'legal.policy.content.sections.section5.point2.text',
          },
          {
            textKey: 'legal.policy.content.sections.section5.point3.text',
          },
        ],
      },
    ],
  },
};

export const policyContent = LegalPageContentSchema.parse(rawPolicy);
