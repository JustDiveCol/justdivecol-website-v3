// src/content/pages/contact/contact.content.ts
import { SOCIAL_SAFE } from '../../../constants';
import { toAssetUrl } from '../../../constants/assets.schema';
import { ROUTES } from '../../../constants/routes.schema';
import { toUrlPath } from '../../urlPathSchema';
import { ContactPageContentSchema, type ContactPageContent } from './types';

const rawContact: ContactPageContent = {
  seo: {
    titleKey: 'contact.seo.title',
    descriptionKey: 'contact.seo.desc',
    keywordsKey: 'contact.seo.keywords',
    urlPath: toUrlPath(ROUTES.contact),
    imageUrl: toAssetUrl('/images/contact/social-card.webp'),
    translationNS: 'contact',
  },

  header: {
    titleKey: 'contact.header.title',
    subtitleKey: 'contact.header.subtitle',
    translationNS: 'contact',
    imageData: {
      backgroundImage: toAssetUrl('/images/contact/header-background.webp'),
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
    socials: SOCIAL_SAFE,
  },
};

export const contactContent = ContactPageContentSchema.parse(rawContact);
