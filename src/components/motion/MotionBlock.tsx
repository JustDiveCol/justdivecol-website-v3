// src/components/motion/MotionBlock.tsx
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useMotionPresets } from '../../hooks/animations';

type AnimKind = 'eager' | 'inView' | 'none';

type Props = {
  kind?: AnimKind;
  // variants se los pasas desde el hook (container, card, slideIn(...), etc.)
  variants?: HTMLMotionProps<'div'>['variants'];
} & Omit<
  HTMLMotionProps<'div'>,
  'initial' | 'animate' | 'whileInView' | 'viewport'
>;

export function MotionBlock({ kind = 'inView', variants, ...rest }: Props) {
  const { viewport } = useMotionPresets();

  if (kind === 'none') {
    // Sin animación (útil para depurar o desactivar en casos puntuales)
    return <motion.div {...rest} />;
  }

  if (kind === 'eager') {
    // Arriba en la página: animar inmediatamente
    return (
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        {...rest}
      />
    );
  }

  // Por defecto: animar al entrar al viewport
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={viewport}
      variants={variants}
      {...rest}
    />
  );
}
