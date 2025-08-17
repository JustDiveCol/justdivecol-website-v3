// src/hooks/animations.ts
import { useMemo, useCallback } from 'react';
import {
  useReducedMotion,
  type Variants,
  type Transition,
} from 'framer-motion';

export type SlideDir = 'left' | 'right' | 'up' | 'down';

type BaseOpts = {
  delay?: number;
};

type SlideOpts = BaseOpts & {
  distance?: number;
};

type SpringOpts = {
  type?: 'tween' | 'spring';
  stiffness?: number;
  damping?: number;
  mass?: number;
};

export function useMotionPresets() {
  const reduce = useReducedMotion();

  // Transición base
  const baseTransition: Transition = useMemo(() => {
    if (reduce) return { duration: 0 };
    // Material-esque curve: [0.4, 0, 0.2, 1]
    return { duration: 0.6, ease: [0.4, 0, 0.2, 1] };
  }, [reduce]);

  // Pequeño helper para combinar transición con delay y spring si se pide
  const withTx = useCallback(
    (delay = 0, spring?: SpringOpts): Transition => {
      if (reduce) return { duration: 0 };
      if (spring?.type === 'spring') {
        return {
          type: 'spring',
          stiffness: spring.stiffness ?? 140,
          damping: spring.damping ?? 18,
          mass: spring.mass ?? 0.8,
          delay,
        };
      }
      return { ...baseTransition, delay };
    },
    [baseTransition, reduce]
  );

  // Contenedor con stagger de hijos
  const container = useMemo<Variants>(() => {
    if (reduce) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
        exit: { opacity: 1 },
      };
    }
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          ...baseTransition,
          staggerChildren: 0.12,
          delayChildren: 0,
        },
      },
      exit: { opacity: 0, transition: { duration: 0.2 } },
    };
  }, [baseTransition, reduce]);

  // Tarjeta simple (fade + slide up)
  const card = useMemo<Variants>(() => {
    if (reduce) {
      return {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 1, y: 0 },
      };
    }
    return {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: withTx() },
      exit: { opacity: 0, y: 16, transition: { duration: 0.2 } },
    };
  }, [withTx, reduce]);

  // Factory: slide en cualquier dirección
  const slideIn = useCallback(
    (
      dir: SlideDir,
      { distance = 50, delay = 0 }: SlideOpts = {},
      spring?: SpringOpts
    ): Variants => {
      if (reduce) {
        return {
          hidden: { opacity: 1, x: 0, y: 0 },
          visible: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 1, x: 0, y: 0 },
        };
      }

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
        visible: { opacity: 1, x: 0, y: 0, transition: withTx(delay, spring) },
        exit: { opacity: 0, ...from, transition: { duration: 0.2 } },
      };
    },
    [withTx, reduce]
  );

  // Factory: solo fade
  const fadeIn = useCallback(
    ({ delay = 0 }: BaseOpts = {}, spring?: SpringOpts): Variants => {
      if (reduce) {
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 1 },
          exit: { opacity: 1 },
        };
      }
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: withTx(delay, spring) },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      };
    },
    [withTx, reduce]
  );

  // Extra: scaleIn
  const scaleIn = useCallback(
    ({ delay = 0 }: BaseOpts = {}, spring?: SpringOpts): Variants => {
      if (reduce) {
        return {
          hidden: { opacity: 1, scale: 1 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 1, scale: 1 },
        };
      }
      return {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: withTx(delay, spring) },
        exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
      };
    },
    [withTx, reduce]
  );

  // Extra: blurIn (sutil, úsalo con moderación)
  const blurIn = useCallback(
    ({ delay = 0 }: BaseOpts = {}): Variants => {
      if (reduce) {
        return {
          hidden: { opacity: 1, filter: 'blur(0px)' },
          visible: { opacity: 1, filter: 'blur(0px)' },
          exit: { opacity: 1, filter: 'blur(0px)' },
        };
      }
      return {
        hidden: { opacity: 0, filter: 'blur(6px)' },
        visible: { opacity: 1, filter: 'blur(0px)', transition: withTx(delay) },
        exit: {
          opacity: 0,
          filter: 'blur(2px)',
          transition: { duration: 0.2 },
        },
      };
    },
    [withTx, reduce]
  );

  // Interacciones estándar
  const hover = useMemo(
    () =>
      reduce
        ? {}
        : {
            whileHover: { scale: 1.02, y: -2 },
            transition: { type: 'spring', stiffness: 220, damping: 16 },
          },
    [reduce]
  );

  const tap = useMemo(
    () =>
      reduce
        ? {}
        : {
            whileTap: { scale: 0.98 },
            transition: { type: 'spring', stiffness: 280, damping: 20 },
          },
    [reduce]
  );

  // Viewport por defecto para whileInView
  const viewport = useMemo(
    () =>
      ({
        once: true,
        amount: 0.25, // 25% visible
        margin: '0px 0px -10% 0px', // pre-disparo un poco antes
      } as const),
    []
  );

  return {
    // base
    baseTransition,
    container,
    card,

    // factories
    slideIn,
    fadeIn,
    scaleIn,
    blurIn,

    // interactions
    hover,
    tap,

    // in-view helper
    viewport,
  };
}
