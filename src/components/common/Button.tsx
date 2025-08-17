// src/components/common/Button.tsx
import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import { contactContent } from '../../content/pages/contact/contact.content';
import type { ButtonProps } from './types';
import { useLocalizedRoutes } from '../../hooks/useLocalizedRoutes'; // CAMBIO: Importar el hook

const buttonVariants = cva(
  'drop-shadow-strong inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wider transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cta-yellow',
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
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  function Button(
    { action, children, className, variant, size, ...props },
    ref
  ) {
    const { t } = useTranslation('common');
    const { contactInfo } = contactContent;
    const { to: localizedTo } = useLocalizedRoutes();

    const finalLink = React.useMemo(() => {
      if (action.type === 'whatsapp') {
        let text = '';

        if (action.pretranslatedMessage) {
          text = action.pretranslatedMessage;
        } else if (action.whatsAppMessageKey) {
          text = t(action.whatsAppMessageKey, { ...action.interpolation });
        }

        const phone = contactInfo.phone.replace(/\s/g, '');
        return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      }
      if (action.type === 'external') {
        return action.path || '#';
      }

      if (action.type === 'internal') {
        return localizedTo(action.path || '/');
      }
      return '/';
    }, [t, contactInfo.phone, action, localizedTo]);

    const classes = twMerge(buttonVariants({ variant, size, className }));

    if (action.type === 'internal') {
      const linkProps = props as Omit<LinkProps, 'to'>;
      return (
        <Link
          to={finalLink}
          className={classes}
          ref={ref}
          {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={finalLink}
        className={classes}
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
);
