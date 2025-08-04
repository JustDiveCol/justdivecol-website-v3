import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Gestiona la posición del scroll en los cambios de ruta.
 */
export const RouteScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si la nueva ruta tiene un hash (ej. /pagina#seccion)
    if (hash) {
      // Un pequeño timeout da tiempo a que la página se renderice
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Si no hay hash, simplemente vamos al principio de la página
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Se activa cada vez que la URL cambia

  // Es un componente de solo lógica, no renderiza nada
  return null;
};
