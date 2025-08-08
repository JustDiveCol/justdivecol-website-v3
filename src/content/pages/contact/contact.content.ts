import { ROUTES } from '../../../constants/routes';
import { SOCIAL } from '../../constants';
import { ContactPageContentSchema } from '../../schemas';
import type { ContactPageContent } from './types';

const rawContact: ContactPageContent = {
  seo: {
    titleKey: 'contact.seo.title',
    descriptionKey: 'contact.seo.desc',
    keywordsKey: 'contact.seo.keywords',
    urlPath: ROUTES.contact,
    imageUrl: '/images/social/contact-social-card.webp',
    translationNS: 'contact',
  },

  header: {
    titleKey: 'contact.header.title',
    subtitleKey: 'contact.header.subtitle',
    translationNS: 'contact',
    imageData: {
      backgroundImage: '/images/contact/header-background.webp',
      photoCredit: 'Camilo Beltran @JustDiveCol',
      variant: 'header',
    },
  },

  contactInfo: {
    titleKey: 'contact.contactInfo.title',
    email: 'info@justdivecol.com',
    emailSubjectKey: 'contact.contactInfo.emailSubject',
    emailBodyKey: 'contact.contactInfo.emailBody',
    phone: '+57 311 522 0316',
    translationNS: 'contact',
    hubspotFormTitleKey: 'contact.contactInfo.formTitle',
    socials: SOCIAL,
  },
};

export const contactContent = ContactPageContentSchema.parse(rawContact);
