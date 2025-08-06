// src/components/layout/MainLayout.tsx
import Navbar from './Navbar';
import Footer from './Footer';
import type { MainLayoutProps } from './types';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='bg-brand-primary-dark'>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};
