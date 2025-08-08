// src/content/footer/types.ts
import type { FooterLink } from '../../constants/navigation';

export type FooterContent = {
  sloganKey: string;
  closingMessageKey: string;
  copyrightKey: string;
  creditsKey: string;
  importantLinksTitle: string;
  navLinks: readonly FooterLink[];
  policiesLinkText: string;
};
