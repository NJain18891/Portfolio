'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Terminal, 
  ChevronRight, 
  Activity as HeartIcon 
} from 'lucide-react';
import { ProjectSpec } from '@/types';
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
  // Telemetry simulation (Vanguard)
  const [vanguardMs, setVanguardMs] = useState<number>(140590.281);
  const [vanguardTickValues, setVanguardTickValues] = useState<number[]>([
    12, 18, 45, 30, 25, 60, 52, 40, 48, 55,
  ]);

  // Terminal log simulation (Apex)
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Ingestion thread pool spawned successfully with 8 worker slots.',
    '[BIND] Listening for TCP packets on port 9200 [TLS v1.3 Only]',
    '[METRIC] Ingestion cycle #4092 initialized. Queue lag at 0.04ms.',
  ]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Coordinate vector tracking (Zora)
  const zoraContainerRef = useRef<HTMLDivElement>(null);
  const [mouseCoord, setMouseCoord] = useState<{ x: number; y: number }>({ x: 180, y: 150 });

  // Handle simulations
  useEffect(() => {
    // Vanguard time counter running infinitely
    const timer = setInterval(() => {
      setVanguardMs((prev) => prev + 16.67);
      setVanguardTickValues((prev) => {
        const next = [...prev.slice(1)];
        next.push(Math.floor(20 + Math.random() * 60));
        return next;
      });
    }, 100);

    // Apex log streaming
    const logWords = [
      'ACK from node #4',
      'Compressing gzip buffer',
      'Flushing database write-log',
      'Thread priority updated',
      'Memory compression complete',
      'Kafka partition committed',
      'Lock ring swap executed',
      'Bi-directional telemetry node update',
      'Heartbeat confirmed',
    ];
    const logInterval = setInterval(() => {
      const randomWord = logWords[Math.floor(Math.random() * logWords.length)];
      const timestamp = new Date().toISOString().slice(11, 19);
      const thread = `THREAD-${String.fromCharCode(
        65 + Math.floor(Math.random() * 6)
      )}${Math.floor(Math.random() * 9)}`;
      const logLine = `[${timestamp}] [${thread}] ${randomWord}. Buffer variance: ${(
        Math.random() * 0.05
      ).toFixed(4)}ms`;
      setLogs((prev) => {
        const next = [...prev];
        if (next.length > 20) next.shift();
        next.push(logLine);
        return next;
      });

      // Auto scroll terminal logs
      setTimeout(() => {
        if (logContainerRef.current) {
          logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
      }, 50);
    }, 1500);

    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
    };
  }, []);

  const handleZoraMouseMove = (e: React.MouseEvent) => {
    if (zoraContainerRef.current) {
      const rect = zoraContainerRef.current.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      setMouseCoord({ x, y });
    }
  };

  return (
    <section
      id="project-engine"
      className="w-full relative border-t border-white/[0.06] bg-[#09090D] overflow-hidden"
    >
      <div className="hidden md:grid md:grid-cols-12 min-h-screen w-full relative">
        
        {/* Left Side: Dynamic Project Menu Column */}
        <div className="md:col-span-5 flex flex-col justify-between py-24 px-12 border-r border-white/[0.06] sticky top-0 h-screen bg-[#09090D] z-20">
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#059669] uppercase mb-16">
              {"// ACTIVE SYSTEM DIRECTORY"}
            </p>
            
            <nav className="flex flex-col gap-6">
              {PROJECTS_DATA.map((project, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={project.title}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className="text-left group relative py-3 block outline-none"
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

        {/* Right Side: Interactive Cinematic Takeover */}
        <div className="md:col-span-7 h-screen sticky top-0 overflow-hidden flex items-center justify-center bg-[#060608] self-start px-8">
          <div className="w-full max-w-2xl aspect-[1.6] border border-white/[0.08] bg-[#0E0E12] rounded-xl overflow-hidden shadow-2xl relative">
            
            {/* Window Layout Wrapper Bar */}
            <div className="h-10 border-b border-white/[0.06] bg-[#121217] px-4 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/30 border border-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/30 border border-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/30 border border-[#10B981]" />
              </div>
              <div className="font-mono text-[9px] tracking-widest text-[#6B7280]">
                SYSTEM_DOCKER://{PROJECTS_DATA[activeIndex].title.toLowerCase().replace(' ', '_')}
              </div>
              <div className="w-12 h-1 bg-white/5 rounded-full" />
            </div>

            {/* Simulated Takeover App Frame */}
            <div className="p-6 h-[calc(100%-40px)] relative overflow-hidden flex flex-col justify-between">
              <AnimatePresence mode="wait">
                
                {/* 01. VANGUARD ASTRO */}
                {activeIndex === 0 && (
                  <motion.div
                    key="vanguard"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ ease: 'easeOut', duration: 0.4 }}
                    className="absolute inset-0 p-6 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.25em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                          ACTIVE NODE FEED
                        </span>
                        <h3 className="font-serif text-xl tracking-wider text-white mt-3">NASA Orbit Telemetry Node-X4</h3>
                      </div>
                      <span className="text-right font-mono text-[10px] text-emerald-400 glow-emerald font-bold">
                        ONLINE
                      </span>
                    </div>

                    {/* Interactive Telemetric bar blocks */}
                    <div className="grid grid-cols-10 items-end gap-1.5 h-24 px-4 border-b border-white/[0.04] pb-4">
                      {vanguardTickValues.map((val, idx) => (
                        <motion.div
                          key={idx}
                          layoutId={`tick-${idx}`}
                          className="bg-emerald-500/30 border-t border-emerald-400"
                          style={{ height: `${val}%` }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.1 }}
                        />
                      ))}
                    </div>

                    {/* Live Counter timeline compute wrapper */}
                    <div className="bg-black/40 border border-white/[0.05] p-3 rounded flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">TIMELINE COMPUTE SYNC</span>
                      </div>
                      <div className="font-mono text-xs text-emerald-400 tracking-widest font-bold">
                        {vanguardMs.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} ms
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 02. APEX AGGREGATES */}
                {activeIndex === 1 && (
                  <motion.div
                    key="apex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: 'easeOut', duration: 0.4 }}
                    className="absolute inset-0 p-6 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center border-b border-white/[0.05] pb-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span className="font-mono text-[9px] tracking-widest text-neutral-300">STREAMING BIND PIPELINE</span>
                      </div>
                      <span className="font-mono text-[9px] text-[#F59E0B]">FLOWING 16/16 THREADS</span>
                    </div>

                    {/* Log Terminal Screen */}
                    <div 
                      ref={logContainerRef}
                      className="h-32 overflow-y-auto font-mono text-[9px] text-neutral-400 space-y-1.5 pr-2 scrollbar-none"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      {logs.map((log, lIdx) => (
                        <div key={lIdx} className="hover:text-emerald-300 transition-colors">
                          <span className="text-emerald-500/80 mr-1.5">&gt;</span>{log}
                        </div>
                      ))}
                    </div>

                    {/* Visual load benchmarks matrix */}
                    <div className="grid grid-cols-4 gap-2 text-center mt-2">
                      <div className="bg-white/[0.02] border border-white/[0.05] p-2 rounded">
                        <div className="font-mono text-[8px] text-neutral-500">CONSUMER AVG</div>
                        <div className="font-mono text-xs text-neutral-200 mt-1">0.12ms</div>
                      </div>
                      <div className="bg-white/[0.02] border border-white/[0.05] p-2 rounded">
                        <div className="font-mono text-[8px] text-neutral-500">PARTITIONS</div>
                        <div className="font-mono text-xs text-neutral-200 mt-1">24 Active</div>
                      </div>
                      <div className="bg-white/[0.02] border border-white/[0.05] p-2 rounded">
                        <div className="font-mono text-[8px] text-neutral-500">PACKET DROP</div>
                        <div className="font-mono text-xs text-emerald-400 mt-1">0.000%</div>
                      </div>
                      <div className="bg-white/[0.02] border border-white/[0.05] p-2 rounded">
                        <div className="font-mono text-[8px] text-neutral-500">REPLICA LAG</div>
                        <div className="font-mono text-xs text-emerald-400 mt-1">SYSTEM SYNC</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 03. ZORA MARKETPLACE */}
                {activeIndex === 2 && (
                  <motion.div
                    key="zora"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ ease: 'easeOut', duration: 0.4 }}
                    className="absolute inset-0 p-6 flex flex-col justify-between select-none"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.25em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                          COORDINATE MODELER
                        </span>
                        <h3 className="font-serif text-lg text-white mt-2">Simulated Asset Curve Ledger</h3>
                      </div>
                      <div className="font-mono text-[9px] text-[#9CA3AF] text-right">
                        X_NODE: {mouseCoord.x}<br />
                        Y_NODE: {mouseCoord.y}
                      </div>
                    </div>

                    {/* Interactive coordinate tracking canvas */}
                    <div 
                      ref={zoraContainerRef}
                      onMouseMove={handleZoraMouseMove}
                      className="h-32 bg-black/40 border border-white/[0.05] rounded-lg mt-3 relative overflow-hidden cursor-crosshair flex items-center justify-center"
                    >
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                        <defs>
                          <linearGradient id="takeoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#047857" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        
                        <line x1="0" y1={mouseCoord.y} x2="600" y2={mouseCoord.y} stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                        <line x1={mouseCoord.x} y1="0" x2={mouseCoord.x} y2="200" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                        
                        <path 
                          d={`M 0,200 Q ${mouseCoord.x},${mouseCoord.y} 600,200`} 
                          fill="url(#takeoverGradient)" 
                          stroke="#10B981" 
                          strokeWidth="2.5" 
                        />
                        
                        <circle cx={mouseCoord.x} cy={mouseCoord.y} r="5" fill="#10B981" className="animate-pulse" />
                      </svg>

                      <span className="font-mono text-[8px] tracking-widest text-[#4B5563] pointer-events-none uppercase text-center max-w-xs leading-relaxed">
                        MOVE CURSOR OVER FRAME TO WARP LIQUIDITY VECTOR
                      </span>
                    </div>

                    <div className="flex justify-between font-mono text-[9px] text-[#6B7280]">
                      <span>INDEX SHIFT COEFF: {((mouseCoord.x * mouseCoord.y) / 1000).toFixed(2)}</span>
                      <span>ASSET TRANSACTIONS: STABLE</span>
                    </div>
                  </motion.div>
                )}

                {/* 04. ORIA WELLNESS */}
                {activeIndex === 3 && (
                  <motion.div
                    key="oria"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: 'easeOut', duration: 0.4 }}
                    className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-neutral-900/50 to-neutral-950/80"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.25em] text-[#059669] bg-[#059669]/10 border border-[#059669]/20 px-2 py-0.5 rounded">
                          ORGANIC FLOW LAB
                        </span>
                        <h3 className="font-serif text-lg text-neutral-100 mt-2">Physical Breathing Cycle Anchor</h3>
                      </div>
                      <HeartIcon className="w-4 h-4 text-emerald-400 animate-pulse mt-1" />
                    </div>

                    {/* Animated breathing feedback loops */}
                    <div className="flex flex-col items-center justify-center my-2">
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-emerald-500/10 border border-emerald-400/40"
                          animate={{ scale: [1, 1.45, 1] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                        <motion.div
                          className="absolute w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400"
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.2
                          }}
                        />
                        <span className="font-mono text-[8px] text-emerald-300 z-10 tracking-[0.2em] font-light">
                          BREATHE
                        </span>
                      </div>
                    </div>

                    <div className="text-center font-mono text-[8px] tracking-[0.3em] text-[#9CA3AF] uppercase">
                      SINE WAVE SYNTH: <span className="text-emerald-400">432HZ FREQUENCY ACTIVE</span>
                    </div>
                  </motion.div>
                )}

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
              <p className="text-xs text-neutral-400 mt-4 leading-relaxed font-light">
                {project.shortDesc}
              </p>
            </div>

            {/* Stack components pills */}
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
