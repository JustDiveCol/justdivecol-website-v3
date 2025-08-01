// src/data/footerData.ts
import { ROUTES } from '../constants/routes';

export const footerData = {
  sloganKey: 'footerSlogan',
  closingMessageKey: 'footerClosingMessage',
  copyrightKey: 'footerCopyright',
  creditsKey: 'footerCredits',
  importantLinksTitle: 'footerLinksTitle',
  navLinks: [
    { nameKey: 'policy', path: ROUTES.policy },
    { nameKey: 'terms', path: ROUTES.terms },
    { nameKey: 'privacy', path: ROUTES.privacy },
    { nameKey: 'faqs', path: ROUTES.faq },
    { nameKey: 'divesites', path: ROUTES.divesites },
  ],
  policiesLinkText: 'footerLinkText',
};
