'use client';

import { motion } from 'motion/react';

export default function Scanline() {
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute left-2 right-2 top-0 h-px opacity-0 group-hover:opacity-100"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(0,240,255,.9), rgba(255,46,255,.75), transparent)',
        boxShadow: '0 0 16px rgba(0,240,255,.45)',
      }}
      animate={{ y: [8, 68, 8] }}
      transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
    />
  );
}
