'use client';

import { motion } from 'motion/react';
import OrbitLayer from './OrbitLayer';

interface NexoraLogoProps {
  size?: number;
  className?: string;
  active?: boolean;
}

export default function NexoraLogo({ size = 84, className = '', active = false }: NexoraLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 240 240"
        className="h-full w-full overflow-visible"
        fill="none"
        role="img"
        aria-label="Nexora orbital logo"
      >
        <defs>
          <linearGradient id="nexoraOrbitWarm" x1="24" x2="216" y1="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFB100" />
            <stop offset="45%" stopColor="#FF7A18" />
            <stop offset="100%" stopColor="#FF2EFF" />
          </linearGradient>
          <linearGradient id="nexoraOrbitCool" x1="36" x2="204" y1="174" y2="66" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="52%" stopColor="#F7FBFF" />
            <stop offset="100%" stopColor="#FF365E" />
          </linearGradient>
          <linearGradient id="nexoraOrbitPink" x1="62" x2="178" y1="38" y2="202" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFB100" />
            <stop offset="52%" stopColor="#7C3BFF" />
            <stop offset="100%" stopColor="#FF2EFF" />
          </linearGradient>
          <linearGradient id="nexoraTopShard" x1="101" x2="139" y1="56" y2="112" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF2EFF" />
            <stop offset="55%" stopColor="#B42DFF" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient id="nexoraLeftShard" x1="50" x2="98" y1="166" y2="121" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00A8FF" />
            <stop offset="100%" stopColor="#26F3FF" />
          </linearGradient>
          <linearGradient id="nexoraRightShard" x1="142" x2="191" y1="121" y2="166" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF2EFF" />
            <stop offset="100%" stopColor="#A816D6" />
          </linearGradient>
          <radialGradient id="nexoraCoreRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="36%" stopColor="#FFFFFF" />
            <stop offset="37%" stopColor="#00F0FF" />
            <stop offset="72%" stopColor="#00D8F4" />
            <stop offset="100%" stopColor="#081425" />
          </radialGradient>
          <filter id="nexoraHotGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nexoraElectronGlow" x="-220%" y="-220%" width="540%" height="540%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nexoraCoreGlow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation={active ? '8' : '5'} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="120" cy="120" r="94" stroke="#7630FF" strokeWidth="2.4" strokeDasharray="12 10" opacity={active ? 0.7 : 0.48} />
        <circle cx="120" cy="120" r="73" stroke="#00F0FF" strokeWidth="1.8" strokeDasharray="9 7" opacity={active ? 0.54 : 0.34} />
        <circle cx="120" cy="120" r="48" stroke="#1E77FF" strokeWidth="1.4" strokeDasharray="12 9" opacity="0.24" />
        <path d="M120 24V99M120 141V216M24 120H99M141 120H216" stroke="#00F0FF" strokeWidth="2.1" strokeDasharray="12 11" opacity={active ? 0.58 : 0.36} />

        <OrbitLayer rx={92} ry={30} rotation={0} duration={13} opacity={0.88} color="warm" active={active} />
        <OrbitLayer rx={88} ry={27} rotation={61} duration={15.5} opacity={0.84} color="pink" reverse electronDelay={-1.8} active={active} />
        <OrbitLayer rx={86} ry={28} rotation={-61} duration={18} opacity={0.72} color="cool" electronDelay={-3.4} active={active} />

        <g filter="url(#nexoraHotGlow)">
          <path d="M120 55L138 112L120 109L102 112L120 55Z" fill="url(#nexoraTopShard)" />
          <path d="M120 55L138 112L126 101L120 109Z" fill="#782DFF" opacity="0.68" />
          <path d="M102 112L120 55L120 109Z" fill="#FF2EFF" opacity="0.82" />

          <path d="M49 174L88 119L97 133L104 152L49 174Z" fill="url(#nexoraLeftShard)" />
          <path d="M49 174L97 133L75 148Z" fill="#009BFF" opacity="0.56" />
          <path d="M88 119L104 152L97 133Z" fill="#52F8FF" opacity="0.68" />

          <path d="M191 174L136 152L143 133L152 119L191 174Z" fill="url(#nexoraRightShard)" />
          <path d="M191 174L143 133L165 148Z" fill="#A511C8" opacity="0.62" />
          <path d="M136 152L152 119L143 133Z" fill="#FF63EF" opacity="0.7" />
        </g>

        <motion.circle
          cx="120"
          cy="120"
          r="25"
          stroke="#2072FF"
          strokeWidth="4"
          fill="#071227"
          filter="url(#nexoraCoreGlow)"
          animate={{ scale: active ? [1, 1.08, 1] : [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: active ? 1.3 : 2.4, ease: 'easeInOut' }}
          style={{ transformOrigin: '120px 120px' }}
        />
        <circle cx="120" cy="120" r="17" fill="url(#nexoraCoreRadial)" filter="url(#nexoraCoreGlow)" />
        <circle cx="120" cy="120" r="8.2" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
