// src/components/layout/MainLayout.tsx
import Navbar from './Navbar';
import Footer from './Footer';
import type { MainLayoutProps } from './types';
import FloatingActionsComponent from './FloatingActionsComponent';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-dvh flex flex-col bg-brand-primary-dark">
      <Navbar />
      <main
        id="main"
        role="main"
        tabIndex={-1}
        style={{ paddingTop: 'calc(var(--nav-h) + var(--safe-top))' }}
        className="flex-1"
      >
        {children}
      </main>
      <Footer />
      <FloatingActionsComponent />
    </div>
  );
};
