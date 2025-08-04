// src/data/termsPageData.ts
import { ROUTES } from '../constants/routes';

export const termsPageData = {
  seo: {
    titleKey: 'terms.termsSeoTitle',
    descriptionKey: 'terms.termsSeoDesc',
    keywordsKey: 'terms.termsSeoKeywords',
    urlPath: ROUTES.terms,
  },
  header: {
    titleKey: 'terms.termsHeaderTitle',
    subtitleKey: 'terms.termsHeaderSubtitle',
    imageData: {
      backgroundImage: '/images/legal/header-background.webp',
    },
  },
  content: {
    sections: [
      {
        id: 'acceptance-terms',
        titleKey: 'terms.termsSection1Title',
        points: [
          { textKey: 'terms.termsSection1Content.termsSection1Point1' },
          { textKey: 'terms.termsSection1Content.termsSection1Point2' },
        ],
      },
      {
        id: 'service-usage',
        titleKey: 'terms.termsSection2Title',
        points: [
          { textKey: 'terms.termsSection2Content.termsSection2Point1' },
          { textKey: 'terms.termsSection2Content.termsSection2Point2' },
          { textKey: 'terms.termsSection2Content.termsSection2Point3' },
        ],
      },
      {
        id: 'intellectual-property',
        titleKey: 'terms.termsSection3Title',
        points: [
          { textKey: 'terms.termsSection3Content.termsSection3Point1' },
          { textKey: 'terms.termsSection3Content.termsSection3Point2' },
        ],
      },
      {
        id: 'responsibility-limitation',
        titleKey: 'terms.termsSection4Title',
        points: [
          { textKey: 'terms.termsSection4Content.termsSection4Point1' },
          { textKey: 'terms.termsSection4Content.termsSection4Point2' },
          { textKey: 'terms.termsSection4Content.termsSection4Point3' },
        ],
      },
      {
        id: 'third-party-links',
        titleKey: 'terms.termsSection5Title',
        points: [
          { textKey: 'terms.termsSection5Content.termsSection5Point1' },
          { textKey: 'terms.termsSection5Content.termsSection5Point2' },
        ],
      },
      {
        id: 'law-jurisdiction',
        titleKey: 'terms.termsSection6Title',
        points: [
          { textKey: 'terms.termsSection6Content.termsSection6Point1' },
          { textKey: 'terms.termsSection6Content.termsSection6Point2' },
        ],
      },
      {
        id: 'divisibility',
        titleKey: 'terms.termsSection7Title',
        points: [{ textKey: 'terms.termsSection7Content.termsSection7Point1' }],
      },
    ],
  },
};
