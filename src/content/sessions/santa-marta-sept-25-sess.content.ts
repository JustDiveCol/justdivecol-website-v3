// src/content/sessions/santa-marta-sept-25-sess.content.ts
import { ROUTES } from '../../constants/routes';
import { ExperienceSessionContentSchema } from '../schemas';
import type { ExperienceSessionContent } from './types';

const rawSantaMartaSept25Sess: ExperienceSessionContent = {
  seo: {
    titleKey: 'experiences.santaMartaExp.seo.title',
    descriptionKey: 'experiences.santaMartaExp.seo.desc',
    keywordsKey: 'experiences.santaMartaExp.seo.keywords',
    urlPath: ROUTES.diveExperiences,
    imageUrl: '/images/social/experiences-social-card.webp',
    translationNS: 'experiences',
  },

  header: {
    titleKey: 'experiences.santaMartaExp.header.title',
    subtitleKey: 'experiences.santaMartaExp.header.subtitle',
    translationNS: 'experiences',
    imageData: {
      backgroundImage: '/images/experiences/santa-marta/header.webp',
      photoCredit: 'PADI®',
      variant: 'header',
    },
  },

  paymentPlan: {
    titleKey: 'experiencesPaymentTitle',
    modules: [
      {
        id: 'payment1',
        nameKey: 'sessionSmFunDivePayment1Name',
        descriptionKey: 'sessionSmFunDivePayment1Desc',
      },
    ],
    notes: ['experiencesDefaultPaymentNote'],
  },
};

export const santaMartaSept25SessContent = ExperienceSessionContentSchema.parse(
  rawSantaMartaSept25Sess
);
