// src/components/layout/types.ts
import type { ReactNode } from 'react';
import { z } from 'zod';

// ––– MainLayout –––
export const MainLayoutPropsSchema = z.object({
  children: z.custom<ReactNode>(() => true),
});
export type MainLayoutProps = z.infer<typeof MainLayoutPropsSchema>;

// ––– Footer –––
export const FooterPropsSchema = z.object({});
export type FooterProps = z.infer<typeof FooterPropsSchema>;

// ––– Navbar –––
export const NavbarPropsSchema = z.object({});
export type NavbarProps = z.infer<typeof NavbarPropsSchema>;
