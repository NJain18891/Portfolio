'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/lib/data';

interface ProjectEngineProps {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  onOpenSpecs: (idx: number) => void;
}

export default function ProjectEngine({
  activeIndex,
  setActiveIndex,
  onOpenSpecs,
}: ProjectEngineProps) {
  return (
    <section
      id="project-engine"
      className="w-full relative border-t border-white/[0.06] bg-[#09090D] overflow-hidden"
    >
      <div className="hidden md:grid md:grid-cols-12 min-h-screen w-full relative">
        
        {/* Left Side: Dynamic Project Menu Column (Unrestricted & Natural Growth) */}
        <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-between pt-28 pb-16 px-6 lg:px-12 border-r border-white/[0.06] bg-[#09090D] z-20">
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#059669] uppercase mb-10 lg:mb-16">
              {"// ACTIVE SYSTEM DIRECTORY"}
            </p>
            
            <nav className="flex flex-col gap-4 lg:gap-6">
              {PROJECTS_DATA.map((project, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={project.title}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className="text-left group relative py-3 block outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className={`font-mono text-[10px] tracking-widest mt-2 transition-colors duration-300 ${
                        isActive ? 'text-emerald-400 font-bold' : 'text-neutral-600'
                      }`}>
                        0{idx + 1}
                      </span>
                      
                      <div>
                        <h2 className={`font-serif text-3xl lg:text-4xl tracking-wide transition-all duration-300 ${
                          isActive 
                            ? 'text-white translate-x-2' 
                            : 'text-neutral-500 hover:text-neutral-300'
                        }`}>
                          {project.title}
                        </h2>
                        <div className="h-[2px] bg-emerald-500/50 w-0 transition-all duration-300 mt-2" style={{
                          width: isActive ? '100%' : '0%'
                        }} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Static Project Description Based on Active Item */}
          <div className="max-w-sm mt-12 transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-mono text-[8px] tracking-[0.35em] text-emerald-400 uppercase mb-2">CURRENT ACTIVE METRIC</p>
                <p className="text-sm text-neutral-300 leading-relaxed font-light italic">
                  &quot;{PROJECTS_DATA[activeIndex].shortDesc}&quot;
                </p>
                
                {/* Drawer activator */}
                <div className="mt-6">
                  <button
                    onClick={() => onOpenSpecs(activeIndex)}
                    className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-neutral-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/20 bg-white/[0.01] hover:bg-emerald-500/5 px-4 py-2 rounded transition-all cursor-pointer"
                    id="view-engine-specs-trigger"
                  >
                    [ VIEW ENGINE SPECS + ]
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Interactive Cinematic Takeover (Kept sticky) */}
        <div className="md:col-span-8 lg:col-span-7 h-screen sticky top-0 overflow-hidden flex items-center justify-center bg-[#060608] self-start px-8">
          {/* Browser frame mockup */}
          <div className="w-full max-w-2xl aspect-[1.6] bg-[#111116] border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl relative">
            
            {/* Sleek top header row */}
            <div className="h-10 border-b border-white/[0.06] bg-[#14141c] px-4 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/[0.1]" />
                <span className="w-2 h-2 rounded-full bg-white/[0.1]" />
                <span className="w-2 h-2 rounded-full bg-white/[0.1]" />
              </div>
              <div className="font-mono text-[9px] tracking-widest text-[#6B7280]">
                HTTPS://WORK.NIKHIL/{PROJECTS_DATA[activeIndex].title.toLowerCase().replace(' ', '-')}
              </div>
              <div className="w-12 h-1 bg-white/5 rounded-full opacity-30" />
            </div>

            {/* Immersive screenshot viewer */}
            <div className="relative w-full h-[calc(100%-40px)] overflow-hidden bg-[#09090D] p-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 1.02, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={PROJECTS_DATA[activeIndex].imagePath}
                    alt={`${PROJECTS_DATA[activeIndex].title} Viewport Screenshot`}
                    fill
                    priority
                    className="object-contain object-center"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>

      {/* Mobile-Only Stacked Grid View */}
      <div className="md:hidden py-16 px-6 space-y-12">
        <p className="font-mono text-[9px] tracking-[0.3em] text-emerald-400 uppercase">
          {"// SELECTED PROJECTS DIRECTORY"}
        </p>

        {PROJECTS_DATA.map((project, idx) => (
          <div 
            key={project.title}
            className="border border-white/[0.06] bg-[#0C0C10] p-6 rounded-xl flex flex-col justify-between space-y-6"
          >
            <div>
              <span className="font-mono text-[10px] text-emerald-400 tracking-widest font-bold">
                0{idx + 1} {"//"}
              </span>
              <h3 className="font-serif text-3xl text-white tracking-wide mt-2">
                {project.title}
              </h3>
              
              <div className="mt-4 border border-white/[0.06] bg-[#111116] rounded-lg overflow-hidden shadow-md relative aspect-video w-full">
                <div className="h-7 border-b border-white/[0.06] bg-[#14141c] px-3 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/[0.1]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/[0.1]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/[0.1]" />
                  </div>
                  <div className="font-mono text-[8px] text-[#6B7280]">
                    {project.title.toLowerCase().replace(' ', '-')}
                  </div>
                  <div className="w-4 h-1 bg-white/5 rounded-full opacity-30" />
                </div>
                <div className="relative w-full h-[calc(100%-28px)] overflow-hidden bg-[#09090D] p-2 flex items-center justify-center">
                  <Image
                    src={project.imagePath}
                    alt={`${project.title} Viewport Screenshot`}
                    fill
                    className="object-contain object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="text-xs text-neutral-400 mt-4 leading-relaxed font-light">
                {project.shortDesc}
              </p>
            </div>

            <div className="border-t border-white/[0.04] pt-4 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map(st => (
                  <span key={st} className="bg-white/[0.02] border border-white/10 font-mono text-[8px] text-neutral-400 px-2 py-0.5 rounded">
                    {st}
                  </span>
                ))}
              </div>
              
              <div>
                <button
                  onClick={() => {
                    setActiveIndex(idx);
                    onOpenSpecs(idx);
                  }}
                  className="w-full inline-flex items-center justify-between font-mono text-[10px] tracking-widest text-[#F3F4F6] hover:text-emerald-400 bg-white/[0.03] hover:bg-emerald-500/5 border border-white/10 hover:border-emerald-500/20 py-2.5 px-4 rounded outline-none cursor-pointer"
                >
                  <span>[ VIEW ENGINE SPECS ]</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}