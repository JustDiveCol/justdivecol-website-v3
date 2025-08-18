import { z } from 'zod';
import type { ComponentType, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

export const IconComponentSchema = z.custom<ComponentType<IconProps>>(
  (val) => typeof val === 'function',
  { message: 'Se esperaba un componente de ícono (function/component).' }
);

export type IconComponent = z.infer<typeof IconComponentSchema>;

export * from './navigation';
export * from './ui';
export * from './business';
export * from './social';
export * from './diving';
export * from './misc';
