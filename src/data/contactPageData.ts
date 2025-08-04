// src/data/contactPageData.ts
import { ROUTES } from '../constants/routes';

export const contactPageData = {
  seo: {
    titleKey: 'contactSeoTitle',
    descriptionKey: 'contactSeoDesc',
    urlPath: ROUTES.contact,
  },
  header: {
    titleKey: 'contactHeaderTitle',
    subtitleKey: 'contactHeaderSubtitle',
    imageData: {
      backgroundImage: '/images/contact/header-background.webp',
    },
  },
  contactInfo: {
    titleKey: 'contactInfoTitle',
    email: 'info@justdivecol.com',
    phone: '+57 311 522 0316',
    socials: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/justdivecol/',
        icon: 'instagram',
      },
    ],
  },
  hubspotForm: {
    portalId: '50063006',
    formId: '5fe58871-a1b6-4462-8a3e-ebcb21936a72',
    titleKey: 'formTitle',
  },
};
