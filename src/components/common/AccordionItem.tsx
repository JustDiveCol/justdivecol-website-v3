// src/components/common/AccordionItem.tsx
import { useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ChevronDownIcon } from '../ui';
import { useMotionPresets } from '../../hooks/animations';
import type { AccordionItemProps } from './types';

export const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { baseTransition } = useMotionPresets();

  const btnId = useId();
  const panelId = `${btnId}-panel`;

  return (
    <div className='border-b border-white/10'>
      <button
        type='button'
        id={btnId}
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className='flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-orange/60 rounded-md'>
        <span className='text-base-sm font-bold text-brand-white'>
          {question}
        </span>
        <ChevronDownIcon
          aria-hidden='true'
          className={`h-6 w-6 flex-shrink-0 text-brand-cta-orange transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            id={panelId}
            role='region'
            aria-labelledby={btnId}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto', transition: baseTransition },
              collapsed: { opacity: 0, height: 0, transition: baseTransition },
            }}
            className='overflow-hidden'>
            <p className='pb-4 pr-8 text-base-xs text-justify text-brand-neutral/80 whitespace-pre-line'>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
