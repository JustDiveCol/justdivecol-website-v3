import { ROUTES } from '../../../../constants/routes';
import { LegalPageContentSchema } from '../../../schemas';
import type { LegalPageData } from '../types';

const rawTerms: LegalPageData = {
  seo: {
    titleKey: 'legal.terms.seo.title',
    descriptionKey: 'contact.seo.desc',
    keywordsKey: 'contact.seo.keywords',
    urlPath: ROUTES.terms,
    imageUrl: '/images/social/terms-social-card.webp',
    translationNS: 'legal',
  },

  header: {
    titleKey: 'legal.terms.header.title',
    subtitleKey: 'legal.terms.header.subtitle',
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
        id: 'acceptance-terms',
        titleKey: 'legal.terms.content.sections.title1',
        points: [
          {
            textKey: 'legal.terms.content.sections.section1.point1',
          },
          {
            textKey: 'legal.terms.content.sections.section1.point2',
          },
        ],
      },
      {
        id: 'service-usage',
        titleKey: 'legal.terms.content.sections.title2',
        points: [
          {
            textKey: 'legal.terms.content.sections.section2.point1',
          },
          {
            textKey: 'legal.terms.content.sections.section2.point2',
          },
          {
            textKey: 'legal.terms.content.sections.section2.point3',
          },
        ],
      },
      {
        id: 'intellectual-property',
        titleKey: 'legal.terms.content.sections.title3',
        points: [
          {
            textKey: 'legal.terms.content.sections.section3.point1',
          },
          {
            textKey: 'legal.terms.content.sections.section3.point2',
          },
        ],
      },
      {
        id: 'responsibility-limitation',
        titleKey: 'legal.terms.content.sections.title4',
        points: [
          {
            textKey: 'legal.terms.content.sections.section4.point1',
          },
          {
            textKey: 'legal.terms.content.sections.section4.point2',
          },
          {
            textKey: 'legal.terms.content.sections.section4.point3',
          },
        ],
      },
      {
        id: 'third-party-links',
        titleKey: 'legal.terms.content.sections.title5',
        points: [
          {
            textKey: 'legal.terms.content.sections.section5.point1',
          },
          {
            textKey: 'legal.terms.content.sections.section5.point2',
          },
        ],
      },
      {
        id: 'law-jurisdiction',
        titleKey: 'legal.terms.content.sections.title6',
        points: [
          {
            textKey: 'legal.terms.content.sections.section6.point1',
          },
          {
            textKey: 'legal.terms.content.sections.section6.point2',
          },
        ],
      },
      {
        id: 'divisibility',
        titleKey: 'legal.terms.content.sections.title7',
        points: [
          {
            textKey: 'legal.terms.content.sections.section7.point1',
          },
        ],
      },
    ],
  },
};

export const termsContent = LegalPageContentSchema.parse(rawTerms);
