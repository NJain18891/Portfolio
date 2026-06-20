'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowDown, 
  X,
  Clock,
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';

import VideoPortfolio from '@/components/VideoPortfolio';
import EngineSpecsDrawer from '@/components/EngineSpecsDrawer';
import StudioBookingDesk from '@/components/StudioBookingDesk';
import SlidingHero from '@/components/SlidingHero';
import { PROJECTS_DATA } from '@/lib/data';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isSpecDrawerOpen, setIsSpecDrawerOpen] = useState<boolean>(false);
  const [bookingToast, setBookingToast] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setBookingToast(msg);
    setTimeout(() => setBookingToast(null), 5000);
  };

  const handleScrollToBooking = () => {
    setIsSpecDrawerOpen(false);
    document.getElementById('booking-desk')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeProject = PROJECTS_DATA[activeIndex];

  return (
    <div id="canvas-portal" className="min-h-screen bg-[#060608] text-[#F3F4F6] relative cinematic-grid font-sans selection:bg-emerald-500/25 selection:text-emerald-400">
      
      {/* 1. Minimal Header Frame */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#060608]/80 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Main Brand Interactive Node Group */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="group flex items-center gap-3 select-none cursor-pointer"
          >
            {/* Intricate Cybernetic Nexus Viewport - Emerald styles now active natively */}
            <div className="relative w-20 h-20 flex items-center justify-center bg-[#0E0E18] border border-emerald-500/30 rounded-xl p-2 shadow-[0_0_30px_rgba(5,150,105,0.03)] transition-all duration-500">
              
              {/* Viewfinder Corner Target Marks - Permanently lit */}
              <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-emerald-400/40" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-emerald-400/40" />
              <span className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-emerald-400/40" />
              <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-emerald-400/40" />

              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                className="w-full h-full"
              >
                <defs>
                  {/* Expanded Filter Bounds to prevent any edge clipping */}
                  <filter id="nexora-ultra-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  
                  {/* Brand Gradients */}
                  <linearGradient id="nexora-emerald-core" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>

                {/* LAYER 1: HIGH-PROMINENCE TACTICAL PERIMETER RING 
                  - Emerald tint is now baseline visible.
                  - Rotation effect executes strictly during active group hover.
                */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="42" 
                  stroke="currentColor" 
                  strokeWidth="2.0" 
                  strokeDasharray="24 4 2 4"
                  className="text-emerald-500/40 origin-center group-hover:animate-[spin_20s_linear_infinite]" 
                />
                
                {/* Internal Alignment Guideline */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="28" 
                  stroke="currentColor" 
                  strokeWidth="0.75" 
                  className="text-emerald-500/10" 
                />

                {/* LAYER 2: Advanced Geometrical 'N' Core Module 
                  - Dynamic directional shift and minor pivot executes on hover.
                */}
                <g className="transform origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:rotate-3">
                  
                  {/* Left Code-Stack Pillar - Swapped neutral-400 for stylized neon blue */}
                  <path 
                    d="M28 26V74M28 34H34M28 66H34" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="text-[#00E5FF]"
                  />
                  <circle cx="28" cy="26" r="2.5" className="fill-emerald-400" />
                  
                  {/* Right Timeline-Bracket Pillar - Swapped neutral-400 for stylized neon blue */}
                  <path 
                    d="M72 26V74M66 34H72M66 66H72" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="text-[#00E5FF]"
                  />
                  <circle cx="72" cy="74" r="2.5" className="fill-emerald-400" />

                  {/* The Main Focal Element - Sharp Anamorphic Ribbon */}
                  <path 
                    d="M31.5 29.5L68.5 70.5" 
                    stroke="url(#nexora-emerald-core)" 
                    strokeWidth="7" 
                    strokeLinecap="round"
                    filter="url(#nexora-ultra-glow)"
                    className="drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                  />

                  {/* Outer Aperture Technical Shutter Lines */}
                  <path 
                    d="M40 26H60L68 34" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="text-emerald-500/30"
                  />
                  <path 
                    d="M60 74H40L32 66" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="text-emerald-500/30"
                  />

                  {/* Central Focal Coordinate Intersect Dot - Changed fill-white to popping neon blue */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="2" 
                    className="fill-[#00E5FF]" 
                  />
                </g>
              </svg>

              {/* Dynamic Vertical Laser Scanning Sweep - Active only on mouseover */}
              <span className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent translate-y-[-100%] group-hover:translate-y-[25%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>

            {/* Balanced Wordmark Panel */}
            <div className="flex flex-col justify-center">
              <div className="font-mono text-lg font-black tracking-[0.4em] text-emerald-400 uppercase">
                NEXORA
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
                {/* Secondary subtitle text changed from neutral-500 to stylized neon blue "#00E5FF" */}
                <div className="font-mono text-[8.5px] tracking-[0.45em] text-[#00E5FF] uppercase whitespace-nowrap">
                  THE CENTRAL CREATIVE NEXUS
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability Indicators & Call to Action Links */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                Available for Contract
              </span>
            </div>
            
            {/* Navigation anchor text converted to neon blue base with an emerald responsive hover transition */}
            <a 
              href="#booking-desk" 
              className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] tracking-widest text-[#00E5FF] hover:text-emerald-400 border-b border-[#00E5FF]/20 hover:border-emerald-500/30 transition-all pb-0.5"
            >
              BOOK STUDIO
            </a>
          </div>
        </div>
      </header>

      {/* 2. Sliding Immersive Hero */}
      <SlidingHero onSelectProject={setActiveIndex} />

      {/* 3. The Video Editing & Finishing Portfolio Suite */}
      <VideoPortfolio />

      {/* 4. The Studio Booking Desk Component */}
      <StudioBookingDesk 
        onSuccessNotification={triggerToast} 
        userEmail="njain1845@gmail.com"
      />

      {/* 5. Minimalist Footer */}
      <footer className="border-t border-white/[0.04] py-12 text-center text-neutral-500">
        <p className="font-mono text-[9px] tracking-[0.4em] uppercase">
          © 2026 NIKHIL JAIN // ALL RIGHTS RESERVED // SECURED VIA CLOUD RUN
        </p>
      </footer>

      {/* 6. System Specs Drill-Down Side-Drawer */}
      <AnimatePresence>
        {isSpecDrawerOpen && (
          <EngineSpecsDrawer 
            project={activeProject}
            isOpen={isSpecDrawerOpen}
            onClose={() => setIsSpecDrawerOpen(false)}
            onRequestIntegration={handleScrollToBooking}
          />
        )}
      </AnimatePresence>

      {/* Floating global notification banner */}
      <AnimatePresence>
        {bookingToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-xl border border-emerald-500/20 bg-[#0B0C10]/95 backdrop-blur-md shadow-2xl max-w-sm flex items-start gap-3"
            id="global-feedback-toast"
          >
            <div className="p-2 border border-emerald-500/20 rounded bg-emerald-500/10 text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </div>
            
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-bold">
                RESERVATION RECEIVED
              </div>
              {/* Text description stylized to low-saturation neon blue tint "#E0F7FA" */}
              <p className="text-xs text-[#E0F7FA] leading-relaxed font-light">
                {bookingToast}
              </p>
            </div>

            <button 
              onClick={() => setBookingToast(null)}
              className="p-1 hover:bg-white/5 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer ml-auto"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}