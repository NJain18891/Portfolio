'use client';

import { motion } from 'motion/react';
import { X, ChevronRight } from 'lucide-react';
import { ProjectSpec } from '@/types';

interface EngineSpecsDrawerProps {
  project: ProjectSpec;
  isOpen: boolean;
  onClose: () => void;
  onRequestIntegration: () => void;
}

export default function EngineSpecsDrawer({
  project,
  isOpen,
  onClose,
  onRequestIntegration,
}: EngineSpecsDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#060608] z-50 cursor-pointer"
        id="drawer-backdrop"
      />

      {/* Slide drawer container */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 220, damping: 26 }}
        className="fixed right-0 top-0 h-full w-full max-w-lg bg-[#0D0D11]/95 backdrop-blur-md border-l border-white/[0.06] z-50 overflow-y-auto px-8 sm:px-12 py-16 text-white shadow-2xl"
        id="engine-specs-drawer"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-[10px] tracking-widest text-[#9CA3AF] uppercase">
              SYS_SPEC {"//"} SPECIFICATION SHEET
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-white/10 hover:border-emerald-500/30 rounded text-[#9CA3AF] hover:text-white transition-all cursor-pointer"
            id="close-drawer-button"
            aria-label="Close specification sheet"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-4 mb-10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#10B981] uppercase font-bold">
            {project.tagline}
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed font-light italic">
            &quot;{project.shortDesc}&quot;
          </p>
        </div>

        {/* Architectural Overview */}
        <div className="space-y-4 mb-8">
          <span className="font-mono text-[9px] tracking-widest text-[#6B7280] block uppercase border-b border-white/[0.03] pb-2">
            01 / ARCHITECTURE LAYER
          </span>
          <p className="text-sm text-neutral-300 leading-relaxed font-light">
            {project.architecture}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4 mb-8">
          <span className="font-mono text-[9px] tracking-widest text-[#6B7280] block uppercase border-b border-white/[0.03] pb-2">
            02 / STACK COMPONENTS
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((item) => (
              <span
                key={item}
                className="font-mono text-[10px] bg-white/[0.02] border border-white/[0.06] text-neutral-300 px-3 py-1 rounded hover:border-emerald-500/20 hover:text-emerald-400 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Engineering Metrics */}
        <div className="space-y-4 mb-8">
          <span className="font-mono text-[9px] tracking-widest text-[#6B7280] block uppercase border-b border-white/[0.03] pb-2">
            03 / ENGINEERING BENCHMARKS
          </span>
          <div className="grid grid-cols-2 gap-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-black/20 border border-white/[0.03] p-4 rounded-lg">
                <div className="font-mono text-[8px] text-[#9CA3AF] uppercase tracking-widest">{metric.label}</div>
                <div className="font-mono text-sm text-white font-bold mt-1 tracking-wider">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight engineering case details */}
        <div className="space-y-4">
          <span className="font-mono text-[9px] tracking-widest text-[#6B7280] block uppercase border-b border-white/[0.03] pb-2">
            04 / INNOVATIVE IMPACT
          </span>
          <div className="bg-emerald-500/[0.02] border border-emerald-500/10 p-4 rounded-lg">
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              {project.highlight}
            </p>
          </div>
        </div>

        {/* Direct Contract Action inside drawer */}
        <div className="mt-12 pt-6 border-t border-white/[0.04]">
          <button
            onClick={onRequestIntegration}
            className="w-full inline-flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.2em] border border-emerald-500/30 hover:border-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 py-3 rounded cursor-pointer transition-all"
            id="drawer-booking-button"
          >
            REQUEST PROJECT INTEGRATION <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </>
  );
}
