'use client';

import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  variants?: any;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  style?: CSSProperties;
}

export const MotionDiv = ({
                            children,
                            className,
                            variants,
                            initial = 'hidden',
                            animate = 'show',
                            transition,
                            whileHover,
                            style,
                          }: MotionDivProps) => {
  return (
      <motion.div
          className={className}
          variants={variants}
          initial={initial}
          animate={animate}
          transition={transition}
          whileHover={whileHover}
          style={style}
      >
        {children}
      </motion.div>
  );
};
