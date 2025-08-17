// src/components/motion/MotionBlock.tsx
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useMotionPresets } from '../../hooks/animations';

type AnimKind = 'eager' | 'inView' | 'none';

type Props = {
  kind?: AnimKind;

  variants?: HTMLMotionProps<'div'>['variants'];
} & Omit<
  HTMLMotionProps<'div'>,
  'initial' | 'animate' | 'whileInView' | 'viewport'
>;

export function MotionBlock({ kind = 'inView', variants, ...rest }: Props) {
  const { viewport } = useMotionPresets();

  if (kind === 'none') {
    return <motion.div {...rest} />;
  }

  if (kind === 'eager') {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        {...rest}
      />
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      {...rest}
    />
  );
}
