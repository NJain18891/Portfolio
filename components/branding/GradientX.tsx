'use client';

import { motion } from 'motion/react';

interface GradientXProps {
  className?: string;
}

export default function GradientX({ className = '' }: GradientXProps) {
  return (
    <motion.span
      className={`inline-block bg-gradient-to-br from-[#00F0FF] via-[#8A5CFF] to-[#FF2EFF] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(0,240,255,0.45)] ${className}`}
      animate={{ opacity: [0.86, 1, 0.86], scale: [1, 1.045, 1] }}
      transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
    >
      X
    </motion.span>
  );
}
