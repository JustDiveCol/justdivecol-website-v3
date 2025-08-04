// src/data/footerData.ts
import { ROUTES } from '../constants/routes';

export const footerData = {
  sloganKey: 'footer.footerSlogan',
  closingMessageKey: 'footer.footerClosingMessage',
  copyrightKey: 'footer.footerCopyright',
  creditsKey: 'footer.footerCredits',
  importantLinksTitle: 'footer.footerLinksTitle',
  navLinks: [
    { nameKey: 'policy', path: ROUTES.policy },
    { nameKey: 'terms', path: ROUTES.terms },
    { nameKey: 'privacy', path: ROUTES.privacy },
    { nameKey: 'faqs', path: ROUTES.faq },
    { nameKey: 'diveSites', path: ROUTES.divesites },
  ],
  policiesLinkText: 'footer.footerLinkText',
};
