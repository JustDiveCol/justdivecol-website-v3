// src/content/footer/footer.content.ts
import { FOOTER_LINKS } from '../../constants/navigation.schema';

import { FooterContentSchema, type FooterContent } from './types';

const rawFooter: FooterContent = {
  sloganKey: 'footer.slogan',
  closingMessageKey: 'footer.closingMessage',
  copyrightKey: 'footer.copyright',
  creditsKey: 'footer.credits',
  importantLinksTitle: 'footer.linksTitle',
  navLinks: FOOTER_LINKS,
  policiesLinkText: 'footer.policiesLinkText',
};

export const footerContent = FooterContentSchema.parse(rawFooter);
