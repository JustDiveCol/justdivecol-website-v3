// src/components/common/Button.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { contactPageData } from '../../data/contactData'; // Mantenemos esto temporalmente para el teléfono

// 1. Definimos todas las variantes y estilos del botón con CVA
const buttonVariants = cva(
  // Clases base aplicadas a todas las variantes
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wider transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cta-yellow',
  {
    variants: {
      variant: {
        primary: 'bg-brand-cta-orange text-white shadow-lg hover:bg-opacity-90',
        secondary:
          'bg-brand-neutral text-brand-primary-dark hover:bg-opacity-90',
        outline:
          'border-2 border-brand-cta-orange bg-transparent text-brand-cta-orange hover:bg-brand-cta-orange hover:text-white',
        ghost: 'bg-transparent text-brand-neutral hover:bg-white/10',
      },
      size: {
        default: 'px-8 py-4 text-button',
        sm: 'px-4 py-2 text-xs',
        lg: 'px-10 py-5 text-lg',
      },
    },
    // Estilos por defecto
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

// 2. Definimos las props del componente usando los tipos de CVA
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  action: {
    type: 'internal' | 'external' | 'whatsapp';
    path?: string;
    whatsAppMessageKey?: string;
  };
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, children, action, variant, size, ...props }, ref) => {
    const { t } = useTranslation('common');

    const finalLink = React.useMemo(() => {
      if (!action) return '/';
      switch (action.type) {
        case 'whatsapp': {
          const prefilledText = t(
            action.whatsAppMessageKey || 'whatsapp_message'
          );
          const phoneNumber = contactPageData.contactInfo.phone.replace(
            /\s/g,
            ''
          );
          return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            prefilledText
          )}`;
        }
        case 'external':
          return action.path || '#';
        case 'internal':
        default:
          return action.path || '/';
      }
    }, [action, t]);

    const buttonClasses = twMerge(buttonVariants({ variant, size, className }));

    if (action.type === 'internal') {
      return (
        <Link
          to={finalLink}
          className={buttonClasses}
          {...props}
          ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={finalLink}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonClasses}
        {...props}
        ref={ref as React.Ref<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }
);
