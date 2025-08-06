// src/components/common/AccordionItem.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '../ui/Icons';
import type { AccordionItemProps } from './types';

export const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-white/10'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between gap-4 py-4 text-left'>
        <span className='text-lg font-bold text-brand-white'>{question}</span>
        <ChevronDownIcon
          className={`h-6 w-6 flex-shrink-0 text-brand-cta-orange transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='overflow-hidden'>
            <p className='pb-4 pr-8 font-serif text-brand-neutral/80 whitespace-pre-line'>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
