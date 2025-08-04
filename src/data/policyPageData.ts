import { ROUTES } from '../constants/routes';
import type { PolicyPageData } from '../types/data';

export const policyPageData: PolicyPageData = {
  seo: {
    titleKey: 'policy.seo.policySeoTitle',
    descriptionKey: 'policy.seo.policySeoDesc',
    keywordsKey: 'policy.seo.policySeoKeywords',
    urlPath: ROUTES.policy,
    imageUrl: '/images/social/policy-social-card.webp',
    translationNS: 'legal',
  },

  header: {
    titleKey: 'policy.header.policyHeaderTitle',
    subtitleKey: 'policy.header.policyHeaderSubtitle',
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
        id: 'reservas-pagos',
        titleKey: 'policy.content.policySection1Title',
        points: [
          {
            textKey:
              'policy.content.policySection1Content.policiesSection1Point1',
          },
          {
            textKey:
              'policy.content.policySection1Content.policiesSection1Point2',
          },
          {
            textKey:
              'policy.content.policySection1Content.policiesSection1Point3',
          },
        ],
      },
      {
        id: 'cancelaciones-reembolsos',
        titleKey: 'policy.content.policySection2Title',
        points: [
          {
            titleKey:
              'policy.content.policySection2Content.policiesSection2Point1',
            subpoints: [
              'policy.content.policySection2Content.policiesSection2Point1Content.policiesSection2Point1a',
              'policy.content.policySection2Content.policiesSection2Point1Content.policiesSection2Point1b',
              'policy.content.policySection2Content.policiesSection2Point1Content.policiesSection2Point1c',
              'policy.content.policySection2Content.policiesSection2Point1Content.policiesSection2Point1d',
            ],
          },
          {
            titleKey:
              'policy.content.policySection2Content.policiesSection2Point2',
            subpoints: [
              'policy.content.policySection2Content.policiesSection2Point2Content.policiesSection2Point2a',
              'policy.content.policySection2Content.policiesSection2Point2Content.policiesSection2Point2b',
            ],
          },
          {
            titleKey:
              'policy.content.policySection2Content.policiesSection2Point3',
            subpoints: [
              'policy.content.policySection2Content.policiesSection2Point3Content.policiesSection2Point3a',
            ],
          },
        ],
      },
      {
        id: 'normativas-seguridad',
        titleKey: 'policy.content.policySection3Title',
        points: [
          {
            textKey:
              'policy.content.policySection3Content.policiesSection3Point1',
          },
          {
            textKey:
              'policy.content.policySection3Content.policiesSection3Point2',
          },
          {
            textKey:
              'policy.content.policySection3Content.policiesSection3Point3',
          },
          {
            textKey:
              'policy.content.policySection3Content.policiesSection3Point4',
          },
          {
            textKey:
              'policy.content.policySection3Content.policiesSection3Point5',
          },
        ],
      },
      {
        id: 'alquiler-equipos',
        titleKey: 'policy.content.policySection4Title',
        points: [
          {
            textKey:
              'policy.content.policySection4Content.policiesSection4Point1',
          },
          {
            textKey:
              'policy.content.policySection4Content.policiesSection4Point2',
          },
          {
            textKey:
              'policy.content.policySection4Content.policiesSection4Point3',
          },
          {
            textKey:
              'policy.content.policySection4Content.policiesSection4Point4',
          },
        ],
      },
      {
        id: 'responsabilidad-riesgos',
        titleKey: 'policy.content.policySection5Title',
        points: [
          {
            textKey:
              'policy.content.policySection5Content.policiesSection5Point1',
          },
          {
            textKey:
              'policy.content.policySection5Content.policiesSection5Point2',
          },
          {
            textKey:
              'policy.content.policySection5Content.policiesSection5Point3',
          },
        ],
      },
    ],
  },
};
