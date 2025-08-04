// src/data/privacyPageData.ts
import { ROUTES } from '../constants/routes';
import type { PrivacyPageData } from '../types/data';

export const privacyPageData: PrivacyPageData = {
  seo: {
    titleKey: 'privacy.seo.privacySeoTitle',
    descriptionKey: 'privacy.seo.privacySeoDesc',
    keywordsKey: 'privacy.seo.privacySeoKeywords',
    urlPath: ROUTES.privacy,
    imageUrl: '/images/social/privacy-social-card.webp',
    translationNS: 'legal',
  },

  header: {
    titleKey: 'privacy.header.privacyHeaderTitle',
    subtitleKey: 'privacy.header.privacyHeaderSubtitle',
    translationNS: 'legal',
    imageData: {
      backgroundImage: '/images/legal/header-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  content: {
    translationNS: 'legal',
    sections: [
      {
        id: 'information-collection',
        titleKey: 'privacy.content.privacySection1Title',
        points: [
          {
            textKey:
              'privacy.content.privacySection1Content.privacySection1Point1',
          },
          {
            textKey:
              'privacy.content.privacySection1Content.privacySection1Point2',
          },
          {
            textKey:
              'privacy.content.privacySection1Content.privacySection1Point3',
          },
        ],
      },
      {
        id: 'information-use',
        titleKey: 'privacy.content.privacySection2Title',
        points: [
          {
            textKey:
              'privacy.content.privacySection2Content.privacySection2Point1',
          },
          {
            textKey:
              'privacy.content.privacySection2Content.privacySection2Point2',
          },
          {
            textKey:
              'privacy.content.privacySection2Content.privacySection2Point3',
          },
          {
            textKey:
              'privacy.content.privacySection2Content.privacySection2Point4',
          },
        ],
      },
      {
        id: 'information-sharing',
        titleKey: 'privacy.content.privacySection3Title',
        points: [
          {
            textKey:
              'privacy.content.privacySection3Content.privacySection3Point1',
          },
          {
            textKey:
              'privacy.content.privacySection3Content.privacySection3Point2',
          },
          {
            textKey:
              'privacy.content.privacySection3Content.privacySection3Point3',
          },
        ],
      },
      {
        id: 'rights-options',
        titleKey: 'privacy.content.privacySection4Title',
        points: [
          {
            textKey:
              'privacy.content.privacySection4Content.privacySection4Point1',
          },
          {
            textKey:
              'privacy.content.privacySection4Content.privacySection4Point2',
          },
          {
            textKey:
              'privacy.content.privacySection4Content.privacySection4Point3',
          },
        ],
      },
      {
        id: 'data-security',
        titleKey: 'privacy.content.privacySection5Title',
        points: [
          {
            textKey:
              'privacy.content.privacySection5Content.privacySection5Point1',
          },
          {
            textKey:
              'privacy.content.privacySection5Content.privacySection5Point2',
          },
        ],
      },
      {
        id: 'data-retention',
        titleKey: 'privacy.content.privacySection6Title',
        points: [
          {
            textKey:
              'privacy.content.privacySection6Content.privacySection6Point1',
          },
        ],
      },
      {
        id: 'privacy-policy-changes',
        titleKey: 'privacy.content.privacySection7Title',
        points: [
          {
            textKey:
              'privacy.content.privacySection7Content.privacySection7Point1',
          },
          {
            textKey:
              'privacy.content.privacySection7Content.privacySection7Point2',
          },
        ],
      },
      {
        id: 'contact',
        titleKey: 'privacy.content.privacySection8Title',
        points: [
          {
            textKey:
              'privacy.content.privacySection8Content.privacySection8Point1',
          },
        ],
      },
    ],
  },
};
