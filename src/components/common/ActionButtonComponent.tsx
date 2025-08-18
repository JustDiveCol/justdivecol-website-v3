// src/components/common/Button/ActionButtonComponent.tsx
import { useState } from 'react';
import { motion } from 'framer-motion'; // ← 1) usar framer-motion
import type { ActionButtonComponentProps } from './types';

const ActionButtonComponent = ({
  text,
  icon,
  onClick,
  isLink = false,
  href = '#',
}: ActionButtonComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onClick?.();
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex justify-end"
    >
      {isLink ? (
        <a
          onClick={handleClick}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-cta-orange text-white p-3 rounded-l-full shadow-lg flex items-center cursor-pointer"
          aria-label={text}
        >
          <div className="flex-shrink-0">{icon}</div>
          <motion.div
            style={{ overflow: 'hidden' }}
            animate={{
              width: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0,
              marginLeft: isHovered ? '0.75rem' : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <span className="font-bold text-sm whitespace-nowrap">{text}</span>
          </motion.div>
        </a>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="bg-brand-cta-orange text-white p-3 rounded-l-full shadow-lg flex items-center cursor-pointer"
          aria-label={text}
        >
          <div className="flex-shrink-0">{icon}</div>
          <motion.div
            style={{ overflow: 'hidden' }}
            animate={{
              width: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0,
              marginLeft: isHovered ? '0.75rem' : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <span className="font-bold text-sm whitespace-nowrap">{text}</span>
          </motion.div>
        </button>
      )}
    </motion.div>
  );
};

export default ActionButtonComponent;
