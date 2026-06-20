'use client';

import type { ReactNode } from 'react';
import Scanline from './Scanline';

interface ViewfinderFrameProps {
  children: ReactNode;
  size?: number;
}

export default function ViewfinderFrame({ children, size = 84 }: ViewfinderFrameProps) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[18%] border border-[#00F0FF]/35 bg-black shadow-[0_0_32px_rgba(0,240,255,0.14)] transition-all duration-300 group-hover:border-[#00F0FF]/70 group-hover:shadow-[0_0_46px_rgba(0,240,255,0.28)]"
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-[3px] rounded-[17%] border border-[#00F0FF]/45 shadow-[inset_0_0_16px_rgba(0,240,255,.22)]" />
      <span className="absolute left-[14%] top-[14%] h-[13%] w-[13%] border-l-2 border-t-2 border-[#00F0FF]" />
      <span className="absolute right-[14%] top-[14%] h-[13%] w-[13%] border-r-2 border-t-2 border-[#00F0FF]" />
      <span className="absolute bottom-[14%] left-[14%] h-[13%] w-[13%] border-b-2 border-l-2 border-[#00F0FF]" />
      <span className="absolute bottom-[14%] right-[14%] h-[13%] w-[13%] border-b-2 border-r-2 border-[#00F0FF]" />
      {children}
      <Scanline />
    </div>
  );
}
