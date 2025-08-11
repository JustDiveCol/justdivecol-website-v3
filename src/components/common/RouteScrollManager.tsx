// src/components/common/RouteScrollManager.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { RouteScrollManagerProps } from './types';

export const RouteScrollManager: React.FC<RouteScrollManagerProps> = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id: string = hash.replace('#', '');
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};
