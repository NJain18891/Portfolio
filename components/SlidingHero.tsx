'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Activity, Terminal, Shield, Eye } from 'lucide-react';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/lib/data';

interface SlidingHeroProps {
  onSelectProject: (idx: number) => void;
}

export default function SlidingHero({ onSelectProject }: SlidingHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const duration = 6000; // 6 seconds per slide

  // Reset progress and handle slide switching dynamically during animation frames
  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    const updateProgress = (time: number) => {
      const elapsed = time - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setCurrentSlide((curr) => (curr + 1) % PROJECTS_DATA.length);
      } else {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const handleCtaClick = (idx: number) => {
    onSelectProject(idx);
    document.getElementById('project-engine')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Icon selector based on project active index
  const getProjectIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Activity className="w-5 h-5 text-emerald-400" />;
      case 1: return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 2: return <Shield className="w-5 h-5 text-emerald-400" />;
      default: return <Eye className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section 
      id="sliding-hero"
      className="relative w-full h-[calc(85vh-80px)] sm:h-[calc(90vh-80px)] md:h-[calc(100vh-80px)] mt-22 bg-[#060608] overflow-hidden border-b border-white/[0.04]"
    >
      {/* Immersive Background Slider only */}
      <div id="hero-background-wrapper" className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={PROJECTS_DATA[currentSlide].imagePath}
              alt="Visual Portfolio Spotlight Screenshot"
              fill
              priority
              className="object-contain object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-10 opacity-20" />

      {/* Subtle bottom gradient to ensure navigation is crisp & clear */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060608]/90 to-transparent pointer-events-none z-10" />

      {/* Side Arrow Navigation */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-6 lg:px-10 z-20 pointer-events-none">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-emerald-300 hover:bg-black/85 border border-white/[0.06] hover:border-emerald-500/30 text-black hover:text-emerald-400 transition-all duration-300 outline-none cursor-pointer pointer-events-auto shadow-lg backdrop-blur-sm"
          aria-label="Previous Project Screenshot"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-emerald-300 hover:bg-black/85 border border-white/[0.06] hover:border-emerald-500/30 text-black hover:text-emerald-400 transition-all duration-300 outline-none cursor-pointer pointer-events-auto shadow-lg backdrop-blur-sm"
          aria-label="Next Project Screenshot"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Bottom Center Control Console */}
      <div className="absolute inset-x-0 bottom-6 sm:bottom-10 z-20 flex flex-col items-center gap-6 pointer-events-none">
        
        

        {/* Progress Line Dot Indicators */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {PROJECTS_DATA.map((project, idx) => {
            const isSelected = idx === currentSlide;
            return (
              <button
                key={project.title}
                onClick={() => handleSelectSlide(idx)}
                className="flex items-center py-2 px-1 outline-none cursor-pointer group"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className={`h-1 rounded-full transition-all duration-500 relative overflow-hidden ${
                  isSelected ? 'bg-emerald-500/30 w-12' : 'bg-white/10 group-hover:bg-white/20 w-4'
                }`}>
                  {isSelected && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-emerald-400"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
