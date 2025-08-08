// src/content/pages/legal/policy/policy.content.ts
import { ROUTES } from '../../../../constants/routes';
import { LegalPageContentSchema } from '../../../schemas';
import type { LegalPageData } from '../types';

const rawPolicy: LegalPageData = {
  seo: {
    titleKey: 'legal.policy.seo.title',
    descriptionKey: 'contact.seo.desc',
    keywordsKey: 'contact.seo.keywords',
    urlPath: ROUTES.policy,
    imageUrl: '/images/social/policy-social-card.webp',
    translationNS: 'legal',
  },

  header: {
    titleKey: 'legal.policy.header.title',
    subtitleKey: 'legal.policy.header.subtitle',
    translationNS: 'legal',
    imageData: {
      backgroundImage: '/images/contact/header-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  content: {
    translationNS: 'legal',
    sections: [
      {
        id: 'reserves-payment',
        titleKey: 'legal.policy.content.sections.title1',
        points: [
          {
            textKey: 'legal.policy.content.sections.section1.point1',
          },
          {
            textKey: 'legal.policy.content.sections.section1.point2',
          },
          {
            textKey: 'legal.policy.content.sections.section1.point3',
          },
        ],
      },
      {
        id: 'cancellations-refunds',
        titleKey: 'legal.policy.content.sections.title2',
        points: [
          {
            textKey: 'legal.policy.content.sections.section2.point1',
            subpoints: [
              'legal.policy.content.sections.section2.point1.pointA',
              'legal.policy.content.sections.section2.point1.pointB',
              'legal.policy.content.sections.section2.point1.pointC',
              'legal.policy.content.sections.section2.point1.pointD',
            ],
          },
          {
            textKey: 'legal.policy.content.sections.section2.point2',
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
        titleKey: 'legal.policy.content.sections.title3',
        points: [
          {
            textKey: 'legal.policy.content.sections.section3.point1',
          },
          {
            textKey: 'legal.policy.content.sections.section3.point2',
          },
          {
            textKey: 'legal.policy.content.sections.section3.point3',
          },
          {
            textKey: 'legal.policy.content.sections.section3.point4',
          },
          {
            textKey: 'legal.policy.content.sections.section3.point5',
          },
        ],
      },
      {
        id: 'equipment-rental',
        titleKey: 'legal.policy.content.sections.title4',
        points: [
          {
            textKey: 'legal.policy.content.sections.section4.point1',
          },
          {
            textKey: 'legal.policy.content.sections.section4.point2',
          },
          {
            textKey: 'legal.policy.content.sections.section4.point3',
          },
          {
            textKey: 'legal.policy.content.sections.section4.point4',
          },
        ],
      },
      {
        id: 'responsibility-risks',
        titleKey: 'legal.policy.content.sections.title5',
        points: [
          {
            textKey: 'legal.policy.content.sections.section5.point1',
          },
          {
            textKey: 'legal.policy.content.sections.section5.point2',
          },
          {
            textKey: 'legal.policy.content.sections.section5.point3',
          },
        ],
      },
    ],
  },
};

export const policyContent = LegalPageContentSchema.parse(rawPolicy);
