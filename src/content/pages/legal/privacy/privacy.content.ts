import { ROUTES } from '../../../../constants/routes';
import { LegalPageContentSchema } from '../../../schemas';
import type { LegalPageData } from '../types';

const rawPrivacy: LegalPageData = {
  seo: {
    titleKey: 'legal.privacy.seo.title',
    descriptionKey: 'contact.seo.desc',
    keywordsKey: 'contact.seo.keywords',
    urlPath: ROUTES.privacy,
    imageUrl: '/images/social/privacy-social-card.webp',
    translationNS: 'legal',
  },

  header: {
    titleKey: 'legal.privacy.header.title',
    subtitleKey: 'legal.privacy.header.subtitle',
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
        id: 'information-collection',
        titleKey: 'legal.privacy.content.sections.title1',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section1.point1',
          },
          {
            textKey: 'legal.privacy.content.sections.section1.point2',
          },
          {
            textKey: 'legal.privacy.content.sections.section1.point3',
          },
        ],
      },
      {
        id: 'information-use',
        titleKey: 'legal.privacy.content.sections.title2',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section2.point1',
          },
          {
            textKey: 'legal.privacy.content.sections.section2.point2',
          },
          {
            textKey: 'legal.privacy.content.sections.section2.point3',
          },
          {
            textKey: 'legal.privacy.content.sections.section2.point4',
          },
        ],
      },
      {
        id: 'information-sharing',
        titleKey: 'legal.privacy.content.sections.title3',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section3.point1',
          },
          {
            textKey: 'legal.privacy.content.sections.section3.point2',
          },
          {
            textKey: 'legal.privacy.content.sections.section3.point3',
          },
        ],
      },
      {
        id: 'rights-options',
        titleKey: 'legal.privacy.content.sections.title4',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section4.point1',
          },
          {
            textKey: 'legal.privacy.content.sections.section4.point2',
          },
          {
            textKey: 'legal.privacy.content.sections.section4.point3',
          },
        ],
      },
      {
        id: 'data-security',
        titleKey: 'legal.privacy.content.sections.title5',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section5.point1',
          },
          {
            textKey: 'legal.privacy.content.sections.section5.point2',
          },
        ],
      },
      {
        id: 'data-retention',
        titleKey: 'legal.privacy.content.sections.title6',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section6.point1',
          },
        ],
      },
      {
        id: 'privacy-policy-changes',
        titleKey: 'legal.privacy.content.sections.title7',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section7.point1',
          },
          {
            textKey: 'legal.privacy.content.sections.section7.point2',
          },
        ],
      },
      {
        id: 'contact',
        titleKey: 'legal.privacy.content.sections.title8',
        points: [
          {
            textKey: 'legal.privacy.content.sections.section8.point1',
          },
        ],
      },
    ],
  },
};

export const privacyContent = LegalPageContentSchema.parse(rawPrivacy);
