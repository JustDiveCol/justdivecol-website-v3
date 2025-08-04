import type { ContactData } from '../types/data';

// src/data/contactData.ts
export const contactData: ContactData = {
  contactInfo: {
    titleKey: 'contactInfo.contactInfoTitle',
    email: 'info@justdivecol.com',
    emailSubjectKey: 'contactInfo.contactEmailSubject',
    emailBodyKey: 'contactInfo.contactEmailBody',
    phone: '+57 311 522 0316',
    translationNS: 'contact',
    hubspotFormTitleKey: 'contactInfo.formTitle',
    socials: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/justdivecol/',
        icon: 'instagram',
      },
      {
        name: 'TikTok',
        link: 'https://www.tiktok.com/@just.dive.col',
        icon: 'tiktok',
      },
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/@JustDiveCol',
        icon: 'youtube',
      },
    ],
  },
};
