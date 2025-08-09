// src/hooks/animations.ts
import { useMemo, useCallback } from 'react';
import {
  useReducedMotion,
  type Variants,
  type Transition,
} from 'framer-motion';

export type SlideDir = 'left' | 'right' | 'up' | 'down';

export function useMotionPresets() {
  const reduce = useReducedMotion();

  const baseTransition: Transition = useMemo(
    () =>
      reduce ? { duration: 0 } : { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    [reduce]
  );

  // Contenedor con stagger de hijos
  const container: Variants = useMemo(
    () => ({
      hidden: { opacity: reduce ? 1 : 0 },
      visible: {
        opacity: 1,
        transition: {
          ...baseTransition,
          staggerChildren: reduce ? 0 : 0.2,
        },
      },
    }),
    [baseTransition, reduce]
  );

  // Tarjeta simple (fade + slide up)
  const card: Variants = useMemo(
    () => ({
      hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: baseTransition },
    }),
    [baseTransition, reduce]
  );

  // Factory: slide en cualquier dirección
  const slideIn = useCallback(
    (dir: SlideDir, distance = 50): Variants => {
      if (reduce)
        return {
          hidden: { opacity: 1, x: 0, y: 0 },
          visible: { opacity: 1, x: 0, y: 0 },
        };

      const from =
        dir === 'left'
          ? { x: -distance }
          : dir === 'right'
          ? { x: distance }
          : dir === 'up'
          ? { y: -distance }
          : { y: distance }; // down

      return {
        hidden: { opacity: 0, ...from },
        visible: { opacity: 1, x: 0, y: 0, transition: baseTransition },
      };
    },
    [baseTransition, reduce]
  );

  // Factory: solo fade
  const fadeIn = useCallback((): Variants => {
    if (reduce) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: baseTransition },
    };
  }, [baseTransition, reduce]);

  return {
    baseTransition,
    container,
    card,
    slideIn,
    fadeIn,
  };
}
