// src/content/footer/footer.content.ts
import { FOOTER_LINKS } from '../../constants/navigation';
import { FooterContentSchema } from '../schemas';
import type { FooterContent } from './types';

const rawFooter: FooterContent = {
  sloganKey: 'footer.slogan',
  closingMessageKey: 'footer.closingMessage',
  copyrightKey: 'footer.copyright',
  creditsKey: 'footer.credits',
  importantLinksTitle: 'footer.importantLinksTitle',
  navLinks: FOOTER_LINKS,
  policiesLinkText: 'footer.policiesLinkText',
};

export const footerContent = FooterContentSchema.parse(rawFooter);
