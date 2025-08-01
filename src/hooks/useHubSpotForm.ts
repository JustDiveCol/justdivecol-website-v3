import { useEffect } from 'react';

// Hacemos que la 'window' de TypeScript conozca la propiedad 'hbspt'
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

interface HubSpotFormOptions {
  portalId: string;
  formId: string;
  target: string; // Un selector CSS, ej. '#my-form'
}

export const useHubSpotForm = ({
  portalId,
  formId,
  target,
}: HubSpotFormOptions) => {
  useEffect(() => {
    const createForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId,
          formId,
          target,
        });
      }
    };

    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      script.onload = () => {
        createForm();
      };

      document.body.appendChild(script);

      return () => {
        // Opcional: limpiar el script al desmontar el componente
        document.body.removeChild(script);
      };
    } else {
      createForm();
    }
  }, [portalId, formId, target]); // El efecto se re-ejecuta si cambian los IDs del formulario
};
