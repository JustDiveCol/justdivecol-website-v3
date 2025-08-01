// src/components/layout/MainLayout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // 1. Importa el Footer

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='bg-brand-primary-dark'>
      <Navbar />
      <main className='min-h-screen'>
        {' '}
        {/* Añadimos min-h-screen para que el footer no se suba si hay poco contenido */}
        {children}
      </main>
      <Footer /> {/* 2. Añade el Footer al final */}
    </div>
  );
};
