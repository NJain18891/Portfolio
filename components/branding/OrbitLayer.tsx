'use client';

import { motion } from 'motion/react';

interface OrbitLayerProps {
  rx: number;
  ry: number;
  rotation: number;
  duration: number;
  opacity: number;
  color?: 'warm' | 'cool' | 'pink';
  electronDelay?: number;
  reverse?: boolean;
  active?: boolean;
}

export default function OrbitLayer({
  rx,
  ry,
  rotation,
  duration,
  opacity,
  color = 'warm',
  electronDelay = 0,
  reverse = false,
  active = false,
}: OrbitLayerProps) {
  const orbitDuration = active ? duration * 0.42 : duration;
  const electronDuration = active ? duration * 0.28 : duration * 0.72;
  const gradient = {
    warm: 'url(#nexoraOrbitWarm)',
    cool: 'url(#nexoraOrbitCool)',
    pink: 'url(#nexoraOrbitPink)',
  }[color];
  const electronColor = {
    warm: '#FFB100',
    cool: '#00F0FF',
    pink: '#FF2EFF',
  }[color];

  return (
    <motion.g
      style={{ transformOrigin: '120px 120px' }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration: orbitDuration, ease: 'linear' }}
    >
      <g transform={`rotate(${rotation} 120 120)`}>
        <ellipse
          cx="120"
          cy="120"
          rx={rx}
          ry={ry}
          stroke={gradient}
          strokeWidth="5.4"
          opacity={opacity}
          fill="none"
          strokeLinecap="round"
          filter="url(#nexoraHotGlow)"
        />
        <ellipse
          cx="120"
          cy="120"
          rx={rx}
          ry={ry}
          stroke={gradient}
          strokeWidth="1.3"
          opacity={Math.min(opacity + 0.18, 1)}
          fill="none"
        />
        <motion.g
          style={{ transformOrigin: '120px 120px' }}
          animate={{ rotate: reverse ? -360 : 360 }}
          transition={{ repeat: Infinity, duration: electronDuration, delay: electronDelay, ease: 'linear' }}
        >
          <circle cx={120 + rx} cy="120" r="5.7" fill="#fff" opacity="0.92" />
          <circle cx={120 + rx} cy="120" r="9.2" stroke={electronColor} strokeWidth="4.4" fill={electronColor} filter="url(#nexoraElectronGlow)" />
        </motion.g>
      </g>
    </motion.g>
  );
}
