// src/content/pages/legal/privacy/privacy.content.ts

import { toAssetUrl } from '../../../../constants/assets.schema';
import { ROUTES } from '../../../../constants/routes.schema';
import { toUrlPath } from '../../../urlPathSchema';
import { LegalPageContentSchema, type LegalPageContent } from '../types';

const rawPrivacy: LegalPageContent = {
  seo: {
    titleKey: 'legal.privacy.seo.title',
    descriptionKey: 'legal.privacy.seo.desc',
    keywordsKey: 'legal.privacy.seo.keywords',
    urlPath: toUrlPath(ROUTES.privacy),
    imageUrl: toAssetUrl('/images/legal/privacy/social-card.webp'),
    translationNS: 'legal',
  },

  header: {
    titleKey: 'legal.privacy.header.title',
    subtitleKey: 'legal.privacy.header.subtitle',
    translationNS: 'legal',
    imageData: {
      backgroundImage: toAssetUrl(
        '/images/legal/privacy/header-background.webp'
      ),
      photoCredit: 'Sebastian Voortman @SebastianVoortman',
      variant: 'header',
    },
  },

  content: {
    translationNS: 'legal',
    sections: [
      {
        id: 'information-collection',
        titleKey: 'legal.privacy.content.sections.section1.title',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section1.point1.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section1.point2.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section1.point3.text',
          },
        ],
      },
      {
        id: 'information-use',
        titleKey: 'legal.privacy.content.sections.section2.title',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section2.point1.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section2.point2.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section2.point3.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section2.point4.text',
          },
        ],
      },
      {
        id: 'information-sharing',
        titleKey: 'legal.privacy.content.sections.section3.title',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section3.point1.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section3.point2.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section3.point3.text',
          },
        ],
      },
      {
        id: 'rights-options',
        titleKey: 'legal.privacy.content.sections.section4.title',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section4.point1.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section4.point2.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section4.point3.text',
          },
        ],
      },
      {
        id: 'data-security',
        titleKey: 'legal.privacy.content.sections.section5.title',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section5.point1.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section5.point2.text',
          },
        ],
      },
      {
        id: 'data-retention',
        titleKey: 'legal.privacy.content.sections.section6.title',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section6.point1.text',
          },
        ],
      },
      {
        id: 'privacy-policy-changes',
        titleKey: 'legal.privacy.content.sections.section7.title',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section7.point1.text',
          },
          {
            textKey: 'legal.privacy.content.sections.section7.point2.text',
          },
        ],
      },
      {
        id: 'contact',
        titleKey: 'legal.privacy.content.sections.section8.title',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section8.point1.text',
          },
        ],
      },
    ],
  },
};

export const privacyContent = LegalPageContentSchema.parse(rawPrivacy);
