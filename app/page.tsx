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

import ProjectEngine from '@/components/ProjectEngine';
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
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex items-center gap-3"
          >
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-neutral-100 uppercase">
              Nikhil Jain
            </span>
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest px-2 py-0.5 border border-white/10 rounded">
              Creative Technologist
            </span>
          </motion.div>

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
            
            <a 
              href="#booking-desk" 
              className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] tracking-widest text-[#9CA3AF] hover:text-white border-b border-[#9CA3AF]/20 hover:border-white transition-all pb-0.5"
            >
              BOOK STUDIO
            </a>
          </div>
        </div>
      </header>

      {/* 2. Sliding Immersive Hero */}
      <SlidingHero onSelectProject={setActiveIndex} />

      {/* 3. The Grand Project Engine (The Full-Screen Switcher Component) */}
      <ProjectEngine 
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onOpenSpecs={(idx) => {
          setActiveIndex(idx);
          setIsSpecDrawerOpen(true);
        }}
      />

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
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
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
