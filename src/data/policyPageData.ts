import { ROUTES } from '../constants/routes';

export const policyPageData = {
  seo: {
    titleKey: 'policy.policySeoTitle',
    descriptionKey: 'policy.policySeoDesc',
    keywordsKey: 'policy.policySeoKeywords',
    urlPath: ROUTES.policy,
  },
  header: {
    titleKey: 'policy.policyHeaderTitle',
    subtitleKey: 'policy.policyHeaderSubtitle',
    imageData: {
      backgroundImage: '/images/legal/header-background.webp',
    },
  },
  content: {
    sections: [
      {
        id: 'reservas-pagos',
        titleKey: 'policy.policySection1Title',
        points: [
          { textKey: 'policy.policySection1Content.policiesSection1Point1' },
          { textKey: 'policy.policySection1Content.policiesSection1Point2' },
          { textKey: 'policy.policySection1Content.policiesSection1Point3' },
        ],
      },
      {
        id: 'cancelaciones-reembolsos',
        titleKey: 'policy.policySection2Title',
        points: [
          {
            titleKey: 'policy.policySection2Content.policiesSection2Point1',
            subpoints: [
              'policy.policySection2Content.policiesSection2Point1Content.policiesSection2Point1a',
              'policy.policySection2Content.policiesSection2Point1Content.policiesSection2Point1b',
              'policy.policySection2Content.policiesSection2Point1Content.policiesSection2Point1c',
              'policy.policySection2Content.policiesSection2Point1Content.policiesSection2Point1d',
            ],
          },
          {
            titleKey: 'policy.policySection2Content.policiesSection2Point2',
            subpoints: [
              'policy.policySection2Content.policiesSection2Point2Content.policiesSection2Point2a',
              'policy.policySection2Content.policiesSection2Point2Content.policiesSection2Point2b',
            ],
          },
          {
            titleKey: 'policy.policySection2Content.policiesSection2Point3',
            subpoints: [
              'policy.policySection2Content.policiesSection2Point3Content.policiesSection2Point3a',
            ],
          },
        ],
      },
      {
        id: 'normativas-seguridad',
        titleKey: 'policy.policySection3Title',
        points: [
          { textKey: 'policy.policySection3Content.policiesSection3Point1' },
          { textKey: 'policy.policySection3Content.policiesSection3Point2' },
          { textKey: 'policy.policySection3Content.policiesSection3Point3' },
          { textKey: 'policy.policySection3Content.policiesSection3Point4' },
          { textKey: 'policy.policySection3Content.policiesSection3Point5' },
        ],
      },
      {
        id: 'alquiler-equipos',
        titleKey: 'policy.policySection4Title',
        points: [
          { textKey: 'policy.policySection4Content.policiesSection4Point1' },
          { textKey: 'policy.policySection4Content.policiesSection4Point2' },
          { textKey: 'policy.policySection4Content.policiesSection4Point3' },
          { textKey: 'policy.policySection4Content.policiesSection4Point4' },
        ],
      },
      {
        id: 'responsabilidad-riesgos',
        titleKey: 'policy.policySection5Title',
        points: [
          { textKey: 'policy.policySection5Content.policiesSection5Point1' },
          { textKey: 'policy.policySection5Content.policiesSection5Point2' },
          { textKey: 'policy.policySection5Content.policiesSection5Point3' },
        ],
      },
    ],
  },
};
