// src/constants/navigation.ts
export interface NavLink {
  path: string;
  nameKey: string;
}

// Basado en las claves que me diste y el código.
export const navLinks: NavLink[] = [
  { path: '/', nameKey: 'home' },
  { path: '/dive-experiences', nameKey: 'diveExperiences' },
  { path: '/dive-sites', nameKey: 'diveSites' },
  { path: '/about-us', nameKey: 'aboutUs' },
  { path: '/principles', nameKey: 'principles' },
  { path: '/contact', nameKey: 'contact' },
];
