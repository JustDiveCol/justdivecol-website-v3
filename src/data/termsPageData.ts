// src/data/termsPageData.ts
import { ROUTES } from '../constants/routes';
import type { TermsPageData } from '../types/data';

export const termsPageData: TermsPageData = {
  seo: {
    titleKey: 'terms.seo.termsSeoTitle',
    descriptionKey: 'terms.seo.termsSeoDesc',
    keywordsKey: 'terms.seo.termsSeoKeywords',
    urlPath: ROUTES.terms,
    imageUrl: '/images/social/terms-social-card.webp',
    translationNS: 'legal',
  },
  header: {
    titleKey: 'terms.header.termsHeaderTitle',
    subtitleKey: 'terms.header.termsHeaderSubtitle',
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
        id: 'acceptance-terms',
        titleKey: 'terms.content.termsSection1Title',
        points: [
          { textKey: 'terms.content.termsSection1Content.termsSection1Point1' },
          { textKey: 'terms.content.termsSection1Content.termsSection1Point2' },
        ],
      },
      {
        id: 'service-usage',
        titleKey: 'terms.content.termsSection2Title',
        points: [
          { textKey: 'terms.content.termsSection2Content.termsSection2Point1' },
          { textKey: 'terms.content.termsSection2Content.termsSection2Point2' },
          { textKey: 'terms.content.termsSection2Content.termsSection2Point3' },
        ],
      },
      {
        id: 'intellectual-property',
        titleKey: 'terms.content.termsSection3Title',
        points: [
          { textKey: 'terms.content.termsSection3Content.termsSection3Point1' },
          { textKey: 'terms.content.termsSection3Content.termsSection3Point2' },
        ],
      },
      {
        id: 'responsibility-limitation',
        titleKey: 'terms.content.termsSection4Title',
        points: [
          { textKey: 'terms.content.termsSection4Content.termsSection4Point1' },
          { textKey: 'terms.content.termsSection4Content.termsSection4Point2' },
          { textKey: 'terms.content.termsSection4Content.termsSection4Point3' },
        ],
      },
      {
        id: 'third-party-links',
        titleKey: 'terms.content.termsSection5Title',
        points: [
          { textKey: 'terms.content.termsSection5Content.termsSection5Point1' },
          { textKey: 'terms.content.termsSection5Content.termsSection5Point2' },
        ],
      },
      {
        id: 'law-jurisdiction',
        titleKey: 'terms.content.termsSection6Title',
        points: [
          { textKey: 'terms.content.termsSection6Content.termsSection6Point1' },
          { textKey: 'terms.content.termsSection6Content.termsSection6Point2' },
        ],
      },
      {
        id: 'divisibility',
        titleKey: 'terms.content.termsSection7Title',
        points: [
          { textKey: 'terms.content.termsSection7Content.termsSection7Point1' },
        ],
      },
    ],
  },
};
