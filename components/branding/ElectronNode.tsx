'use client';

import { motion } from 'motion/react';

interface ElectronNodeProps {
  pathId: string;
  duration: number;
  delay?: number;
  radius?: number;
  color?: string;
}

export default function ElectronNode({
  pathId,
  duration,
  delay = 0,
  radius = 2.2,
  color = '#FFB100',
}: ElectronNodeProps) {
  return (
    <motion.circle
      r={radius}
      fill={color}
      filter="url(#nexoraElectronGlow)"
      initial={{ offsetDistance: '0%' }}
      animate={{ offsetDistance: '100%' }}
      transition={{ repeat: Infinity, duration, delay, ease: 'linear' }}
      style={{
        offsetPath: `path("${pathId}")`,
        offsetRotate: '0deg',
      }}
    />
  );
}
