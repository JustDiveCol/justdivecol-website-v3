interface FaqItem {
  id: string;
  questionKey: string;
  answerKey: string;
}
interface FaqCategory {
  id: string;
  sectionTitleKey: string;
  faqs: FaqItem[];
}

export const faqData = {
  // ESTA LISTA CONTROLA QUÉ SALE EN LA PÁGINA DE CONTACTO
  topFaqIds: [
    'certifications-01',
    'trips-and-experiences-01',
    'booking-and-payment-01',
  ],

  // ESTA LISTA CONTIENE TODAS LAS PREGUNTAS PARA LA PÁGINA COMPLETA DE FAQS
  categories: [
    {
      id: 'certifications',
      sectionTitleKey: 'faqs.certificationsFaqsTitle',
      faqs: [
        {
          id: 'certifications-01',
          questionKey: 'faqs.certificationsQ1',
          answerKey: 'faqs.certificationsA1',
        },
        {
          id: 'certifications-02',
          questionKey: 'faqs.certificationsQ2',
          answerKey: 'faqs.certificationsA2',
        },
        {
          id: 'certifications-03',
          questionKey: 'faqs.certificationsQ3',
          answerKey: 'faqs.certificationsA3',
        },
        {
          id: 'certifications-04',
          questionKey: 'faqs.certificationsQ4',
          answerKey: 'faqs.certificationsA4',
        },
        {
          id: 'certifications-05',
          questionKey: 'faqs.certificationsQ5',
          answerKey: 'faqs.certificationsA5',
        },
        {
          id: 'certifications-06',
          questionKey: 'faqs.certificationsQ6',
          answerKey: 'faqs.certificationsA6',
        },
        {
          id: 'certifications-07',
          questionKey: 'faqs.certificationsQ7',
          answerKey: 'faqs.certificationsA7',
        },
      ],
    },
    {
      id: 'trips-and-experiences',
      sectionTitleKey: 'faqs.tripsAndExpiriencesFaqsTitle',
      faqs: [
        {
          id: 'trips-and-experiences-01',
          questionKey: 'faqs.tripsAndExperiencesQ1',
          answerKey: 'faqs.tripsAndExperiencesA1',
        },
        {
          id: 'trips-and-experiences-02',
          questionKey: 'faqs.tripsAndExperiencesQ2',
          answerKey: 'faqs.tripsAndExperiencesA2',
        },
        {
          id: 'trips-and-experiences-03',
          questionKey: 'faqs.tripsAndExperiencesQ3',
          answerKey: 'faqs.tripsAndExperiencesA3',
        },
        {
          id: 'trips-and-experiences-04',
          questionKey: 'faqs.tripsAndExperiencesQ4',
          answerKey: 'faqs.tripsAndExperiencesA4',
        },
        {
          id: 'trips-and-experiences-05',
          questionKey: 'faqs.tripsAndExperiencesQ5',
          answerKey: 'faqs.tripsAndExperiencesA5',
        },
      ],
    },
    {
      id: 'booking-and-payment',
      sectionTitleKey: 'faqs.bookingAndPaymentFaqsTitle',
      faqs: [
        {
          id: 'booking-and-payment-01',
          questionKey: 'faqs.bookingAndPaymentQ1',
          answerKey: 'faqs.bookingAndPaymentA1',
        },
        {
          id: 'booking-and-payment-02',
          questionKey: 'faqs.bookingAndPaymentQ2',
          answerKey: 'faqs.bookingAndPaymentA2',
        },
        {
          id: 'booking-and-payment-03',
          questionKey: 'faqs.bookingAndPaymentQ3',
          answerKey: 'faqs.bookingAndPaymentA3',
        },
      ],
    },
    {
      id: 'safety-and-health',
      sectionTitleKey: 'faqs.safetyAndHealthFaqsTitle',
      faqs: [
        {
          id: 'safety-and-health-01',
          questionKey: 'faqs.safetyAndHealthQ1',
          answerKey: 'faqs.safetyAndHealthA1',
        },
        {
          id: 'safety-and-health-02',
          questionKey: 'faqs.safetyAndHealthQ2',
          answerKey: 'faqs.safetyAndHealthA2',
        },
        {
          id: 'safety-and-health-03',
          questionKey: 'faqs.safetyAndHealthQ3',
          answerKey: 'faqs.safetyAndHealthA3',
        },
        {
          id: 'safety-and-health-04',
          questionKey: 'faqs.safetyAndHealthQ4',
          answerKey: 'faqs.safetyAndHealthA4',
        },
      ],
    },
    {
      id: 'general-information',
      sectionTitleKey: 'faqs.generalInformationFaqsTitle',
      faqs: [
        {
          id: 'general-information-01',
          questionKey: 'faqs.generalInformationQ1',
          answerKey: 'faqs.generalInformationA1',
        },
        {
          id: 'general-information-02',
          questionKey: 'faqs.generalInformationQ2',
          answerKey: 'faqs.generalInformationA2',
        },
        {
          id: 'general-information-03',
          questionKey: 'faqs.generalInformationQ3',
          answerKey: 'faqs.generalInformationA3',
        },
        {
          id: 'general-information-04',
          questionKey: 'faqs.generalInformationQ4',
          answerKey: 'faqs.generalInformationA4',
        },
        {
          id: 'general-information-05',
          questionKey: 'faqs.generalInformationQ5',
          answerKey: 'faqs.generalInformationA5',
        },
        {
          id: 'general-information-06',
          questionKey: 'faqs.generalInformationQ6',
          answerKey: 'faqs.generalInformationA6',
        },
        {
          id: 'general-information-07',
          questionKey: 'faqs.generalInformationQ7',
          answerKey: 'faqs.generalInformationA7',
        },
      ],
    },
    // ... más categorías
  ] as FaqCategory[],
};
