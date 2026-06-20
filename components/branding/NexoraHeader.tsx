'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import NexoraLogo from './NexoraLogo';
import NexoraWordmark from './NexoraWordmark';
import ViewfinderFrame from './ViewfinderFrame';

export default function NexoraHeader() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.a
      href="#canvas-portal"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="group flex min-w-0 items-center gap-3 select-none"
      aria-label="Nexora home"
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <ViewfinderFrame size={88}>
        <NexoraLogo size={76} active={isActive} />
      </ViewfinderFrame>
      <NexoraWordmark />
    </motion.a>
  );
}
