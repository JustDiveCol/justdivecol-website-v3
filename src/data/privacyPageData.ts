// src/data/privacyPageData.ts
import { ROUTES } from '../constants/routes';

export const privacyPageData = {
  seo: {
    titleKey: 'privacy.privacySeoTitle',
    descriptionKey: 'privacy.privacySeoDesc',
    keywordsKey: 'privacy.privacySeoKeywords',
    urlPath: ROUTES.privacy,
  },
  header: {
    titleKey: 'privacy.privacyHeaderTitle',
    subtitleKey: 'privacy.privacyHeaderSubtitle',
    imageData: {
      backgroundImage: '/images/legal/header-background.webp',
    },
  },
  content: {
    sections: [
      {
        id: 'information-collection',
        titleKey: 'privacy.privacySection1Title',
        points: [
          { textKey: 'privacy.privacySection1Content.privacySection1Point1' },
          { textKey: 'privacy.privacySection1Content.privacySection1Point2' },
          { textKey: 'privacy.privacySection1Content.privacySection1Point3' },
        ],
      },
      {
        id: 'information-use',
        titleKey: 'privacy.privacySection2Title',
        points: [
          { textKey: 'privacy.privacySection2Content.privacySection2Point1' },
          { textKey: 'privacy.privacySection2Content.privacySection2Point2' },
          { textKey: 'privacy.privacySection2Content.privacySection2Point3' },
          { textKey: 'privacy.privacySection2Content.privacySection2Point4' },
        ],
      },
      {
        id: 'information-sharing',
        titleKey: 'privacy.privacySection3Title',
        points: [
          { textKey: 'privacy.privacySection3Content.privacySection3Point1' },
          { textKey: 'privacy.privacySection3Content.privacySection3Point2' },
          { textKey: 'privacy.privacySection3Content.privacySection3Point3' },
        ],
      },
      {
        id: 'rights-options',
        titleKey: 'privacy.privacySection4Title',
        points: [
          { textKey: 'privacy.privacySection4Content.privacySection4Point1' },
          { textKey: 'privacy.privacySection4Content.privacySection4Point2' },
          { textKey: 'privacy.privacySection4Content.privacySection4Point3' },
        ],
      },
      {
        id: 'data-security',
        titleKey: 'privacy.privacySection5Title',
        points: [
          { textKey: 'privacy.privacySection5Content.privacySection5Point1' },
          { textKey: 'privacy.privacySection5Content.privacySection5Point2' },
        ],
      },
      {
        id: 'data-retention',
        titleKey: 'privacy.privacySection6Title',
        points: [
          { textKey: 'privacy.privacySection6Content.privacySection6Point1' },
        ],
      },
      {
        id: 'privacy-policy-changes',
        titleKey: 'privacy.privacySection7Title',
        points: [
          { textKey: 'privacy.privacySection7Content.privacySection7Point1' },
          { textKey: 'privacy.privacySection7Content.privacySection7Point2' },
        ],
      },
      {
        id: 'contact',
        titleKey: 'privacy.privacySection8Title',
        points: [
          { textKey: 'privacy.privacySection8Content.privacySection8Point1' },
        ],
      },
    ],
  },
};
