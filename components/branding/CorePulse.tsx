'use client';

import { motion } from 'motion/react';

export default function CorePulse() {
  return (
    <g>
      <motion.circle
        cx="100"
        cy="100"
        r="19"
        stroke="#00F0FF"
        strokeWidth="1"
        opacity="0.4"
        animate={{ scale: [0.86, 1.34, 0.86], opacity: [0.5, 0.08, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.7, ease: 'easeInOut' }}
        style={{ transformOrigin: '100px 100px' }}
      />
      <circle cx="100" cy="100" r="17" fill="url(#nexoraCoreRadial)" filter="url(#nexoraCoreGlow)" />
      <motion.circle
        cx="100"
        cy="100"
        r="9.5"
        fill="#00F0FF"
        animate={{ scale: [1, 1.12, 1], opacity: [0.92, 1, 0.92] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        style={{ transformOrigin: '100px 100px' }}
      />
      <circle cx="100" cy="100" r="4.4" fill="#FFFFFF" />
    </g>
  );
}
