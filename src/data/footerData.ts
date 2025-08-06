// src/data/footerData.ts
import { FOOTER_LINKS } from '../constants/navigation';
import type { FooterData } from '../types/data';

export const footerData: FooterData = {
  sloganKey: 'footer.footerSlogan',
  closingMessageKey: 'footer.footerClosingMessage',
  copyrightKey: 'footer.footerCopyright',
  creditsKey: 'footer.footerCredits',
  importantLinksTitle: 'footer.footerLinksTitle',
  navLinks: FOOTER_LINKS,
  policiesLinkText: 'footer.footerLinkText',
};
